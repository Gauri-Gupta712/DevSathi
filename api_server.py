from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
import urllib.request

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class AnalyzeRequest(BaseModel):
    code: str = ""
    prompt: str = ""
    language: str = "python"

@app.post("/analyze")
def analyze(req: AnalyzeRequest):
    user_query = req.prompt.strip() if req.prompt.strip() else "Please analyze my code and give me a clue."
    
    is_hinglish = "hinglish" in user_query.lower() or "hindi" in user_query.lower()
    lang_rule = "Respond in Hinglish." if is_hinglish else "Respond strictly in English."

    system_instruction = (
        f"You are DevSarthi, a Socratic coding tutor. {lang_rule}\n"
        "CRITICAL: Do NOT write full code implementations or code blocks. "
        "Ask ONLY 1 or 2 guiding questions so the student solves the issue themselves."
    )

    user_content = f"Language: {req.language}\nCode Context:\n{req.code}\n\nStudent Question:\n{user_query}"

    data = {
        "model": "devsarthi",
        "messages": [
            {"role": "system", "content": system_instruction},
            {"role": "user", "content": user_content}
        ],
        "stream": False,
        "options": {
            "temperature": 0.2
        }
    }
    
    req_bytes = json.dumps(data).encode('utf-8')
    
    try:
        request = urllib.request.Request(
            "http://localhost:11434/api/chat", 
            data=req_bytes, 
            headers={'Content-Type': 'application/json'}
        )
        with urllib.request.urlopen(request) as response:
            result = json.loads(response.read().decode('utf-8'))
            ai_response = result.get("message", {}).get("content", "").strip()
            
            return {
                "response": ai_response,
                "message": ai_response,
                "agent": "DevSarthi",
                "status": "success"
            }
    except Exception as e:
        return {"response": f"Error: {str(e)}", "status": "error"}

@app.get("/health")
def health():
    return {"status": "DevSarthi backend is running!"}