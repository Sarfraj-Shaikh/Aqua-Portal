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

        userPic.src = fileReader.result;

        nextBtn.onclick = function() {

            updateData(fileReader.result)

        }

        fileLabel.innerHTML = `
                    <i class="ri-arrow-up-line"></i>
                    Choose Another Photo

                    <input type="file" id="fileInput" hidden>
        `;
        nextBtn.style.display = "flex";

    }

    fileReader.readAsDataURL(fileInput.files[0]);

}

/* =============== UPDATE COOKIES & SESSION STORAGE SECTION =============== */

function updateData(imgUrl) {
    
    document.cookie = "pfp=" + imgUrl + "; max-age = 518400; path=/";

    let loggedUserEmail = sessionStorage.getItem("loggedInUser");
    let userData = JSON.parse(sessionStorage.getItem(loggedUserEmail));
    userData.pfp = imgUrl;
    sessionStorage.setItem(loggedUserEmail, JSON.stringify(userData));

    let loggedUserEmail2 = localStorage.getItem("loggedUser");
    let key = btoa(loggedUserEmail2);
    let storedData = localStorage.getItem(key);
    let userObj = JSON.parse(atob(storedData));
    userObj.profileImg = imgUrl;
    localStorage.setItem(key, btoa(JSON.stringify(userObj)));

}