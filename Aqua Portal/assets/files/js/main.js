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

    if (sessionStorage.getItem("currentUser") === null) {

        if (localStorage.getItem("currentUser") === null) {

            getStartBtn.innerHTML = `<i class="ri-sparkling-line"></i> <span>Get Started</span>`;
            navPrimaryCtaBtn.innerHTML = `<i class="ri-user-line"></i> <span>Login</span>`;
            loginBtn.style.display = "flex";

            getStartBtn.onclick = function () {

                window.open("./pages/signup.html", "_self");

            };

            navPrimaryCtaBtn.onclick = function () {

                location.assign("./pages/login.html");
            };

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

            getStartBtn.innerHTML = `<i class="ri-user-line"></i> <span>Dashboard</span>`;
            navPrimaryCtaBtn.innerHTML = `<i class="ri-user-line"></i> <span>Dashboard</span>`;
            loginBtn.style.display = "none";

            getStartBtn.onclick = function () {

                if (noProfile === true) {

                    window.open("./pages/profile-photo.html", "_self");


                } else {

                    window.open("./pages/dashboard.html", "_self");

                }

            };

            navPrimaryCtaBtn.onclick = function () {

                if (noProfile === true) {

                    window.open("./pages/profile-photo.html", "_self");

                } else {

                    window.open("./pages/dashboard.html", "_self");

                }
            };

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

        getStartBtn.innerHTML = `<i class="ri-user-line"></i> <span>Dashboard</span>`;
        navPrimaryCtaBtn.innerHTML = `<i class="ri-user-line"></i> <span>Dashboard</span>`;
        loginBtn.style.display = "none";

        getStartBtn.onclick = function () {

            if (noProfile === true) {

                window.open("./pages/profile-photo.html", "_self");


            } else {

                window.open("./pages/dashboard.html", "_self");

            }

        };

        navPrimaryCtaBtn.onclick = function () {

            if (noProfile === true) {

                window.open("./pages/profile-photo.html", "_self");

            } else {

                window.open("./pages/dashboard.html", "_self");

            }
        };

    }

}

isLogin();