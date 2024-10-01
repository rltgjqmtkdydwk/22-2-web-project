const keyboard1 = document.getElementById("kb1");
//kb1,2,3,4라는 변수에 document에서 getElementById해서 삽입한다. (""안에 있는 이름과 같은 id를 가진 애를 가져온다.)
// class를 따로 지정하고 querySelector로 가져왔다면 더 편했을 텐데....안가르쳐 줬껬지?

const over = ()=>{
    keyboard1.style.border="2px solid #FFFFFF";
}
const out = ()=>{
    keyboard1.style.border="2px solid #000000";
}
// function out() {
//     f.style.background="black";
// }

// function init(){} => arrow function 사용
const init = () => {
    //init이라는 함수 선언
    // f = document.getElementById("f"); 이거 1라인에 올림 init()이라는 함수는 동작하는 함수니까 선언은 위에서 따로 해주는게 좋을 것 같아서
    keyboard1.addEventListener("mouseover", over);
    keyboard1.addEventListener("mouseout", out);
    // f.onmouseover = over;
    // f.onmouseout = out;
    // 이벤트 리스터는 위에꺼 일것 같은데 
}

//kwyboard 1,2,3,4 도 적용해봐
init();