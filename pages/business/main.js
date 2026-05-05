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

    location.assign("../../index.html");

});

let navPrimaryCtaBtn = document.getElementById("navPrimaryCtaBtn");
navPrimaryCtaBtn.addEventListener("click", function () {

    location.assign("../dashboard.html");
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

            window.open("../login.html", "_self");

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

                window.open("../profile-photo.html", "_self");

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

            window.open("./profile-photo.html", "_self");

        } else {

            /* No operation will be performed here because the user is still on the Contact page, and we have received login details for the current user. If profile photo details are not provided, then the operation will be performed in the `if` part. */

        }

    }

}

isLogin();

/* =============== CREATE COMPANY =============== */
let createCompanyBtn = document.getElementById("createCompanyBtn");
createCompanyBtn.addEventListener("click", () => {

    createCompany();

});

function createCompany() {

    let createCompanyModal = document.getElementById("createCompanyModal");
    let companyLogo = document.getElementById("companyLogo");
    let logoPreview = document.getElementById("logoPreview");
    let logoPreviewImg = document.getElementById("logoPreviewImg");

    createCompanyModal.style.display = "flex";
    logoPreviewImg.src = "";

    /* =============== COMPANY LOGO UPLOAD =============== */

    companyLogo.onchange = () => {

        let file = companyLogo.files[0];

        /* =============== CHECK INVALID FILE =============== */

        if (!file) {

            Toastify({
                text: "Invalid File ",
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

            logoPreviewImg.src = "";
            logoPreview.style.display = "none";
            return;
        }

        /* =============== CHECK FILE SIZE =============== */

        if (file.size > 1024 * 1024) {

            Toastify({
                text: "Logo Size Must Be Under 1MB ",
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

            logoPreviewImg.src = "";
            logoPreview.style.display = "none";
            return;

        }

        /* =============== LOAD COMPANY LOGO =============== */

        let fileReader = new FileReader();

        fileReader.onload = () => {

            logoPreviewImg.src = fileReader.result;
            logoPreview.style.display = "flex";

        }

        fileReader.readAsDataURL(file)

    }

}

let saveCompanyBtn = document.getElementById("saveCompanyBtn");
saveCompanyBtn.addEventListener("click", () => {

    formVal();

});

/* =============== FORM VALIDATION =============== */

function formVal() {

    let companyLogo = document.getElementById("companyLogo");
    let createCompanyModal = document.getElementById("createCompanyModal");

    /* =============== ALL INPUTS =============== */
    let companyName = document.getElementById("companyName").value;
    let mailingName = document.getElementById("mailingName").value;
    let companyAddress = document.getElementById("companyAddress").value;
    let mobileNumber = document.getElementById("mobileNumber").value;
    let faxNumber = document.getElementById("faxNumber").value;
    let cinNumber = document.getElementById("cinNumber").value;
    let companyEmail = document.getElementById("companyEmail").value;
    let companyWebsite = document.getElementById("companyWebsite").value;
    let financialYear = document.getElementById("financialYear").value;
    let stockType = document.getElementById("stockType").value;

    if (companyLogo.files.length === 0) {

        Toastify({
            text: "Upload Company Logo ",
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
    }
    else if (companyName.trim() === "") {

        Toastify({
            text: "Company Name Is Required ",
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

    }
    else if (mailingName.trim() === "") {

        Toastify({
            text: "Mailing Name Is Required ",
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

    }
    else if (companyAddress.trim() === "") {

        Toastify({
            text: "Address Is Required ",
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

    }
    else if (mobileNumber === "") {

        Toastify({
            text: "Mobile Number Is Required ",
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

    }
    else if (mobileNumber[0].match(/[7-9]/)) {

        if (mobileNumber.length === 10) {

            if (faxNumber === "") {

                Toastify({
                    text: "FAX Number Is Required ",
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

            }
            else if (cinNumber === "") {

                Toastify({
                    text: "CIN Number Is Required ",
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

            }
            else if (companyEmail.trim() === "") {

                Toastify({
                    text: "Email ID Is Required ",
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

            }
            else if (companyEmail.match("@")) {

                if (companyEmail.match("gmail.com")) {

                    if (companyWebsite.trim() === "") {

                        Toastify({
                            text: "Website Is Required ",
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

                    }
                    else if (companyWebsite.match("www")) {

                        if (financialYear.trim() === "") {

                            Toastify({
                                text: "Financial Year Is Required ",
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

                        }
                        else if (stockType.trim() === "") {

                            Toastify({
                                text: "Select Company Stock Type ",
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

                        }
                        else if (stockType.trim() === "-- Select Stock Type --") {

                            Toastify({
                                text: "Select Company Stock Type ",
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

                        } else {

                            createCompanyData();

                        }

                    } else {

                        Toastify({
                            text: "Invalid Website Domain ",
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
                    }

                } else {

                    Toastify({
                        text: "Only 'gmail.com' Allowed ",
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
                }

            } else {

                Toastify({
                    text: "Invalid Email ID ",
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
            }

        } else {

            Toastify({
                text: "Invalid Number ",
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

        }

    } else {

        Toastify({
            text: "Only Indian Number Allowed ",
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

    }
}

function createCompanyData() {

    let currentUser = null;

    if (sessionLogin === true) {

        currentUser = sessionStorage.getItem("currentUser");

    } else {

        currentUser = localStorage.getItem("currentUser");

    }

    let logoPreviewImg = document.getElementById("logoPreviewImg");
    let createCompanyModal = document.getElementById("createCompanyModal");

    /* =============== ALL INPUTS =============== */
    let companyName = document.getElementById("companyName").value;
    let mailingName = document.getElementById("mailingName").value;
    let companyAddress = document.getElementById("companyAddress").value;
    let mobileNumber = document.getElementById("mobileNumber").value;
    let faxNumber = document.getElementById("faxNumber").value;
    let cinNumber = document.getElementById("cinNumber").value;
    let companyEmail = document.getElementById("companyEmail").value;
    let companyWebsite = document.getElementById("companyWebsite").value;
    let financialYear = document.getElementById("financialYear").value;
    let stockType = document.getElementById("stockType").value;

    /* =============== LOAD ALL COMPANY DATA =============== */
    let companyData = JSON.parse(localStorage.getItem("companyData")) || [];

    let currentDate = new Date();

    let details = {
        address: companyAddress,
        cin: cinNumber,
        companyName: companyName,
        createdAt: currentDate.toLocaleDateString() + " at " + currentDate.toLocaleTimeString(),
        email: companyEmail,
        fax: faxNumber,
        financialYear: financialYear,
        logo: logoPreviewImg.src,
        mailingName: mailingName,
        mobile: mobileNumber,
        stockType: stockType,
        website: companyWebsite,
        creator: currentUser,
        voucherNo: 1
    }

    if (companyData.length === 0) {

        companyData.push(details);
        localStorage.setItem("companyData", JSON.stringify(companyData));
        loadCompanyData();

        Toastify({
            text: "Company Created ",
            duration: 2000,
            close: false,
            gravity: "top",
            position: "right",
            style: {

                background: "#009a03",
                color: "#FFFFFF",
                borderRadius: "10px"

            }
        }).showToast();

        createCompanyModal.style.display = "none";
        window.scrollTo(0, 0);

    } else {

        let emailExist = false;
        let nameExist = false;
        let faxExist = false;
        let cinExist = false;
        let numberExist = false;
        let websiteExist = false;

        for (let i = 0; i < companyData.length; i++) {

            if (companyData[i].email === companyEmail) {

                emailExist = true;

            }

            if (companyData[i].companyName === companyName) {

                nameExist = true;

            }

            if (companyData[i].website === companyWebsite) {

                websiteExist = true;

            }

            if (companyData[i].mobile === mobileNumber) {

                numberExist = true;

            }

            if (companyData[i].fax === faxNumber) {

                faxExist = true;

            }

            if (companyData[i].cin === cinNumber) {

                cinExist = true;

            }

        }

        if (emailExist) {

            Toastify({
                text: "Email Already Exist ",
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

        } else {

            if (nameExist) {

                Toastify({
                    text: "Company Name Already Exist ",
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

            } else {

                if (faxExist) {

                    Toastify({
                        text: "FAX Number Already Exist ",
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

                } else {

                    if (cinExist) {

                        Toastify({
                            text: "CIN Number Already Exist ",
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

                    } else {

                        if (numberExist) {

                            Toastify({
                                text: "Mobile Number Already Exist ",
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

                        } else {

                            if (websiteExist) {

                                Toastify({
                                    text: "Website Already Exist ",
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

                            } else {

                                companyData.push(details);
                                localStorage.setItem("companyData", JSON.stringify(companyData));
                                loadCompanyData();

                                Toastify({
                                    text: "Company Created ",
                                    duration: 2000,
                                    close: false,
                                    gravity: "top",
                                    position: "right",
                                    style: {

                                        background: "#009a03",
                                        color: "#FFFFFF",
                                        borderRadius: "10px"

                                    }
                                }).showToast();

                                createCompanyModal.style.display = "none";
                                window.scrollTo(0, 0);

                            }

                        }


                    }

                }
            }
        }
    }

}

let closeCreateModal = document.getElementById("closeCreateModal");
closeCreateModal.addEventListener("click", () => {

    let createCompanyModal = document.getElementById("createCompanyModal")
    createCompanyModal.style.display = "none";

});

/* =============== LOAD COMPANY DETAILS =============== */

function loadCompanyData() {

    let currentUser = null;

    if (sessionLogin === true) {

        currentUser = sessionStorage.getItem("currentUser");

    } else {

        currentUser = localStorage.getItem("currentUser");

    }

    let createCompanyBtn = document.getElementById("createCompanyBtn");
    let myCompanyBtn = document.getElementById("myCompanyBtn");
    let updateCompanyBtn = document.getElementById("updateCompanyBtn");
    let deleteCompanyBtn = document.getElementById("deleteCompanyBtn");

    /* =============== LOAD ALL COMPANY DATA =============== */
    let companyData = JSON.parse(localStorage.getItem("companyData")) || [];

    if (companyData.length === 0) {

        createCompanyBtn.style.display = "flex";
        myCompanyBtn.style.display = "none";
        updateCompanyBtn.style.display = "none";
        deleteCompanyBtn.style.display = "none";


    } else {

        let found = false;

        for (let i = 0; i < companyData.length; i++) {

            if (companyData[i].creator === currentUser) {

                found = true;
            }
        }

        if (found) {

            createCompanyBtn.style.display = "none";
            myCompanyBtn.style.display = "flex";
            updateCompanyBtn.style.display = "flex";
            deleteCompanyBtn.style.display = "flex";

        } else {

            createCompanyBtn.style.display = "flex";
            myCompanyBtn.style.display = "none";
            updateCompanyBtn.style.display = "none";
            deleteCompanyBtn.style.display = "none";

        }

    }

}

loadCompanyData();

/* =============== DELETE COMPANY DETAILS =============== */

let deleteCompanyBtn = document.getElementById("deleteCompanyBtn");
deleteCompanyBtn.addEventListener("click", deleteCompany);

function deleteCompany() {

    let currentUser = null;

    if (sessionLogin === true) {

        currentUser = sessionStorage.getItem("currentUser");

    } else {

        currentUser = localStorage.getItem("currentUser");

    }

    let deleteCompanyModal = document.getElementById("deleteCompanyModal");
    let imgLabel = document.getElementById("imgLabel");
    let deletelogoPreview = document.getElementById("deletelogoPreview");
    let deletelogoPreviewImg = document.getElementById("deletelogoPreviewImg");

    deleteCompanyModal.style.display = "flex";
    imgLabel.style.display = "none";
    deletelogoPreview.style.display = "flex";

    /* =============== ALL INPUTS =============== */
    let companyName = document.getElementById("deletecompanyName");
    let mailingName = document.getElementById("deletemailingName");
    let companyAddress = document.getElementById("deletecompanyAddress");
    let mobileNumber = document.getElementById("deletemobileNumber");
    let faxNumber = document.getElementById("deletefaxNumber");
    let cinNumber = document.getElementById("deletecinNumber");
    let companyEmail = document.getElementById("deletecompanyEmail");
    let companyWebsite = document.getElementById("deletecompanyWebsite");
    let financialYear = document.getElementById("deletefinancialYear");
    let stockType = document.getElementById("deletestockType");

    /* =============== LOAD ALL COMPANY DATA =============== */
    let companyData = JSON.parse(localStorage.getItem("companyData")) || [];

    if (companyData.length !== 0) {

        for (let i = 0; i < companyData.length; i++) {

            if (companyData[i].creator === currentUser) {

                companyName.value = companyData[i].companyName;
                mailingName.value = companyData[i].mailingName;
                companyAddress.value = companyData[i].address;
                mobileNumber.value = companyData[i].mobile;
                faxNumber.value = companyData[i].fax;
                cinNumber.value = companyData[i].cin;
                companyEmail.value = companyData[i].email;
                companyWebsite.value = companyData[i].website;
                financialYear.value = companyData[i].financialYear;
                stockType.value = companyData[i].stockType;
                deletelogoPreviewImg.src = companyData[i].logo;

            }

        }

    }

}

let delCompanyBtn = document.getElementById("delCompanyBtn");
delCompanyBtn.addEventListener("click", () => {

    /* =============== LOAD ALL COMPANY DATA =============== */
    let companyData = JSON.parse(localStorage.getItem("companyData")) || [];

    let currentUser = null;

    if (sessionLogin === true) {

        currentUser = sessionStorage.getItem("currentUser");

    } else {

        currentUser = localStorage.getItem("currentUser");

    }

    let deleteCompanyModal = document.getElementById("deleteCompanyModal");

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
    popupMessage.textContent = "Are You Want To Sure To Delete This Company?";

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

        let userIndex = null;

        for (let i = 0; i < companyData.length; i++) {

            if (companyData[i].creator === currentUser) {

                userIndex = i;

            }

        }

        if (userIndex !== null) {

            companyData.splice(userIndex, 1);
            localStorage.setItem("companyData", JSON.stringify(companyData));
            loadCompanyData();

            Toastify({
                text: "Company Deleted ",
                duration: 2000,
                close: false,
                gravity: "top",
                position: "right",
                style: {

                    background: "#009a03",
                    color: "#FFFFFF",
                    borderRadius: "10px"

                }
            }).showToast();

            deleteCompanyModal.style.display = "none";
            window.scrollTo(0, 0);

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

});

let deleteCreateModal = document.getElementById("deleteCreateModal");
deleteCreateModal.addEventListener("click", () => {

    let deleteCompanyModal = document.getElementById("deleteCompanyModal");
    deleteCompanyModal.style.display = "none";

});

/* =============== EDIT COMPANY DETAILS =============== */
let updateCompanyBtn = document.getElementById("updateCompanyBtn");
updateCompanyBtn.addEventListener("click", () => {

    updateCompanyData();

});

function updateCompanyData() {

    let editCompanyModal = document.getElementById("editCompanyModal");
    let editlogoPreview = document.getElementById("editlogoPreview");
    let editlogoPreviewImg = document.getElementById("editlogoPreviewImg");

    editCompanyModal.style.display = "flex";
    editlogoPreview.style.display = "flex";

    let currentUser = null;

    if (sessionLogin === true) {

        currentUser = sessionStorage.getItem("currentUser");

    } else {

        currentUser = localStorage.getItem("currentUser");

    }

    /* =============== ALL INPUTS =============== */
    let companyName = document.getElementById("editcompanyName");
    let mailingName = document.getElementById("editmailingName");
    let companyAddress = document.getElementById("editcompanyAddress");
    let mobileNumber = document.getElementById("editmobileNumber");
    let faxNumber = document.getElementById("editfaxNumber");
    let cinNumber = document.getElementById("editcinNumber");
    let companyEmail = document.getElementById("editcompanyEmail");
    let companyWebsite = document.getElementById("editcompanyWebsite");
    let financialYear = document.getElementById("editfinancialYear");
    let stockType = document.getElementById("editstockType");

    /* =============== LOAD ALL COMPANY DATA =============== */
    let companyData = JSON.parse(localStorage.getItem("companyData")) || [];

    if (companyData.length !== 0) {

        for (let i = 0; i < companyData.length; i++) {

            if (companyData[i].creator === currentUser) {

                companyName.value = companyData[i].companyName;
                mailingName.value = companyData[i].mailingName;
                companyAddress.value = companyData[i].address;
                mobileNumber.value = companyData[i].mobile;
                faxNumber.value = companyData[i].fax;
                cinNumber.value = companyData[i].cin;
                companyEmail.value = companyData[i].email;
                companyWebsite.value = companyData[i].website;
                financialYear.value = companyData[i].financialYear;
                stockType.value = companyData[i].stockType;
                editlogoPreviewImg.src = companyData[i].logo;

            }

        }

    }

}

let editCompanyBtn = document.getElementById("editCompanyBtn");
editCompanyBtn.addEventListener("click", () => {

    let companyLogo = document.getElementById("editcompanyLogo");
    let createCompanyModal = document.getElementById("editCompanyModal");

    /* =============== ALL INPUTS =============== */
    let companyName = document.getElementById("editcompanyName").value;
    let mailingName = document.getElementById("editmailingName").value;
    let companyAddress = document.getElementById("editcompanyAddress").value;
    let mobileNumber = document.getElementById("editmobileNumber").value;
    let faxNumber = document.getElementById("editfaxNumber").value;
    let cinNumber = document.getElementById("editcinNumber").value;
    let companyEmail = document.getElementById("editcompanyEmail").value;
    let companyWebsite = document.getElementById("editcompanyWebsite").value;
    let financialYear = document.getElementById("editfinancialYear").value;
    let stockType = document.getElementById("editstockType").value;

    if (companyName.trim() === "") {

        Toastify({
            text: "Company Name Is Required ",
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

    }
    else if (mailingName.trim() === "") {

        Toastify({
            text: "Mailing Name Is Required ",
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

    }
    else if (companyAddress.trim() === "") {

        Toastify({
            text: "Address Is Required ",
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

    }
    else if (mobileNumber === "") {

        Toastify({
            text: "Mobile Number Is Required ",
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

    }
    else if (mobileNumber[0].match(/[7-9]/)) {

        if (mobileNumber.length === 10) {

            if (faxNumber === "") {

                Toastify({
                    text: "FAX Number Is Required ",
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

            }
            else if (cinNumber === "") {

                Toastify({
                    text: "CIN Number Is Required ",
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

            }
            else if (companyEmail.trim() === "") {

                Toastify({
                    text: "Email ID Is Required ",
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

            }
            else if (companyEmail.match("@")) {

                if (companyEmail.match("gmail.com")) {

                    if (companyWebsite.trim() === "") {

                        Toastify({
                            text: "Website Is Required ",
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

                    }
                    else if (companyWebsite.match("www")) {

                        if (financialYear.trim() === "") {

                            Toastify({
                                text: "Financial Year Is Required ",
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

                        }
                        else if (stockType.trim() === "") {

                            Toastify({
                                text: "Select Company Stock Type ",
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

                        }
                        else if (stockType.trim() === "-- Select Stock Type --") {

                            Toastify({
                                text: "Select Company Stock Type ",
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

                        } else {

                            editCompanyData();

                        }

                    } else {

                        Toastify({
                            text: "Invalid Website Domain ",
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
                    }

                } else {

                    Toastify({
                        text: "Only 'gmail.com' Allowed ",
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
                }

            } else {

                Toastify({
                    text: "Invalid Email ID ",
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
            }

        } else {

            Toastify({
                text: "Invalid Number ",
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

        }

    } else {

        Toastify({
            text: "Only Indian Number Allowed ",
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

    }

});

function editCompanyData() {

    let currentUser = null;

    if (sessionLogin === true) {

        currentUser = sessionStorage.getItem("currentUser");

    } else {

        currentUser = localStorage.getItem("currentUser");

    }

    /* =============== LOAD ALL COMPANY DATA =============== */
    let companyData = JSON.parse(localStorage.getItem("companyData")) || [];

    /* =============== ALL INPUTS =============== */
    let companyName = document.getElementById("editcompanyName");
    let mailingName = document.getElementById("editmailingName");
    let companyAddress = document.getElementById("editcompanyAddress");
    let mobileNumber = document.getElementById("editmobileNumber");
    let faxNumber = document.getElementById("editfaxNumber");
    let cinNumber = document.getElementById("editcinNumber");
    let companyEmail = document.getElementById("editcompanyEmail");
    let companyWebsite = document.getElementById("editcompanyWebsite");
    let financialYear = document.getElementById("editfinancialYear");
    let stockType = document.getElementById("editstockType");

    let companyLogo = document.getElementById("editcompanyLogo");
    let editCompanyModal = document.getElementById("editCompanyModal");

    let isNewLogoSelected = companyLogo.files.length > 0;

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
    popupMessage.textContent = "Are You Want To Sure To Update This Company Details?";

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

        if (companyData.length !== 0) {

            for (let i = 0; i < companyData.length; i++) {

                if (companyData[i].creator === currentUser) {

                    companyData[i].companyName = companyName.value;
                    companyData[i].mailingName = mailingName.value;
                    companyData[i].address = companyAddress.value;
                    companyData[i].mobile = mobileNumber.value;
                    companyData[i].fax = faxNumber.value;
                    companyData[i].cin = cinNumber.value;
                    companyData[i].email = companyEmail.value;
                    companyData[i].website = companyWebsite.value;
                    companyData[i].financialYear = financialYear.value;
                    companyData[i].stockType = stockType.value;

                    if (isNewLogoSelected) {

                        companyData[i].logo = editlogoPreviewImg.src;

                    }

                }

            }

            localStorage.setItem("companyData", JSON.stringify(companyData));
            loadCompanyData();

            editCompanyModal.style.display = "none";

        }

        Toastify({
            text: "Company Updated ",
            duration: 2000,
            close: false,
            gravity: "top",
            position: "right",
            style: {

                background: "#009a03",
                color: "#FFFFFF",
                borderRadius: "10px"

            }
        }).showToast();

        window.scrollTo(0, 0);

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

let editcompanyLogo = document.getElementById("editcompanyLogo");
editcompanyLogo.addEventListener("change", () => {

    let editlogoPreview = document.getElementById("editlogoPreview");
    let editlogoPreviewImg = document.getElementById("editlogoPreviewImg");


    let file = editcompanyLogo.files[0];

    /* =============== CHECK INVALID FILE =============== */

    if (!file) {

        Toastify({
            text: "Invalid File ",
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

        editlogoPreviewImg.src = "";
        editlogoPreview.style.display = "none";
        return;
    }

    /* =============== CHECK FILE SIZE =============== */

    if (file.size > 1024 * 1024) {

        Toastify({
            text: "Logo Size Must Be Under 1MB ",
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

        editlogoPreviewImg.src = "";
        editlogoPreview.style.display = "none";
        return;

    }

    /* =============== LOAD COMPANY LOGO =============== */

    let fileReader = new FileReader();

    fileReader.onload = () => {

        editlogoPreviewImg.src = fileReader.result;
        editlogoPreview.style.display = "flex";

    }

    fileReader.readAsDataURL(file);

});

let editCreateModal = document.getElementById("editCreateModal");
editCreateModal.addEventListener("click", () => {

    let editCompanyModal = document.getElementById("editCompanyModal");
    editCompanyModal.style.display = "none";

});

/* =============== OPEN MY COMPANY =============== */

let myCompanyBtn = document.getElementById("myCompanyBtn");
myCompanyBtn.addEventListener("click", openCompanyPage)

function openCompanyPage() {

    let currentUser = null;

    if (sessionLogin === true) {

        currentUser = sessionStorage.getItem("currentUser");

    } else {

        currentUser = localStorage.getItem("currentUser");

    }

    /* =============== LOAD ALL COMPANY DATA =============== */
    let companyData = JSON.parse(localStorage.getItem("companyData")) || [];

    if (companyData.length !== 0) {

        for (let i = 0; i < companyData.length; i++) {

            if (companyData[i].creator === currentUser) {

                if (companyData[i].stockType === "Account With Inventory") {

                    window.open("./assets/account-with-inventory.html", "_self");

                }
                else if (companyData[i].stockType === "Account Only") {

                    window.open("./assets/account-only.html", "_self");

                }

            }

        }

    }
}