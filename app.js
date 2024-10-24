// Get elements
const chatbotToggle = document.getElementById('chatbotToggle');
const chatWindow = document.getElementById('chatWindow');
const closeChat = document.getElementById('closeChat');
const chatForm = document.getElementById('chatForm');
const userInput = document.getElementById('userInput');
const chatMessages = document.getElementById('chatMessages');

// Open/Close Chat Window
chatbotToggle.addEventListener('click', () => {
  chatWindow.classList.toggle('active');
});

closeChat.addEventListener('click', () => {
  chatWindow.classList.remove('active');
});

// Handle Message Submission
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = userInput.value.trim();

  if (message) {
    appendMessage('user', message);
    userInput.value = '';

    // Simulate bot response
    setTimeout(() => {
      appendMessage('bot', 'Hello! How can I help you today?');
    }, 1000);
  }
});

// Append Messages to Chat
function appendMessage(sender, text) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', `${sender}-message`);
  messageDiv.textContent = text;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
