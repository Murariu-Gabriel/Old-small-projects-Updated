const realTimeInfo = document.getElementById("real-time-country-info")
const input = document.getElementById('input')
const nameBtn = document.getElementById("name")
const capitalBtn = document.getElementById("capital")
const population1Btn = document.getElementById("population1")
const afterInputResult = document.getElementById("after-input-result")
const statsGraphic = document.getElementById("stats-graphic")

const populationBtn = document.getElementById("population")
const languagesBtn = document.getElementById("languages")
const afterBtnPressing = document.getElementById("after-button-pressing")


/*
URMATORUL TAU PAS IN ACEST PROIECT ESTE SA SETEZI PASII PE CARE TREBUIE SA II FACI
ADICA SA VEZI CE FEATURES TREBUIE SA IMPLEMETEZI SA SA FACI O MICA LISTA CU CEEA CE AR
TREBUII ADAUGAT PAS CU PAS DE SUS IN JOS DEOARECE ESTI FOARTE BULVERSAT SI NU STI CE TREBUIE
SA FACI PT CA NU TI-AI SETAT OBIECTIVELE NECESATE PENTRU ACEST PROIECT

*/


input.addEventListener('keyup', (e) => {
    const search = e.target.value.toUpperCase();

    const filteredCountries = countries_data.filter(country => {
        return country.name.toUpperCase().includes(search) 
    })
   loadingCountries(filteredCountries)
   loadGraph(popSorter(filteredCountries))


   if(e.target.value.length != 0){
    realTimeInfo.innerHTML = ""
    realTimeInfo.innerHTML = `<p class="sub-input2">${filteredCountries.length}</p> Countries satisfied with the search criteria`
   } else {
    realTimeInfo.innerHTML = ""
   }

    nameBtn.addEventListener("click", ()=>{
        const filteredStuff = countries_data.filter(country => {
            return country.name.toUpperCase().includes(search) 
        })

        filteredStuff.sort((a, b) => {
            return (b.name > a.name) ? 1 : -1
        })
        loadingCountries(filteredStuff)
    })   

    capitalBtn.addEventListener("click", ()=>{
        const filteredStuff = filteredCountries.filter(country => {
            if(country.capital !== undefined){
                return country.capital.toUpperCase()
            }
        })
        
        console.log(filteredStuff)
        filteredStuff.sort((a, b) => {
            return (b.capital > a.capital) ? 1 : -1
        })
        
        loadingCountries(filteredStuff)
    }) 

    population1Btn.addEventListener("click", ()=>{

        filteredCountries.sort((a, b) => {
            return b.population - a.population
        })
        loadingCountries(filteredCountries)
    }) 

    populationBtn.addEventListener("click", () => {
        loadGraph(popSorter(filteredCountries))
    })
    
    languagesBtn.addEventListener("click", () => {
        
        function mostSpokenLanguage(array) {
            const languages = []
            for(const el of array){
                languages.push(el.languages)
            }
    
            const allLanguages = []
            for(const lang of languages){
                for(const lang2 of lang){
                    allLanguages.push(lang2)
                }
            }
    
           const allLanguagesSet = new Set(allLanguages)
           const counts = []
    
           for(const l of allLanguagesSet){
                const filteredLang = allLanguages.filter(lng => lng === l)
                counts.push({lang: l, count: filteredLang.length})
           }
    
           const sortedLangs = counts.sort((a, b) => {
                return b.count - a.count
           }).slice(0, 10)
    
           return sortedLangs
        }
    
        function loadLangs(array){
            afterBtnPressing.innerHTML = "Most spoken languages"
            statsGraphic.innerHTML = ""
    
            for(const {lang, count} of array){
                const div = document.createElement("div")
                div.classList.add("lang-info")
                div.innerHTML = `<p class="lang-display">${lang}</p> 
                <p class="filling"></p> <p class="lang-number">${count}</p>`
    
                statsGraphic.appendChild(div)
            }
        }
    
        loadLangs(mostSpokenLanguage(filteredCountries))
    })
    
})

