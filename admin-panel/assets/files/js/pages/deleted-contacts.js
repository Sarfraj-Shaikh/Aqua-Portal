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
    const contacts = JSON.parse(localStorage.getItem("deletedContacts")) || [];

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
                            <i class="ri-refresh-line btn-edit" onclick="recoverContact(${i})"></i>
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
    popupMessage.innerHTML = `Are You Want To Sure To Delete <b>${name}</b> Contact Permanently?`;

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

        let deletedContacts = JSON.parse(localStorage.getItem("deletedContacts")) || [];

        /* =============== DELETE CONTACT =============== */

        deletedContacts.splice(index, 1);
        localStorage.setItem("deletedContacts", JSON.stringify(deletedContacts));
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
    const contacts = JSON.parse(localStorage.getItem("deletedContacts")) || [];

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
                            <i class="ri-eye-line btn-view" onclick="viewBox(${i})"></i>
                            <i class="ri-refresh-line btn-edit" onclick="recoverContact(${i})"></i>
                            <i class="ri-delete-bin-line btn-delete" 
                                onclick="deleteContact(${i}, '${contacts[i].name}')">
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

/* ================= VIEW & PRINT CONTACT DETAILS ================= */

function viewBox(index) {

    document.getElementById("viewDetail").classList.add("active");

    /* =============== LOAD CONTACTS =============== */
    const contacts = JSON.parse(localStorage.getItem("deletedContacts")) || [];

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

/* ================= RECOVER CONTACT DETAILS ================= */

function recoverContact(index) {

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
    popupMessage.innerHTML = `Are You Want To Sure To Restore This Contact?`;

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

        contacts.push(newContact);
        localStorage.setItem("contacts", JSON.stringify(contacts));

        /* =============== DELETE CONTACT =============== */

        deletedContacts.splice(index, 1);
        localStorage.setItem("deletedContacts", JSON.stringify(deletedContacts));
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
