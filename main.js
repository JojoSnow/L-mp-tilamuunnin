const converterBtn = document.getElementById('tempConvert');
const formInput = document.forms['inputForm'];

formInput.addEventListener('submit', clickBtn);

function clickBtn(event) {
    event.preventDefault();
    let temp = parseInt(document.getElementById('tempInput').value);
    chooseWhichTemp(temp);
}

function chooseWhichTemp(temp) {
    let select = document.getElementById('tempConverter');
    let chosenOption = select.options[select.selectedIndex].value;
    switch(chosenOption) {
        case 'celToFah':
            celToFah(temp);
            break;
        case 'fahToCel':
            fahToCel(temp);
            break;
        case 'fahToKel':
            fahToKel(temp);
            break;
        case 'kelToFah':
            kelToFah(temp);
            break;
        case 'kelToCel':
            kelToCel(temp);
            break;
        case 'celToKel':
            celToKel(temp);
            break;
        default:
            console.log('converter option failed')    
    }
}

function celToFah(temp) {
    let celToFah = temp * 1.8 + 32;
    let finalTemp = checkDes(celToFah);
    document.getElementById('convertedTemp').innerText = 
    finalTemp + ' °F';
}

function fahToCel(temp) {
    let fahToCel = (temp - 32) / 1.8;
    let finalTemp = checkDes(fahToCel);
    document.getElementById('convertedTemp').innerText = finalTemp + ' °C';
}

function fahToKel(temp) {
    let fahToKel = (temp + 459.67) / 1.8;
    let finalTemp = checkDes(fahToKel);
    document.getElementById('convertedTemp').innerText = finalTemp + ' K';
}

function kelToFah(temp) {
    let kelToFah = temp * 1.8 - 459.67;
    let finalTemp = checkDes(kelToFah);
    document.getElementById('convertedTemp').innerText = finalTemp + ' °F';
}

function kelToCel(temp) {
    let kelToCel = temp - 273.15;
    let finalTemp = checkDes(kelToCel);
    document.getElementById('convertedTemp').innerText = finalTemp + ' °C';
}

function celToKel(temp) {
    let celToKel = temp + 273.15;
    let finalTemp = checkDes(celToKel);
    document.getElementById('convertedTemp').innerText = finalTemp + ' K';
}

function checkDes(temp) {
    let des1 = document.getElementById('1des').checked;
    let des2 = document.getElementById('2des').checked;
    let des3 = document.getElementById('3des').checked;
    if(des1 === true) {
        return temp.toFixed(1);
    }
    if(des2 === true) {
        return temp.toFixed(2);
    }
    if(des3 === true) {
        return temp.toFixed(3);
    }
}