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
    projects: ["Replicated an online shopping management system in C++"]
};

// Chat functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatButton = document.getElementById('chatButton');
    const chatWindow = document.getElementById('chatWindow');
    const closeChat = document.getElementById('closeChat');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');

    // Ensure chatbot opens and closes correctly
    chatButton.addEventListener('click', () => {
        chatWindow.style.display = 'flex'; 
        chatWindow.classList.add('active'); // Smooth open
    });

    closeChat.addEventListener('click', () => {
        chatWindow.style.display = 'none'; 
        chatWindow.classList.remove('active'); // Reset state
    });

    // Handle chat submission
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = chatInput.value.trim();
        if (!message) return;

        addMessage('user', message);
        const response = generateResponse(message);
        setTimeout(() => addMessage('bot', response), 500); // Simulate response delay

        chatInput.value = ''; 
        chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
    });

    // Add message to chat
    function addMessage(type, content) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        messageDiv.textContent = content;
        chatMessages.appendChild(messageDiv);
    }

    // Generate chatbot response
    function generateResponse(question) {
        const lowerCaseQuestion = question.toLowerCase();
        
        if (lowerCaseQuestion.includes('register') || lowerCaseQuestion.includes('registration')) {
            return `His college register number is ${resumeData.registerNumber}.`;
        }
        if (lowerCaseQuestion.includes('name')) {
            return `His name is ${resumeData.name}.`;
        }
        if (lowerCaseQuestion.includes('contact')) {
            return `You can reach him via:\nEmail: ${resumeData.contact.email}\nPhone: ${resumeData.contact.phone}\nLocation: ${resumeData.contact.location}`;
        }
        if (lowerCaseQuestion.includes('education')) {
            return resumeData.education.map(edu =>
                `${edu.institution} (${edu.period})${edu.degree ? `\nDegree: ${edu.degree}` : ''}`
            ).join('\n\n');
        }
        if (lowerCaseQuestion.includes('skills') || lowerCaseQuestion.includes('expertise')) {
            return `He is skilled in: ${resumeData.expertise.join(', ')}`;
        }
        if (lowerCaseQuestion.includes('achievements')) {
            return `His achievements include:\n${resumeData.achievements.join('\n')}`;
        }
        return "I'm here to help you with information about Sibi's profile. What else would you like to know?";
    }
});
