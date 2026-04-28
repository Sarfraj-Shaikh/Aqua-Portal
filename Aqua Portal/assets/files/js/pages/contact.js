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

    location.assign("./dashboard.html");
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

                window.open("./profile-photo.html", "_self");

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

/* =============== FORM VALIDATION =============== */

function formVal() {

    let errorText1 = document.getElementById("errorText1");
    let errorText2 = document.getElementById("errorText2");
    let errorText3 = document.getElementById("errorText3");

    let contactName = document.getElementById("nameInput");
    let contactNumber = document.getElementById("numberInput");
    let contactLocation = document.getElementById("locationInput");

    const indNum = /[7-9]/g;

    if (contactName.value.trim() === "") {

        contactName.style.borderColor = "#FF0000";
        errorText1.style.display = "block";
        errorText1.textContent = "Full Name Is Required";

    }
    else if (contactName.value.length > 15) {

        contactName.style.borderColor = "#FF0000";
        errorText1.style.display = "block";
        errorText1.textContent = "Max 15 Characters Allowed";

    } else {

        contactName.style.borderColor = "inherit";
        errorText1.style.display = "none";
        errorText1.textContent = "";

        if (contactNumber.value === "") {

            contactNumber.style.borderColor = "#FF0000";
            errorText2.style.display = "block";
            errorText2.textContent = "Mobile Number Is Required";

        }
        else if (contactNumber.value.match(indNum)) {

            if (contactNumber.value.length < 10) {

                contactNumber.style.borderColor = "#FF0000";
                errorText2.style.display = "block";
                errorText2.textContent = "Minimum 10 Digits Required";

            }
            else if (contactNumber.value.length === 10) {

                contactNumber.style.borderColor = "inherit";
                errorText2.style.display = "none";
                errorText2.textContent = "";

                if (contactLocation.value.trim() === "") {

                    contactLocation.style.borderColor = "#FF0000";
                    errorText3.style.display = "block";
                    errorText3.textContent = "Enter Location Details";

                } else {

                    contactLocation.style.borderColor = "inherit";
                    errorText3.style.display = "none";
                    errorText3.textContent = "";
                    addContact(contactName.value, contactNumber.value, contactLocation.value);
                }

            } else {

                contactNumber.style.borderColor = "#FF0000";
                errorText2.style.display = "block";
                errorText2.textContent = "Max 10 Digits Allowed";

            }


        } else {

            contactNumber.style.borderColor = "#FF0000";
            errorText2.style.display = "block";
            errorText2.textContent = "Only Indian Number Allowed";

        }

    }

}

/* =============== ADD CONTACT =============== */

function addContact(name, number, location) {

    let contactNumber = document.getElementById("numberInput");
    let errorText2 = document.getElementById("errorText2");

    let currentUser = null;

    if (sessionLogin === true) {

        currentUser = sessionStorage.getItem("currentUser");

    } else {

        currentUser = localStorage.getItem("currentUser");

    }

    let currentDate = new Date();

    let newContact = {
        id: "contact_" + number,
        name: name,
        number: number,
        location: location,
        createdBy: currentUser,
        createdAt: currentDate.toLocaleDateString() + " at " + currentDate.toLocaleTimeString(),
        updatedAt: currentDate.toLocaleDateString() + " at " + currentDate.toLocaleTimeString()
    }

    /* =============== LOAD ALL CONTACT =============== */
    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    /* =============== DUPLICATE NUMBER SECURITY =============== */

    let numExist = false;

    for (let i = 0; i < contacts.length; i++) {

        if (contacts[i].createdBy === currentUser) {

            if (contacts[i].number === number) {

                numExist = true;
                break;

            }
        }
    }

    /* =============== CONDITION FOR DATA STORE =============== */

    if (numExist === true) {

        contactNumber.style.borderColor = "#FF0000";
        errorText2.style.display = "block";
        errorText2.textContent = "Number Already Exist";

    } else {

        contactNumber.style.borderColor = "inherit";
        errorText2.style.display = "none";
        errorText2.textContent = "";

        contacts.push(newContact);
        localStorage.setItem("contacts", JSON.stringify(contacts));
        clearInput();
        loadSavedContacts();

    }

}

