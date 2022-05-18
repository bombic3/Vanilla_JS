const h1 = document.querySelector("div.hello h1");

function handleTitleClick () {
  h1.style.color = "blue";
}
function handleMouseEnter () {
  h1.innerText = "Mouse is here!";
}
function handleMouseLeave () {
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize () {
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy () {
  alert("copier!");
}

function handleWindowOffline () {
  alert("SOS no WIFI");
}
function handleWindowOnline () {
  alert("WIFI is good~~");
}


h1.onclick = handleTitleClick;
h1.onmouseenter = handleMouseEnter;
h1.onmouseleave = handleMouseLeave;
// h1.addEventListener("click", handleTitleClick);
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);
// → 이 방법도 있지만 addEventListener 선호
// → removeEventListener 사용할 수 있기 때문

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);