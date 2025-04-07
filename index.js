let scoreboardfighome = document.getElementById("scorehometext")
let scoreboardfigguest = document.getElementById("scoreguesttext")
let count = 0


//home addition function
function homeaddone() {
    count += 1 
    scoreboardfighome.textContent = count
}

function homeaddtwo() {
    count += 2
    scoreboardfighome.textContent = count
}

function homeaddthree() {
    count += 3
    scoreboardfighome.textContent = count
}


//guest addition function
function guestaddone() {
    count += 1 
    scoreboardfigguest.textContent = count
}

function guestaddtwo() {
    count += 2
    scoreboardfigguest.textContent = count
}

function guestaddthree() {
    count += 3
    scoreboardfigguest.textContent = count
}