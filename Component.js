let sendMessage = document.getElementById('sendMessage'),
    micro = document.getElementById('micro'),
    messageInput = document.getElementById('messageInput');

sendMessage.addEventListener("click", () => {
    messageInput.value = ""
    addMessage()
})
function addMessage() {
    let messageContainer = document.getElementById('messageContainer')
    const messageElement = `<div class = "sms" id = "sms">${messageInput.value}</div>`
    document.createElement('div')
    messageContainer.insertAdjacentHTML("beforeend", messageElement)
}

messageInput.addEventListener("input", () => {
    if (messageInput.value) {
        micro.style.display = "none"
        sendMessage.style.display = "block"
    } else {
        micro.style.display = "block"
        sendMessage.style.display = "none"
    }
})

messageInput.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        if (messageInput.value !== "") {
            addMessage();
            messageInput.value = ""
        } else {
            alert(new Error())
        }
    }
})