/* =============== CLEAR FORM INPUT =============== */

function clearInput() {

    let contactName = document.getElementById("nameInput");
    let contactNumber = document.getElementById("numberInput");
    let contactLocation = document.getElementById("locationInput");

    setTimeout(function () {

        contactName.value = "";
        contactNumber.value = "";
        contactLocation.value = "";

    }, 500)
}

/* =============== LOAD SAVED CONTACTS =============== */

function loadSavedContacts() {

    let notFoundBox = document.getElementById("savedNotFound");
    let contactList = document.getElementById("savedListCard");
    let addContactBtn = document.getElementById("addContactBtn");
    let updateContactBtn = document.getElementById("updateContactBtn");

    let currentUser = null;

    if (sessionLogin === true) {

        currentUser = sessionStorage.getItem("currentUser");

    } else {

        currentUser = localStorage.getItem("currentUser");

    }

    /* =============== LOAD ALL CONTACTS =============== */

    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    /* =============== CONTACTS IS EMPTY OR NOT =============== */

    if (contacts.length > 0) {

        /* =============== SHOWING CONTACT LIST FOR SPECIFIC LOAGGED USER =============== */

        savedListCard.innerHTML = "";

        for (let i = 0; i < contacts.length; i++) {

            if (currentUser !== null) {

                if (contacts[i].createdBy === currentUser) {

                    notFoundBox.style.display = "none";
                    savedListCard.style.display = "flex";

                    savedListCard.innerHTML += `
                    <div class="left">
                        <p><i class="ri-user-line"></i> ${contacts[i].name}</p>
                        <p><i class="ri-phone-line"></i> ${contacts[i].number}</p>
                        <p><i class="ri-map-pin-2-line"></i> ${contacts[i].location}</p>
                    </div>

                    <div class="right">
                        <div class="btn editBtn" data-index="${i}">
                            <i class="ri-pencil-line"></i> Edit
                        </div>

                        <div class="btn deleteBtn" data-index="${i}">
                            <i class="ri-delete-bin-line"></i> Delete
                        </div>
                    </div>
                `;
                }

            }
        }

    } else {

        notFoundBox.style.display = "flex";
        savedListCard.style.display = "none";

    }

}

loadSavedContacts();

savedListCard.addEventListener("click", function (e) {

    let editBtn = e.target.closest(".editBtn");
    let deleteBtn = e.target.closest(".deleteBtn");

    if (editBtn) {

        let index = editBtn.getAttribute("data-index");
        editContact(index);

        addContactBtn.style.display = "none";
        updateContactBtn.style.display = "flex";
        window.scrollTo(0, 0);

    }

    if (deleteBtn) {

        let index = deleteBtn.getAttribute("data-index");
        deleteContact(index);

    }

});

/* =============== EDIT/UPDATE CONTACT =============== */

