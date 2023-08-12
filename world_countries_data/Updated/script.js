const countryCounter = document.querySelector("#country-count")
const info = document.getElementById('graph-title');
const buttonPopulation = document.getElementById("population");
const buttonLanguages = document.getElementById("languages");
const list = document.getElementById("list")
const secondList = document.querySelector("#secondList")
const coloredLine = document.getElementById("colored-line")
const bars = document.getElementById("bars")


// A fetch for practicing and to display total countries

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


// Shared functionality for the buttons

const sortBy = (array, value) => {
  const sorted = array.toSorted((a, b) => {
    return b[value] - a[value]
  })
  
  return sorted
}

const listElement = (element, listClass) => {
  const listEl = document.createElement("li")
  
  const ifAddedClass = listClass ? listClass : "listEl"
  const noContent = listClass ? "" : element

  listEl.classList.add(ifAddedClass)
  listEl.innerHTML = `<span>${noContent}</span>`
              
  const procent = (element / 8015827856) * 100
  const finalProcent = procent.toString().slice(0,4)
  const stringNum = element.toString()


  const ifNumberToHigh = stringNum.length > 2 ? `${finalProcent}%` : `${element}%`

  listEl.style.width = listClass ? ifNumberToHigh : "0%"

  return listEl
}

const addCertainNumberOfElements = (array, number, element, count) => {

  const sortedAndSlicedCountries = sortBy(array, element).slice(0, number)

  sortedAndSlicedCountries.forEach((country) => {
    const { [count]: fistElement , [element]: secondElement } = country

    list.appendChild(listElement(fistElement))
    secondList.appendChild(listElement(secondElement))
    bars.appendChild(listElement(secondElement, "bar"))
  })
}


const deleteContentFromLists = () => {
   list.innerHTML = ""
   secondList.innerHTML = ""
   bars.innerHTML = ""
}


buttonPopulation.addEventListener("click", () => {
  info.innerText = "10 Most populated countries in the world"

  deleteContentFromLists()

  addCertainNumberOfElements(countries_data, 10, "population", "name")
});




// Functionality for the languages button

const mostSpokenLanguages = (array) => {
  const langs = array.map((element) => element.languages)

  const allLangs = langs.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue)
  }, [])

  const allLangSet = new Set(allLangs)

  const counts = [...allLangSet].reduce((accumulator, language) => {
    const filteredLang = allLangs.filter((lng) => lng === language)
    return accumulator.concat({ count: filteredLang.length, lang: language})
  }, [])

  const sortedLangs = sortBy(counts, "count")

  return sortedLangs
}


buttonLanguages.addEventListener("click", () => {
  info.innerText = "10 Most spoken languages in the world"

  deleteContentFromLists()

  addCertainNumberOfElements(mostSpokenLanguages(countries_data), 10, "count", "lang" )
});


