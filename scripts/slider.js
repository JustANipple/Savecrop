const employers = [
    {
        picture: "../assets/images/Team/avatar-portrait-svgrepo-com.svg",
        name: "Samuel Prandi",
        role: "Impiegato tecnico",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum massa et neque lobortis rhoncus. Etiam ac commodo arcu. Fusce sagittis turpis non eros porta, vitae varius sem consectetur. In congue facilisis arcu iaculis rhoncus."
    },
    {
        picture: "../assets/images/Team/avatar-svgrepo-com.svg",
        name: "Massimo Vacchetto",
        role: "CEO Auroras",
        description: "Proin eget venenatis dui. Nulla eget lectus sit amet enim tempus mollis sit amet non sapien. Curabitur gravida magna ligula, nec lobortis nisi dictum gravida. Phasellus ac consequat nunc. Nullam quis commodo risus, eget eleifend urna."
    }
];

let index = 0;
updateContent();

const wrapper = document.querySelector(".team .wrapper");
document.querySelector(".right_arrow").addEventListener("click", () => {
    wrapper.classList.toggle("slide_out_left");
    setTimeout(function() {
        if(index + 1 > employers.length - 1) {
            index = 0;
        } else {
            index++;
        }
        updateContent();
        wrapper.classList.toggle("slide_in_right");
    }, 250);
    setTimeout(function() {
        wrapper.classList.remove("slide_out_left");
        wrapper.classList.remove("slide_in_right");
    }, 750);
});

document.querySelector(".left_arrow").addEventListener("click", () => {
    wrapper.classList.toggle("slide_out_right");
    setTimeout(function() {
        if(index - 1 < 0) {
            index = employers.length - 1;
        } else {
            index--;
        }
        updateContent();
        wrapper.classList.toggle("slide_in_left");
    }, 250);
    setTimeout(function() {
        wrapper.classList.remove("slide_out_right");
        wrapper.classList.remove("slide_in_left");
    }, 750);
});

function updateContent() {
    document.querySelector(".name").textContent = employers[index].name;
    document.querySelector(".user_picture").setAttribute("src", employers[index].picture);
    document.querySelector(".role").textContent = employers[index].role;
    document.querySelector(".team .description").textContent = employers[index].description;
}