function editContact(index) {

    let currentUser = null;

    if (sessionLogin === true) {

        currentUser = sessionStorage.getItem("currentUser");

    } else {

        currentUser = localStorage.getItem("currentUser");

    }

    let contactName = document.getElementById("nameInput");
    let contactNumber = document.getElementById("numberInput");
    let contactLocation = document.getElementById("locationInput");

    let addContactBtn = document.getElementById("addContactBtn");
    let updateContactBtn = document.getElementById("updateContactBtn");

    let errorText1 = document.getElementById("errorText1");
    let errorText2 = document.getElementById("errorText2");
    let errorText3 = document.getElementById("errorText3");

    /* =============== LOAD ALL CONTACT DETAILS =============== */
    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    /* =============== FETCH DATA INTO FORM =============== */

    contactName.value = contacts[index].name;
    contactNumber.value = contacts[index].number;
    contactLocation.value = contacts[index].location;

    let contactId = contacts[index].id;
    let contactCreator = contacts[index].createdBy;

    updateContactBtn.addEventListener("click", function () {

        const indNum = /[7-9]/g;

        if (contactName.value.trim() === "") {

            contactName.style.borderColor = "#FF0000";
            errorText1.style.display = "block";
            errorText1.textContent = "Full Name Is Required";

        }
        else if (contactName.value.length > 15) {

            contactName.style.borderColor = "#FF0000";
            errorText1.style.display = "block";
            errorText1.textContent = "Max 15 Characters Allowed";

        } else {

            contactName.style.borderColor = "inherit";
            errorText1.style.display = "none";
            errorText1.textContent = "";

            if (contactNumber.value === "") {

                contactNumber.style.borderColor = "#FF0000";
                errorText2.style.display = "block";
                errorText2.textContent = "Mobile Number Is Required";

            }
            else if (contactNumber.value.match(indNum)) {

                if (contactNumber.value.length < 10) {

                    contactNumber.style.borderColor = "#FF0000";
                    errorText2.style.display = "block";
                    errorText2.textContent = "Minimum 10 Digits Required";

                }
                else if (contactNumber.value.length === 10) {

                    contactNumber.style.borderColor = "inherit";
                    errorText2.style.display = "none";
                    errorText2.textContent = "";

                    if (contactLocation.value.trim() === "") {

                        contactLocation.style.borderColor = "#FF0000";
                        errorText3.style.display = "block";
                        errorText3.textContent = "Enter Location Details";

                    } else {

                        contactLocation.style.borderColor = "inherit";
                        errorText3.style.display = "none";
                        errorText3.textContent = "";

                        /* =============== DUPLICATE NUMBER SECURITY =============== */

                        let numExist = false;

                        for (let i = 0; i < contacts.length; i++) {

                            if (contacts[i].createdBy === currentUser) {

                                if (contactNumber.value === contacts[i].number) {

                                    numExist = true;
                                    break;

                                }
                            }
                        }

                        /* =============== CONDITION FOR DATA STORE =============== */

                        if (numExist === true) {

                            contactNumber.style.borderColor = "#FF0000";
                            errorText2.style.display = "block";
                            errorText2.textContent = "Number Already Exist";

                        } else {

                            contactNumber.style.borderColor = "inherit";
                            errorText2.style.display = "none";
                            errorText2.textContent = "";

                            let currentDate = new Date();

                            contacts[index].name = contactName.value;
                            contacts[index].number = contactNumber.value;
                            contacts[index].id = "contact_" + contacts[index].number;
                            contacts[index].location = contactLocation.value;
                            contacts[index].updatedAt = currentDate.toLocaleDateString() + " at " + currentDate.toLocaleTimeString();

                            localStorage.setItem("contacts", JSON.stringify(contacts));
                            clearInput();
                            loadSavedContacts();

                            addContactBtn.style.display = "flex";
                            updateContactBtn.style.display = "none";

                        }

                    }

                } else {

                    contactNumber.style.borderColor = "#FF0000";
                    errorText2.style.display = "block";
                    errorText2.textContent = "Max 10 Digits Allowed";

                }


            } else {

                contactNumber.style.borderColor = "#FF0000";
                errorText2.style.display = "block";
                errorText2.textContent = "Only Indian Number Allowed";

            }

        }

    });

}

/* =============== DELETE CONTACT =============== */

function deleteContact(index) {

    let currentUser = null;

    if (sessionLogin === true) {

        currentUser = sessionStorage.getItem("currentUser");

    } else {

        currentUser = localStorage.getItem("currentUser");

    }

    /* =============== LOAD ALL CONTACT =============== */

    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    let deletedContacts = JSON.parse(localStorage.getItem("deletedContacts")) || [];

    /* =============== ADD INTO DELETED LIST =============== */

    let newDeletedContact = {
        id: "contact_" + contacts[index].number,
        name: contacts[index].name,
        number: contacts[index].number,
        location: contacts[index].location,
        createdBy: contacts[index].createdBy,
        createdAt: contacts[index].createdAt,
        updatedAt: contacts[index].updatedAt
    }

    /* =============== DUPLICATE NUMBER SECURITY =============== */

    let numExist = false;

    for (let i = 0; i < deletedContacts.length; i++) {

        if (deletedContacts[i].createdBy === currentUser) {

            if (deletedContacts[i].number === newDeletedContact.number) {

                numExist = true;
                break;

            }
        }
    }

    /* =============== CONDITION FOR DATA STORE =============== */

    if (numExist === true) {

        alert("We Can't Delete This Number Because It Is Already Available In Deleted List");

    } else {

        deletedContacts.push(newDeletedContact);
        localStorage.setItem("deletedContacts", JSON.stringify(deletedContacts));
        loadDeletedContacts();

        /* =============== DELETE CONTACT =============== */

        contacts.splice(index, 1);
        localStorage.setItem("contacts", JSON.stringify(contacts));
        loadSavedContacts();

    }

}

