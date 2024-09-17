var messages = localStorage.getItem('messages') ? JSON.parse(localStorage.getItem('messages')) : [];

function updateMessages() {
    const main = document.querySelector('#chat-window');
    main.innerHTML = '';
 
    for (let i = 0; i < messages.length; i++) {
        const message = messages[i];
        const messageElement = document.createElement('div');
        messageElement.classList = 'message primary padding margin right-round top-round'
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
    localStorage.setItem('messages', JSON.stringify(messages));
  }

document.querySelector('button').addEventListener('click', sendMessage);
document.querySelector('input').addEventListener('keypress', (event) => {
if (event.key === 'Enter' && !event.shiftKey) {
    sendMessage();
}
});

updateMessages();