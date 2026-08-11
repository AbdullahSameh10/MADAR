import { useEffect, useRef, useState } from 'react';
import { Bot, Loader2, Paperclip, Send } from 'lucide-react';

const AVATAR_SRC = '/WhatsApp_Image_2026-08-09_at_11.21.55_PM.jpeg';

let nextId = 1;

function ChatPanel({ presetQuestion, onPresetHandled }) {
  const [messages, setMessages] = useState([
    {
      id: nextId++,
      role: 'ai',
      text: 'أهلاً بك في منصة مدار! 👋\nأنا مساعدك التعليمي الذكي. اكتب لي أي سؤال في المناهج الدراسية أو البرمجة وسأشرحه لك ببساطة.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBoxRef = useRef(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (presetQuestion) {
      // sendMessage(presetQuestion);
      onPresetHandled();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [presetQuestion]);

  function handleSubmit(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setInput('');
    // sendMessage(text);
  }

  return (
    <div className="chat-panel">
      <div className="chat-header">
        <div className="d-flex align-items-center gap-3">
          <div className="position-relative">
            <img src={AVATAR_SRC} alt="مساعد مدار" className="chat-avatar" />
            <span className="chat-status-dot" />
          </div>
          <div>
            <h3 className="chat-title mb-0">مساعد مدار الذكي</h3>
            <p className="chat-subtitle mb-0">متصل وجاهز للرد</p>
          </div>
        </div>
        <span className="chat-powered-badge">Gemini Powered</span>
      </div>

      <div className="chat-box" ref={chatBoxRef}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`d-flex align-items-start gap-2 mb-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            {message.role === 'user' ? (
              <div className="chat-bubble-user-icon">أ</div>
            ) : (
              <div className="chat-bubble-ai-icon">
                <Bot size={15} />
              </div>
            )}
            <div
              className={
                message.role === 'user'
                  ? 'chat-bubble-user'
                  : message.role === 'error'
                    ? 'chat-bubble-ai chat-bubble-error'
                    : 'chat-bubble-ai'
              }
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {isTyping && (
        <div className="typing-indicator">
          <Loader2 size={14} className="spin-icon" /> جاري التفكير وإعداد الشرح...
        </div>
      )}

      <form className="chat-input-area" onSubmit={handleSubmit}>
        <button type="button" className="chat-attach-btn" title="إرفاق صورة">
          <Paperclip size={18} />
        </button>
        <input
          type="text"
          className="chat-input"
          placeholder="اكتب سؤالك هنا..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="chat-send-btn" disabled={!input.trim() || isTyping}>
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}

export default ChatPanel;
