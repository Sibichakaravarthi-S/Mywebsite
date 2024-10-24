const resumeData = {
  name: "SIBICHAKARAVARTHI S",
  title: "Software Developer and Learner",
  registerNumber: "2023503027",
  contact: {
    phone: "+91 93616 53673",
    email: "sibichakaravarthi588@gmail.com",
    location: "Chromepet, Chennai, 600 004"
  },
  about: "Dedicated software developer with a passion for learning and solving complex technical challenges. Proven track record of utilizing strong problem-solving skills to create efficient, innovative solutions. Excellent communicator adept at collaborating with teams and explaining technical concepts clearly to both technical and non-technical stakeholders",
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

function App() {
  const [isChatOpen, setIsChatOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([]);
  const [input, setInput] = React.useState('');

  const generateResponse = (question) => {
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
      return `Education Details:\n${resumeData.education.map(edu => 
        `- ${edu.institution} (${edu.period})${edu.degree ? `\n  Degree: ${edu.degree}` : ''}${edu.registerNumber ? `\n  Register Number: ${edu.registerNumber}` : ''}`
      ).join('\n')}`;
    }
    if (question.includes('skill') || question.includes('expertise') || question.includes('technologies')) {
      return `His technical skills include:\n${resumeData.expertise.map(skill => `- ${skill}`).join('\n')}`;
    }
    if (question.includes('achievement') || question.includes('accomplish')) {
      return `His achievements include:\n${resumeData.achievements.map(ach => `- ${ach}`).join('\n')}`;
    }
    if (question.includes('project') || question.includes('work')) {
      return `His projects include:\n${resumeData.projects.map(proj => `- ${proj}`).join('\n')}`;
    }
    if (question.includes('hobby') || question.includes('interest') || question.includes('activities')) {
      return `His interests and activities include:\n${resumeData.hobbies.map(hobby => `- ${hobby}`).join('\n')}`;
    }
    if (question.includes('language') || question.includes('speak')) {
      return `He is proficient in: ${resumeData.languages.join(', ')}`;
    }
    if (question.includes('location') || question.includes('address') || question.includes('where')) {
      return `He is located in ${resumeData.contact.location}`;
    }

    return "I can tell you about Sibi's education, register number, skills, experience, projects, and achievements. What would you like to know?";
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { type: 'user', content: input };
    const botMessage = { type: 'bot', content: generateResponse(input) };

    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  return React.createElement(
    'div',
    { className: 'min-h-screen' },
    [
      // Header
      React.createElement('header', { className: 'header' },
        React.createElement('div', { className: 'header-content' }, [
          React.createElement('h1', null, resumeData.name),
          React.createElement('p', null, resumeData.title),
          React.createElement('p', null, `Register Number: ${resumeData.registerNumber}`)
        ])
      ),

      // Main Content
      React.createElement('main', { className: 'main-content' }, [
        // About Section
        React.createElement('section', { className: 'section' }, [
          React.createElement('h2', { className: 'section-title' }, 'About Me'),
          React.createElement('div', { className: 'card' },
            React.createElement('p', null, resumeData.about)
          )
        ]),

        // Education Section
        React.createElement('section', { className: 'section' }, [
          React.createElement('h2', { className: 'section-title' }, 'Education'),
          ...resumeData.education.map((edu, index) =>
            React.createElement('div', { key: index, className: 'card' }, [
              React.createElement('h3', null, edu.institution),
              edu.degree && React.createElement('p', null, edu.degree),
              edu.registerNumber && React.createElement('p', null, `Register Number: ${edu.registerNumber}`),
              React.createElement('p', null, edu.period)
            ])
          )
        ]),

        // Skills Section
        React.createElement('section', { className: 'section' }, [
          React.createElement('h2', { className: 'section-title' }, 'Expertise'),
          React.createElement('div', { className: 'grid' },
            resumeData.expertise.map((skill, index) =>
              React.createElement('div', { key: index, className: 'skill-card' }, [
                React.createElement('i', { className: 'fas fa-code' }),
                React.createElement('span', null, skill)
              ])
            )
          )
        ]),

        // Achievements Section
        React.createElement('section', { className: 'section' }, [
          React.createElement('h2', { className: 'section-title' }, 'Achievements'),
          React.createElement('div', { className: 'grid' },
            resumeData.achievements.map((achievement, index) =>
              React.createElement('div', { key: index, className: 'card' }, [
                React.createElement('i', { className: 'fas fa-trophy' }),
                React.createElement('span', null, achievement)
              ])
            )
          )
        ])
      ]),

      // Chatbot
      React.createElement('div', { className: 'chatbot' }, [
        !isChatOpen ?
          React.createElement('button', {
            className: 'chat-button',
            onClick: () => setIsChatOpen(true)
          }, React.createElement('i', { className: 'fas fa-comments' }))
          :
          React.createElement('div', { className: 'chat-window' }, [
            React.createElement('div', { className: 'chat-header' }, [
              React.createElement('span', null