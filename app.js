// Resume data with expanded information
const resumeData = {
    name: "SIBICHAKARAVARTHI S",
    title: "Software Developer and Learner",
    registerNumber: "2023503027",
    contact: {
        phone: "+91 93616 53673",
        email: "sibichakaravarthi588@gmail.com",
        location: "Chromepet, Chennai, 600004"
    },
    about: "Dedicated software developer with a passion for learning and solving complex technical challenges.",
    expertise: {
        languages: [
            { name: "Python", level: 90 },
            { name: "C/C++", level: 85 },
            { name: "Java", level: 80 }
        ],
        technologies: [
            { name: "DBMS", level: 85 },
            { name: "Data Structures", level: 90 }
        ]
    },
    education: [
        {
            institution: "Madras Institute of Technology, Chromepet",
            degree: "B.E Computer Science and Engineering",
            period: "2023-Present",
            registerNumber: "2023503027",
            achievements: ["Member of PDA MIT"]
        },
        {
            institution: "MGM Matric Hr Sec School, Pochampalli",
            period: "2015-2023",
            achievements: ["First Rank - 98%", "SPL & Parade Captain"]
        }
    ],
    achievements: [
        {
            title: "Academic Excellence",
            description: "Ranked 1st at school with 98%",
            icon: "trophy"
        },
        {
            title: "Leadership",
            description: "SPL & Parade Captain",
            icon: "medal"
        },
        {
            title: "Technical Certification",
            description: "Diploma in Computer Application at CSC",
            icon: "certificate"
        },
        {
            title: "Community Engagement",
            description: "Member of PDA MIT",
            icon: "users"
        }
    ],
    projects: [
        {
            title: "Online Shopping Management System",
            description: "A comprehensive C++ application for managing online shopping operations",
            technologies: ["C++", "OOP", "Data Structures"],
            link: "#"
        }
    ]
};

// Theme handling
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Initialize theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.toggle('dark-theme', savedTheme === 'dark');
        updateThemeIcon(savedTheme === 'dark');
    } else if (prefersDarkScheme.matches) {
        document.body.classList.add('dark-theme');
        updateThemeIcon(true);
    }
    
    // Theme toggle handler
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateThemeIcon(isDark);
    });
    
    function updateThemeIcon(isDark) {
        const icon = themeToggle.querySelector('i');
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
});

// Chatbot functionality
class ChatBot {
    constructor() {
        this.chatButton = document.getElementById('chatButton');
        this.chatWindow = document.getElementById('chatWindow');
        this.closeChat = document.getElementById('closeChat');
        this.chatForm = document.getElementById('chatForm');
        this.chatInput = document.getElementById('chatInput');
        this.chatMessages = document.getElementById('chatMessages');
        
        this.context = [];
        this.initializeEventListeners();
        this.sendWelcomeMessage();
    }
    
