const btnGen = document.getElementById("btn-gen")
const passOne = document.getElementById("pass-one")
const passTwo = document.getElementById("pass-two")
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let pass1 = []
let pass2 = []


function generatePass(){
    for(let i=0 ;i<15;i++){
        let random = Math.floor(Math.random() * characters.length)
        pass1 +=characters[random]
    }
    for(let i=0 ;i<15;i++){
        let random = Math.floor(Math.random() * characters.length)
        pass2 +=characters[random]
    } 

    passOne.textContent = pass1
    passTwo.textContent = pass2
    pass1 = []
    pass2 = []
}



btnGen.addEventListener("click",generatePass)
