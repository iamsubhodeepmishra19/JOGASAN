let menu = document.querySelector(".menu");
let navCollapsed = document.querySelector(".navbar-collapse");
let body = document.body;

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    menu.classList.remove("show");
    navCollapsed.style.right = "";
    body.style.overflow = "";
    body.style.height = "";
  }
});

let open = false;
menu.addEventListener("click", () => {
  menu.classList.toggle("show");
  if (open) {
    navCollapsed.style.right = "-100%";
    body.style.overflow = "";
    body.style.height = "";
    open = false;
  } else {
    navCollapsed.style.right = "0";
    body.style.overflow = "hidden";
    body.style.height = "height: 100vh";
    open = true;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".splide__arrow").forEach((btn) => {
    btn.classList.add("!bg-[#9b315d]", "!rounded", "!opacity-100");
  });
  document.querySelectorAll(".splide__arrow svg").forEach((svg) => {
    svg.classList.add("!fill-white");
  });
  document.querySelectorAll(".splide__pagination").forEach((el) => {
    el.classList.add("!hidden");
  });
});

// *splider code
let splide = new Splide("#basic-slider");
splide.mount();

// *aos js
AOS.init();