    initializeEventListeners() {
        // Toggle chat window
        this.chatButton.addEventListener('click', () => {
            this.chatWindow.style.display = 'flex';
            this.chatButton.style.display = 'none';
            this.chatInput.focus();
        });
        
        this.closeChat.addEventListener('click', () => {
            this.chatWindow.style.display = 'none';
            this.chatButton.style.display = 'block';
        });
        
        // Handle form submission
        this.chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const message = this.chatInput.value.trim();
            if (message) {
                this.handleUserMessage(message);
            }
        });
        
        // Handle input changes
        this.chatInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                this.chatForm.dispatchEvent(new Event('submit'));
            }
        });
    }
    
    sendWelcomeMessage() {
        setTimeout(() => {
            this.addMessage('bot', "Hi there! 👋 I'm Sibi's portfolio assistant. Feel free to ask me about his education, skills, projects, or achievements. How can I help you today?");
        }, 500);
    }
    
    handleUserMessage(message) {
        this.addMessage('user', message);
        this.chatInput.value = '';
        
        // Store context for more natural conversation
        this.context.push({ role: 'user', content: message });
        
        // Generate and send response
        setTimeout(() => {
            const response = this.generateResponse(message);
            this.addMessage('bot', response);
            this.context.push({ role: 'assistant', content: response });
        }, 500 + Math.random() * 500); // Random delay for more natural feel
    }
    
    addMessage(type, content) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        
        // Handle multi-line messages
        const formattedContent = content.split('\n').map(line => {
            return line.trim() ? `<p>${line}</p>` : '';
        }).join('');
        
        messageDiv.innerHTML = formattedContent;
        this.chatMessages.appendChild(messageDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
    
    generateResponse(question) {
        question = question.toLowerCase();
        
        // Check context for more natural conversation
        const recentContext = this.context.slice(-4);
        const isFollowUp = recentContext.length > 1;
        
        // Handle greetings
        if (question.match(/^(hi|hello|hey|greetings)/i)) {
            return "Hello! 👋 How can I help you learn more about Sibi?";
        }
        
        // Handle gratitude
        if (question.match(/^(thanks|thank you|thx)/i)) {
            return "You're welcome! 😊 Let me know if you have any other questions!";
        }
        
        // Handle goodbye
        if (question.match(/^(bye|goodbye|see you)/i)) {
            return "Goodbye! Have a great day! 👋";
        }
        
        // Handle how are you
        if (question.match(/how are you/i)) {
            return "I'm doing well, thanks for asking! I'm here to help you learn more about Sibi. What would you like to know?";
        }

        // Handle specific information requests
        if (question.includes('register') || question.includes('registration')) {
            return `Sibi's register number is ${resumeData.registerNumber}. He's currently enrolled at Madras Institute of Technology.`;
        }
        
        if (question.includes('name')) {
            return `His full name is ${resumeData.name}. He's a ${resumeData.title} based in Chennai.`;
        }
        
        if (question.includes('contact') || question.includes('email') || question.includes('phone')) {
            return `You can reach Sibi at:\n📧 Email: ${resumeData.contact.email}\n📱 Phone: ${resumeData.contact.phone}\n📍 Location: ${resumeData.contact.location}`;
        }
        
        if (question.includes('education') || question.includes('study')) {
            const edu = resumeData.education;
            return `Sibi's educational background:\n🎓 Currently: ${edu[0].degree} at ${edu[0].institution} (${edu[0].period})\n🏫 Previously: ${edu[1].institution} (${edu[1].period})`;
        }
        
        if (question.includes('achievement') || question.includes('awards')) {
            const achievements = resumeData.achievements
                .map(a => `🏆 ${a.title}: ${a.description}`)
                .join('\n');
            return `Here are Sibi's key achievements:\n${achievements}`;
        }
        
        if (question.includes('skill') || question.includes('expertise') || question.includes('technology')) {
            const skills = resumeData.expertise.languages
                .map(s => `💻 ${s.name}: ${s.level}% proficiency`)
                .join('\n');
            return `Sibi's technical skills include:\n${skills}\n\nHe's particularly strong in Data Structures and DBMS.`;
        }
        
        if (question.includes('project')) {
            const project = resumeData.projects[0];
            return `One of Sibi's notable projects is the ${project.title}.\n🚀 ${project.description}\n💡 Technologies used: ${project.technologies.join(', ')}`;
        }
        
        // Handle unknown questions
        const suggestions = [
            "Would you like to know about his education?",
            "I can tell you about his technical skills.",
            "Would you like to hear about his achievements?",
            "I can share information about his projects."
        ];
        
        return `I'm not sure I understood your question. ${suggestions[Math.floor(Math.random() * suggestions.length)]}`;
    }
}

// Initialize chatbot and other features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const chatbot = new ChatBot();
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Animate skill bars on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillCard = entry.target;
                const level = skillCard.dataset.level;
                const progressBar = skillCard.querySelector('.progress');
                if (progressBar) {
                    progressBar.style.width = `${level}%`;
                }
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.skill-card').forEach(card => {
        observer.observe(card);
    });
});
