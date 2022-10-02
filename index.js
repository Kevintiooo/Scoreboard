let home_score = document.getElementById("homescore")
let guest_score = document.getElementById("guestscore")
let result = 0 
let guestresult = 0

function plus1() {
    result += 1
    home_score.textContent = result
}

function plus2() {
    result += 2
    home_score.textContent = result
}

function plus3() {
    result += 3
    home_score.textContent = result
}

function sum1() {
    guestresult += 1
    guest_score.textContent = guestresult
}

function sum2() {
    guestresult += 2
    guest_score.textContent = guestresult
}

function sum3() {
    guestresult += 3
    guest_score.textContent = guestresult
}