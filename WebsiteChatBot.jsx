import{ useState, useRef, useEffect } from 'react';
import { ChatBubbleLeftRightIcon, XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

// Website information database - update with your actual content
const websiteInfo = {
  home: {
    title: ["Welcome to My Portfolio" , "Mohit Sinha"],
    description: "I'm a professional web developer specializing in creating responsive and modern web applications."
  },
  about: {
    title: "About Me",
    description: "I'm a passionate web developer with expertise in creating user-friendly interfaces and powerful applications.",
    skills: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Responsive Design", "UI/UX Design"],
    experience: "Over 5 years of experience in web development and design."
  },
  portfolio: {
    title: "My Work",
    description: "A showcase of my best projects and client work.",
    projects: [
      "E-commerce Website",
      "Portfolio Template",
      "Business Dashboard",
      "Mobile App UI",
      "Corporate Website"
    ]
  },
  services: {
    title: "Services I Offer",
    description: "Professional web development services tailored to your needs.",
    offerings: [
      "Custom Website Development",
      "UI/UX Design",
      "React Application Development",
      "Responsive Website Creation",
      "Web Performance Optimization",
      "Website Maintenance"
    ]
  },
  contact: {
    title: "Get In Touch",
    email: "Mohit9470sinha@gmail.com",
    phone: "+1 (123) 456-7890",
    methods: ["Contact Form", "Email", "Phone", "Social Media"]
  },
 
};

// Get time-based greeting
const getTimeBasedGreeting = () => {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 12) {
    return "Good morning!";
  } else if (hour >= 12 && hour < 17) {
    return "Good afternoon!";
  } else if (hour >= 17 && hour < 22) {
    return "Good evening!";
  } else( hour >= 22 && hour < 5) ;{
    return "Good night!";
  }
};

