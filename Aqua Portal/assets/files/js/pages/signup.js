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

let signIn = document.getElementById("signIn");
signIn.addEventListener("click", function () {

    location.assign("./login.html");
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

    let nameInput = document.getElementById("nameInput");
    let errorText = document.getElementById("errorText1");
    let inputBox = document.getElementById("nameIBox");

    let emailInput = document.getElementById("emailInput");
    let errorText2 = document.getElementById("errorText2");
    let inputBox2 = document.getElementById("emailIBox");

    let numberInput = document.getElementById("numberInput");
    let errorText3 = document.getElementById("errorText3");
    let inputBox3 = document.getElementById("numberIBox");

    let passwordInput = document.getElementById("passwordInput");
    let errorText4 = document.getElementById("errorText4");
    let inputBox4 = document.getElementById("passIBox");

    let capitalLetter = /[A-Z]/g;
    let smallLetter = /[a-z]/g;
    let nums = /[0-9]/g;
    let symbols = /[~!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    let indNum = /[7-9]/g;

    /* =============== NAME VALIDATION =============== */

    if (nameInput.value.trim() === "") {

        errorText.style.display = "block";
        errorText.textContent = "Full Name is required";
        inputBox.style.border = "2px solid red";
    }
    else if (nameInput.value.length > 15) {

        errorText.style.display = "block";
        errorText.textContent = "Max 15 Character Allowed";
        inputBox.style.border = "2px solid red";

    }
    else if (nameInput.value[0].match(capitalLetter)) {

        errorText.style.display = "none";
        errorText.textContent = "";
        inputBox.style.border = "1px solid #E5E7EB";

        /* =============== EMAIL VALIDATION =============== */

        if (emailInput.value.trim() === "") {

            errorText2.style.display = "block";
            errorText2.textContent = "Email is required";
            inputBox2.style.border = "2px solid red";

        }
        else if (emailInput.value.match("@")) {

            if (emailInput.value.match("gmail.com")) {

                errorText2.style.display = "none";
                errorText2.textContent = "";
                inputBox2.style.border = "1px solid #E5E7EB";

                /* =============== MOBILE NUMBER VALIDATION =============== */

                if (numberInput.value === "") {

                    errorText3.style.display = "block";
                    errorText3.textContent = "Mobile Number is required";
                    inputBox3.style.border = "2px solid red";

                }
                else if (numberInput.value.length === 10) {

                    if (numberInput.value[0].match(indNum)) {

                        errorText3.style.display = "none";
                        errorText3.textContent = "";
                        inputBox3.style.border = "1px solid #E5E7EB";

                        /* =============== PASSWORD VALIDATION =============== */

                        if (passwordInput.value.trim() === "") {

                            errorText4.style.display = "block";
                            errorText4.textContent = "Password is required";
                            inputBox4.style.border = "2px solid red";

                        }
                        else if (passwordInput.value.match(capitalLetter)) {

                            if (passwordInput.value.match(smallLetter)) {

                                if (passwordInput.value.match(nums)) {

                                    if (passwordInput.value.match(symbols)) {

                                        if (passwordInput.value.length < 6) {

                                            errorText4.style.display = "block";
                                            errorText4.textContent = "Minimum 6 Character Required";
                                            inputBox4.style.border = "2px solid red";

                                        } else {

                                            errorText4.style.display = "none";
                                            errorText4.textContent = "";
                                            inputBox4.style.border = "1px solid #E5E7EB";
                                            registerAC();

                                        }

                                    } else {

                                        errorText4.style.display = "block";
                                        errorText4.textContent = "Use at Least 1 Special Symbol";
                                        inputBox4.style.border = "2px solid red";

                                    }

                                } else {

                                    errorText4.style.display = "block";
                                    errorText4.textContent = "Use at Least 1 Number";
                                    inputBox4.style.border = "2px solid red";

                                }

                            } else {

                                errorText4.style.display = "block";
                                errorText4.textContent = "Use at Least 1 Lowercase";
                                inputBox4.style.border = "2px solid red";

                            }

                        } else {

                            errorText4.style.display = "block";
                            errorText4.textContent = "Use at Least 1 Uppercase";
                            inputBox4.style.border = "2px solid red";

                        }

                    } else {

                        errorText3.style.display = "block";
                        errorText3.textContent = "Only Indian Numbers Allowed";
                        inputBox3.style.border = "2px solid red";

                    }


                } else {

                    errorText3.style.display = "block";
                    errorText3.textContent = "Only 10 Digits Numbers Allowed";
                    inputBox3.style.border = "2px solid red";

                }

            } else {

                errorText2.style.display = "block";
                errorText2.textContent = "Only 'gmail.com' Allowed";
                inputBox2.style.border = "2px solid red";

            }
        }
        else {

            errorText2.style.display = "block";
            errorText2.textContent = "Invalid Email ID";
            inputBox2.style.border = "2px solid red";

        }

    } else {

        errorText.style.display = "block";
        errorText.textContent = "First Letter Must Be Capital";
        inputBox.style.border = "2px solid red";

    }

}

/* =============== CREATE USERS ACCOUNTS =============== */

function registerAC() {

    let nameInput = document.getElementById("nameInput").value;

    let emailInput = document.getElementById("emailInput").value;
    let errorText2 = document.getElementById("errorText2");
    let inputBox2 = document.getElementById("emailIBox");

    let numberInput = document.getElementById("numberInput").value;
    let errorText3 = document.getElementById("errorText3");
    let inputBox3 = document.getElementById("numberIBox");

    let passwordInput = document.getElementById("passwordInput").value;

    let user = {
        id: emailInput,
        name: nameInput,
        email: emailInput,
        number: numberInput,
        password: passwordInput,
        profileImg: ""
    }

    if (localStorage.getItem(btoa(emailInput)) !== null) {

        errorText2.style.display = "block";
        errorText2.textContent = "Email ID Already Registered";
        inputBox2.style.border = "2px solid red";

    } else {

        errorText2.style.display = "none";
        errorText2.textContent = "";
        inputBox2.style.border = "1px solid #E5E7EB";

        let numberExists = false;

        for (let i = 0; i < localStorage.length; i++) {

            let key = localStorage.key(i);
            let allUsers = JSON.parse(atob(localStorage.getItem(key)));

            if (allUsers.number === numberInput) {

                numberExists = true;
                break;
                errorText3.style.display = "block";
                errorText3.textContent = "Number already registered!";
                inputBox3.style.border = "2px solid red";

            }

        }

        if (numberExists) {

            errorText3.style.display = "block";
            errorText3.textContent = "Number already registered!";
            inputBox3.style.border = "2px solid red";

        } else {

            errorText3.style.display = "none";
            errorText3.textContent = "";
            inputBox3.style.border = "1px solid #E5E7EB";

            let allData = JSON.stringify(user);
            localStorage.setItem(btoa(user.id), btoa(allData));

            setTimeout(function () {

                clearInput();
                window.open("../pages/login.html", "_self");

            }, 500);

        }

    }

}

function clearInput() {

    let nameInput = document.getElementById("nameInput");
    let emailInput = document.getElementById("emailInput");
    let numberInput = document.getElementById("numberInput");
    let passwordInput = document.getElementById("passwordInput");

    nameInput.value = "";
    emailInput.value = "";
    numberInput.value = "";
    passwordInput.value = "";

}

/* =============== AUTHENTICATION CHECK =============== */

function isLogin() {

    let isLoggedIn = false;

    if (document.cookie.length > 0) {
        isLoggedIn = true;
    }

    if (sessionStorage.length > 0) {
        isLoggedIn = true;
    }

    if (isLoggedIn) {

        window.open("./dashboard.html", "_self");

    } else {

        location.assign("./login.html");

    }
}

isLogin();



