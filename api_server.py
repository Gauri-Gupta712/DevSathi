from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
import urllib.request

app = FastAPI()

# Allow frontend to talk to this server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class AnalyzeRequest(BaseModel):
    code: str
    prompt: str
    language: str = "python"

@app.post("/analyze")
def analyze(req: AnalyzeRequest):
    user_input = req.prompt if req.prompt.strip() else req.code

    # Prepare request for Ollama using Chat API
    data = {
        "model": "devsarthi",
        "messages": [
            {
                "role": "user",
                "content": f"""Student Code: {req.code}
Student Question: {user_input}

Answer as a strict Socratic tutor in English. Do NOT explain the concept. Provide exactly this structure:

Problem: Identify the core issue in one sentence.

Solution: Ask 1-2 guiding questions to help the student find the answer.

Real World Relation: Provide a bullet point analogy."""
            }
        ],
        "stream": False,
        "options": {
            "temperature": 0.7
        }
    }
    
    req_bytes = json.dumps(data).encode('utf-8')
    
    try:
        # Call Ollama running locally on port 11434 using /api/chat
        request = urllib.request.Request(
            "http://localhost:11434/api/chat", 
            data=req_bytes, 
            headers={'Content-Type': 'application/json'}
        )
        with urllib.request.urlopen(request) as response:
            result = json.loads(response.read().decode('utf-8'))
            
            # The chat API returns response in message.content
            ai_response = result.get("message", {}).get("content", "No response generated")
            
            return {
                "response": ai_response,
                "message": ai_response,
                "agent": "DevSarthi-Ollama",
                "status": "success"
            }
    except Exception as e:
        return {
            "response": f"Error connecting to Ollama: {str(e)}\n\nMake sure Ollama is running in the background and you ran 'ollama create devsarthi -f Modelfile'",
            "agent": "System",
            "status": "error"
        }

@app.get("/health")
def health():
    return {"status": "DevSarthi backend (Ollama) is running!"}