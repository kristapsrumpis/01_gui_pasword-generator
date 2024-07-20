

// abcdefghijklmnopqrstuvwxyz
// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// 0123456789
// !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~


const lettersLowercase = 'abcdefghijklmnopqrstuvwxyz'
const lettersUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"


// select generate BTN 
const generateBtn = document.querySelector('#generateBtn')

// set defoults 
document.querySelector('#lethersLowercase').checked = true
document.querySelector('#lethersUppercase').checked = false
document.querySelector('#numbers').checked = false
document.querySelector('#symbols').checked = false

generateBtn.addEventListener('click', function(){
    let lethersLowercase = document.querySelector('#lethersLowercase').checked
    let lettersUppercase = document.querySelector('#lethersUppercase').checked
    let numbers = document.querySelector('#numbers').checked
    let symbols = document.querySelector('#symbols').checked
    let passwordLength = document.querySelector('#passwordLength').value
    let notToUse = document.querySelector('#notToUse').value

    console.log(lethersLowercase, lettersUppercase, numbers, symbols)
    console.log(+passwordLength, notToUse)
})


