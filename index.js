let dark = document.getElementById('dark'),
    light = document.getElementById('light'),
    body = document.querySelector('body'),
    conversation = document.getElementById('conversation'),
    search = document.getElementById('search'),
    transition = '0.4s',
    darkBack = '#0B0F29',
    lightBack = '#f5f7ff',
    lightColor = '#121331'

let arr = [dark, light]
arr.forEach((it) => {
    it.onclick = () => {
        setTimeout(() => {
            if (it === dark) {
                body.style.background = darkBack;
                body.style.transition = transition;
                conversation.style.color = 'white';
                conversation.style.transition = transition;
                search.style.color = 'white'
                it.style.display = "none"
                light.style.display = 'block'
            } else if (it === light) {
                body.style.background = lightBack;
                conversation.style.color = lightColor;
                search.style.color = lightColor;
                it.style.display = 'none'
                dark.style.display = 'block'
            }
        })

    }
})