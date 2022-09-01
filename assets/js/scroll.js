// JavaScript enabling a button that scrolls to the top of a page 

var scrollToTopBtn = document.getElementById("btn-scroll-top");
var rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);