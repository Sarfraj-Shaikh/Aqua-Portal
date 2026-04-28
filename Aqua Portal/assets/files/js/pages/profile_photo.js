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

/* =============== UPLOAD PHOTO SECTION =============== */

let fileInput = document.getElementById("fileInput");
fileInput.addEventListener("change", readFile);

function readFile() {

    let userPic = document.getElementById("userPic");
    let fileInput = document.getElementById("fileInput");
    let fileLabel = document.getElementById("fileLabel");
    let nextBtn = document.getElementById("nextBtn");

    let fileReader = new FileReader();

    fileReader.onload = function () {

        if (fileInput.files[0].size < 5242880) {

            userPic.src = fileReader.result;

            nextBtn.onclick = function () {

                updateData(fileReader.result)

            }

            fileLabel.innerHTML = `
                    <i class="ri-arrow-up-line"></i>
                    Choose Another Photo

                    <input type="file" id="fileInput" hidden>
        `;
            nextBtn.style.display = "flex";

        } else {

            fileLabel.innerHTML = `
                    <i class="ri-arrow-up-line"></i>
                    Max 5MB Allowed, Upload Another Photo

                    <input type="file" id="fileInput" hidden>
        `;
            fileLabel.style.backgroundColor = "#ff9d9d";
            fileLabel.style.color = "#ff0000";
            fileLabel.style.border = "1px solid #ff0000";
        }

    }

    fileReader.readAsDataURL(fileInput.files[0]);

}

/* =============== UPDATE COOKIES & SESSION STORAGE SECTION =============== */

function updateData(imgUrl) {

    if (sessionLogin === true) {

        let users = JSON.parse(localStorage.getItem("users")) || [];
        let userEmail = sessionStorage.getItem("currentUser");

        let currentDate = new Date();

        for (let i = 0; i < users.length; i++) {

            if (users[i].id === userEmail) {

                if (users[i].profileImg === "") {

                    users[i].profileImg = imgUrl;
                    users[i].updatedAt = currentDate.toLocaleDateString() + " at " + currentDate.toLocaleTimeString();

                }

                break;
            }
        }

        localStorage.setItem("users", JSON.stringify(users));

    } else {

        let users = JSON.parse(localStorage.getItem("users")) || [];
        let userEmail = localStorage.getItem("currentUser");

        for (let i = 0; i < users.length; i++) {

            if (users[i].id === userEmail) {

                if (users[i].profileImg === "") {

                    users[i].profileImg = imgUrl;

                }

                break;
            }
        }

        localStorage.setItem("users", JSON.stringify(users));

    }

    isLogin();

}

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

                /* No operation will be performed here because the user is still on the profile upload page, and we have received login details for the current user. If profile photo details are provided, then the operation will be performed in the `else` part. */

            } else {

                window.open("./dashboard.html", "_self");

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

            /* No operation will be performed here because the user is still on the profile upload page, and we have received login details for the current user. If profile photo details are provided, then the operation will be performed in the `else` part. */

        } else {

            window.open("./dashboard.html", "_self");

        }

    }

}

isLogin();

