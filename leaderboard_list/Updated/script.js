
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const country = document.getElementById("country");
    const playerScore = document.getElementById("player-score");
    const leaderboard = document.getElementById("leaderboard-container")
    const addPlayer = document.getElementById("add-player")
    const afterInput = document.getElementById("after-input");
    const inputContainer = document.getElementById("input-container")


    const getTime = () => {

    const time = new Date()
    const date = time.getDate()
    const year = time.getFullYear()
    const hour = time.getHours()
    const minute = time.getMinutes()
    const month = time.getMonth()
    const monthString = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]

    const currentMonth = monthString[month].slice(0, 3)

    const currentTime = `${currentMonth} ${date} ${year} ${
        hour < 10 ? "0" + hour : hour
    }:${minute < 10 ? "0" + minute : minute}`
    return currentTime
    }

    // Remember, when deleting an item you also have to delete the event listeners


    // Here you have to rethink the element structure and write it in the html string format 
    const createElement = (firstName, lastName, country, playerScore, date) => {
        const element = document.createElement("li")
        element.classList.add("player-info")

        element.innerHTML = `
            <div class="container-info">
                <span class="player-name">${firstName} ${lastName}</span>
                <span class="date">${date}</span>
            </div>

            <span class="country info1">${country}</span>
            <span class="score info2">${playerScore}</span>
            
            <div class="buttons">
                <button class="delete button">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"></path></svg>
                </button>
                <button class="add-score button">+5</button>
                <button class="take-score button">-5</button>
            </div>
        `
    }



    inputContainer.addEventListener("submit", (e) =>{
        e.preventDefault();

        const data = new FormData(e.target)
         const player = Object.fromEntries(data)

        console.log(player)

        // This part needs to be changed
        if(firstName.value.length && lastName.value.length && country.value.length && playerScore.value.length != 0){
            afterInput.innerText = "" 
        } else {
            afterInput.innerText = "enter something"
            return;
        }

        // first box with player info
       

        // const playerInfo = document.createElement('div')
        // playerInfo.classList.add("player-info")

        // const containerInfo = document.createElement('div')
        // containerInfo.classList.add("container-info")



        // const playerName = document.createElement("p")
        // playerName.classList.add("player-name")
        // playerName.innerText = `${firstName.value} ${lastName.value}`
        // containerInfo.appendChild(playerName)

        // const date = document.createElement("p")
        // date.classList.add("date")
        // date.innerText = `${getTime()}`
        // containerInfo.appendChild(date)




        // playerInfo.appendChild(containerInfo)

        // //

        // // the two pps without container
        // const countryInfo = document.createElement("p")
        // countryInfo.classList.add("country")
        // countryInfo.classList.add("info1")
        // countryInfo.innerText = `${country.value}`

        // let scoreVariable = parseInt(playerScore.value);
        // const score = document.createElement("p")
        // score.classList.add("score")
        // score.classList.add("info2")
        // score.innerText = `${scoreVariable}`

        // playerInfo.appendChild(countryInfo)
        // playerInfo.appendChild(score)
        // //

        // // the BUTTONS

        // const buttons = document.createElement("div")
        // buttons.classList.add("buttons")

        // const deleteButton = document.createElement("button")
        // deleteButton.classList.add("delete")
        // deleteButton.classList.add("button")
        // deleteButton.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"></path></svg>`
        // buttons.appendChild(deleteButton)

        // const addScoreButton = document.createElement("button")
        // addScoreButton.classList.add("add-score")
        // addScoreButton.classList.add("button")
        // addScoreButton.innerText = "+5"
        // buttons.appendChild(addScoreButton)

        // const minusScoreButton = document.createElement("button")
        // minusScoreButton.classList.add("take-score")
        // minusScoreButton.classList.add("button")
        // minusScoreButton.innerText = "-5"
        // buttons.appendChild(minusScoreButton)

        // playerInfo.appendChild(buttons)

        

       

        leaderboard.appendChild(playerInfo)

       

        deleteButton.addEventListener('click', () => {
            leaderboard.removeChild(playerInfo)
        })

        addScoreButton.addEventListener('click', () => {
            score.innerText = scoreVariable += 5
          
        })

        minusScoreButton.addEventListener('click', () => {
            score.innerText = scoreVariable -= 5
          
        })
        
    })

  





// ACEASTA ESTE PRIMA MEA INCERCARE DAR NU A MERS

// function addStuff() {
        
//     const divEl = document.createElement("div")
//     divEl.classList.add("player")
//     divEl.innerHTML = `
//     <div class="player-info">
//         <div class="container-info">
//             <p class="player-name">${firstName.value} ${lastName.value}</p>
//             <p class="date">${getTime()}</p>
//         </div>
//         <p class="country info1">${country.value}</p>
//         <p class="score info2" >${playerScore.value}</p>
//         <div class="buttons">
//             <button class="delete button" id="delete" ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"></path></svg></button>
//             <button class="add-score button" id="add-score" >-5</button>
//             <button class="take-score button" id="take-score" >+5</button>
//         </div>
//     </div>
//     `
//     leaderboard.appendChild(divEl)

//     const deleteButton = document.getElementById("delete")
//     const addScoreButton = document.getElementById("add-score")
//     const takeScoreButton = document.getElementById("take-score")
//     const player = document.getElementsByClassName("player")

//     deleteButton.addEventListener('click', () => {
//     leaderboard.removeChild(player)
//     })
    
// }  












