const btnStartingWord = document.getElementById("starting-word");
const btnStartWithAny = document.getElementById("start-with-any");
const buttons = document.querySelectorAll(".buttons button")
const sort = document.getElementById("sort");
const search = document.getElementById("search");
const countryContainer = document.getElementById("country-container");
const firstBox = document.getElementById("first-box");
const afterInput = document.getElementById("after-input");
const totalCountries = document.querySelector("p span")


totalCountries.textContent = countries.length


// Loading countries

const loadCountries = (array) => {
    countryContainer.innerHTML = ""

    array.forEach(country => {
         const div = document.createElement("div")
         div.classList.add("country")
         div.innerHTML = `
           <p class="country-text">${country}</p>
        `
        // div.style.background = ""
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

const updateTotalNumber = (e, filteredCountries) => {
    if (e.target.value.length != 0) {
      afterInput.innerHTML = `Countries with <span class="sub-input1">${e.target.value}</span> are <span class="sub-input2">${filteredCountries.length}</span>`
    } else {
      afterInput.innerHTML = ""
    }
}

search.addEventListener("keyup", (e) => {
    const search = e.target.value.toLowerCase();

    const currentButton = document.body.querySelector(".special")
    console.log(currentButton)

    if(currentButton?.id === "starting-word" && currentButton !== null){
      const filteredCountries = countries.filter((country) => {
        const firstWord = country.toLowerCase().startsWith(search)

        return firstWord
      })

      loadCountries(filteredCountries)
      updateTotalNumber(e, filteredCountries)

    } else {
      const filteredCountries = countries.filter(country => {
          return country.toLowerCase().includes(search)
    })

      loadCountries(filteredCountries)
        updateTotalNumber(e, filteredCountries)
    }
})