// Helper function to generate responses
const generateResponse = (query) => {
  const lowerQuery = query.toLowerCase();
  
  // Time-based greetings
  if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('hey') || 
      lowerQuery.includes('good morning') || lowerQuery.includes('good afternoon') || 
      lowerQuery.includes('good evening') || lowerQuery.includes('greetings')) {
    
    const timeGreeting = getTimeBasedGreeting();
    return `${timeGreeting} I'm the website assistant. How can I help you today? Feel free to ask about any section of the website.`;
  }
  
  // Time-specific questions
  if (lowerQuery.includes('time') && lowerQuery.includes('what')) {
    const now = new Date();
    return `It's currently ${now.toLocaleTimeString()} on ${now.toLocaleDateString()}.`;
  }
  
  // Home section
  else if (lowerQuery.includes('home') || lowerQuery.includes('welcome') || lowerQuery.includes('landing')) {
    return `${websiteInfo.home.title}. ${websiteInfo.home.description}`;
  } 
  
  // About section
  else if (lowerQuery.includes('about') || lowerQuery.includes('who are you') || lowerQuery.includes('skills') || lowerQuery.includes('experience')) {
    if (lowerQuery.includes('skills')) {
      return `My skills include: ${websiteInfo.about.skills.join(', ')}.`;
    } else if (lowerQuery.includes('experience')) {
      return `My experience: ${websiteInfo.about.experience}`;
    } else {
      return `${websiteInfo.about.title}: ${websiteInfo.about.description} I have ${websiteInfo.about.experience}`;
    }
  }
  
  // Portfolio section
  else if (lowerQuery.includes('portfolio') || lowerQuery.includes('work') || lowerQuery.includes('projects')) {
    if (lowerQuery.includes('list') || lowerQuery.includes('what projects')) {
      return `My projects include: ${websiteInfo.portfolio.projects.join(', ')}.`;
    } else {
      return `${websiteInfo.portfolio.title}: ${websiteInfo.portfolio.description}`;
    }
  }
  
  // Services section
  else if (lowerQuery.includes('services') || lowerQuery.includes('offer') || lowerQuery.includes('what you do') || lowerQuery.includes('what do you do')) {
    return `${websiteInfo.services.title}: ${websiteInfo.services.description} I offer ${websiteInfo.services.offerings.join(', ')}.`;
  }
  
  // Contact section
  else if (lowerQuery.includes('contact') || lowerQuery.includes('reach') || lowerQuery.includes('email') || lowerQuery.includes('phone')) {
    if (lowerQuery.includes('email')) {
      return `My email is ${websiteInfo.contact.email}.`;
    } else if (lowerQuery.includes('phone')) {
      return `My phone number is ${websiteInfo.contact.phone}.`;
    } else {
      return `${websiteInfo.contact.title}: You can reach me via ${websiteInfo.contact.methods.join(', ')}. My email is ${websiteInfo.contact.email} and phone is ${websiteInfo.contact.phone}.`;
    }
  }
  
  // Navigation help
  else if (lowerQuery.includes('navigate') || lowerQuery.includes('find') || lowerQuery.includes('where')) {
    if (lowerQuery.includes('about')) {
      return "The About section is located in the navigation menu. You can click on 'About' in the top navigation bar.";
    } else if (lowerQuery.includes('contact')) {
      return "The Contact section is at the bottom of the page. Click on 'Contact' in the navigation menu.";
    } else if (lowerQuery.includes('services')) {
      return "The Services section is in the middle of the page. Click on 'Services' in the navigation menu.";
    } else if (lowerQuery.includes('portfolio') || lowerQuery.includes('work')) {
      return "The Portfolio/Work section is in the middle of the page. Click on 'Portfolio' in the navigation menu.";
    } else {
      return "You can navigate to any section using the navigation menu at the top of the page.";
    }
  }
  
  // More general queries about the website or developer
  else if (lowerQuery.includes('website') || lowerQuery.includes('developer') || lowerQuery.includes('you') || lowerQuery.includes('your')) {
    // Handle common questions about the website/developer
    if (lowerQuery.includes('what can you do') || lowerQuery.includes('help with')) {
      return "I can tell you about my skills, experience, portfolio, services, and how to contact me. Just ask about any of these areas!";
    } else if (lowerQuery.includes('website') && (lowerQuery.includes('about') || lowerQuery.includes('what is'))) {
      return `This is my professional portfolio website where I showcase my web development skills and services. ${websiteInfo.home.description}`;
    } else if (lowerQuery.includes('developer') && (lowerQuery.includes('who') || lowerQuery.includes('what'))) {
      return `${websiteInfo.about.description} ${websiteInfo.about.experience}`;
    } else {
      // Try to find any information from the websiteInfo that might be relevant
      for (const section in websiteInfo) {
        if (lowerQuery.includes(section)) {
          return `${websiteInfo[section].title}: ${websiteInfo[section].description}`;
        }
      }
      
      // Default summary if nothing specific is found
      return `I'm a professional web developer with ${websiteInfo.about.experience} I specialize in ${websiteInfo.about.skills.slice(0, 3).join(', ')} and more. Feel free to ask about my portfolio, services, or how to contact me.`;
    }
  }
  
  // Search for keywords in the website info
  else {
    // Try to match keywords in the query with the website content
    const keywordMatches = [];
    
    // Check all text in websiteInfo for potential matches
    for (const section in websiteInfo) {
      const sectionInfo = websiteInfo[section];
      
      // Check if any property in the section matches the query
      for (const key in sectionInfo) {
        const value = sectionInfo[key];
        
        if (typeof value === 'string' && value.toLowerCase().includes(lowerQuery)) {
          keywordMatches.push(`${section}.${key}`);
        } else if (Array.isArray(value)) {
          // Check arrays (like skills, projects, offerings)
          for (const item of value) {
            if (item.toLowerCase().includes(lowerQuery)) {
              keywordMatches.push(`${section}.${key}`);
              break;
            }
          }
        }
      }
    }
    
    // If we found matches, use the first one to provide relevant information
    if (keywordMatches.length > 0) {
      const [section, key] = keywordMatches[0].split('.');
      
      if (key === 'skills') {
        return `My skills include: ${websiteInfo[section][key].join(', ')}.`;
      } else if (key === 'projects') {
        return `My projects include: ${websiteInfo[section][key].join(', ')}.`;
      } else if (key === 'offerings') {
        return `I offer these services: ${websiteInfo[section][key].join(', ')}.`;
      } else if (key === 'methods') {
        return `You can reach me via: ${websiteInfo[section][key].join(', ')}.`;
      } else {
        return `${websiteInfo[section].title}: ${websiteInfo[section][key]}`;
      }
    }
    
    // Default fallback
    return "I don't have specific information about that yet. Feel free to ask about Home, About, Portfolio, Services, or Contact sections.";
  }
};

const WebsiteChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: `${getTimeBasedGreeting()} I'm the website assistant. How can I help you today?`, isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const [suggestedQuestions] = useState([
    "Tell me about yourself",
    "What services do you offer?",
    "How can I contact you?",
    "Show me your projects",
  ]);

  // Scroll to bottom of chat when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    // Add user message
    const userMessage = { id: Date.now(), text: inputValue, isBot: false };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    
    // Show typing indicator
    setIsTyping(true);
    
    // Generate bot response with simulated typing delay
    const responseTime = Math.min(inputValue.length * 40, 2000); // Adjust typing speed based on message length
    
    setTimeout(() => {
      const botResponse = { id: Date.now() + 1, text: generateResponse(inputValue), isBot: true };
      setMessages(prevMessages => [...prevMessages, botResponse]);
      setIsTyping(false);
    }, responseTime);
    
    setInputValue('');
  };

  const handleSuggestedQuestion = (question) => {
    // Add user message
    const userMessage = { id: Date.now(), text: question, isBot: false };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    
    // Show typing indicator
    setIsTyping(true);
    
    // Generate bot response with simulated typing delay
    setTimeout(() => {
      const botResponse = { id: Date.now() + 1, text: generateResponse(question), isBot: true };
      setMessages(prevMessages => [...prevMessages, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  // Handle input changes with debounce for better performance
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full  bg-green-600 text-white shadow-lg hover:bg-black transition-all duration-300 focus:outline-none"
        aria-label="Toggle chat"
      >
        {isOpen ? 
          <XMarkIcon className="h-6 w-6" /> :
          <div className="flex flex-col items-center">
            <ChatBubbleLeftRightIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Chat</span>
          </div>
        }
      </button>

      {/* Chat window - uses conditional rendering instead of Transition for better reliability */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-lg bg-white shadow-2xl border border-gray-200 overflow-hidden animate-slideUp">
          {/* Chat header */}
          <div className="flex h-14 items-center justify-between bg-green-400 px-4">
            <div className="flex  items-center">
              <ChatBubbleLeftRightIcon className="h-5 w-5 text-white mr-2" />
              <h3 className="text-lg font-medium text-white"> Website Assistant</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 text-gray-300 hover:text-white hover:bg-stone-800 focus:outline-none"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Messages container */}
          <div className="h-80 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`mb-3 ${message.isBot ? '' : 'flex justify-end'}`}
              >
                <div className={`rounded-lg px-4 py-2 max-w-[80%] shadow-sm ${
                  message.isBot 
                    ? 'bg-white border border-gray-200 text-gray-800' 
                    : 'bg-stone-950 text-white'
                }`}>
                  {message.text}
                </div>
              </div>
            ))}
            
            {/* Typing indicator */}
            {isTyping && (
              <div className="flex mb-3">
                <div className="bg-white border border-gray-200 rounded-lg px-4 py-2 max-w-[80%] shadow-sm">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '200ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '400ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested questions */}
          {messages.length < 4 && (
            <div className="px-4 py-2 bg-gray-100 border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-2 text-center font-medium">Suggested questions:</p> 
              <br />
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedQuestion(question)}
                    className="text-xs h-7 bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-gray-700 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input area */}
          <form onSubmit={handleSubmit} className="flex border-t text-black border-gray-200 p-3 bg-white">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              ref={inputRef}
              placeholder="Type Your Message..."
              className="flex-1 rounded-l-lg border h-10 border-gray-300 px-4 py-2 focus:border-stone-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={inputValue.trim() === '' || isTyping}
              className="flex items-center justify-center rounded-r-lg bg-stone-950 px-4 text-white hover:bg-stone-800 transition-colors disabled:bg-gray-400"
            >
              <PaperAirplaneIcon className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

// Add custom animation
const customStyles = `
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-slideUp {
    animation: slideUp 0.3s ease-out forwards;
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-4px);
    }
  }
  
  .animate-bounce {
    animation: bounce 1.2s infinite;
  }
`;
const ChatBotWrapper = () => {
  return (
    <>
      <style>{customStyles}</style>
      <WebsiteChatBot />
    </>
  );
};

export default ChatBotWrapper;