const minus = document.getElementById("minus-button");
const plus = document.getElementById("plus-button");
const inputCharacters =  document.getElementById("characters-numbers");
const form = document.getElementById("app");
const buttons = document.getElementsByClassName("check");
const generator = document.getElementById("button-generator");
const inputPassword = document.getElementById("input-password");

let configuration = {
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true,
}
let characters = {
    lowercase: "a b c d e f g h i j k l m n ñ o p q r s t u v w x y z",
    uppercase: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",
    numbers: "0 1 2 3 4 5 6 7 8 9",
    symbols: ". , # { } [ ] ; / * + - ? ¿ - _ ! ¡ $ & @ > <",
}

form.onsubmit = (e) => {
    e.preventDefault()
}
minus.onclick = () => {
    inputCharacters.value > 8 && inputCharacters.value--
}
plus.onclick = () => {
    inputCharacters.value < 20 && inputCharacters.value++
}

for (let button of buttons) {
    button.onclick = (e) => {
        button.classList.toggle("false")
        button.childNodes[0].classList.toggle("fa-check")
        button.childNodes[0].classList.toggle("fa-times")
        for (let property in configuration) {
            if (e.target.id === property) {
                configuration[property] = !configuration[property]
                console.log(configuration)
            }
        }
    }
}
const generatorPassword = () => {
    let finalsCharacter = ""
    let password = ""
    for (let property in configuration) {
        if (configuration[property] === true){
            finalsCharacter += characters[property]    
        }  
    }
    finalsCharacter = finalsCharacter.split(" ")
    for( let index = 0 ; index < parseInt(inputCharacters.value); index++){
        password += finalsCharacter[Math.floor(Math.random() * finalsCharacter.length)]
    }
    inputPassword.value = password 
}
const copyPassword = () => {
    inputPassword.select()
    document.execCommand("copy")
    Toastify({
        text: "Contraseña Copiada",
        duration: 2000,
        backround: "#f77c0d",
        position: "center",
        }).showToast();
}
generator.onclick = () => {
    generatorPassword()  
}
inputPassword.onclick = () => {
    copyPassword()
}

generatorPassword() 