// keyboard 배경 바꾸기(DOM객테(css) 제어)
var f;
function init() {
    f = document.getElementById("f");
    f.onmouseover = over;
    f.onmouseout = out;
}

function over() {
    f.style.background="blue";
}
function out() {
    f.style.background="black";
}
