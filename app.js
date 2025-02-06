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

