const memberbutton = document.querySelectorAll('.memberbutton')
const personIcon = document.querySelector('.manicon')
const test2button = document.querySelector('.test2')

test2button.addEventListener('click', changeheight2)

memberbutton.forEach((button) => {
    button.addEventListener('click', changeheight)
})

function changeheight() {
    personIcon.style.height = "50%"
}

function changeheight2() {
    personIcon.style.height = "80%"
}


//CALC//
// personIcon.style.height = "calc(216 - <% member.length %> * 100" %;

