/* =============== NAVBAR =============== */

let navLeft = document.getElementById("navLeft");
navLeft.addEventListener("click", function () {

    location.reload();

});

let navPrimaryCtaBtn = document.getElementById("navPrimaryCtaBtn");


let loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", function () {

    location.assign("./pages/login.html");
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

const heroWelText = document.getElementById("heroWelText");
heroWelText.innerHTML = `Welcome To ${webDetail.title}`;

const heroSubTitle = document.getElementById("heroSubTitle");
heroSubTitle.innerHTML = `${webDetail.slogan}`;

/* =============== AUTHENTICATION CHECK =============== */

function isLogin() {

    let getStartBtn = document.getElementById("getStartBtn");
    let loginBtn = document.getElementById("loginBtn");
    let navPrimaryCtaBtn = document.getElementById("navPrimaryCtaBtn");

    let isLoggedIn = false;

    if (document.cookie.length > 0) {
        isLoggedIn = true;
    }

    if (sessionStorage.length > 0) {
        isLoggedIn = true;
    }

    if (isLoggedIn) {

        getStartBtn.textContent = "Dashboard";
        navPrimaryCtaBtn.innerHTML = `<i class="ri-user-line"></i>
        <span>Dashboard</span>`;
        loginBtn.style.display = "none";

        getStartBtn.onclick = function () {

            window.open("./pages/dashboard.html", "_self");

        };

        navPrimaryCtaBtn.onclick = function () {

            location.assign("./pages/dashboard.html");
        };

    } else {

        getStartBtn.textContent = "Get Started";
        navPrimaryCtaBtn.innerHTML = `<i class="ri-user-line"></i>
        <span>Login</span>`;
        loginBtn.style.display = "flex";

        getStartBtn.onclick = function () {

            window.open("./pages/signup.html", "_self");

        };

        navPrimaryCtaBtn.onclick = function () {

            location.assign("./pages/login.html");
        };
    }
}

isLogin();