let hamburger = document.querySelector(".fa-bars");
console.log(hamburger);

let chiusura = document.querySelector(".fa-times");
console.log(chiusura);

hamburger.addEventListener("click", function () {
    let hamburger = document.querySelector("div.hamburger-menu");
    hamburger.classList.add("active");
});

chiusura.addEventListener("click", function () {
    let hamburger = document.querySelector("div.hamburger-menu");
    hamburger.classList.remove("active");
});