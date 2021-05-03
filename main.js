const converterBtn = document.querySelector('#tempConvert');
const form = document.forms['form'];
let temp = document.getElementById('temp').value;
//let temp = parseInt(tempTemp).value;
let select = document.querySelector('select');
form.addEventListener('submit', clickBtn);
select.addEventListener('change', chooseWhichTemp);

function clickBtn(event) {
    event.preventDefault();
    console.log(temp);
    
    if(temp === "") {
        alert('Lämpötila pitää syöttää!')
    }
    if(select.value != document.querySelector('#choose').value) {
        chooseWhichTemp();
    } else {
        console.log('convert failed');
        alert('Valitse muunnin tapa!');
    }
}

function chooseWhichTemp(event){
    if (select.value === 'celToFal') {
        celToFah();
    }
    if (select.value === 'falToCel') {
        fahToCel();
    }
}

function celToFah() {
    let celToFah = temp * 1.8 + 32;
    document.getElementById('convertedTemp').innerText = celToFah;
}

function fahToCel() {
    let fahToCel = (temp - 32) / 1.8;
    document.getElementById('convertedTemp').innerText = fahToCel;
}
