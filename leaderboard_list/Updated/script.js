const leaderboard = document.getElementById("leaderboard-container")
const messageContainer = document.getElementById("message-container");
const inputContainer = document.getElementById("input-container")

const getListItems = () => {
  const storedProducts = localStorage.getItem("list-items")
  const parsedProducts = JSON.parse(storedProducts)
  const products = parsedProducts ? parsedProducts : {}

  return products
}



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


const getAllElements = (parent, type) => {
    const elements = parent.querySelectorAll(type)

    return elements
}

const deleteEvents = (children) => {
  for (const child of children) {
    const clone = child.cloneNode(true)
    child.parentNode.replaceChild(clone, child)
  }
}


const deleteElement = (e, elementsWithEvents) => {
    const parent = e.target.parentNode.parentNode

    deleteEvents(elementsWithEvents)
    deleteItemFromList(parent.id)
    parent.remove()
}



const changeScore = (e, scoreCount, operation) => {

    const parent = e.parentNode.parentNode
    const scoreContainer = parent.querySelector(".score")
    const score = parseInt(scoreContainer.innerText) 

    
    const operators = {
        "+" : (a, b) => a + b,
        "-" : (a, b) => a - b
    }

    const func = operators[operation]
    const currentScore = func(score, scoreCount)

    if(currentScore <= 0){
      scoreContainer.innerText = 0
      updateScore(parent.id, 0)
    } else {
       scoreContainer.innerText = currentScore
       updateScore(parent.id, currentScore)
    }

    sortNodes(leaderboard, leaderboard.children)
    
}



const createElement = (firstName, lastName, country, playerScore, date, id) => {
    const element = document.createElement("li")
    element.classList.add("player-info")
    element.setAttribute("id", id)

    element.innerHTML = `
        <div class="container-info">
            <span class="player-name"> <span id="first-name">${firstName}</span> ${lastName}</span>
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

    const buttons = getAllElements(element, "button")

    console.log(buttons)

    buttons[0].addEventListener("click", e => deleteElement(e, buttons))
    buttons[1].addEventListener("click", e => changeScore(e.target, 5, "+"))
    buttons[2].addEventListener("click", e => changeScore(e.target, 5, "-"))

    return element
}



inputContainer.addEventListener("submit", (e) =>{
    e.preventDefault();

    const data = new FormData(e.currentTarget)
    const player = Object.fromEntries(data)

    const {first_name, last_name, country, player_score} = player

    console.log(player)


    if(first_name.length && last_name.length && country.length && player_score.length != 0){

        const time = getTime()

        const id = crypto.randomUUID()

        messageContainer.innerText = "" 
        leaderboard.appendChild(createElement(first_name, last_name, country, player_score, time, id))

        updateListItems(first_name.toLowerCase(), [
          last_name,
          country,
          player_score,
          time,
          id
        ])

        sortNodes(leaderboard, leaderboard.children)
    } else {

        messageContainer.innerText = "All fields are required"

    }  

})


const getScore = (parent) => {
    const score = parseInt(parent.querySelector(".score").innerText) 
    return score
}


const sortNodes = (parent, nodes) => {
    
    const children = Array.from(nodes)
    
    // console.log(children)
    
    const sortedChildren = children.toSorted((a, b) => getScore(b) - getScore(a))
    
    // console.log(sortedChildren)
    parent.innerHTML = ""

    sortedChildren.forEach((el) => parent.appendChild(el)) // 

}


// Functions for updating local storage

const updateListItems = (item, value) => {
  const listItems = getListItems()

  const [last_name, country, player_score, time, id] = value

    listItems[id] = {
      name: item,
      lastName: last_name,
      country: country,
      score: player_score,
      date: time,
      id: id
    }
 
    
  const stringified = JSON.stringify(listItems)
  localStorage.setItem("list-items", stringified)
}

const deleteItemFromList = (item) => {
    const listItems = getListItems()

    delete listItems[item]

    const stringified = JSON.stringify(listItems)
    localStorage.setItem("list-items", stringified)
}

const updateScore = (item, score) => {
    const listItems = getListItems()

    console.log(score)

   listItems[item].score = score

   console.log(listItems[item].score)

    const stringified = JSON.stringify(listItems)
    localStorage.setItem("list-items", stringified)
}


const loadLeaderboard = () => {
  const leaderboardItems = getListItems()

  for (const item in leaderboardItems) {
    const { name, lastName, country, score, date, id } = leaderboardItems[item]
   
    const element = createElement(name, lastName, country, score, date, id)

    leaderboard.appendChild(element)
  }

  sortNodes(leaderboard, leaderboard.children)
}

loadLeaderboard()
// localStorage.clear()




