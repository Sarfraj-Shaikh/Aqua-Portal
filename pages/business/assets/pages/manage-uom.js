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

    let noInternetDiv = document.getElementById("noInternet") || [];

    if (navigator.onLine === true) {

        noInternetDiv.style.display = "none";
    } else {

        noInternetDiv.style.display = "block";
    };

};

/* =============== NAVBAR =============== */

let navLeft = document.getElementById("navLeft");
navLeft.addEventListener("click", function () {

    location.assign("../../../../index.html");

});

let navPrimaryCtaBtn = document.getElementById("navPrimaryCtaBtn");
navPrimaryCtaBtn.addEventListener("click", function () {

    location.assign("../../index.html");
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

            window.open("../../../login.html", "_self");

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

                window.open("../../../profile-photo.html", "_self");

            } else {

                /* No operation will be performed here because the user is still on the Contact page, and we have received login details for the current user. If profile photo details are not provided, then the operation will be performed in the `if` part. */

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

            window.open("../../../profile-photo.html", "_self");

        } else {

            /* No operation will be performed here because the user is still on the Contact page, and we have received login details for the current user. If profile photo details are not provided, then the operation will be performed in the `if` part. */

        }

    }

}

isLogin();

/* =============== LOAD UOM DATA =============== */

function loadUom() {

    let currentUser = null;

    if (sessionLogin === true) {

        currentUser = sessionStorage.getItem("currentUser");

    } else {

        currentUser = localStorage.getItem("currentUser");

    }

    /* =============== LOAD ALL UOM DATA =============== */
    let unitOfMeasure = JSON.parse(localStorage.getItem("unitOfMeasure"));

    let uomPage = document.getElementById("uomPage");
    let cardGrid = document.getElementById("cardGrid");

    if (unitOfMeasure.length !== 0) {

        let found = false;
        cardGrid.innerHTML = "";

        for (let i = 0; i < unitOfMeasure.length; i++) {

            if (unitOfMeasure[i].unitCreator === currentUser) {

                found = true;

                cardGrid.innerHTML += `
                
                <div class="uom-card">

                        <h2 class="title">${unitOfMeasure[i].symbol}</h2>
                        <p class="desc">Formal Name: ${unitOfMeasure[i].formalName} (${unitOfMeasure[i].symbol})</p>

                        <div class="actions">

                            <button class="btn edit-btn" onclick="openEditModal(${i})">
                                <i class="ri-edit-box-line"></i> Edit
                            </button>

                            <button class="btn delete-btn" onclick="deleteCard(${i})">
                                <i class="ri-delete-bin-6-line"></i> Delete
                            </button>
                        </div>
                    </div>
                
                `;
            }

        }

        if (found) {

            cardGrid.style.display = "grid";

        } else {

            cardGrid.style.display = "none";

        }

    }

}

loadUom();

/* =============== DELETE UOM DATA =============== */

function deleteCard(index) {

    /* =============== LOAD ALL UOM DATA =============== */
    let unitOfMeasure = JSON.parse(localStorage.getItem("unitOfMeasure"));

    /* =============== POPUP DIALOGUE =============== */
    let popupContainer = document.getElementById("popupContainer");
    let popupBox = document.getElementById("popupBox");
    let popTitle = document.getElementById("popTitle");
    let popupMessage = document.getElementById("popupMessage");
    let popupCloseIcon = document.getElementById("popupCloseIcon");
    let popupCancelBtn = document.getElementById("popupCancelBtn");
    let popupConfirmBtn = document.getElementById("popupConfirmBtn");

    popupContainer.classList.add("active");
    popupContainer.classList.add("animate__animated", "animate__fadeIn");
    popupBox.classList.add("animate__animated", "animate__zoomIn");

    popTitle.textContent = "CONFIRMATION";
    popupMessage.textContent = "Are You Want To Sure To Delete This Unit Of Measure?";

    popupCloseIcon.onclick = () => {

        popupContainer.classList.remove("active");
        popupContainer.classList.remove("animate__fadeIn");
        popupBox.classList.remove("animate__zoomIn");

        popupContainer.classList.add("animate__fadeOut");
        popupBox.classList.add("animate__zoomOut");

        setTimeout(() => {

            popupContainer.classList.remove("animate__animated", "animate__fadeOut");
            popupBox.classList.remove("animate__animated", "animate__zoomOut");

        }, 250);

    }

    popupCancelBtn.onclick = () => {

        popupContainer.classList.remove("active");
        popupContainer.classList.remove("animate__fadeIn");
        popupBox.classList.remove("animate__zoomIn");

        popupContainer.classList.add("animate__fadeOut");
        popupBox.classList.add("animate__zoomOut");

        setTimeout(() => {

            popupContainer.classList.remove("animate__animated", "animate__fadeOut");
            popupBox.classList.remove("animate__animated", "animate__zoomOut");

        }, 250);

    }

    popupConfirmBtn.onclick = () => {

        if (unitOfMeasure.length !== 0) {

            unitOfMeasure.splice(index, 1);
            localStorage.setItem("unitOfMeasure", JSON.stringify(unitOfMeasure));

            loadUom();

        }

        popupContainer.classList.remove("active");
        popupContainer.classList.remove("animate__fadeIn");
        popupBox.classList.remove("animate__zoomIn");

        popupContainer.classList.add("animate__fadeOut");
        popupBox.classList.add("animate__zoomOut");

        setTimeout(() => {

            popupContainer.classList.remove("animate__animated", "animate__fadeOut");
            popupBox.classList.remove("animate__animated", "animate__zoomOut");

        }, 250);
    }

}

