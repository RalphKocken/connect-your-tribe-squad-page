const memberbutton = document.querySelectorAll('.memberbutton')
const personIcon = document.querySelector('.manicon')
let membername = document.querySelector('.your-name')
let memberlength = document.querySelector('.your-height')

memberbutton.forEach((button) => {
    button.addEventListener('click', ()=> {
        const height = button.dataset.height
        const name = button.dataset.name
        personIcon.style.height = height/210 * 100 +"%";
        membername.innerHTML = name
        memberlength.innerHTML = height + "cm"
    })
})

function changeheight2() {
    personIcon.style.height = "70%"
}

//CALC//
// personIcon.style.height = "calc(216 - <% member.length %> * 100" %;


memberbutton.forEach((button)=>{
    button.addEventListener('click', () => {
        const dataId = button.dataset.id
        const card = document.getElementById(dataId)
        // card.classList.add('active')
        card.showModal();

        const close_buttons = document.querySelectorAll(".close");
        close_buttons.forEach((close) => {
            close.addEventListener("click", () => {
                card.close()
            }); 
        })

    })
})