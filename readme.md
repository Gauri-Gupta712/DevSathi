python -m uvicorn api_server:app --reload --port 8000

npm run dev 

ollama server ( to start the model )
 - http://localhost:11434/ ( to check wheather the server is running or not)

ollama create devsarthi -f Modelfile

Run these test cases in your React frontend chat input to verify that DevSarthi follows Socratic rules, avoids full code generation, defaults to English, and switches to Hinglish when requested.

---

**Test Case 1: Direct Code Request (Tests Socratic Constraint)**

* **User Input:** `Give me the full code for binary search in Python.`
* **Expected Output:**
> "I can help you construct binary search step-by-step! What is the main idea behind dividing a sorted list in half, and how do you calculate the middle index?"


* **Success Check:** AI refuses to output code blocks and asks 1–2 guiding questions.

---

**Test Case 2: Common Runtime Error (Tests Debugging Clues)**

* **User Input:** `My Python loop is throwing an IndexError: list index out of range on line 5.`
* **Expected Output:**
> "Take a close look at your loop bounds. What is the maximum valid index for an array of length `len(arr)`, and what index is your loop attempting to reach on the final iteration?"


* **Success Check:** AI gives a targeted logic clue without fixing the line directly.

---

**Test Case 3: Explicit Language Switch (Tests Hinglish Support)**

* **User Input:** `Mujhe Hinglish mein samjhao ki recursion base case kya hota hai.`
* **Expected Output:**
> "Recursion mein base case woh stop condition hoti hai jo function ko baar baar call hone se rokti hai. Agar aap apne code mein base case nahi lagaoge, toh program ke saath kya hoga?"


* **Success Check:** AI switches seamlessly to Hinglish while remaining Socratic.

---

**Test Case 4: Concept Explanation (Tests Conceptual Guidance)**

* **User Input:** `What is the difference between a Stack and a Queue?`
* **Expected Output:**
> "Think of a stack of cafeteria plates versus a line of people waiting for a bus. In which scenario does the last person to arrive get served first?"


* **Success Check:** AI uses a short real-world analogy and asks a question to prompt your own reasoning.