/* =============== LOAD DELETED CONTACT =============== */

function loadDeletedContacts() {

    let notFoundBox = document.getElementById("deletedNotFound");
    let deletedCardList = document.getElementById("deletedCardList");

    let currentUser = null;

    if (sessionLogin === true) {

        currentUser = sessionStorage.getItem("currentUser");

    } else {

        currentUser = localStorage.getItem("currentUser");

    }

    /* =============== LOAD ALL CONTACTS =============== */

    let deletedContacts = JSON.parse(localStorage.getItem("deletedContacts")) || [];

    /* =============== CONTACTS IS EMPTY OR NOT =============== */

    if (deletedContacts.length > 0) {

        /* =============== SHOWING CONTACT LIST FOR SPECIFIC LOAGGED USER =============== */

        deletedCardList.innerHTML = "";
        let found = false;

        for (let i = 0; i < deletedContacts.length; i++) {

            if (deletedContacts[i].createdBy === currentUser) {

                found = true;

                deletedCardList.innerHTML += `
                    <div class="left">
                        <p><i class="ri-user-line"></i> ${deletedContacts[i].name}</p>
                        <p><i class="ri-phone-line"></i> ${deletedContacts[i].number}</p>
                        <p><i class="ri-map-pin-2-line"></i> ${deletedContacts[i].location}</p>
                    </div>

                    <div class="right">
                        <div class="btn restoreBtn" data-index="${i}">
                            <i class="ri-refresh-line"></i> Restore
                        </div>
                    </div>
                `;
            }
        }

        if (found === true) {

            notFoundBox.style.display = "none";
            deletedCardList.style.display = "flex";

        } else {

            notFoundBox.style.display = "flex";
            deletedCardList.style.display = "none";

        }

    } else {

        notFoundBox.style.display = "flex";
        deletedCardList.style.display = "none";

    }

}

loadDeletedContacts();

deletedCardList.addEventListener("click", function (e) {

    let restoreBtn = e.target.closest(".restoreBtn");

    if (restoreBtn) {

        let index = restoreBtn.getAttribute("data-index");
        restoreContact(index);

    }

});

/* =============== RESTORE DELETED CONTACT =============== */

function restoreContact(index) {

    let currentUser = null;

    if (sessionLogin === true) {

        currentUser = sessionStorage.getItem("currentUser");

    } else {

        currentUser = localStorage.getItem("currentUser");

    }

    /* =============== LOAD ALL CONTACTS =============== */

    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    let deletedContacts = JSON.parse(localStorage.getItem("deletedContacts")) || [];

    /* =============== RESTORING CONTACT =============== */

    let currentDate = new Date();

    let newContact = {
        id: "contact_" + deletedContacts[index].number,
        name: deletedContacts[index].name,
        number: deletedContacts[index].number,
        location: deletedContacts[index].location,
        createdBy: deletedContacts[index].createdBy,
        createdAt: deletedContacts[index].createdAt,
        updatedAt: currentDate.toLocaleDateString() + " at " + currentDate.toLocaleTimeString()
    }

    /* =============== DUPLICATE NUMBER SECURITY =============== */

    let numExist = false;

    for (let i = 0; i < contacts.length; i++) {

        if (contacts[i].createdBy === currentUser) {

            if (contacts[i].number === newContact.number) {

                numExist = true;
                break;

            }
        }
    }

    /* =============== CONDITION FOR DATA STORE =============== */

    if (numExist === true) {

        alert("We Can't Add This Number Because It Is Already Available In Contact List");

    } else {

        contacts.push(newContact);
        localStorage.setItem("contacts", JSON.stringify(contacts));
        loadSavedContacts();

        /* =============== DELETE CONTACT =============== */

        deletedContacts.splice(index, 1);
        localStorage.setItem("deletedContacts", JSON.stringify(deletedContacts));
        loadDeletedContacts();

    }

}

