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
    developer: "Sarfraj Shaikh",
    devSocial: "#"
};

const navWebName = document.getElementById("navWebName");
navWebName.textContent = webDetail.title;

const myDate = new Date();
const copyright = document.getElementById("copyright");
copyright.innerHTML = `© ${myDate.getFullYear()} <b> ${webDetail.title}. </b> All Rights Reserved.`;

const devCredit = document.getElementById("devCredit");
devCredit.textContent = webDetail.developer;
devCredit.addEventListener("click", function () {

    window.open(`${webDetail.devSocial}`, "_self");

});

/* =============== AUTHENTICATION CHECK =============== */

let sessionLogin = false;

function isLogin() {

    if (sessionStorage.getItem("currentUser") === null) {

        sessionLogin = false;

        if (localStorage.getItem("currentUser") === null) {

            window.open("./login.html", "_self");

        } else {

            let users = JSON.parse(localStorage.getItem("users")) || [];

            let userEmail = localStorage.getItem("currentUser");
            let noProfile = true;

            for (let i = 0; i < users.length; i++) {

                if (users[i].id === userEmail) {

                    if (users[i].profileImg === "") {

                        noProfile = true;

                    } else {

                        noProfile = false;

                    }

                    break;
                }
            }

            if (noProfile === true) {

                window.open("./profile-photo.html", "_self");

            } else {

                /* No operation will be performed here because the user is still on the Dashboard page, and we have received login details for the current user. If profile photo details are provided, then the operation will be performed in the `if` part. */

            }

        }

    } else {

        sessionLogin = true;

        let users = JSON.parse(localStorage.getItem("users")) || [];

        let userEmail = sessionStorage.getItem("currentUser");
        let noProfile = true;

        for (let i = 0; i < users.length; i++) {

            if (users[i].id === userEmail) {

                if (users[i].profileImg === "") {

                    noProfile = true;

                } else {

                    noProfile = false;

                }

                break;
            }
        }

        if (noProfile === true) {

            window.open("./profile-photo.html", "_self");

        } else {

            /* No operation will be performed here because the user is still on the Dashboard page, and we have received login details for the current user. If profile photo details are provided, then the operation will be performed in the `if` part. */

        }

    }

}

isLogin();

/* =============== USER PROFILE =============== */

let userName = document.getElementById("userName");
let userProfile = document.getElementById("userPfp");
let userId = document.getElementById("userEmail");

if (sessionLogin === true) {

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userEmail = sessionStorage.getItem("currentUser");

    for (let i = 0; i < users.length; i++) {

        if (users[i].id === userEmail) {

            userName.textContent = users[i].name;
            userProfile.src = users[i].profileImg;
            userId.textContent = users[i].id;

            break;

        }

    }

} else {

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userEmail = localStorage.getItem("currentUser");

    for (let i = 0; i < users.length; i++) {

        if (users[i].id === userEmail) {

            userName.textContent = users[i].name;
            userProfile.src = users[i].profileImg;
            userId.textContent = users[i].id;

            break;

        }

    }
}


/* =============== LOGOUT PROFILE =============== */

const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", function () {

    let confirmLogout = window.confirm("Are you want to sure to Logout?");

    if (confirmLogout) {

        if (sessionLogin === true) {

            sessionStorage.removeItem("currentUser");

        } else {

            localStorage.removeItem("currentUser");
        }

        window.open("./login.html", "_self");
    };

});
