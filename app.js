// Resume data
const resumeData = {
    name: "SIBICHAKARAVARTHI S",
    title: "Software Developer and Learner",
    registerNumber: "2023503027",
    contact: {
        phone: "+91 93616 53673",
        email: "sibichakaravarthi588@gmail.com",
        location: "Chromepet, Chennai, 600 004"
    },
    about: "Dedicated software developer with a passion for learning and solving complex technical challenges.",
    expertise: ["Python", "DBMS", "Data Structures", "C/C++", "Java", "Problem Solving"],
    education: [
        {
            institution: "Madras Institute of Technology, Chromepet",
            degree: "B.E Computer Science and Engineering",
            period: "2023-Present",
            registerNumber: "2023503027"
        },
        {
            institution: "MGM Matric Hr Sec School, Pochampalli",
            period: "2015-2023"
        }
    ],
    achievements: [
        "Ranked 1st at school with 98%",
        "SPL & Parade Captain",
        "Diploma in computer application at CSC",
        "Member of PDA MIT"
    ],
    languages: ["English", "Tamil"],
    hobbies: [
        "Leadership quality",
        "Listening to music",
        "Watching tech news at free times",
        "Watching and playing cricket and kabaddi"
    ],
    projects: [
        "Replicated a online shopping management system in c++"
    ]
};

// Chat functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatButton = document.getElementById('chatButton');
    const chatWindow = document.getElementById('chatWindow');
    const closeChat = document.getElementById('closeChat');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');

    // Toggle chat window
    chatButton.addEventListener('click', () => {
        chatWindow.style.display = 'flex';
        chatButton.style.display = 'none';
    });

    closeChat.addEventListener('click', () => {
        chatWindow.style.display = 'none';
        chatButton.style.display = 'block';
    });

    // Handle chat form submission
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = chatInput.value.trim();
        if (!message) return;

        // Add user message
        addMessage('user', message);
        
        // Generate and add bot response
        const response = generateResponse(message);
        addMessage('bot', response);

        // Clear input
        chatInput.value = '';
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    });

    // Add message to chat
    function addMessage(type, content) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        messageDiv.textContent = content;
        chatMessages.appendChild(messageDiv);
    }

    // Generate bot response
    function generateResponse(question) {
        question = question.toLowerCase();
        
        if (question.includes('register') || question.includes('registration') || question.includes('reg no')) {
            return `His college register number is ${resumeData.registerNumber}`;
        }
        if (question.includes('name')) {
            return `His name is ${resumeData.name}`;
        }
        if (question.includes('contact') || question.includes('email') || question.includes('phone')) {
            return `You can contact him at:\nEmail: ${resumeData.contact.email}\nPhone: ${resumeData.contact.phone}\nLocation: ${resumeData.contact.location}`;
        }
        if (question.includes('about') || question.includes('who')) {
            return resumeData.about;
        }
        if (question.includes('education') || question.includes('study') || question.includes('college')) {
            return resumeData.education.map(edu => 
                `${edu.institution} (${edu.period})${edu.degree ? `\nDegree: ${edu.degree}` : ''}`
            ).join('\n\n');
        }
        if (question.includes('skill') || question.includes('expertise')) {
            return `Technical skills include:\n${resumeData.expertise.join(', ')}`;
        }
        if (question.includes('achievement')) {
            return `Achievements include:\n${resumeData.achievements.join('\n')}`;
        }
        
        return "I can tell you about Sibi's education, skills, experience, and achievements. What would you like to know?";
    }
});
