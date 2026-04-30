/* =============== AUTHENTICATION CHECK =============== */

function isAdminLogin() {

    /* =============== LOAD CURRENT ADMIN DETAILS =============== */
    const currentAdmin = sessionStorage.getItem("currentAdmin");

    if (currentAdmin !== null) {

        /* If the admin is not logged in, the user will be redirected to the login page. */

    } else {

        window.open("../index.html", "_self");

    }
}

isAdminLogin();

/* =============== SIDEBAR =============== */

const adminProfile = () => {

    /* =============== LOAD ADMIN DETAILS =============== */
    const admin = JSON.parse(localStorage.getItem("adminDetails"));

    let name = document.getElementById("adminName");
    name.textContent = admin.name;

    profileCard();

}

adminProfile();

function profileRefresh() {

    window.open("./dashboard.html", "_self");

}

function closeSidebar() {

    let sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("active");

}

function openSidebar() {

    let sidebar = document.getElementById("sidebar");
    sidebar.classList.add("active");

}

/* =============== DASHBOARD =============== */

function profileCard() {

    /* =============== LOAD ADMIN DETAILS =============== */
    const admin = JSON.parse(localStorage.getItem("adminDetails"));

    let name = document.getElementById("adminNameTxt");
    name.textContent = admin.name;

    let email = document.getElementById("adminEmailTxt");
    email.textContent = admin.email;

}

/* =============== STATS =============== */

function loadStats() {

    /* =============== LOAD STATS DETAILS =============== */
    const totalUsers = JSON.parse(localStorage.getItem("users"));
    const totalContacts = JSON.parse(localStorage.getItem("contacts"));
    const totalDeletedContacts = JSON.parse(localStorage.getItem("deletedContacts"));

    let totalUserInput = document.getElementById("totalUsers");
    let totalContactsInput = document.getElementById("totalContacts");
    let totalDeletedContactsInput = document.getElementById("totalDeleted");

    if (totalUsers !== null) {

        totalUserInput.textContent = totalUsers.length;

    }

    if (totalContacts !== null) {

        totalContactsInput.textContent = totalContacts.length;

    }

    if (totalDeletedContacts !== null) {

        totalDeletedContactsInput.textContent = totalDeletedContacts.length;

    }

}

loadStats();

/* =============== LOGOUT =============== */

function logoutAdmin() {

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

    popTitle.textContent = "LOGOUT CONFIRMATION";
    popupMessage.textContent = "Are You Want To Sure To Logout Your Account?";

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

        sessionStorage.removeItem("currentAdmin");
        isAdminLogin();

    }
}