from flask_cors import CORS
from flask import Flask, request, jsonify
from groq import Groq
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

@app.route("/")
def home():
    return "Pet Care AI System Running!"

@app.route("/ask", methods=["POST"])
def ask_ai():

    data = request.get_json()

    user_message = data.get("message")

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[
            {
                "role": "system",
                "content": "You are a helpful pet care assistant."
            },
            {
                "role": "user",
                "content": user_message
            }
        ]
    )

    answer = response.choices[0].message.content

    return jsonify({
        "response": answer
    })

if __name__ == "__main__":
    app.run(debug=True)