import React, { useState } from 'react';

const predefinedResponses = {
  'what is softsell': 'SoftSell is a platform that helps you buy and resell unused software licenses legally and safely.',
  'how does softsell work': 'You upload your license details, we verify them, and then list them for resale to our trusted buyer network.',
  'is this legal': 'Yes! Reselling software licenses is legal in many regions, including the EU, under the principle of software exhaustion.',
  'how do i get paid': 'Once your license is sold, payment is processed to your preferred method within 3–5 business days.',
  'can i buy a license here': 'Absolutely! You can browse available licenses and purchase verified software at discounted rates.',
  'do you charge fees': 'We take a small commission from each successful resale to cover verification and platform costs.',
  'how to contact support': 'You can reach us anytime through the contact form on our site or via support@softsell.com.',
  'what types of licenses can i sell': 'You can sell perpetual software licenses that are no longer in use, such as Windows, Office, and antivirus suites.',
  'how do i upload my license': 'Once you create an account, go to the "Sell License" tab and fill in the product key, proof of purchase, and invoice.',
  'can i trust the buyers': 'All buyers on our platform are verified and rated by our community to ensure secure transactions.',
  'do you offer volume discounts': 'Yes, we offer discounts on bulk license purchases. Please contact our sales team for a custom quote.',
};

const suggestedQuestions = Object.keys(predefinedResponses);

const ChatWidget = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', message: 'Hi! 👋 I\'m the SoftSell Assistant. Choose a question below or type your own!' }
  ]);
  const [userMessage, setUserMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendMessage = (question) => {
    const newMessages = [...messages, { sender: 'user', message: question }];
    setMessages(newMessages);
    setLoading(true);

    setTimeout(() => {
      const reply =
        predefinedResponses[question.toLowerCase()] ||
        "I'm sorry, I don't have information on that. Try asking something else about SoftSell.";
      setMessages([...newMessages, { sender: 'bot', message: reply }]);
      setLoading(false);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (!userMessage.trim()) return;
    sendMessage(userMessage);
    setUserMessage('');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen ? (
        <div className="w-96 bg-white border-2 border-blue-600 rounded-2xl shadow-2xl p-4">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-bold text-lg text-blue-700">SoftSell Chat Assistant</h4>
            <button
              onClick={() => setIsOpen(false)}
              className="text-blue-500 hover:text-red-500 text-xl font-bold"
            >
              ✕
            </button>
          </div>
          <div className="h-64 overflow-y-auto space-y-3 text-sm mb-3 px-1 scroll-smooth">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <span className={`inline-block px-3 py-2 rounded-xl max-w-[75%] ${msg.sender === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'}`}>
                  {msg.message}
                </span>
              </div>
            ))}
            {loading && <p className="text-gray-400">Typing...</p>}
          </div>

          <div className="flex space-x-2 mb-3">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Ask your question..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              disabled={loading}
            >
              Send
            </button>
          </div>

          <div className="text-sm text-gray-600 mb-1 font-semibold">Suggested Questions:</div>
          <div className="flex flex-wrap gap-2 max-h-28 overflow-y-auto">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => sendMessage(question)}
                className="bg-gray-200 hover:bg-blue-100 text-xs text-gray-800 px-3 py-1 rounded-full transition"
              >
                {question.charAt(0).toUpperCase() + question.slice(1)}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition text-xl"
        >
          USE OUR AI CHAT
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
