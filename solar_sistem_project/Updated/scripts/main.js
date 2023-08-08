
const img = document.querySelector('.planet-image')
const description = document.querySelector("#description")
const button = document.querySelector("button")
const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")

const mass = document.querySelector("#mass")
const select = document.querySelector("select")

 const gravityFactors = {
   earth: 9.8,
   jupiter: 24.7,
   mars: 3.7,
   mercury: 3.7,
   moon: 1.6,
   neptune: 11.1,
   pluto: 0.62,
   saturn: 10.4,
   uranus: 8.8,
   venus: 8.8,
 }

const weightCalc = (mass, planet) => {
   if (gravityFactors.hasOwnProperty(planet)) {
     return mass * gravityFactors[planet]
   } else {
     console.log("ERROR")
   }   
}

const decidePlanet = (select, mass) => {
    img.src = `./images/${select}.png`
    img.style.display = "initial"
    p1.textContent = `The weight of the object on the planet ${select.toUpperCase()}`
    p2.textContent = `${Math.floor(weightCalc(mass, select))} N `
    p2.style.display = "flex"
}

const displayError = (text) => {
    img.style.display = "none"
    p1.textContent = text
    p2.style.display = "none"
}

const planets = (select, mass) => {
    
    if (!isNaN(mass) && select !== "none") {
        decidePlanet(select, mass)

    } 
    if (select === "none"){
        displayError("PLEASE SELECT PLANET")
       
    } 
     if (isNaN(mass)) {
        displayError("MASS SHOULD BE A NUMBER")
      
    }
    if(mass === ""){
        displayError("PLEASE ENTER MASS")
    }
}

button.addEventListener('click', () => {
    description.classList.add("show")
    planets(select.value, mass.value)

})