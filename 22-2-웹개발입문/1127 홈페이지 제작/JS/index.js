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
