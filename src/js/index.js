const buttons = document.querySelectorAll('.button') //pega todas as classes = button

const characters = document.querySelectorAll('.character')



buttons.forEach((button, index) => {
    button.addEventListener('click', () =>{

        deselect_button()
        deselect_character()

        button.classList.add('selected')

        characters[index].classList.add('selected')

    })
})

function deselect_character() {
    const characterSelected = document.querySelector('.character.selected')
    characterSelected.classList.remove('selected')
}

function deselect_button() {
    const buttonSelected = document.querySelector('.button.selected')
    buttonSelected.classList.remove('selected')
}

