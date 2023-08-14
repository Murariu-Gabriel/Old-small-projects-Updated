const technologies = document.querySelector(".technologies-animation span")
const attributes = document.querySelector(".attributes")

const technologiesString = ["html", "css", "javascript", "react", "git" ]
const attributesString = ["hard worker", "likes to workout", "ex artist", "runner"]


const generateWords = (array, parent, interval) => {

    let counter = 0

    setInterval(() => {
      console.log("da", counter)
      counter++

      parent.textContent = array[counter]

      if (counter === array.length - 1) {
        counter = 0
      }
    }, interval)
}


generateWords(technologiesString, technologies, 1000)
generateWords(attributesString, attributes, 1000)

















