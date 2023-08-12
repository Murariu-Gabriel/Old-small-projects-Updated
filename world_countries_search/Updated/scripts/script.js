const btnStartingWord = document.getElementById("starting-word");
const btnStartWithAny = document.getElementById("start-with-any");
const sort = document.getElementById("sort");
const search = document.getElementById("search");
const countryContainer = document.getElementById("country-container");
const firstBox = document.getElementById("first-box");
const afterInput = document.getElementById("after-input");


function loadingCountries(array) {
    countryContainer.innerHTML = ""

    for(el of array){
        const div = document.createElement('div')
        div.classList.add("country")
        div.innerHTML = `
        <img class="image" src="./images/map_image.jpg" alt=""><p class="country-text">${el.name}</p>
        `
        countryContainer.appendChild(div)
    }
}

sort.addEventListener("click", ()=>{
    document.querySelector('.special')?.classList.remove('special')
    sort.classList.add("special")
    console.log(countries.reverse())
    loadingCountries(countries)
})



btnStartingWord.addEventListener("click", ()=>{
    document.querySelector('.special')?.classList.remove('special')
    btnStartingWord.classList.add("special")
    search.addEventListener("keyup", (e) => {
        const search = e.target.value.toLowerCase();
        const filteredCountries = countries.filter(country => {
        const firstWord = country.toLowerCase().startsWith(search)
        console.log(firstWord)
    
        return firstWord
      })
      loadingCountries(filteredCountries)
    })
    
 
})

btnStartWithAny.addEventListener("click", ()=>{
    document.querySelector('.special')?.classList.remove('special')
    btnStartWithAny.classList.add("special")
    search.addEventListener("keyup", (e) => {
        const search = e.target.value.toLowerCase();
        const filteredCountries = countries.filter(country => {
            return country.toLowerCase().includes(search)
      })
      loadingCountries(filteredCountries)
    })
    

})

search.addEventListener("keyup", (e) => {
    const search = e.target.value.toLowerCase();
    const filteredCountries = countries.filter(country => {
        return country.toLowerCase().includes(search)
  })
  loadingCountries(filteredCountries)
  
  if(e.target.value.length != 0){
    afterInput.innerHTML = ""
    afterInput.innerHTML = `Countries with <p class="sub-input1">${  e.target.value}</p> are <p class="sub-input2">${filteredCountries.length}</p>`
    } else {
        afterInput.innerHTML = ""
    }
})


