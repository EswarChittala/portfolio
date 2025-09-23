import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

// --- Knowledge Base (from your resume) ---
const knowledgeBase = {
  hello: "Hi! I'm Eswar's AI assistant. How can I help?",
  skills:
    "Eswar specializes in HTML5, CSS, JavaScript, React, Bootstrap, Python, MySQL, Linux.",
  projects:
    "Projects:\n1) Foreign University Admission Prediction (ML + Django + MySQL)\n2) Portfolio Website (HTML, CSS, JS, React+Vite)\n3) Contact-Book (React+vite,NodeJs, Mongodb).",
  experience:
    "Internship at MSNM Technologies Pvt Ltd (2023): Built responsive web apps, implemented CRUD & authentication, integrated MySQL with backend APIs.",
  certifications:
    "Certifications:\n- Python Full Stack (Pentagon Space, 2024–25)\n- NPTEL Joy of Computing Using Python (2023).",
  training:
    "Currently in Crio.do Fellowship (2025–Present): 70+ hours coursework, multiple projects, full-stack development.",
  education:
    "B.Tech in Computer Science & Engineering, VSM College of Engineering (2020–2024), CGPA: 7.69.",
  contact:
    "📧 Email: eswarchittala13@gmail.com\n🔗 LinkedIn: linkedin.com/in/eswarchittala\n💻 GitHub: github.com/EswarChittala",
};

// --- Helper to find best answer ---
const getBotResponse = (message) => {
  const lower = message.toLowerCase();
  for (let key in knowledgeBase) {
    if (lower.includes(key)) {
      return knowledgeBase[key];
    }
  }
  return "I'm not sure about that 🤔. Please check the portfolio sections for more details.";
};

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: knowledgeBase.hello, isBot: true },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { text: input, isBot: false };
    setMessages((prev) => [...prev, userMsg]);

    // Show typing indicator
    setMessages((prev) => [
      ...prev,
      { text: "Typing...", isBot: true, typing: true },
    ]);

    const response = getBotResponse(input);

    setInput("");

    setTimeout(() => {
      setMessages((prev) =>
        prev.filter((m) => !m.typing).concat({ text: response, isBot: true })
      );
    }, 1200);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 text-white rounded-full shadow flex items-center justify-center z-50"
      >
        <MessageCircle size={20} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-20 right-6 w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
              <h3 className="font-semibold">AI Assistant</h3>
              <button onClick={() => setOpen(false)}>
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-3 overflow-y-auto">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mb-2 ${msg.isBot ? "text-left" : "text-right"}`}
                >
                  <div
                    className={`inline-block px-3 py-2 rounded max-w-xs break-words ${
                      msg.isBot
                        ? "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100"
                        : "bg-blue-500 text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t dark:border-gray-600">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 border dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
                />
                <button
                  onClick={sendMessage}
                  className="bg-blue-600 text-white px-3 py-2 rounded"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
