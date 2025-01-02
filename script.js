// Select elements
const chatWindow = document.getElementById('chatWindow');
const userInput = document.getElementById('userInput');

// Function to add a message to the chat window
function addMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');

    // Add the message content
    const messageContent = document.createElement('div');
    messageContent.textContent = message;

    // Add the timestamp
    const timestamp = document.createElement('div');
    timestamp.classList.add('timestamp');
    const currentTime = new Date().toLocaleTimeString();
    timestamp.textContent = currentTime;

    // Append to message div
    messageDiv.appendChild(messageContent);
    messageDiv.appendChild(timestamp);
    chatWindow.appendChild(messageDiv);

    // Auto-scroll to bottom
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Function to handle sending a message
function sendMessage() {
    const message = userInput.value.trim();

    if (message !== "") {
        addMessage(message, 'user'); // User message
        userInput.value = ""; // Clear input

        // Simulate a bot response
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            addMessage(botResponse, 'bot');
        }, 500);
    }
}

// Simulated bot response logic
function getBotResponse(userMessage) {
    // Basic bot responses
    const responses = {
        "hi": "Hello! How can I help you?",
        "hello": "Hi there! What can I do for you?",
        "bye": "Goodbye! Have a great day!",
        "reset": "You can reset the chat with the reset button.",
        "default": "I'm here to help. Try asking something else."
    };

    const lowerMessage = userMessage.toLowerCase();
    return responses[lowerMessage] || responses['default'];
}

// Function to handle Enter key press
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Function to reset the conversation
function resetConversation() {
    chatWindow.innerHTML = ""; // Clear all messages
    addMessage("Chat has been reset.", 'bot');
}
