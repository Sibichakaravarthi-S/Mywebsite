// Resume data
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
        "Diploma in Computer Application at CSC",
        "Member of PDA MIT"
    ],
    languages: ["English", "Tamil"],
    hobbies: ["Leadership", "Listening to music", "Watching tech news", "Playing cricket and kabaddi"],
    projects: ["Replicated an online shopping management system in C++"]
};

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    const chatButton = document.getElementById('chatButton');
    const chatWindow = document.getElementById('chatWindow');
    const closeChat = document.getElementById('closeChat');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');

    // Chat toggle
    chatButton.addEventListener('click', () => {
        chatWindow.style.display = 'flex';
        chatButton.style.display = 'none';
    });

    closeChat.addEventListener('click', () => {
        chatWindow.style.display = 'none';
        chatButton.style.display = 'block';
    });

    // Chat form submit
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = chatInput.value.trim();
        if (message) {
            addMessage('user', message);
            const response = generateResponse(message);
            addMessage('bot', response);
            chatInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });

    // Add message
    function addMessage(type, content) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        messageDiv.textContent = content;
        chatMessages.appendChild(messageDiv);
    }

    // Generate response
    function generateResponse(question) {
        question = question.toLowerCase();
        if (question.includes('register')) return `Register Number: ${resumeData.registerNumber}`;
        if (question.includes('name')) return `Name: ${resumeData.name}`;
        if (question.includes('contact')) return `Phone: ${resumeData.contact.phone}, Email: ${resumeData.contact.email}`;
        if (question.includes('education')) return resumeData.education.map(e => `${e.institution} (${e.period})`).join('\n');
        if (question.includes('achievement')) return resumeData.achievements.join(', ');
        return "I can answer questions about Sibi's profile. Ask away!";
    }
});
