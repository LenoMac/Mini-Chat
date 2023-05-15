const searchInput = document.getElementById('search-input');
let searchPopup = document.getElementById('search-popup');
let addToPop = ""
searchInput.addEventListener("input", ()=> {
    New()
    if (searchInput.value){
        searchPopup.style.zIndex = '1'
        searchPopup.style.opacity = '1'
        searchPopup.innerHTML = addToPop
    }
    else {
        searchPopup.style.zIndex = '-1'
        searchPopup.style.opacity = '0'
    }

})

function New(){
    function toDo(link, name){
        return `<div style="cursor: pointer; display: flex; gap: 1rem; align-items: center;">
                        <div style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden" ">
                            <img style="width: 40px; height: 40px; border-radius: 50%" src=${link}
                                    alt="Error">
                        </div>
                        <div style="display: flex; flex-direction: column;">
                            <small style="font-size: 1.1rem">${name}</small>
                        </div>
                  </div>`
    }
    let value = searchInput.value
    switch (value){
        case 'O':
        case 'Of':
        case 'Off':
        case 'Offi':
        case 'Offic':
        case 'Office':
        case 'Office Chat':
            addToPop = toDo('https://cdn.mos.cms.futurecdn.net/hKX2Uqg2giQikXUekiPNaC-1200-80.jpg', 'Office Chat')
            break;
        case 'H':
        case 'Ha':
        case 'Har':
        case 'Harr':
        case 'Harry':
            addToPop = toDo('./img/profile-2.jpg', 'Harry Fattel');
            break;
        case 'Mom':
        case 'mom':
        case 'm': 
        case 'mo':
        case 'Mo':
        case 'M':
            addToPop = toDo('https://cdn.mos.cms.futurecdn.net/hKX2Uqg2giQikXUekiPNaC-1200-80.jpg', 'Mom')
            break;
        default:
            addToPop = `<div style="display: flex; flex-direction: column; align-items: center; gap: 10px; "> <span>(>_<)</span> <p>No contact found for ${value}</p></div>`
    }
}