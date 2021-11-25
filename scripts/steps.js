const myFunc = function() {
    console.log('Hello from steps.js!')
}

myFunc()

let yourCollega = document.querySelector("#your-college");
let collegeInput = document.querySelector("#search-input_college");

function newFunction() {
    if (collegeInput.value.length === '') {
        console.log('1')
        yourCollega.style.display = "none";
        console.log('2')
    } else if (!(collegeInput.value === '')) {
        collegeInput.addEventListener('keyup', () => {
            yourCollega.style.display = "block";
        });
    }
}

newFunction();