/* =============== EDIT UOM DATA =============== */

function openEditModal(index) {

    let modalOverlay = document.getElementById("modalOverlay");
    let editSystem = document.getElementById("editSystem");
    let editName = document.getElementById("editName");
    let uomUpdateBtn = document.getElementById("uomUpdateBtn");

    modalOverlay.classList.add("active");

    /* =============== LOAD ALL UOM DATA =============== */
    let unitOfMeasure = JSON.parse(localStorage.getItem("unitOfMeasure"));

    editSystem.value = unitOfMeasure[index].symbol;
    editName.value = unitOfMeasure[index].formalName;

    uomUpdateBtn.onclick = function () {

        saveChanges(index);

    };
}

function saveChanges(index) {

    let currentUser = null;

    if (sessionLogin === true) {

        currentUser = sessionStorage.getItem("currentUser");

    } else {

        currentUser = localStorage.getItem("currentUser");

    }

    let editSystem = document.getElementById("editSystem");
    let editName = document.getElementById("editName");
    let modalOverlay = document.getElementById("modalOverlay");

    /* =============== LOAD ALL UOM DATA =============== */
    let unitOfMeasure = JSON.parse(localStorage.getItem("unitOfMeasure"));

    if (editSystem.value.trim() === "") {

        Toastify({
            text: "Enter Unit Symbol ",
            duration: 2000,
            close: false,
            gravity: "top",
            position: "right",
            style: {

                background: "#FF0000",
                color: "#FFFFFF",
                borderRadius: "10px"

            }
        }).showToast();

        editSystem.style.borderColor = "#FF0000";
        editName.style.borderColor = "inherit";

    } else {

        if (editName.value.trim() === "") {

            Toastify({
                text: "Enter Unit Formal Name ",
                duration: 2000,
                close: false,
                gravity: "top",
                position: "right",
                style: {

                    background: "#FF0000",
                    color: "#FFFFFF",
                    borderRadius: "10px"

                }
            }).showToast();

            editName.style.borderColor = "#FF0000";
            editSystem.style.borderColor = "inherit";

        } else {

            editName.style.borderColor = "inherit";
            editSystem.style.borderColor = "inherit";

            if (unitOfMeasure[index].unitCreator === currentUser) {

                unitOfMeasure[index].symbol = editSystem.value;
                unitOfMeasure[index].formalName = editName.value;

                localStorage.setItem("unitOfMeasure", JSON.stringify(unitOfMeasure));
                loadUom();

                modalOverlay.classList.remove("active");

                Toastify({
                    text: "Successfully Updated ",
                    duration: 2000,
                    close: false,
                    gravity: "top",
                    position: "right",
                    style: {

                        background: "#009b03",
                        color: "#FFFFFF",
                        borderRadius: "10px"

                    }
                }).showToast();

            }

        }

    }

}

function closeModal() {

    let modalOverlay = document.getElementById("modalOverlay");
    modalOverlay.classList.remove("active");

    let editSystem = document.getElementById("editSystem");
    let editName = document.getElementById("editName");

    editName.style.borderColor = "inherit";
    editSystem.style.borderColor = "inherit";

}

/* =============== SEARCH UOM DATA =============== */

function searchUom() {

    let searchInput = document.getElementById("searchInput").value.toLowerCase();

    let currentUser = null;

    if (sessionLogin === true) {

        currentUser = sessionStorage.getItem("currentUser");

    } else {

        currentUser = localStorage.getItem("currentUser");

    }

    /* =============== LOAD ALL UOM DATA =============== */
    let unitOfMeasure = JSON.parse(localStorage.getItem("unitOfMeasure"));

    let uomPage = document.getElementById("uomPage");
    let cardGrid = document.getElementById("cardGrid");

    let found = false;
    cardGrid.innerHTML = "";

    if (searchInput.trim() === "") {

        loadUom();
        return;
    }

    for (let i = 0; i < unitOfMeasure.length; i++) {

        let symbol = unitOfMeasure[i].symbol.toLowerCase();
        let name = unitOfMeasure[i].formalName.toLowerCase();

        if (symbol.includes(searchInput) || name.includes(searchInput)) {

            if (unitOfMeasure[i].unitCreator === currentUser) {

                found = true;

                cardGrid.innerHTML += `
                
                <div class="uom-card">

                        <h2 class="title">${unitOfMeasure[i].symbol}</h2>
                        <p class="desc">Formal Name: ${unitOfMeasure[i].formalName} (${unitOfMeasure[i].symbol})</p>

                        <div class="actions">

                            <button class="btn edit-btn" onclick="openEditModal(${i})">
                                <i class="ri-edit-box-line"></i> Edit
                            </button>

                            <button class="btn delete-btn" onclick="deleteCard(${i})">
                                <i class="ri-delete-bin-6-line"></i> Delete
                            </button>
                        </div>
                    </div>
                
                `;

            }
        }


    }

    if (found) {

        cardGrid.style.display = "grid";

    } else {

        cardGrid.style.display = "none";

    }

}
