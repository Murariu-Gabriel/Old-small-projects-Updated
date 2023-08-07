const body = document.querySelector("body")
const h1 = document.querySelector("h1")
const header = document.querySelector('header')
const flexContainer = document.querySelector('.flex-container')
const img = document.querySelector('.planet-image')
const description = document.querySelector("#description")
const button = document.querySelector("button")
const input = document.querySelector('input')
const p1 = document.querySelector("#p1")
const p2 = document.querySelector("#p2")
const main = document.querySelector("main")
const flexItem = document.querySelector("flex-item")

const mass = document.querySelector("#mass")
const select = document.querySelector("select")

main.style.display = "flex"
body.style.backgroundImage = "url(./images/galaxy.gif)"
header.style.textAlign = "center"
header.style.padding = "30px"
h1.style.color = "white"
flexContainer.style.display = "flex"
flexContainer.style.justifyContent = "center"
flexContainer.style.padding = "30px 150px"
flexContainer.style.background = "rgba(240,240,240, 0.2)"
flexContainer.style.maxWidth = "900px"
main.style.justifyContent = "center"


p2.style.textAlign = "center"
img.style.height = "250px"



function wieghtCalc(mass, planet) {

   if(planet === "earth") {
        return mass * 9.8
    } else if(planet === "jupiter") {
        return mass * 24.7
    } else if(planet === "mars") {
        return mass * 3.7
    } else if(planet === "mercury") {
        return mass * 3.7
    } else if(planet === "moon") {
        return mass * 1.6
    } else if(planet === "neptune") {
        return mass * 11.1
    } else if(planet === "pluto") {
        return mass * 0.62
    } else if(planet === "saturn") {
        return mass * 10.4
    } else if(planet === "uranus") {
        return mass * 8.8
    } else if(planet === "venus") {
        return mass * 8.8
    } else {
        console.log("esti PROST")
    }
   
}



button.addEventListener('click', () => {
description.style.background = "rgba(240,240,240, 0.4)"
flexContainer.style.alignItems = "center"
flexContainer.style.justifyContent = "space-around"
p2.textAlign = "center"
p2.style.background = "rgba(240,240,240, 0.6)"
p2.style.borderRadius = "50%"



    function planets(select, mass){
    if (select === "earth" && mass.length != 0) {
        img.src = "./images/earth.png"
        p1.textContent = `The wieght of the object on the planet ${select.toUpperCase()}`
        p2.textContent = `${Math.floor(wieghtCalc(mass, select))} N `
        
    } else if(select === "jupiter" && mass.length != 0) {
        img.src = "./images/jupiter.png"
        p1.textContent = `The wieght of the object on the planet ${select.toUpperCase()}`
        p2.textContent = `${Math.floor(wieghtCalc(mass, select))} N `

    } else if(select === "mars" && mass.length != 0) {
        img.src = "./images/mars.png"
        p1.textContent = `The wieght of the object on the planet ${select.toUpperCase()}`
        p2.textContent = `${Math.floor(wieghtCalc(mass, select))} N `

    } else if(select === "mercury" && mass.length != 0) {
        img.src = "./images/mercury.png"
        p1.textContent = `The wieght of the object on the planet ${select.toUpperCase()}`
         p2.textContent = `${Math.floor(wieghtCalc(mass, select))} N `

    } else if(select === "moon" && mass.length != 0) {
        img.src = "./images/moon.png"
        p1.textContent = `The wieght of the object on the planet ${select.toUpperCase()}`
         p2.textContent = `${Math.floor(wieghtCalc(mass, select))} N `

    } else if(select === "neptune" && mass.length != 0) {
        img.src = "./images/neptune.png"
        p1.textContent = `The wieght of the object on the planet ${select.toUpperCase()}`
         p2.textContent = `${Math.floor(wieghtCalc(mass, select))} N `

    } else if(select === "pluto" && mass.length != 0) {
        img.src = "./images/pluto.png"
        p1.textContent = `The wieght of the object on the planet ${select.toUpperCase()}`
        p2.textContent = `${wieghtCalc(mass, select)}N `

    } else if(select === "saturn" && mass.length != 0) {
        img.src = "./images/saturn.png"
        p1.textContent = `The wieght of the object on the planet ${select.toUpperCase()}`
         p2.textContent = `${Math.floor(wieghtCalc(mass, select))} N `

    } else if(select === "uranus" && mass.length != 0) {
        img.src = "./images/uranus.png"
        p1.textContent = `The wieght of the object on the planet ${select.toUpperCase()}`
         p2.textContent = `${Math.floor(wieghtCalc(mass, select))} N `

    } else if(select === "venus" && mass.length != 0) {
        img.src = "./images/venus.png"
        p1.textContent = `The wieght of the object on the planet ${select.toUpperCase()}`
         p2.textContent = `${Math.floor(wieghtCalc(mass, select))} N `

    } else if (select === "none" && mass.length != 0){
        flexContainer.style.justifyContent = "center"
        img.src = ""
        p1.textContent = "PLEASE SELECT PLANET"
        p2.style.background = ""
        p2.style.borderRadius = "0%"
        p2.textContent = ""

    } else if (typeof(mass) === "string") {
        flexContainer.style.justifyContent = "center"
        img.src = ""
        p1.textContent = 'PLEASE ENTER MASS'
        p2.textContent = ""
    }
    console.log(wieghtCalc(mass, select))
}

 planets(select.value, mass.value)
 
 console.log(p2.textContent)
 if (p2.textContent.includes("NaN")) {
    flexContainer.style.justifyContent = "center"
            img.src = ""
            p1.textContent = 'Not A Number'
            p2.textContent = ""
}

})




// if (mass === "string") {
//     flexContainer.style.justifyContent = "center"
//         img.src = ""
//         p1.textContent = 'Not A Number'
//         p2.textContent = ""

// for(let el of select){
//    if(el.value === "jupiter") {
//     img.src = "./images/jupiter.png"
//     description.textContent = `The wieght of the object on the planet ${el.value.toUpperCase()}`
//     flexContainer.style.alignItems = "center"
//     flexContainer.style.justifyContent = "space-around"
//    }
// }

