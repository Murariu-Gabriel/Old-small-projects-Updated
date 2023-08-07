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



function weightCalc(mass, planet) {

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
        console.log("ERROR")
    }
   
}


const decidePlanet = (select, mass) => {
  img.src = `./images/${select}.png`
  p1.textContent = `The weight of the object on the planet ${select.toUpperCase()}`
  p2.textContent = `${Math.floor(weightCalc(mass, select))} N `
}


const planets = (select, mass) => {
    console.log(select)
    if ( mass.length != 0) {

        decidePlanet(select, mass)

    } else if (select === "none" && mass.length != 0){
        // flexContainer.style.justifyContent = "center"
        img.src = ""
        p1.textContent = "PLEASE SELECT PLANET"
        // p2.style.background = ""
        // p2.style.borderRadius = "0%"
        p2.textContent = ""

    } else if (typeof(mass) === "string") {
        // flexContainer.style.justifyContent = "center"
        img.src = ""
        p1.textContent = 'PLEASE ENTER MASS'
        p2.textContent = ""
    }
    console.log(weightCalc(mass, select))
}


button.addEventListener('click', () => {
// description.style.background = "rgba(240,240,240, 0.4)"
// flexContainer.style.alignItems = "center"
// flexContainer.style.justifyContent = "space-around"
// p2.textAlign = "center"
// p2.style.background = "rgba(240,240,240, 0.6)"
// p2.style.borderRadius = "50%"


 planets(select.value, parseInt(mass.value))
 
 console.log(p2.textContent)

 if (p2.textContent.includes("NaN")) {
    // flexContainer.style.justifyContent = "center"
    img.src = ""
    p1.textContent = 'Not A Number'
    p2.textContent = ""
}

})