/* =============== SEARCH CONTACT =============== */

function searchSavedContact() {

    let saveContactSearch = document.getElementById("saveContactSearch").value.toLowerCase().trim();;
    let notFoundBox = document.getElementById("savedNotFound");
    let contactList = document.getElementById("savedListCard");

    let currentUser = null;

    if (sessionLogin === true) {

        currentUser = sessionStorage.getItem("currentUser");

    } else {

        currentUser = localStorage.getItem("currentUser");

    }

    /* =============== LOAD ALL CONTACTS =============== */

    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    contactList.innerHTML = "";
    let found = false;

    for (let i = 0; i < contacts.length; i++) {

        if (currentUser !== null) {

            if (contacts[i].createdBy === currentUser) {

                let name = contacts[i].name.toLowerCase();
                let number = contacts[i].number.toLowerCase();
                let location = contacts[i].location.toLowerCase();

                if (name.includes(saveContactSearch) || number.includes(saveContactSearch) || location.includes(saveContactSearch)) {

                    found = true;

                    contactList.innerHTML += `
                    <div class="left">
                        <p><i class="ri-user-line"></i> ${contacts[i].name}</p>
                        <p><i class="ri-phone-line"></i> ${contacts[i].number}</p>
                        <p><i class="ri-map-pin-2-line"></i> ${contacts[i].location}</p>
                    </div>

                    <div class="right">
                        <div class="btn editBtn" data-index="${i}">
                            <i class="ri-pencil-line"></i> Edit
                        </div>

                        <div class="btn deleteBtn" data-index="${i}">
                            <i class="ri-delete-bin-line"></i> Delete
                        </div>
                    </div>
                `;
                }
            }
        }

        if (found) {

            notFoundBox.style.display = "none";
            contactList.style.display = "flex";

        } else {

            notFoundBox.style.display = "flex";
            contactList.style.display = "none";

        }
    }
}

/* =============== SEARCH DELETED CONTACT =============== */
function searchDeletedContact() {

    let deletedContactSearch = document.getElementById("deletedContactSearch").value.toLowerCase().trim();;
    let notFoundBox = document.getElementById("deletedNotFound");
    let contactList = document.getElementById("deletedCardList");

    let currentUser = null;

    if (sessionLogin === true) {

        currentUser = sessionStorage.getItem("currentUser");

    } else {

        currentUser = localStorage.getItem("currentUser");

    }

    /* =============== LOAD ALL CONTACTS =============== */

    let deletedContacts = JSON.parse(localStorage.getItem("deletedContacts")) || [];

    contactList.innerHTML = "";
    let found = false;

    for (let i = 0; i < deletedContacts.length; i++) {

        if (currentUser !== null) {

            if (deletedContacts[i].createdBy === currentUser) {

                let name = deletedContacts[i].name.toLowerCase();
                let number = deletedContacts[i].number.toLowerCase();
                let location = deletedContacts[i].location.toLowerCase();

                if (name.includes(deletedContactSearch) || number.includes(deletedContactSearch) || location.includes(deletedContactSearch)) {

                    found = true;

                    contactList.innerHTML += `
                    <div class="left">
                        <p><i class="ri-user-line"></i> ${deletedContacts[i].name}</p>
                        <p><i class="ri-phone-line"></i> ${deletedContacts[i].number}</p>
                        <p><i class="ri-map-pin-2-line"></i> ${deletedContacts[i].location}</p>
                    </div>

                    <div class="right">
                        <div class="btn restoreBtn" data-index="${i}">
                            <i class="ri-refresh-line"></i> Restore
                        </div>
                    </div>
                `;
                }
            }
        }

        if (found) {

            notFoundBox.style.display = "none";
            contactList.style.display = "flex";

        } else {

            notFoundBox.style.display = "flex";
            contactList.style.display = "none";

        }
    }
}