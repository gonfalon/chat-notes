var messages = []

function updateMessages() {
    const main = document.querySelector('#chat-window');
    main.innerHTML = '';
 
    for (let i = messages.length - 1; i >= 0; i--) {
        const message = messages[i];
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = message;
        main.appendChild(messageElement);
    }
}

function sendMessage() {
    const input = document.querySelector('input');
    const message = input.value;
    messages.push(message);
    input.value = '';
    updateMessages();
  }

document.querySelector('button').addEventListener('click', sendMessage);
document.querySelector('input').addEventListener('keypress', (event) => {
if (event.key === 'Enter') {
    sendMessage();
}
});

updateMessages();