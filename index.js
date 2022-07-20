let input = document.getElementById('input');
let generateButton = document.getElementById('generate')
let townName = document.getElementById('newTown');
let submitInspo = document.getElementById('submitvalue')
let makeReadable = document.getElementById('changefont')

let userinput;
let newName;
let seminame;

let townEndings = ["shire", "minster", "mouth", "penden", "ton", "bridge", "ford", "don", "ham", "chester", "hampton", "berry", "combe", "WAKE UP, WAKE UP, WAKE UP", "church", "bury", "by", "ington", "ingdon"]

submitInspo.onclick = function() {
    userinput = input.value
}

generateButton.onclick = function() {
    if (makeReadable.checked === true) {
        townName.style.fontFamily = 'Arial'
    }
    else {
        townName.style.fontFamily = 'cursive'
    }
    seminame = input.value
    if (seminame.slice(-1) == "s") {
        userinput = seminame.slice(0, -1)
    }
    else {
        userinput = seminame
    }
    newName = userinput + "s" + townEndings[Math.floor(Math.random() * (townEndings.length))];
    townName.innerHTML = newName

}



makeReadable.onchecked = function () {
    townName.style.fontFamily = 'Arial'
}
