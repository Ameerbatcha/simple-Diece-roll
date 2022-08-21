var dice = document.getElementById('diceimage');
let dices = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
let val = true;

function random_generate() {
    let random = Math.floor(Math.random() * 6);
    dice.innerHTML = dices[random];
}




function perform() {
    if (val) {
        repeat = setInterval(random_generate, 100);
        val = false;
    }
    else {
        clearInterval(repeat);
        val = true;
    }
}

window.onload = function(){
    perform();
}