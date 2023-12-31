const realTimeInfo = document.getElementById("real-time-country-info")
const input = document.getElementById('input')
const nameBtn = document.getElementById("name")
const capitalBtn = document.getElementById("capital")
const sortPopulation = document.getElementById("sort-population")
const afterInputResult = document.getElementById("after-input-result")
const statsGraphic = document.getElementById("stats-graphic")

const populationBtn = document.getElementById("population")
const languagesBtn = document.getElementById("languages")
const afterBtnPressing = document.getElementById("after-button-pressing")


const list = document.getElementById("list")
const secondList = document.querySelector("#secondList")
const bars = document.getElementById("bars")


// This closure is used for storing and changing the current items generated for search to be used

const useState = (initialValue) => {
  let state = initialValue

  const getState = () => {
    return state
  }

  const setState = (newState) => {
    state = newState
  }

  return [getState, setState]
}


const sortBy = (array, value) => {
  const sorted = array.toSorted((a, b) => {
    return b[value] - a[value]
  })

  return sorted
}

// here list element needs to also show world population and languages

const listElement = (element, listClass) => {
  const listEl = document.createElement("li")

  const ifAddedClass = listClass ? listClass : "listEl"
  const noContent = listClass ? "" : element

  listEl.classList.add(ifAddedClass)
  listEl.innerHTML = `<span>${noContent}</span>`

  const procent = (element / 8015827856) * 100
  const finalProcent = procent.toString().slice(0, 4)
  const stringNum = element.toString()

  const ifNumberToHigh =
    stringNum.length > 2 ? `${finalProcent}%` : `${element}%`

  listEl.style.width = listClass ? ifNumberToHigh : ""

  return listEl
}

const deleteContentFromLists = () => {
  list.innerHTML = ""
  secondList.innerHTML = ""
  bars.innerHTML = ""
}

const addCertainNumberOfElements = (array, number, element, count) => {

    deleteContentFromLists()

  const sortedAndSlicedCountries = sortBy(array, element).slice(0, number)

  if(element === "population"){
    list.appendChild(listElement("World"))
    secondList.appendChild(listElement(8015827856))
    bars.appendChild(listElement(8015827856, "bar"))
  }

  sortedAndSlicedCountries.forEach((country) => {
    const { [count]: fistElement, [element]: secondElement } = country

    list.appendChild(listElement(fistElement))
    secondList.appendChild(listElement(secondElement))
    bars.appendChild(listElement(secondElement, "bar"))
  })
}

const mostSpokenLanguages = (array) => {
  const langs = array.map((element) => element.languages)

  const allLangs = langs.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue)
  }, [])

  const allLangSet = new Set(allLangs)

  const counts = [...allLangSet].reduce((accumulator, language) => {
    const filteredLang = allLangs.filter((lng) => lng === language)
    return accumulator.concat({ count: filteredLang.length, lang: language })
  }, [])

  const sortedLangs = sortBy(counts, "count")

  return sortedLangs
}




const [countries, setCountries] = useState(countries_data)


const checkForLanguages = (search) => {

    const check = element.some(el => el.toLowerCase().includes(search))

    return check

}

input.addEventListener('keyup', (e) => {
    const search = e.target.value.toLowerCase();


    const filteredCountries = countries_data.filter(
      (country) => 
  
        country.name.toLowerCase().includes(search) ||
        country.capital?.toLowerCase().includes(search) || 
        country.languages.some(el => el.toLowerCase().includes(search))
        
    )

    console.log(filteredCountries)

    setCountries(filteredCountries)
   loadingCountries(filteredCountries)

   addCertainNumberOfElements(countries(), 10, "population", "name")

   if(e.target.value.length != 0){
    realTimeInfo.innerHTML = ""
    realTimeInfo.innerHTML = `<p class="sub-input2">${filteredCountries.length} </p>   Countries satisfied with the search criteria`
   } else {
    realTimeInfo.innerHTML = ""
    setCountries(countries_data)
   }

    
})


nameBtn.addEventListener("click", ()=>{
    countries().sort((a, b) => {
      return (b.name > a.name) ? 1 : -1
    })
    loadingCountries(countries())
})     

capitalBtn.addEventListener("click", ()=>{
    const filteredStuff = countries().filter(country => {
        if(country.capital !== undefined){
            return country.capital.toUpperCase()
        }
    })
    filteredStuff.sort((a, b) => {
        return (b.capital > a.capital) ? 1 : -1
    })
    loadingCountries(filteredStuff)
})

sortPopulation.addEventListener("click", ()=>{

    countries().sort((a, b) => {
        return b.population - a.population
    })
    loadingCountries(countries())
}) 




populationBtn.addEventListener("click", () => {
    deleteContentFromLists()

    addCertainNumberOfElements(countries(), 10, "population", "name")
    afterBtnPressing.innerHTML = "Top 10 most populated countries"
})



languagesBtn.addEventListener("click", () => {
    deleteContentFromLists()

    addCertainNumberOfElements(
      mostSpokenLanguages(countries()),
      10,
      "count",
      "lang"
    )
    afterBtnPressing.innerHTML = "Top 10 most spoken languages"
})


function loadingCountries(array) {
    afterInputResult.innerHTML = ""

    for(country of array){
        const div = document.createElement('div')
        div.classList.add("country")
        div.innerHTML = `
        <img class="country-img" src="${country.flag}">
        <p class="country-name" id="country-name">${country.name}</p>
        <p class="country-capital" id="country-capital">Capital: ${country.capital}</p>
        <p class="language" id="language">Language: ${country.languages.join(", ")}</p>
        <p class="country-population" id="country-population">Population: ${country.population}</p>
        `
        afterInputResult.appendChild(div)
    }
}



addCertainNumberOfElements(countries_data, 10, "population", "name")
loadingCountries(countries_data)

































// for(const el of countries_data){
//     if(el.capital !== undefined){
//         console.log(el.capital.toUpperCase())
//     }
// }

// nameBtn.addEventListener('click', () => {
//     input.addEventListener('keyup', (e) => {
//         const search = e.target.value.toUpperCase();
    
//         const filteredCapitals = countries_data.filter(country => {
//             if(country.capital !== undefined) {
//                 return country.capital.toUpperCase().includes(search)
//             }
//         })
//     loadingCountries(filteredCapitals)
//     })
// })


// capitalBtn.addEventListener("click", () => {
//     const search = input.value.toUpperCase()

//     const filteredCapitals = countries_data.filter(country => {
//         if(country.capital !== undefined){
//            return country.capital.toUpperCase().startsWith(search)
//         }
//     })
//     loadingCountries(filteredCapitals)
// })       




