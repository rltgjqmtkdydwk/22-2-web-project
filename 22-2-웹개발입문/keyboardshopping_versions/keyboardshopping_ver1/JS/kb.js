// 흰색 테두리(이벤트 리스너 속성)
const keyboard1 = document.getElementById("kb1");
const over = ()=>{
    keyboard1.style.border="2px solid #FFFFFF";
}
const out = ()=>{
    keyboard1.style.border="2px solid #000000";
}
const init = () => {
    keyboard1.addEventListener("mouseover", over);
    keyboard1.addEventListener("mouseout", out);
}
init();


// const keyboard = document.querySelector("kb");

// const over = ()=>{
//     keyboard.style.border="2px solid #FFFFFF";
// }
// const out = ()=>{
//     keyboard.style.border="2px solid #000000";
// }

// const init = () => {
//     keyboard.addEventListener("mouseover", over);
//     keyboard.addEventListener("mouseout", out);
// }