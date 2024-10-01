// keyboard 배경 바꾸기(DOM객테(css) 제어)
function init() {
    var f = document.getElementById("f");
    f.onmouseover = over;
    f.onmouseout = out;
}

function over() {
    f.style.background="blue";
}
function out() {
    f.style.background="black";
}


// // navi 항목들에 마우스 올리면 >italic 으로 바뀜
// function init() {
//     let kb = document.getElementsByClassName("item")[0];
//     kb.onmouseover = over;
//     kb.onmouseout = out;
// }

// function over() { kb.innerText = ">키보드"; }
// function out() { kb.innerText = "키보드"; }