

const technologies = document.querySelector(".technologies")
const attributes = document.querySelector(".attributes")

const technologiesString = ["html", "css", "javascript", "react", "git" ]
const colors = [
  "rgb(255, 136, 0)",
  "rgb(0, 119, 255)",
  "rgb(255, 225, 0)",
  "rgb(69, 19, 188)",
  "rgb(32, 101, 175)",
]
const attributesString = ["Not afraid of Hard Work", "Likes to workout", "Ex artist", "Runner"]


const generateWords = (array, parent, interval) => {

    let counter = 0

    setInterval(() => {
      console.log("da", counter)
      
      parent.textContent = array[counter]
        console.log(parent.className)
      if (parent.className === "technologies") {
        console.log("asdasd")
        parent.style.color = colors[counter]
      }
      
      if (counter === array.length -1 ) {
          counter = 0
        } else {
            counter++
        }
    }, interval)
}


generateWords(technologiesString, technologies, 1000)
generateWords(attributesString, attributes, 1000)
