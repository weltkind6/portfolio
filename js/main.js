const nav = document.querySelector("#nav");

const navBtn = document.querySelector("#nav-btn");

const navBtnImg = document.querySelector("#nav-btn-img");

navBtn.addEventListener("click", () => {
    if(nav.classList.toggle('open')) {
        navBtnImg.src = "img/icons/nav-close.svg"
    } else {
        navBtnImg.src = "img/icons/NAV.svg"
    }
})


AOS.init({
    once: true,
    // disable: phone
});

