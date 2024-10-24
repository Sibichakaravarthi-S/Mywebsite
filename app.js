<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sibichakaravarthi S - Portfolio</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="header">
        <div class="header-content">
            <h1>SIBICHAKARAVARTHI S</h1>
            <p>Software Developer and Learner</p>
            <p>Register Number: 2023503027</p>
        </div>
    </header>

    <main class="main-content">
        <section class="section">
            <h2 class="section-title">About Me</h2>
            <div class="card">
                <p>
                    Dedicated software developer with a passion for learning and solving complex technical challenges. 
                    Proven track record of utilizing strong problem-solving skills to create efficient, innovative solutions.
                    Excellent communicator adept at collaborating with teams and explaining technical concepts clearly.
                </p>
            </div>
        </section>

        <section class="section">
            <h2 class="section-title">Education</h2>
            <div class="card">
                <h3>Madras Institute of Technology, Chromepet</h3>
                <p>B.E Computer Science and Engineering</p>
                <p>Register Number: 2023503027</p>
                <p>2023-Present</p>
            </div>
            <div class="card">
                <h3>MGM Matric Hr Sec School, Pochampalli</h3>
                <p>2015-2023</p>
            </div>
        </section>

        <section class="section">
            <h2 class="section-title">Expertise</h2>
            <div class="grid">
                <div class="skill-card"><i class="fas fa-code"></i> Python</div>
                <div class="skill-card"><i class="fas fa-database"></i> DBMS</div>
                <div class="skill-card"><i class="fas fa-project-diagram"></i> Data Structures</div>
                <div class="skill-card"><i class="fas fa-code"></i> C/C++</div>
                <div class="skill-card"><i class="fab fa-java"></i> Java</div>
                <div class="skill-card"><i class="fas fa-brain"></i> Problem Solving</div>
            </div>
        </section>

        <section class="section">
            <h2 class="section-title">Achievements</h2>
            <div class="grid">
                <div class="card"><i class="fas fa-trophy"></i> Ranked 1st at school with 98%</div>
                <div class="card"><i class="fas fa-medal"></i> SPL & Parade Captain</div>
                <div class="card"><i class="fas fa-certificate"></i> Diploma in Computer Application at CSC</div>
                <div class="card"><i class="fas fa-users"></i> Member of PDA MIT</div>
            </div>
        </section>
    </main>

    <div class="chatbot" id="chatbot">
        <button class="chat-button" id="chatButton">
            <i class="fas fa-comments"></i>
        </button>
        <div class="chat-window" id="chatWindow" style="display: none;">
            <div class="chat-header">
                <span>Resume Chat</span>
                <button class="close-button" id="closeChat">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="chat-messages" id="chatMessages"></div>
            <form class="chat-input" id="chatForm">
                <div class="input-form">
                    <input type="text" class="input-field" placeholder="Ask about my resume..." id="chatInput">
                    <button type="submit" class="send-button">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </form>
        </div>
    </div>

    <script src="app.js"></script>
</body>
</html>
