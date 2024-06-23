function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const chat = document.getElementById('chat');
    const message = messageInput.value.trim();

    if (message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        chat.appendChild(messageElement);
        messageInput.value = '';
    }
}

function retry() {
    alert('Retry button clicked');
}

function undo() {
    const chat = document.getElementById('chat');
    if (chat.lastChild) {
        chat.removeChild(chat.lastChild);
    }
}

function clearChat() {
    const chat = document.getElementById('chat');
    chat.innerHTML = '';
}
