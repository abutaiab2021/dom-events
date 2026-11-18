// for button one
function makeDark(){
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
}


// for button two
function makeLight(){
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
}

// for button blue
const btnMakeBlue = document.getElementById('btn-make-blue');
btnMakeBlue.onclick = function makeBlue(){
    document.body.style.backgroundColor= 'green';
    document.body.style.color = 'white';
}