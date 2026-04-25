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

    if (localStorage.getItem(btoa(emailInput.value)) === null) {

        errorText1.style.display = "block";
        errorText1.textContent = "Invalid Email ID";
        inputBox1.style.border = "2px solid red";

    } else {

        for (let i = 0; i < localStorage.length; i++) {

            let key = localStorage.key(i);
            let allUsers = JSON.parse(atob(localStorage.getItem(key)));

            if (emailInput.value === allUsers.email) {

                errorText1.style.display = "none";
                errorText1.textContent = "";
                inputBox1.style.border = "1px solid #E5E7EB";

                if (passwordInput.value === allUsers.password) {

                    errorText2.style.display = "none";
                    errorText2.textContent = "";
                    inputBox2.style.border = "1px solid #E5E7EB";

                    if (allUsers.profileImg === "") {

                        loginRedirect(allUsers.email, allUsers.password, allUsers.name, allUsers.number, allUsers.profileImg);

                    }

                } else {

                    errorText2.style.display = "block";
                    errorText2.textContent = "Oops, Wrong Password";
                    inputBox2.style.border = "2px solid red";
                }

            }
            else {

                errorText1.style.display = "block";
                errorText1.textContent = "Oops, Email ID Not Found";
                inputBox1.style.border = "2px solid red";

            }
        }

    }

}

function loginRedirect(email, pass, name, number, pfp) {

    let tickBox = document.getElementById("morning");

    if (tickBox.checked === true) {

        document.cookie = "email=" + email + "; max-age = 518400; path=/";
        document.cookie = "password=" + pass + "; max-age = 518400; path=/";
        document.cookie = "name=" + name + "; max-age = 518400; path=/";
        document.cookie = "number=" + number + "; max-age = 518400; path=/";
        document.cookie = "pfp=" + pfp + "; max-age = 518400; path=/";

    } else {

        document.cookie = "email=" + email + "; max-age = 0; path=/";
        document.cookie = "password=" + pass + "; max-age = 0; path=/";
        document.cookie = "name=" + name + "; max-age = 0; path=/";
        document.cookie = "number=" + number + "; max-age = 0; path=/";
        document.cookie = "pfp=" + pfp + "; max-age = 0; path=/";

        let loginData = {
            id: email,
            email: email,
            password: pass,
            name: name,
            number: number,
            pfp: pfp
        }

        sessionStorage.setItem("loggedInUser", email);
        localStorage.setItem("loggedUser", email);
        sessionStorage.setItem(loginData.id, JSON.stringify(loginData));
        
    }

    isLogin();
}

function isLogin() {

    if (document.cookie.length !== 0) {

        let cookie = document.cookie.split("; ");

        for (let i = 0; i < cookie.length; i++) {

            let data = cookie[i].split("=");

            let key = data[0];
            let value = data[1] ? data[1] : "";

            if (key === "pfp") {

                if (value === "") {

                    window.open("./profile-photo.html", "_self");

                } else {

                    alert("PFP is not empty 1");

                }

                break;
            }
        }

    }
    else if (sessionStorage.length !== 0) {

        for (let i = 0; i < sessionStorage.length; i++) {

            let key = sessionStorage.key(i);
            let data = JSON.parse(sessionStorage.getItem(key));

            if (data.pfp === "") {

                window.open("./profile-photo.html", "_self");

            } else {

                alert("PFP is not empty")

            }
        }
    }
}

isLogin();