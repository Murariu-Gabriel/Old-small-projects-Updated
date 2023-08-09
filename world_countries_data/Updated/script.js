/* pentru a afisa informatia adica cele 10 tari sau limbi voi face
tactica cu schimbarea innerHTML cand apas pe un buton si un loop va adauga li
in ul-ul facut de mine */

const countryCounter = document.querySelector("#country-count")
const info = document.getElementById('graph-title');
const buttonPopulation = document.getElementById("population");
const buttonLanguages = document.getElementById("languages");
const list = document.getElementById("list")
const coloredLine = document.getElementById("colored-line")


const fetchData = async() => {
        try {
                const response = await fetch("./countries_data.json")
                const data = await response.json()
             
                countryCounter.innerText = data.length
                
        } catch (error) {
                console.log(error)
        }

}

 fetchData()

const sortBy = (array, value) => {
        const sorted = array.toSorted((a, b) => {
          return b[value] - a[value]
        })
        
        return sorted
}


const listElement = (fistElement, secondElement) => {
  const listEl = document.createElement("li")
  listEl.classList.add("listEl")
  listEl.innerHTML = `${fistElement} ${secondElement}`
  //listEl.innerHTML = `${country} <p class="colored-line${count}" id="colored-line"></p> ${population}`
  return listEl
}

const addCertainNumberOfElements = (array, number, element, count) => {

        const sortedAndSlicedCountries = sortBy(array, element).slice(0, number)

        sortedAndSlicedCountries.forEach((country) => {
          const { [count]: fistElement , [element]: secondElement } = country

          list.appendChild(listElement(fistElement, secondElement))
        })
}


buttonPopulation.addEventListener("click", () => {
    info.innerText = "10 Most populated countries in the world"
    list.innerHTML = ""

    //wordlPop.innerHTML = `World <p class="colored-line"></p> 8,015,827,856`
    const wordlPop = document.createElement("li")
    wordlPop.innerHTML = `World 8,015,827,856`
    list.appendChild(wordlPop)


    addCertainNumberOfElements(countries_data, 10, "population", "name")
});


const mostSpokenLanguages = (array) => {
   const langs = array.map((element) => element.languages)

   const allLangs = langs.reduce((accumulator, currentValue) => {
     return accumulator.concat(currentValue)
   }, [])

   const allLangSet = new Set(allLangs)

   const counts = [...allLangSet].reduce((accumulator, language) => {
     const filteredLang = allLangs.filter((lng) => lng === language)
     return accumulator.concat({ lang: language, count: filteredLang.length })
   }, [])

   const sortedLangs = sortBy(counts, "count")

   return sortedLangs
}


buttonLanguages.addEventListener("click", () => {
    info.innerText = "10 Most spoken languages in the world"
    list.innerHTML = ""

    addCertainNumberOfElements(
      mostSpokenLanguages(countries_data),
      10,
      "lang",
      "count"
    )
});





// OLD MOST POPULATED COUNTRIES FUNCTION

// const mostPopulatedCountries = (array, number) => {
//   const countries = []

//   for (const el of array) {
//     countries.push({ country: el.name, population: el.population })
//   }

//   const sortedCountries = countries
//     .sort((a, b) => {
//       return b.population - a.population
//     })
//     .slice(0, number)

//   let count = 1
//   for (const { country, population } of sortedCountries) {
//     const listEl = document.createElement("li")
//     listEl.classList.add("listEl")
//     listEl.innerHTML = `${country} <p class="colored-line${count}" id="colored-line"></p> ${population}`
//     list.appendChild(listEl)
//     count++
//   }
// }