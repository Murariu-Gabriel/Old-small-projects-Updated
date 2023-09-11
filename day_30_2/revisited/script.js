const form = document.getElementById("form")

const inputFirstName = document.getElementById("input-first-name")
const inputLastName = document.getElementById("input-last-name")
const inputEmail = document.getElementById("input-email")
const inputPassword = document.getElementById("input-password")
const inputTelephone = document.getElementById("input-telephone")
const inputBio = document.getElementById("input-bio")

const afterInputFirstName = document.getElementById("first-name")
const afterInputLastName = document.getElementById("last-name")
const afterInputEmail = document.getElementById("email")
const afterInputPassword = document.getElementById("password")
const afterInputTelephone = document.getElementById("telephone")
const afterInputBio = document.getElementById("bio")

const submit = document.getElementById("submit")

const allInputContainers = document.querySelectorAll("form div")

console.log(allInputContainers)

// Analysing the situation

/*

- CSS

* The inputs should remain red until correct completion

- JS

* The event listeners should not contain the functionality - this must be brought outside them 

* The event listeners have a lot of repetition functions must be made

* 

 */





inputFirstName.addEventListener("keyup", (e) =>{
    const input = e.target.value
    const pattern = /^[A-Z][a-z]{3,16}$/
    if(pattern.test(input)){
        inputFirstName.classList.add("valid")
        inputFirstName.classList.remove("invalid")
        afterInputFirstName.innerText = ""
        
    } else {
        afterInputFirstName.innerText = "First name myst be alphanumeric and contain 3-16 characters and start with a capital letter"
        inputFirstName.classList.remove("valid")
        inputFirstName.classList.add("invalid")
        return
    }
})



inputLastName.addEventListener("keyup", (e) =>{
    const input = e.target.value
    const pattern = /^[A-Z][a-z]{3,16}$/
    if(pattern.test(input)){
        inputLastName.classList.add("valid")
        inputLastName.classList.remove("invalid")
        afterInputLastName.innerText = ""
    } else {
        afterInputLastName.innerText = "Lirst name myst be alphanumeric and contain 3-16 characters and start with a capital letter"
        inputLastName.classList.remove("valid")
        inputLastName.classList.add("invalid")
    }
})

inputEmail.addEventListener("keyup", (e) =>{
    const input = e.target.value
    const pattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(pattern.test(input)){
        inputEmail.classList.add("valid")
        inputEmail.classList.remove("invalid")
        afterInputEmail.innerText = ""
    } else {
        afterInputEmail.innerText = "Email must be a valid adress, e.g. example@example.com"
        inputEmail.classList.remove("valid")
        inputEmail.classList.add("invalid")
    }
})

inputPassword.addEventListener("keyup", (e) =>{
    const input = e.target.value
    const pattern = /^[A-Za-z@_-]{6,20}$/
    if(pattern.test(input)){
        inputPassword.classList.add("valid")
        inputPassword.classList.remove("invalid")
        afterInputPassword.innerText = ""
    } else {
        afterInputPassword.innerText = "Pasword must be alphanumeric (@, _ and - are also allowed) and between 6-20 characters"
        inputPassword.classList.remove("valid")
        inputPassword.classList.add("invalid")
    }
})

inputTelephone.addEventListener("keyup", (e) =>{
    const input = e.target.value
    const pattern = /^[0-9]+-[0-9]+-[0-9]{3,4}$/
    if(pattern.test(input)){
        inputTelephone.classList.add("valid")
        inputTelephone.classList.remove("invalid")
        afterInputTelephone.innerText = ""
    } else {
        afterInputTelephone.innerText = "A valid telephone number (11 digits and 333-333-3334)"
        inputTelephone.classList.remove("valid")
        inputTelephone.classList.add("invalid")
    }
})

inputBio.addEventListener("keyup", (e) =>{
    const input = e.target.value
    const pattern = /^[\w-. ]{8,50}$/
    if(pattern.test(input)){
        inputBio.classList.add("valid")
        inputBio.classList.remove("invalid")
        afterInputBio.innerText = ""
    } else {
        afterInputBio.innerText = "Bio must contain only lowercase letters, underscore, hyphens and be 8 - 50 characters"
        inputBio.classList.remove("valid")
        inputBio.classList.add("invalid")
    }
})


// form.addEventListener('keyup', (e) => {
//     if(inputFirstName.classList.contains("valid") & inputLastName.classList.contains("valid") 
//     & inputEmail.classList.contains("valid") & inputPassword.classList.contains("valid")
//     & inputTelephone.classList.contains("valid") & inputBio.classList.contains("valid")){
//         submit.classList.add("true")
//     } else {
//         submit.classList.remove("true")
//     }
// })


// Toata chesita asta probabil nu e necesara 
form.addEventListener("submit", (e) => {
    e.preventDefault()


    for(const container of allInputContainers){

        const input = container.querySelector("input")
        const afterInput = container.querySelector("p")

        console.log(afterInput)

        if(input.value.length <= 0 && !input.classList.contains("invalid")){
            afterInput.innerText = "This should contain something"
            input.classList.add("invalid")
            console.log("Da")
        } else {
            afterInput.innerText = ""
            input.classList.remove("invalid")
            input.classList.add("valid")
        }
    }

})






   // if(inputFirstName.value.length & inputLastName.value.length & inputEmail.value.length & inputPassword.value.length & inputTelephone.value.length & inputBio.value.length !== 0){
    //     afterInputFirstName.innerText = ""
    //     afterInputLastName.innerText = ""
    //     afterInputEmail.innerText = ""
    //     afterInputPassword.innerText = ""
    //     afterInputTelephone.innerText = ""
    //     afterInputBio.innerText = ""
    //    console.log("yay?")
    // } else {
    //     if(inputFirstName.value.length === 0){
    //         afterInputFirstName.innerText = "This should contain something"
    //         inputFirstName.classList.remove("valid")
    //     } else {
    //         afterInputFirstName.innerText = ""
    //         inputFirstName.classList.add("valid")
    //     }

    //     if(inputLastName.value.length === 0){
    //         afterInputLastName.innerText = "This should contain something"
    //     } else {
    //         afterInputLastName.innerText = ""
    //     }

    //     if(inputEmail.value.length === 0){
    //         afterInputEmail.innerText = "This should contain something"
    //     } else {
    //         afterInputEmail.innerText = ""
    //     }

    //     if(inputPassword.value.length === 0){
    //         afterInputPassword.innerText = "This should contain something"
    //     } else {
    //         afterInputPassword.innerText = ""
    //     }

    //     if(inputTelephone.value.length === 0){
    //         afterInputTelephone.innerText = "This should contain something"
    //     } else {
    //         afterInputTelephone.innerText = ""
    //     }

    //     if(inputBio.value.length === 0){
    //         afterInputBio.innerText = "This should contain something"
    //     } else {
    //         afterInputBio.innerText = ""
    //     }
    // }