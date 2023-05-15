// let countChats = [];
// loadComments()
//
// document.getElementById('button').onclick = () => {
//     let value1 = document.getElementById('text1'),
//         value2 = document.getElementById('text2'),
//         value3 = document.getElementById('text3')
//     let arr = {
//         name: value1.value,
//         surname: value2.value,
//         URL: value3.value,
//         lastMessage: ''
//     }
//     if (!(value1.value && value2.value || value3.value)) return alert(new Error("Error 404"))
//     value1.value = ''
//     value2.value = ''
//     value3.value = ''
//     countChats.push(arr)
//     showComment()
//     saveComment()
//
//     function saveComment() {
//         localStorage.setItem('countChats', JSON.stringify(countChats))
//     }
// }
//
// function loadComments() {
//     if (localStorage.getItem('countChats')) countChats = JSON.parse(localStorage.getItem('countChats'))
//     showComment()
// }
// //SHOW ON AREA
// function showComment(){
//     let chats = document.getElementById('chats')
//     chats.innerHTML = ''
//     let empty = ''
//     countChats.forEach(function(el){
//         empty = `<div class="chat">
//         <span class=""></span>
//         <div class="profile-photo">
//             <img src="./img/Profile.avif" alt="Error">
//         </div>
//         <div class="author">
//             <small class="name">${el.name} ${el.surname}</small>
//             <p class="message">${el.lastMessage}</p>
//         </div>
//         <div class="sent-or-come">
//             <span>
//                 <lord-icon src="https://cdn.lordicon.com/uvlzcswc.json" trigger="hover">
//                 </lord-icon>
//             </span>
//         </div>
//     </div>`
//         chats.insertAdjacentHTML("beforeend", empty)
//     })
// }
//
// // chats.forEach((el) => {
// //     const myPopup = document.getElementById('my-popup')
// //     el.addEventListener('contextmenu', function (event) {
// //         myPopup.style.opacity = 1
// //         myPopup.style.zIndex = 10
// //         myPopup.style.top = event.clientY + 'px'
// //         myPopup.style.left = event.clientX + 'px'
//
// //     })
// //     document.addEventListener('click', function (event) {
// //         if (event.button !== 2) { // Проверяем, что нажата не правая кнопка мыши
// //             myPopup.style.opacity = 0
// //             myPopup.style.zIndex = -2
// //         }
// //     })
// // })
