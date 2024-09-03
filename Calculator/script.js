
const addBtn = document.querySelector("#add");
addBtn.addEventListener("click", (e) => {
    console.log(e.target.value)
})

const subtractBtn = document.querySelector("#subtract");
subtractBtn.addEventListener("click", (e) => {
    console.log(e.target.value);
});

const multiplyBtn = document.querySelector("#multiply");
multiplyBtn.addEventListener("click", (e) => {
    console.log(e.target.value);
});

const divideBtn = document.querySelector("#divide");
divideBtn.addEventListener("click", (e) => {
    console.log(e.target.value);
});