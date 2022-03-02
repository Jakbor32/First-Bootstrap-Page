const toggler = document.querySelector(".navbar-toggler");
const togglerIcon = document.querySelector(".navbar-toggler-icon");
var tog = document.getElementById("")

toggler.addEventListener("click", function () {
    var test = toggler.classList.contains("collapsed");

    if (test == true) {
        right();
    } else {
        left();
    }
});
function right() {
    togglerIcon.animate([

        { transform: 'rotate(0deg)' },
        { transform: 'rotate(180deg)' }
    ], {
        duration: 300,
        iterations: 1
    });
}
function left() {
    togglerIcon.animate([

        { transform: 'rotate(180deg)' },
        { transform: 'rotate(0deg)' }
    ], {
        duration: 300,
        iterations: 1
    });
}
