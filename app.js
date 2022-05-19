const h1 = document.querySelector("div.hello h1");

function handleTitleClick () {
  // const clickedClass = "clicked";
  h1.classList.toggle("clicked");

  // if (h1.classList.contains(clickedClass)) {
  //   h1.classList.remove(clickedClass);
  // } else {
  //   h1.classList.add(clickedClass);
  // }

}

h1.addEventListener("click", handleTitleClick);

/*
const h1 = document.querySelector("div.hello h1");

function handleTitleClick () {
  const clickedClass = "clicked";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
  // className 은 getter이면서 setter 이다 ! 기존 class 다 지워버림
  // classList.contains(); 사용으로 기존에 있던 class를 지우지 않고 클래스 추가 가능
  // classList.remove();
  // classList.add(); 
  // -> css 수정이 있더라도 const 변수 값만 바꿔주면 되고 내용은 안 바꿔줘도 됨
}

h1.addEventListener("click", handleTitleClick);
*/