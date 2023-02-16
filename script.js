const setTitle = document.getElementById('title')
console.log(setTitle)

const setDescription = document.getElementById('description')
console.log(setDescription)

function setBackgroundColor(color) {
    const body = document.getElementById("color")
    body.style.backgroundColor = color
}

function setFontColor() {
    document.getElementById("color").style.color = 'red';
}

const $setTheme = document.getElementById('themes')
    $setTheme.classList.remove('light')




