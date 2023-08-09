/* pentru a afisa informatia adica cele 10 tari sau limbi voi face
tactica cu schimbarea innerHTML cand apas pe un buton si un loop va adauga li
in ul-ul facut de mine */

const titluGrafic = document.getElementById('graph-title');
const butonP = document.getElementById("population");
const butonL = document.getElementById("languages");
const list = document.getElementById("list")
const coloredLine = document.getElementById("colored-line")



butonP.addEventListener("click", () => {
    titluGrafic.innerText = "10 Most populated countries in the world"
    list.innerHTML = ""

    const wordlPop = document.createElement("li")
    wordlPop.innerHTML = `World <p class="colored-line"></p> 8,015,827,856`
    list.appendChild(wordlPop)

    const mostPopulatedCountries = (array, number) => {
        const countries = [];
        for(const el of array) {
                countries.push({country: el.name, population: el.population})
        }
        const sortedCountries = countries.sort((a ,b) => {
                return b.population - a.population
        }).slice(0, number)
        let count = 1
        for(const {country, population} of sortedCountries){
            const listEl = document.createElement("li")
            listEl.classList.add("listEl")
            listEl.innerHTML = `${country} <p class="colored-line${count}" id="colored-line"></p> ${population}`
            list.appendChild(listEl)
            count++
        }
      
    }
    
    mostPopulatedCountries(countries_data, 10)
});

butonL.addEventListener("click", () => {
    titluGrafic.innerText = "10 Most spoken languages in the world"
    list.innerHTML = ""
    const mostSpokenlanguage = (array, number) => {
        const langs = []
        for(const el of array) {
                langs.push(el.languages)
        }
    
        const allLangs = []
        for(const el of langs){
                for(const el2 of el){
                        allLangs.push(el2)
                }
        }
    
        const allLangSet = new Set(allLangs)
        const counts = []
        
    
        for (const l of allLangSet){
                const filteredlang = allLangs.filter((lng) => lng === l)
                counts.push({lang: l, count: filteredlang.length})
        }
    
        const sortedLangs = counts.sort((a ,b) => {
                return b.count - a.count
        }).slice(0, number)
    
            let nums = 1;
        for(const {lang, count} of sortedLangs){
           const listEl = document.createElement("li")
           listEl.classList.add("listEl")
           listEl.innerHTML = `${lang} <p class="colored-line${nums} id="colored-line""></p> ${count}`
           list.appendChild(listEl)
           nums++
        }
    }
    
    mostSpokenlanguage(countries_data, 10)
});



