const btnStartingWord = document.getElementById("starting-word");
const btnStartWithAny = document.getElementById("start-with-any");
const buttons = document.querySelectorAll(".buttons button")
const sort = document.getElementById("sort");
const search = document.getElementById("search");
const countryContainer = document.getElementById("country-container");
const firstBox = document.getElementById("first-box");
const afterInput = document.getElementById("after-input");



// Loading countries

const loadCountries = (array) => {
    countryContainer.innerHTML = ""

    array.forEach(country => {
         const div = document.createElement("div")
         div.classList.add("country")
         div.innerHTML = `
            <img class="image" src="./images/map_image.jpg" alt=""><p class="country-text">${country}</p>
        `
         countryContainer.appendChild(div)
    })
    
}

loadCountries(countries)




// Buttons

const currentButton = (e) => {
    document.body.querySelector(".special")?.classList.remove("special")
    e.target.classList.add("special")
}


buttons.forEach( button => {
  button.addEventListener("click", (e) => {
    currentButton(e)

    console.log(e.target)

    if(e.target.id === "sort"){
         console.log(countries.reverse())
         loadCountries(countries)
    }
  })
})





// Search functionality

// search.addEventListener("keyup", (e) => {
//     const search = e.target.value.toLowerCase()
//     const filteredCountries = countries.filter((country) => {
//         const firstWord = country.toLowerCase().startsWith(search)
//         console.log(firstWord)

//         return firstWord
//     })
//     loadCountries(filteredCountries)
// })


// here the next step is to think how do I want my buttons to work

// Do I want to re-render when I click based on the current input or to update after writing something

// same with the sorting button

search.addEventListener("keyup", (e) => {
    const search = e.target.value.toLowerCase();

    const currentButton = document.body.querySelector(".special")
    console.log(currentButton)

    const filteredCountries = countries.filter(country => {
        return country.toLowerCase().includes(search)
  })

  loadCountries(filteredCountries)
  
  if(e.target.value.length != 0){
  
    afterInput.innerHTML = `Countries with <p class="sub-input1">${e.target.value}</p> are <p class="sub-input2">${filteredCountries.length}</p>`
    } else {
        afterInput.innerHTML = ""
    }
})


