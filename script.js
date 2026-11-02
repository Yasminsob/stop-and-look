let timer;
const hiddenText = document.querySelectorAll(".reveal");

function walking() {
  hiddenText.forEach(function (el) {
    el.classList.remove("visible");
  });
  clearTimeout(timer);
  timer = setTimeout(function () {
    hiddenText.forEach(function (el) {
      el.classList.add("visible");
    });
  }, 3000);
}

window.addEventListener("scroll", walking);
window.addEventListener("mousemove", walking);
walking();