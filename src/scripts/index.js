
// simbol lists for passwords
//
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


// returns list of symbols, letahers, numbers for password depeds from selection on input
const passwordSymbolList = function(Low,Up,num,symb){
    let characters = ''
    if(Low == true){
        characters += lettersLowercase
    }
    if(Up == true){
        characters += lettersUppercase
    }
    if(num == true){
        characters += numbers
    }
    if(symb == true){
        characters += symbols
    }
    return characters
} 

// add's event listgener functionaity to generate BTN
generateBtn.addEventListener('click', function(){
    let password = ''

    let lethersLowercaseBoolean = document.querySelector('#lethersLowercase').checked
    let lettersUppercaseBoolean = document.querySelector('#lethersUppercase').checked
    let numbersBoolean = document.querySelector('#numbers').checked
    let symbolsBoolean = document.querySelector('#symbols').checked
    let passwordLength = document.querySelector('#passwordLength').value
    let notToUse = document.querySelector('#notToUse').value


    let characters = passwordSymbolList(lethersLowercaseBoolean,lettersUppercaseBoolean,numbersBoolean,symbolsBoolean)

    if(!notToUse == ''){
        let newCharacters = characters

        console.log(notToUse, notToUse.length)
        console.log(characters, characters.length)

        for(let i = 0; i< characters.length; i++){
            if(characters[i]){
                for(let e = 0; e < notToUse.length; e++){
                    if(notToUse[e]){
                        if(characters[i] === notToUse[e]){
                            newCharacters = newCharacters.replace(notToUse[e], '')
                        }
                    }
                }
            }
        }
        console.log(newCharacters, newCharacters.length)
        characters = newCharacters
    }



    for(i = 0; i< passwordLength; i++){

        // generates random number
        let randomNumber = Math.floor(Math.random() * 100)

        // cheks random number if it fits under selected character length 
        // if random number is highter then selected character length then set back counter and generate new random number
        if(randomNumber < characters.length){
                //add's to password str
                password += characters[randomNumber]      
        }else{
            i--
        }
    }

     //get password field and print generated pasword
    let passwordOutput = document.querySelector('#password')
    passwordOutput.innerHTML = password
})


