document.querySelector('button').addEventListener('click', handleClick);

function handleClick() {
    document.querySelectorAll.map(
        button => button.addEventListener('click', playSound)
    )
}

function playSound() {
    var audio = new Audio('sounds/tom-1.mp3')
    audio.play();
}