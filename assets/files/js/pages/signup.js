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

    /* =============== READ USERS ACCOUNTS =============== */
    let users = JSON.parse(localStorage.getItem("users")) || [];

    /* =============== DUPLICATE EMAIL SECURITY =============== */
    let emailExist = false;

    for (let i = 0; i < users.length; i++) {

        if (users[i].email === emailInput) {

            emailExist = true;
            break;
        }
    }

    /* =============== DUPLICATE NUMBER SECURITY =============== */
    let numExist = false;

    for (let i = 0; i < users.length; i++) {

        if (users[i].number === numberInput) {

            numExist = true;
            break;
        }

    }

    /* =============== SHORTER METHOD FOR DUPLICATE EMAIL & NUMBER SECURITY =============== */
    
    // let emailExist = users.some(user => user.email === emailInput);
    // let numExist = users.some(user => user.number === numberInput);

    /* =============== NEW USER DATA =============== */
    let currentDate = new Date();

    let newUser = {
        id: emailInput,
        name: nameInput,
        email: emailInput,
        number: numberInput,
        password: passwordInput,
        profileImg: "",
        createdAt: currentDate.toLocaleDateString() + " at " + currentDate.toLocaleTimeString(),
        updatedAt: currentDate.toLocaleDateString() + " at " + currentDate.toLocaleTimeString()
    }

    /* =============== CHECK CONDITION FOR DATA STORE =============== */

    if (emailExist === true) {

        errorText2.style.display = "block";
        errorText2.textContent = "Email ID Already Registered";
        inputBox2.style.border = "2px solid red";

    } else {

        errorText2.style.display = "none";
        errorText2.textContent = "";
        inputBox2.style.border = "1px solid #E5E7EB";

        if (numExist === true) {

            errorText3.style.display = "block";
            errorText3.textContent = "Number already registered!";
            inputBox3.style.border = "2px solid red";

        } else {

            errorText3.style.display = "none";
            errorText3.textContent = "";
            inputBox3.style.border = "1px solid #E5E7EB";

            /* =============== STORE USER DATA =============== */
            users.push(newUser);

            localStorage.setItem("users", JSON.stringify(users));

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

    if (sessionStorage.getItem("currentUser") === null) {

        if (localStorage.getItem("currentUser") === null) {

            /* 

            No operation will be performed here because the user is still on the register page, and we have not received any login details for the current user. If login details are provided, then the operation will be performed in the `else` part. 

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



