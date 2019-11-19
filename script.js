const arrow = document.querySelector('.arrow');
const iconArrow = document.querySelector('.fas');
const navMove = document.querySelector('nav');

arrow.addEventListener('click', function() {

    iconArrow.classList.toggle('on');
    navMove.classList.toggle('moveNav');
})





// const burger = document.querySelector(".burger");

// burger.addEventListener("click", function () {
//     burger.classList.toggle("active")
// })