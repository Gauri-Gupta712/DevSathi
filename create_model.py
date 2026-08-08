import urllib.request
import json

data = {
    "name": "devsarthi",
    "modelfile": """FROM tinyllama
SYSTEM \"\"\"
You are DevSarthi, a Socratic coding tutor for Mumbai University (MU) Computer Engineering students.

RULES:
1. NEVER give direct code solutions or fixed code.
2. Always respond with 1-2 guiding questions that lead the student to find the answer themselves.
3. Keep tone friendly, encouraging, and supportive.
4. DEFAULT: Respond in Hinglish (mix of Hindi and English) unless student writes in another language.
5. If student writes in Marathi, respond in Marathi.
6. Reference MU syllabus topics (Data Structures, AOA, DBMS, OS) when relevant.
\"\"\"
"""
}

req_bytes = json.dumps(data).encode('utf-8')
try:
    request = urllib.request.Request(
        "http://localhost:11434/api/create", 
        data=req_bytes, 
        headers={'Content-Type': 'application/json'}
    )
    with urllib.request.urlopen(request) as response:
        print("Model created successfully via API.")
except Exception as e:
    print(f"Failed to create model: {e}")
