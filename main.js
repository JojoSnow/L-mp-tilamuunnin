const converterBtn = document.getElementById('tempConvert');
const formInput = document.forms['inputForm'];

formInput.addEventListener('submit', clickBtn);

function clickBtn(event) {
    event.preventDefault();
    let temp = parseInt(document.getElementById('tempInput').value);
    chooseWhichTemp(temp);
}

function chooseWhichTemp(temp){
    let select = document.getElementById('tempConverter');
    let option = select.options[select.selectedIndex].value;
    console.log(option);
    if(option === 'celToFah') {
        celToFah(temp);
    }
    if(option === 'fahToCel') {
        fahToCel(temp);
    }
    if(option === 'fahToKel') {
        fahToKel(temp);
    }
    if(option === 'kelToFah') {
        kelToFah(temp);
    }
    if(option === 'kelToCel') {
        kelToCel(temp);
    }
    if(option === 'celToKel') {
        celToKel(temp);
    }
}

function celToFah(temp) {
    let celToFah = temp * 1.8 + 32;
    document.getElementById('convertedTemp').innerText = celToFah + ' °F';
}

function fahToCel(temp) {
    let fahToCel = (temp - 32) / 1.8;
    document.getElementById('convertedTemp').innerText = fahToCel + ' °C';
}

function fahToKel(temp) {
    let fahToKel = (temp + 459.67) / 1.8;
    document.getElementById('convertedTemp').innerText = fahToKel + ' K';
}

function kelToFah(temp) {
    let kelToFah = temp * 1.8 - 459.67;
    document.getElementById('convertedTemp').innerText = kelToFah + ' °F';
}

function kelToCel(temp) {
    let kelToCel = temp - 273.15;
    document.getElementById('convertedTemp').innerText = kelToCel + ' °C';
}

function celToKel(temp) {
    let celToKel = temp + 273.15;
    document.getElementById('convertedTemp').innerText = celToKel + ' K';
}