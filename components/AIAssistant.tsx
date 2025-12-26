import React, { useEffect, useRef, useState } from "react";

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: "user" | "ai"; text: string }[]
  >([
    {
      role: "ai",
      text: "UNIT_771 ONLINE. HOW CAN I ASSIST YOUR MISSION, OPERATIVE?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading || isTyping) return;

    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await getAIResponse(userMsg);
      const fullText = response.toUpperCase();
      setIsLoading(false);
      setIsTyping(true);

      // Initialize the message slot for typing
      setMessages((prev) => [...prev, { role: "ai", text: "" }]);

      let currentText = "";
      const typingSpeed = 20; // milliseconds per character

      for (let i = 0; i < fullText.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, typingSpeed));
        currentText += fullText[i];

        setMessages((prev) => {
          const newMessages = [...prev];
          const lastIndex = newMessages.length - 1;
          if (newMessages[lastIndex].role === "ai") {
            newMessages[lastIndex] = {
              ...newMessages[lastIndex],
              text: currentText,
            };
          }
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "ERROR: SECURE_LINK_INTERRUPTED. PLEASE RETRY." },
      ]);
    } finally {
      setIsLoading(false);
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <div
        className={`absolute bottom-20 right-0 w-80 md:w-96 bg-black border border-white/20 rounded-none shadow-[0_0_30px_rgba(255,0,60,0.2)] transition-all duration-500 flex flex-col ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-75 opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <div className="p-4 bg-red-600 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-black flex items-center justify-center text-black">
              <i className="fas fa-terminal text-[10px]"></i>
            </div>
            <span className="text-[10px] font-black tracking-widest text-black">
              SECURE_LINK // AI_BOT
            </span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-black">
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex-grow h-80 overflow-y-auto p-5 space-y-4 font-mono"
        >
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] p-3 text-[11px] font-bold relative ${
                  m.role === "user"
                    ? "bg-white/5 text-red-500 border border-red-500/20"
                    : "bg-red-600/10 text-white border border-red-600/40"
                }`}
              >
                <span className="block text-[8px] opacity-40 mb-1">
                  {m.role === "user" ? "OPERATIVE" : "UNIT_771"}
                </span>
                {m.text}
                {isTyping && i === messages.length - 1 && m.role === "ai" && (
                  <span className="inline-block w-1.5 h-3 bg-red-500 ml-1 animate-pulse align-middle"></span>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="text-red-500 text-[10px] font-bold tracking-widest flex items-center gap-2">
                <span className="animate-pulse">DECRYPTING_RESPONSE</span>
                <span className="flex gap-0.5">
                  <span
                    className="animate-bounce"
                    style={{ animationDelay: "0s" }}
                  >
                    .
                  </span>
                  <span
                    className="animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  >
                    .
                  </span>
                  <span
                    className="animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  >
                    .
                  </span>
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-white/5 border-t border-white/10 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            disabled={isLoading || isTyping}
            placeholder={
              isLoading || isTyping ? "PROCESSING..." : "INPUT_QUERY"
            }
            className="flex-grow bg-black border border-white/20 px-4 py-2 text-[11px] text-white focus:outline-none focus:border-red-600 uppercase font-bold placeholder:text-white/10 disabled:opacity-50"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || isTyping || !input.trim()}
            className="w-10 h-10 bg-red-600 text-black flex items-center justify-center disabled:opacity-50 transition-colors hover:bg-red-500"
          >
            <i
              className={`fas ${
                isLoading || isTyping
                  ? "fa-spinner fa-spin"
                  : "fa-chevron-right"
              }`}
            ></i>
          </button>
        </div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-none flex items-center justify-center text-2xl transition-all shadow-xl border-2 ${
          isOpen
            ? "bg-black border-red-600 text-red-600"
            : "bg-red-600 border-red-600 text-black hover:scale-105 active:scale-95"
        }`}
      >
        <i className={`fas ${isOpen ? "fa-terminal" : "fa-headset"}`}></i>
      </button>
    </div>
  );
};

export default AIAssistant;
