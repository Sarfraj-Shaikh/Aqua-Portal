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

let createNewAc = document.getElementById("createNewAc");
createNewAc.addEventListener("click", function () {

    location.assign("./signup.html");
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

/* =============== PASSWORD HIDE/SHOW =============== */

function passToggle() {

    let icon = document.getElementById("passToggleIcon");
    let passwordInput = document.getElementById("passwordInput");

    if (icon.className === "ri-eye-line passIcon") {

        icon.className = "ri-eye-off-line passIcon";
        passwordInput.type = "text";

    } else {

        icon.className = "ri-eye-line passIcon";
        passwordInput.type = "password";

    }

}

/* =============== FORM VALIDATION =============== */

function formVal() {

    let emailInput = document.getElementById("emailInput");
    let errorText1 = document.getElementById("errorText1");
    let inputBox1 = document.getElementById("emailIBox");

    let passwordInput = document.getElementById("passwordInput");
    let errorText2 = document.getElementById("errorText2");
    let inputBox2 = document.getElementById("passIBox");

    /* =============== EMAIL VALIDATION =============== */

    if (emailInput.value.trim() === "") {

        errorText1.style.display = "block";
        errorText1.textContent = "Email is required";
        inputBox1.style.border = "2px solid red";

    }
    else if (emailInput.value.match("@")) {

        if (emailInput.value.match("gmail.com")) {

            errorText1.style.display = "none";
            errorText1.textContent = "";
            inputBox1.style.border = "1px solid #E5E7EB";

            /* =============== PASSWORD VALIDATION =============== */

            if (passwordInput.value.trim() === "") {

                errorText2.style.display = "block";
                errorText2.textContent = "Password is required";
                inputBox2.style.border = "2px solid red";

            }
            else {

                errorText2.style.display = "none";
                errorText2.textContent = "";
                inputBox2.style.border = "1px solid #E5E7EB";
                checkData();

            }

        } else {

            errorText1.style.display = "block";
            errorText1.textContent = "Only 'gmail.com' Allowed";
            inputBox1.style.border = "2px solid red";

        }
    }
    else {

        errorText1.style.display = "block";
        errorText1.textContent = "Invalid Email ID";
        inputBox1.style.border = "2px solid red";

    }
}

function checkData() {

    let emailInput = document.getElementById("emailInput");
    let errorText1 = document.getElementById("errorText1");
    let inputBox1 = document.getElementById("emailIBox");

    let passwordInput = document.getElementById("passwordInput");
    let errorText2 = document.getElementById("errorText2");
    let inputBox2 = document.getElementById("passIBox");

    let tickBox = document.getElementById("morning");

    /* =============== FETCH USER DATA =============== */
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let emailExist = false;
    let passExist = false;

    for (let i = 0; i < users.length; i++) {

        if (users[i].id === emailInput.value) {

            emailExist = true;

            if (users[i].password === passwordInput.value) {

                passExist = true;

            }

            break;
        }
    }

    /* =============== CONDITION CHECKING FOR LOGIN =============== */

    if (emailExist === false) {

        errorText1.style.display = "block";
        errorText1.textContent = "Oops, Email ID Not Found";
        inputBox1.style.border = "2px solid red";

    } else {

        errorText1.style.display = "none";
        errorText1.textContent = "";
        inputBox1.style.border = "1px solid #E5E7EB";

        if (passExist === false) {

            errorText2.style.display = "block";
            errorText2.textContent = "Oops, Wrong Password";
            inputBox2.style.border = "2px solid red";

        } else {

            errorText2.style.display = "none";
            errorText2.textContent = "";
            inputBox2.style.border = "1px solid #E5E7EB";

            /* =============== SAVED LOGIN DATA =============== */

            if (tickBox.checked === true) {

                localStorage.setItem("currentUser", emailInput.value);

            } else {

                sessionStorage.setItem("currentUser", emailInput.value);

            }

            isLogin();
        }

    }

}

/* =============== AUTHENTICATION CHECK =============== */

function isLogin() {

    if (sessionStorage.getItem("currentUser") === null) {

        if (localStorage.getItem("currentUser") === null) {

            /* 

            No operation will be performed here because the user is still on the login page, and we have not received any login details for the current user. If login details are provided, then the operation will be performed in the `else` part. 

            */

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

                window.open("./dashboard.html", "_self");

            }

        }

    } else {

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

            window.open("./dashboard.html", "_self");

        }

    }

}

isLogin();