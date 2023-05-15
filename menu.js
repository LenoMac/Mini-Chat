let btnSection1 = document.getElementById('btn-section1'),
    btnSection2 = document.getElementById('btn-section2'),
    btnSection3 = document.getElementById('btn-section3'),
    btnSection4 = document.getElementById('btn-section4'),
    btnSection5 = document.getElementById('btn-section5'),
    btnSection6 = document.getElementById('btn-section6'),
    section1 = document.getElementById('section1'),
    section2 = document.getElementById('section2'),
    section3 = document.getElementById('section3'),
    section4 = document.getElementById('section4'),
    section5 = document.getElementById('section5'),
    section6 = document.getElementById('section6'),
    field1 = document.getElementById('field-1')

let arrOfButtons = [btnSection1, btnSection2, btnSection3, btnSection4, btnSection5, btnSection6]
let arrOfSections = [section1, section2, section3, section4, section5, section6]
function switchSection(event) {
    let btnId = event.currentTarget.id

    for (let value of arrOfButtons) {
        value.classList.remove('chosen')
        for (let i of arrOfSections) {
            i.style.opacity = '0'
            i.style.zIndex = '-1'
        }
    }

    if (btnId === 'btn-section1') {
        section1.style.opacity = '1'
        section1.style.zIndex = '1'
        btnSection1.classList.add('chosen')
    }
    else if (btnId === 'btn-section2') {
        section2.style.opacity = '1'
        section2.style.zIndex = '1'
        btnSection2.classList.add('chosen')
    }
    else if (btnId === 'btn-section3') {
        section3.style.opacity = '1'
        section3.style.zIndex = '1'
        btnSection3.classList.add('chosen')
    }
    else if (btnId === "btn-section4") {
        section4.style.opacity = '1'
        section4.style.zIndex = '1'
        btnSection4.classList.add('chosen')
    }
    else if (btnId === "btn-section5") {
        section5.style.opacity = '1'
        section5.style.zIndex = '1'
        btnSection5.classList.add('chosen')
    }
    else if (btnId === "btn-section6") {
        section6.style.opacity = '1'
        section6.style.zIndex = '1'
        btnSection6.classList.add('chosen')
    }
}

btnSection1.addEventListener('click', switchSection)
btnSection2.addEventListener('click', switchSection)
btnSection3.addEventListener('click', switchSection)
btnSection4.addEventListener('click', switchSection)
btnSection5.addEventListener('click', switchSection)
btnSection6.addEventListener('click', switchSection)



const chats = document.getElementById('chats')
let addChats = function (profile, authorName, authorMessage, time, notification) {
    return `<div class="chat">
    <div class="profile-photo">
        <img src=${profile}
            alt="Error">
    </div>
    <div class="author">
        <small class="name">${authorName}</small>
        <p class="message">${authorMessage}</p>
    </div>
    <div class="sent-or-come">
        <span>
            <small>${time}</small>
            <span class="mute">${notification}</span>
        </span>
    </div>
</div>`

}
chats.insertAdjacentHTML("beforeend", addChats("https://cdn.mos.cms.futurecdn.net/hKX2Uqg2giQikXUekiPNaC-1200-80.jpg", "Mom", "Be carefull", "29 sec", "4"))
chats.insertAdjacentHTML("beforeend", addChats("https://cdn.mos.cms.futurecdn.net/hKX2Uqg2giQikXUekiPNaC-1200-80.jpg", "Office Chat", "I wanna ask you to pick", "15 m", "2"))
chats.insertAdjacentHTML("beforeend", addChats("./img/profile-2.jpg", "Harry Fattel", "Our company needs to...", "6 m", "1"))
chats.insertAdjacentHTML("beforeend", addChats("", "Bory", "Aliekum salam", "1 d", ""))
chats.insertAdjacentHTML("beforeend", addChats("", "Bory", "Салам алейкум", "29 sec", ""))


let chatsAll = document.querySelectorAll('.chats .chat')
chatsAll.forEach(function (link) {
    link.addEventListener('click', () => {
        chatsAll.forEach(function (otherLink) {
            otherLink.removeAttribute("id", "opened")
        })
        link.setAttribute("id", "opened")
    })
})

// chatsAll.forEach((item) => {
//     item.addEventListener('contextmenu', (event) => {
//         let popUp = document.createElement('div');
//         let body = document.getElementsByTagName('body')
//         body.insertAdjacentHTML("beforeend", popUp)
//         popUp.innerHTML = `<div style="width: 200px; background: red;  height: max-content; display: flex; flex-direction: column; padding: 1rem;"><p>Edit chat</p><p>Delete chat</p></div>`
//         popUp.style.position = "absolute";
//         popUp.zIndex = 5
//         popUp.style.top = event.clientY + 'px'
//         popUp.style.left = event.clientX + 'px'
//     })
// })

