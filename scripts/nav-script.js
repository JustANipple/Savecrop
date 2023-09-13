const hamburger = document.querySelector(".btn_open");
const xmark = document.querySelector(".btn_close");
const menuBtns = [hamburger, xmark];
const listItems = document.querySelectorAll(".list li");

for(const btn of menuBtns) {
    btn.addEventListener("click", () => {
        document.querySelector(".menu").classList.toggle("menu_open");
        for(let i = 0; i < listItems.length; i++) {
            setTimeout(function() {
                listItems[i].classList.toggle("slide");
            }, 100 * i);
        }
        document.querySelector("nav").classList.toggle("dark_layer");
    });
}