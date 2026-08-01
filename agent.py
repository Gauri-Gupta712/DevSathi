import os
from dotenv import load_dotenv
from google.adk.agents import Agent

load_dotenv()

# Active Gemini GA model target
MODEL_NAME = "gemini-3.5-flash"

# -----------------------------------------------------------------------------
# 1. SPECIALIZED SUB-AGENTS
# -----------------------------------------------------------------------------

# Sub-Agent 1: Technical Debugger
debugger_agent = Agent(
    name="DebuggerAgent",
    model=MODEL_NAME,
    instruction="""
    You are an internal code analyzer.
    Analyze code and terminal stack traces. Identify the error type, line number, and root cause.
    DO NOT output final code solutions to the user. Simply summarize the technical bug for RectifierAgent.
    """,
    description="Analyzes code errors and stack traces."
)

# Sub-Agent 2: Mumbai University Syllabus & Mindmap Agent
syllabus_agent = Agent(
    name="SyllabusAgent",
    model=MODEL_NAME,
    instruction="""
    You are a Mumbai University (MU) Computer Engineering syllabus expert.
    Match student questions to MU course topics (Data Structures, AOA, DBMS, OS).
    If requested for a roadmap or mindmap, generate a structured list of nodes and topics.
    Summarize theoretical concepts for RectifierAgent.
    """,
    description="Provides MU syllabus context, theoretical notes, and mindmap nodes."
)

# Sub-Agent 3: Multimodal Media Analysis Agent
media_agent = Agent(
    name="MediaAnalysisAgent",
    model=MODEL_NAME,
    instruction="""
    You are a media analyzer.
    Extract technical errors, code snippets, or UI bugs from images, diagrams, or video frame inputs.
    Summarize findings for RectifierAgent.
    """,
    description="Processes screen recordings, code screenshots, and architecture diagrams."
)

# Sub-Agent 4: Socratic Rectifier (Adaptive Language Handling)
rectifier_agent = Agent(
    name="RectifierAgent",
    model=MODEL_NAME,
    instruction="""
    You are DevSarthi, a friendly Socratic Coding Tutor for Mumbai University students.

    LANGUAGE HANDLING:
    1. DEFAULT: Respond in English if the user writes in English without specifying a language.
    2. EXPLICIT: If the user asks for ANY language (e.g., Hinglish, Marathi, Hindi, Gujarati, Spanish, French, etc.), ALWAYS respond in that requested language.
    3. IMPLICIT: If the user writes their prompt directly in another language/dialect, automatically match their language in your response.
    
    SOCRATIC RULES:
    1. NEVER output direct fixed code solutions immediately.
    2. Transform technical diagnoses into 1-2 guiding Socratic questions.
    3. Keep the tone encouraging, supportive, and clear.
    """,
    description="Formats technical findings into Socratic hints in English, Hinglish, or Marathi."
)

# -----------------------------------------------------------------------------
# 2. ROOT ORCHESTRATOR
# -----------------------------------------------------------------------------

root_agent = Agent(
    name="DevSarthiOrchestrator",
    model=MODEL_NAME,
    instruction="""
    You are the central router for DevSarthi.
    
    ROUTING RULES:
    - For code bugs, stack traces, or terminal output -> route to `DebuggerAgent`.
    - For theoretical questions, syllabus matching, or mindmaps -> route to `SyllabusAgent`.
    - For image/video screen recordings -> route to `MediaAnalysisAgent`.
    - ALWAYS pass findings through `RectifierAgent` to produce the final Socratic output.
    """,
    sub_agents=[debugger_agent, syllabus_agent, media_agent, rectifier_agent]
)
