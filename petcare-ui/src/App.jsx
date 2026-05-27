import { useState } from "react";

export default function PetCareAI() {

  const [userInput, setUserInput] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  const sendMessage = async () => {

    try {

      const response = await fetch("http://127.0.0.1:5000/ask", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: userInput,
        }),

      });

      const data = await response.json();

      setAiResponse(data.response);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="min-h-screen bg-[#f9f3eb] text-[#2b2118]">

      {/* Navbar */}

      <nav className="flex items-center justify-between px-8 py-5 border-b border-[#eadfce] bg-white/70 backdrop-blur-md">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-[#f4b183] flex items-center justify-center text-xl">
            🐾
          </div>

          <div>
            <h1 className="font-bold text-xl">Pawsitive AI Care</h1>
            <p className="text-sm text-gray-500">Smart wellness for pets</p>
          </div>

        </div>

        <button className="bg-[#2b2118] text-white px-5 py-2 rounded-full">
          Start Chat
        </button>

      </nav>

      {/* Hero */}

      <section className="px-8 md:px-16 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>

          <div className="inline-block bg-[#ffe2c8] text-[#e07a3f] px-4 py-2 rounded-full font-medium mb-5">
            AI Powered Pet Wellness
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            AI-Powered <br /> Pet Care Assistant
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Get intelligent support for your pet’s health, nutrition,
            behavior, and daily wellness using AI.
          </p>

        </div>

        <div>

          <img
            src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop"
            alt="Dog"
            className="rounded-[40px] shadow-2xl object-cover h-[650px] w-full"
          />

        </div>

      </section>

      {/* Chat Section */}

      <section className="px-8 md:px-16 py-16">

        <div className="bg-white rounded-[40px] p-8 shadow-xl border border-[#f0e4d6] max-w-5xl mx-auto">

          <div className="flex items-center justify-between mb-8">

            <div>
              <h2 className="text-3xl font-bold">AI Pet Assistant</h2>
              <p className="text-gray-500 mt-1">
                Ask anything about your pet’s wellness.
              </p>
            </div>

          </div>

          {/* User Message */}

          {userInput && (

            <div className="flex justify-end mb-5">

              <div className="bg-[#2b2118] text-white px-5 py-4 rounded-3xl max-w-md">
                {userInput}
              </div>

            </div>

          )}

          {/* AI Response */}

          <div className="flex justify-start mb-8">

            <div className="bg-[#fff5ec] px-5 py-4 rounded-3xl max-w-xl border border-[#f3dfcc]">

              {aiResponse || "AI response will appear here..."}

            </div>

          </div>

          {/* Input */}

          <div className="flex gap-3">

            <input
              type="text"
              placeholder="Describe your pet’s symptoms..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="flex-1 bg-[#faf6f1] border border-[#eadfce] rounded-2xl px-5 py-4 outline-none"
            />

            <button
              onClick={sendMessage}
              className="bg-[#e07a3f] text-white px-8 rounded-2xl font-semibold hover:scale-105 transition"
            >
              Send
            </button>

          </div>

        </div>

      </section>

    </div>

  );

}