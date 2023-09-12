const form = document.getElementById("form")
const submit = document.getElementById("submit")
const allInputContainers = document.querySelectorAll("form div")

const inputData = [
  {
    pattern: /^[A-Z][a-z]{3,16}$/,
    errorMessage:
      "First name myst be alphanumeric and contain 3-16 characters and start with a capital letter",
  },

  {
    pattern: /^[A-Z][a-z]{3,16}$/,
    errorMessage:
      "Last name myst be alphanumeric and contain 3-16 characters and start with a capital letter",
  },

  {
    pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    errorMessage: "Email must be a valid address, e.g. example@example.com",
  },

  {
    pattern: /^[A-Za-z@_-]{6,20}$/,
    errorMessage:
      "Password must be alphanumeric (@, _ and - are also allowed) and between 6-20 characters",
  },

  {
    pattern: /^[0-9]+-[0-9]+-[0-9]{3,4}$/,
    errorMessage: "A valid telephone number (11 digits and 333-333-3334) ",
  },

  {
    pattern: /^[\w-. ]{8,50}$/,
    errorMessage:
      "Bio must contain only lowercase letters, underscore, hyphens and be 8 - 50 characters",
  },
]


 
const errorHandling = (input, value, textParent, textError, pattern ) => {

      if (pattern.test(value)) {
        input.classList.add("valid")
        input.classList.remove("invalid")
        textParent.innerText = ""
      } else {
        textParent.innerText = textError
        input.classList.remove("valid")
        input.classList.add("invalid")
        return
      }

}

const addFunctionalityToInputs = (list) => {
    
    for (const [index, container] of list.entries()) {
      const input = container.querySelector("input")
      const afterInput = container.querySelector("p")


        console.log("da")

      input.addEventListener("keyup", e =>{
        errorHandling(
          e.target,
          e.target.value,
          afterInput,
          inputData[index].errorMessage,
          inputData[index].pattern
        )
      })
    }
}

addFunctionalityToInputs(allInputContainers)


form.addEventListener("submit", (e) => {
    


    for(const [index, container] of allInputContainers.entries()){

        const input = container.querySelector("input")
        const afterInput = container.querySelector("p")

        console.log(afterInput)

        if(input.value.length <= 0 && !input.classList.contains("invalid")){
            afterInput.innerText = inputData[index].errorMessage,
            input.classList.add("invalid")
            e.preventDefault()
            
        } else {
            afterInput.innerText = ""
            input.classList.remove("invalid")
            input.classList.add("valid")
        }
    }
})
