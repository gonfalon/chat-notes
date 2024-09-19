var messages = localStorage.getItem('messages') ? JSON.parse(localStorage.getItem('messages')) : [];

const getChatElement = (message) => `
    <div class="message primary padding margin right-round top-round">
        ${message}
    </div>
`;

function updateMessages() {
    const main = document.querySelector('#chat-window');
    main.innerHTML = '';
 
    messages.forEach((message) => {
        main.innerHTML += getChatElement(message);
    });
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