
let navBarmenu = document.querySelector('.navbar .links');
let menuBtn = document.querySelector('.menu-btn');
let hidenBtn = navBarmenu.querySelector('.closs-btn');

//show-menu
menuBtn.addEventListener("click", () =>{
    navBarmenu.classList.toggle("show-menu")
});

//hide-menu
hidenBtn.addEventListener("click", () => menuBtn.click());

