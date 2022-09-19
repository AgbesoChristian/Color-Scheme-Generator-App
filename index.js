const colorDisplayWrapper = document.querySelector(".color-display-wrapper")
const colorSchemeMode = document.querySelector("#select-menu")
const colorGeneratorBtn = document.querySelector("#Scheme-generator-btn")
const colorSchemeOutput = document.getElementsByClassName("color-schemes")

colorGeneratorBtn.addEventListener("click", renderColor)


function renderColor(){
    let seedColor = document.querySelector("#color-picker")
    let colorMode = colorSchemeMode.value
    fetch(`https://www.thecolorapi.com/scheme?hex=${(seedColor.value).slice(1)}&mode=${colorMode}&count=5`)
    .then(response => response.json())
    .then(data=>{
        for(let i=0; i<5; i++){
            colorSchemeOutput[i].style.background = data.colors[i].hex.value
            colorSchemeOutput[i].textContent = data.colors[i].hex.value
            colorSchemeOutput[i].style.padding = "12em 0"
        }
        colorDisplayWrapper.style.display = "flex"
        colorDisplayWrapper.style.padding = "0"
        colorDisplayWrapper.style.color = "#fff"
    })
}