// Modal menu
let menu = document.querySelector(".dropdown");
let open = document.querySelector(".header__dropdown-burger");
let close = document.querySelector(".dropdown__arrow");

open.addEventListener("click", function() {
    // open menu
    menu.style.display = "block";
    document.querySelector("html").style.overflow = "hidden";
    window.scrollTo(0, 0);
    setTimeout(() => {menu.style.opacity = "1"}, 50);
});
close.addEventListener("click", function() {
    // close menu
    menu.style.opacity = "0";
    document.querySelector("html").style.overflow = "visible";
    setTimeout(() => {menu.style.display = "none"}, 450);
});

// Callback modal
let callback = document.querySelector(".callback");
let callback_close = document.querySelector(".callback__close");

function OpenCallback() {
    // open callback
    callback.style.display = "block";
    document.querySelector("html").style.overflow = "hidden";
    setTimeout(() => {callback.style.opacity = "1"}, 50);
}
callback_close.addEventListener("click", function() {
    // close callback
    callback.style.opacity = "0";
    document.querySelector("html").style.overflow = "visible";
    setTimeout(() => {callback.style.display = "none"}, 450);
});