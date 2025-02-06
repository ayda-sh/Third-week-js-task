// 1 Array Filter:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenNumbers(numbers) {
    const filterEvenNumbers = numbers.filter((number) => {
        return number % 2 === 0;
    });
    return filterEvenNumbers;
}

console.log(evenNumbers(numbers)); 


// 6 Change the background color 

const changeBg = document.querySelector("body")
const btn = document.querySelector("#changebgcolor-btn")


btn.addEventListener('click', function() {
    changeBg.classList.add('bg-color'); 
});


// 8 generates a card element

const formEl = document.querySelector("form")
const cardContainer = document.querySelector(".card-container")


formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleInput = formEl.querySelector("input")
    const titleInputValue = titleInput.value
    const contentInput = formEl.querySelector("textarea")
    const contentInputValue = contentInput.value

    createCard(titleInputValue, contentInputValue)
})

function createCard(title, content) {
    const cardBox = document.createElement("div")
    cardBox.classList.add("box")

    const h3El = document.createElement("h3")
    h3El.classList.add("title")

    const contentEl = document.createElement("p")

    const deleteBtnEL = document.createElement("button")



    h3El.textContent = title
    contentEl.textContent = content
    deleteBtnEL.textContent = "Delete"

    cardContainer.appendChild(cardBox)
    cardBox.append(h3El, contentEl, deleteBtnEL)


    deleteBtnEL.addEventListener("click", (e) => {
        const card = e.target.parentElement
        card.remove()
    })
    
}

// 12 

async function getUserData() {
    const userContainer = document.querySelector(".users-container")
    try {
        const url = "https://jsonplaceholder.typicode.com/users"
        const response = await fetch(url, {
            method: "GET",

        });

        const data = await response.json();

        data.forEach((users) => {

            const cardBoxEl = document.createElement("div")
            const userNameEl = document.createElement("div")
            const userEmailEl = document.createElement("div")
            const userH = document.createElement("h5")
            const userP = document.createElement("p")


            cardBoxEl.classList.add("card")
            userNameEl.classList.add("user-name")
            userEmailEl.classList.add("user-email")
            userH.textContent = users.name
            userP.textContent = users.email

            console.log(userH, userP)
            userContainer.appendChild(cardBoxEl)
            cardBoxEl.append(userNameEl, userEmailEl)
            userNameEl.appendChild(userH)
            userEmailEl.appendChild(userP)
        })

    }
    catch (error) {
        console.log(error)
    }
}

getUserData()