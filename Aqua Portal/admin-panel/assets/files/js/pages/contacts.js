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

/* =============== LOAD CONTACT DETAILS =============== */

function loadContact() {

    let table = document.getElementById("tableContainer");
    let notFoundBox = document.getElementById("noDataBox");
    let usersTableBody = document.getElementById("usersTableBody");

    /* =============== LOAD CONTACTS =============== */
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    if (contacts === null) {

        table.style.display = "none";
        notFoundBox.style.display = "flex";

    } else {

        if (contacts.length === 0) {

            table.style.display = "none";
            notFoundBox.style.display = "flex";

        } else {

            table.style.display = "flex";
            notFoundBox.style.display = "none";

            /* =============== SHOW ALL CONTACTS =============== */

            usersTableBody.innerHTML = "";

            for (let i = 0; i < contacts.length; i++) {

                usersTableBody.innerHTML += `
                <tr>
                    <td>${contacts[i].id}</td>
                    <td>${contacts[i].name}</td>
                    <td>${contacts[i].number}</td>
                    <td>${contacts[i].location}</td>
                    <td>${contacts[i].createdBy}</td>
                    <td>${contacts[i].createdAt}</td>
                    <td>${contacts[i].updatedAt}</td>
                    <td>
                        <div class="action-btns">
                            <i class="ri-eye-line btn-view" onclick="viewBox(${i})"></i>
                            <i class="ri-pencil-line btn-edit" onclick="updateContact(${i})"></i>
                            <i class="ri-delete-bin-line btn-delete" 
                                onclick="deleteContact(${i}, '${contacts[i].name}')">
                            </i>
                        </div>
                    </td>
                </tr>
                `;
            }

        }

    }
}

loadContact();

/* ================= DELETE CONTACT ================= */