nameBtn.addEventListener("click", ()=>{
    countries_data.sort((a, b) => {
      return (b.name > a.name) ? 1 : -1
    })
    loadingCountries(countries_data)
})     

capitalBtn.addEventListener("click", ()=>{
    const filteredStuff = countries_data.filter(country => {
        if(country.capital !== undefined){
            return country.capital.toUpperCase()
        }
    })
    filteredStuff.sort((a, b) => {
        return (b.capital > a.capital) ? 1 : -1
    })
    loadingCountries(filteredStuff)
})

population1Btn.addEventListener("click", ()=>{

    countries_data.sort((a, b) => {
        return b.population - a.population
    })
    loadingCountries(countries_data)
}) 

populationBtn.addEventListener("click", () => {
    loadGraph(popSorter(countries_data))
})

languagesBtn.addEventListener("click", () => {
    
    function mostSpokenLanguage(array) {
        const languages = []
        for(const el of array){
            languages.push(el.languages)
        }

        const allLanguages = []
        for(const lang of languages){
            for(const lang2 of lang){
                allLanguages.push(lang2)
            }
        }

       const allLanguagesSet = new Set(allLanguages)
       const counts = []

       for(const l of allLanguagesSet){
            const filteredLang = allLanguages.filter(lng => lng === l)
            counts.push({lang: l, count: filteredLang.length})
       }

       const sortedLangs = counts.sort((a, b) => {
            return b.count - a.count
       }).slice(0, 10)

       return sortedLangs
    }

    function loadLangs(array){
        afterBtnPressing.innerHTML = "Most spoken languages"
        statsGraphic.innerHTML = ""

        for(const {lang, count} of array){
            const div = document.createElement("div")
            div.classList.add("lang-info")
            div.innerHTML = `<p class="lang-display">${lang}</p> 
            <p class="filling"></p> <p class="lang-number">${count}</p>`

            statsGraphic.appendChild(div)
        }
    }

    loadLangs(mostSpokenLanguage(countries_data))
})

// const sortedLangs = counts.sort((a ,b) => {
//     return b.count - a.count
// }).slice(0, number)

// let nums = 1;
// for(const {lang, count} of sortedLangs){
// const listEl = document.createElement("li")
// listEl.classList.add("listEl")
// listEl.innerHTML = `${lang} <p class="colored-line${nums} id="colored-line""></p> ${count}`
// list.appendChild(listEl)
// nums++
// }

function loadingCountries(array) {
    afterInputResult.innerHTML = ""

    for(country of array){
        const div = document.createElement('div')
        div.classList.add("country")
        div.innerHTML = `
        <img class="country-img" src="${country.flag}">
                    <p class="country-name" id="country-name">${country.name}</p>
                    <p class="country-capital" id="country-capital">Capital: ${country.capital}</p>
                    <p class="language" id="language">Language: ${country.languages}</p>
                    <p class="country-population" id="country-population">Population: ${country.population}</p>
        `
        afterInputResult.appendChild(div)
    }
}

{/* <div class="country-info"><p class="country-display">Country</p> 
<p class="filling"></p> <p class="population-number">123123123123123</p></div> */}
function loadGraph(array){
    afterBtnPressing.innerHTML = "Most Populated countries"
    statsGraphic.innerHTML = ""

    for(const country of array){
        const div = document.createElement("div")
        div.classList.add("country-info")
        div.innerHTML = `<p class="country-display">${country.name}</p> 
        <p class="filling"></p> <p class="population-number">${country.population}</p>`

        statsGraphic.appendChild(div)
    }
}

function popSorter(array){
    const copy = [...array]
    const sortedCopy = copy.sort((a, b) => {
        return b.population - a.population
     }).slice(0,10)
     return sortedCopy
}

loadingCountries(countries_data)
loadGraph(popSorter(countries_data))

































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




