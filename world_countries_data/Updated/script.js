const countryCounter = document.querySelector("#country-count")
const info = document.getElementById('graph-title');
const buttonPopulation = document.getElementById("population");
const buttonLanguages = document.getElementById("languages");
const list = document.getElementById("list")
const secondList = document.querySelector("#secondList")
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


const listElement = (element) => {
  const listEl = document.createElement("li")
  listEl.classList.add("listEl")
  listEl.innerHTML = `<span>${element}</span>`
  //listEl.innerHTML = `${country} <p class="colored-line${count}" id="colored-line"></p> ${population}`
  return listEl
}

const addCertainNumberOfElements = (array, number, element, count) => {

  const sortedAndSlicedCountries = sortBy(array, element).slice(0, number)

  sortedAndSlicedCountries.forEach((country) => {
    const { [count]: fistElement , [element]: secondElement } = country

    list.appendChild(listElement(fistElement))
    secondList.appendChild(listElement(secondElement))
  })
}


buttonPopulation.addEventListener("click", () => {
  info.innerText = "10 Most populated countries in the world"
  list.innerHTML = ""
  secondList.innerHTML = ""

  //wordlPop.innerHTML = `World <p class="colored-line"></p> 8,015,827,856`
  const wordlPop = document.createElement("li")
  wordlPop.innerHTML = `World`
  list.appendChild(listElement("World"))
  secondList.appendChild(listElement("8,015,827,856"))


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
  secondList.innerHTML = ""

  addCertainNumberOfElements(
    mostSpokenLanguages(countries_data),
    10,
    "lang",
    "count"
  )
});


