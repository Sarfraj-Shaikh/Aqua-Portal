/* =============== LOADER =============== */
window.onload = function () {

    let pageLoader = document.getElementById("pageLoader");

    setTimeout(function () {

        pageLoader.style.display = "none";

    }, 300);

};

/* =============== CHECK INTERNET =============== */
let network = setInterval(checkNetwork, 100);
function checkNetwork() {

    let noInternetDiv = document.getElementById("noInternet");

    if (navigator.onLine === true) {

        noInternetDiv.style.display = "none";
    } else {

        noInternetDiv.style.display = "block";
    };

};

/* =============== NAVBAR =============== */

let navLeft = document.getElementById("navLeft");
navLeft.addEventListener("click", function () {

    location.assign("../index.html");

});

let navPrimaryCtaBtn = document.getElementById("navPrimaryCtaBtn");
navPrimaryCtaBtn.addEventListener("click", function () {

    location.assign("../index.html");
});

window.addEventListener("scroll", function () {

    let navBar = document.getElementById("navBar");

    if (window.scrollY > 50) {

        navBar.classList.add("scrolled");

    } else {

        navBar.classList.remove("scrolled");

    }

});

/* =============== WEBSITE CONTENT =============== */

const webDetail = {

    title: "Aqua Portal",
    slogan: "Your professional business connection platform.",
};

const navWebName = document.getElementById("navWebName");
navWebName.textContent = webDetail.title;