function deleteContact(index, name) {

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
    popupMessage.innerHTML = `Are You Want To Sure To Delete <b>${name}</b> Contact?`;

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


        /* =============== CONDITION FOR DATA STORE =============== */

        deletedContacts.push(newDeletedContact);
        localStorage.setItem("deletedContacts", JSON.stringify(deletedContacts));

        /* =============== DELETE CONTACT =============== */

        contacts.splice(index, 1);
        localStorage.setItem("contacts", JSON.stringify(contacts));
        loadContact();

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

/* ================= SEARCH CONTACT ================= */

function searchUsers() {

    /* =============== LOAD CONTACTS =============== */
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    let table = document.getElementById("tableContainer");
    let notFoundBox = document.getElementById("noDataBox");
    let usersTableBody = document.getElementById("usersTableBody");

    let userInput = document.getElementById("searchUser").value.toLowerCase().trim();

    usersTableBody.innerHTML = "";

    if (userInput === "") {
        loadContact();
        return;
    }

    let found = false;

    for (let i = 0; i < contacts.length; i++) {

        let name = String(contacts[i].name).toLowerCase();
        let number = String(contacts[i].number).toLowerCase();
        let location = String(contacts[i].location).toLowerCase();

        if (name.includes(userInput) || number.includes(userInput) || location.includes(userInput)) {

            found = true;

            usersTableBody.innerHTML += `
                <tr>
                    <td>${contacts[i].id}</td>
                    <td>${contacts[i].name}</td>
                    <td>${contacts[i].number}</td>
                    <td>${contacts[i].location}</td>
                    <td>${contacts[i].createdBy}</td>
                    <td>${contacts[i].createdAt}</td>
                    <td>${contacts[i].updatedAt}</td>
                    <td>
                        <div class="action-btns">
                            <i class="ri-survey-line btn-view" onclick="viewBox(${i})"></i>
                            <i class="ri-pencil-line btn-edit" onclick="updateContact(${i})"></i>
                            <i class="ri-delete-bin-line btn-delete"
                                onclick="deleteContact(${i}, ${JSON.stringify(contacts[i].name)})">
                            </i>
                        </div>
                    </td>
                </tr>
            `;
        }
    }

    if (!found) {

        table.style.display = "none";
        notFoundBox.style.display = "flex";

    } else {

        table.style.display = "flex";
        notFoundBox.style.display = "none";

    }

}

/* ================= UPDATE CONTACT ================= */

function updateContact(index) {

    let table = document.getElementById("tableContainer");
    let notFoundBox = document.getElementById("noDataBox");
    let usersTableBody = document.getElementById("usersTableBody");
    let updateBtn = document.getElementById("updateBtn");

    document.getElementById("editContainer").classList.add("active");

    /* =============== ALL INPUT =============== */
    let nameInput = document.getElementById("nameInput");
    let numberInput = document.getElementById("numberInput");
    let locationInput = document.getElementById("locationInput");
    let inputBox = document.getElementsByClassName("inputBox");
    let errorText = document.getElementsByClassName("error-text");

    /* =============== LOAD CONTACTS =============== */
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    if (contacts !== null) {

        nameInput.value = contacts[index].name;
        numberInput.value = contacts[index].number;
        locationInput.value = contacts[index].location;
        updateBtn.style.display = "flex";

    } else {

        updateBtn.style.display = "none";

    }

    updateBtn.onclick = function () {

        if (nameInput.value.trim() === "") {

            inputBox[0].style.borderColor = "#FF0000";
            errorText[0].style.display = "block";
            errorText[0].innerHTML = "Full Name Is Required";

        }
        else if (numberInput.value === "") {

            inputBox[0].style.borderColor = "#e5e7eb";
            errorText[0].style.display = "none";
            errorText[0].innerHTML = "";

            inputBox[1].style.borderColor = "#FF0000";
            errorText[1].style.display = "block";
            errorText[1].innerHTML = "Mobile Number Is Required";

        }
        else if (numberInput.value.length !== 10) {

            inputBox[1].style.borderColor = "#FF0000";
            errorText[1].style.display = "block";
            errorText[1].innerHTML = "Invalid Mobile Number";

        }
        else if (numberInput.value[0].match(/[7-9]/g)) {

            inputBox[1].style.borderColor = "#e5e7eb";
            errorText[1].style.display = "none";
            errorText[1].innerHTML = "";

            if (locationInput.value.trim() === "") {

                inputBox[2].style.borderColor = "#FF0000";
                errorText[2].style.display = "block";
                errorText[2].innerHTML = "Location Is Required";

            } else {

                inputBox[2].style.borderColor = "#e5e7eb";
                errorText[2].style.display = "none";
                errorText[2].innerHTML = "";

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
                popupMessage.innerHTML = `Are You Want To Sure To Update <b>${contacts[index].name}</b> Contact?`;

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

                    let currentDate = new Date();

                    contacts[index].name = nameInput.value;
                    contacts[index].number = numberInput.value;
                    contacts[index].location = locationInput.value;
                    contacts[index].id = "contact_" + numberInput.value;
                    updatedAt: currentDate.toLocaleDateString() + " at " + currentDate.toLocaleTimeString();

                    // /* =============== UPDATE CONTACTS =============== */
                    localStorage.setItem("contacts", JSON.stringify(contacts));
                    document.getElementById("editContainer").classList.remove("active");
                    loadContact();

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

        }
        else {

            inputBox[1].style.borderColor = "#FF0000";
            errorText[1].style.display = "block";
            errorText[1].innerHTML = "Only Indian Number Allowed";
        }

    }
}

let editBoxClose = document.getElementById("editBoxClose");
editBoxClose.onclick = () => {

    document.getElementById("editContainer").classList.remove("active");

}

/* ================= VIEW & PRINT CONTACT DETAILS ================= */

function viewBox(index) {

    document.getElementById("viewDetail").classList.add("active");

    /* =============== LOAD CONTACTS =============== */
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    let userId = document.getElementById("userId");
    let userName = document.getElementById("userName");
    let userNumber = document.getElementById("userNumber");
    let userLocation = document.getElementById("userLocation");
    let userCreatedBy = document.getElementById("userCreatedBy");
    let userCreatedAt = document.getElementById("userCreatedAt");
    let userUpdatedAt = document.getElementById("userUpdatedAt");

    let pdfBox = document.getElementById("viewDetail");
    let pdfBtn = document.getElementById("pdfBtn");

    if (contacts !== null) {

        userId.innerHTML = contacts[index].id;
        userName.innerHTML = contacts[index].name;
        userNumber.innerHTML = contacts[index].number;
        userLocation.innerHTML = contacts[index].location;
        userCreatedBy.innerHTML = contacts[index].createdBy;
        userCreatedAt.innerHTML = contacts[index].createdAt;
        userUpdatedAt.innerHTML = contacts[index].updatedAt;
    }

    pdfBtn.onclick = function () {

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
        popupMessage.innerHTML = `Are You Want To Sure To Save This PDF?`;

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

            const { jsPDF } = window.jspdf;

            let pdf = new jsPDF("p", "pt", "a4");

            let pdfWidth = pdf.internal.pageSize.getWidth();
            let margin = 20;

            let contentWidth = pdfBox.offsetWidth;

            let scale = (pdfWidth - margin * 2) / contentWidth;

            viewBoxClose.style.display = "none";
            pdfBtn.style.display = "none";

            pdf.html(pdfBox, {

                html2canvas: {

                    scale: scale,
                    useCORS: true,

                },

                callback: function (pdf) {

                    pdf.save("Contact-" + contacts[index].number + "-Details.pdf");
                    document.getElementById("viewDetail").classList.remove("active");

                },
                x: margin,
                y: margin
            });

            setTimeout(() => {

                viewBoxClose.style.display = "block";
                pdfBtn.style.display = "flex";

            }, 250);

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
}

let viewBoxClose = document.getElementById("viewBoxClose");
viewBoxClose.onclick = () => {

    document.getElementById("viewDetail").classList.remove("active");

}