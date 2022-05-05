const count = document.getElementById("count");
const add = document.querySelector(".add");
const reset = document.querySelector(".reset");
const subtract = document.querySelector(".subtract");


add.addEventListener("click", () => {
    count.innerHTML++;
    console.log(count.innerHTML)
})
reset.addEventListener("click" , () => {
    count.innerHTML = 0;
})
subtract.addEventListener("click", ()=>{
    count.innerHTML--;
})