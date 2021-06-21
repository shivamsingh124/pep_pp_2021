const socket = io('http://localhost:7000', { transports: ['websocket', 'polling', 'flashsocket'] });

// Get DOM elements in respective Js variables
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp')
const messageContainer = document.querySelector(".container")

// Audio that will play on receiving messages
var audio = new Audio('/Audio/ting.mp3');


// Function which will append event info to the contaner
const append = (message, position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    //localStorage.setItem("name", messageElement.innerText);
    //localStorage.setItem(name, messageElement.innerText);
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    if(position =='left'){ 
        audio.play();
    }

}
 




// ask new user for his /her name  
const name = prompt("Enter your name to join");
socket.emit('new-user-joined', name);

//localStorage.getItem(name);


// If a new user joins, receive his/her name from the server
socket.on('user-joined', name =>{
    append(`${name} joined the chat`, 'right')
})

// If server sends a message, receive it
socket.on('receive', data =>{
    append(`${data.name}: ${data.message}`, 'left')
})
 
// If a user leaves the chat, append the info to the container
socket.on('left', name =>{
    append(`${name} left the chat`, 'right')
})

// If the form gets submitted, send server the message
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    localStorage.setItem(name, messageInput.value);
    append(`You: ${message}`, 'right');
    socket.emit('send', message);
    messageInput.value = ''
})
 
