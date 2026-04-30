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
                            <i class="ri-survey-line btn-view" onclick="openViewModal(${i})"></i>
                            <i class="ri-pencil-line btn-edit" onclick="openUpdateModal(${i})"></i>
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
                            <i class="ri-survey-line btn-view" onclick="openViewModal(${i})"></i>
                            <i class="ri-pencil-line btn-edit" onclick="openUpdateModal(${i})"></i>
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

/* ================= VIEW MODAL ================= */

let selectedContactIndex = null;
let selectedContactData = null;

function openViewModal(index) {

    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    const contact = contacts[index];

    if (!contact) return;

    selectedContactData = contact;

    const companyName = "Aqua Portal";
    const tagline = "Water Management & Customer System";

    const devName = "Developed By Sarfraj Shaikh";

    // logo image (normal image file allowed in modal)
    const logoPath = "../../assets/img/logo.avif";

    const html = `
        <div class="pdf-header">
            <img src="${logoPath}" alt="Company Logo">
            <div>
                <h2>${companyName}</h2>
                <p>${tagline}</p>
            </div>
        </div>

        <div class="pdf-title">Contact Details Report</div>

        <div class="pdf-details">
            <div class="pdf-row">
                <div class="pdf-label">ID</div>
                <div class="pdf-value">${contact.id}</div>
            </div>

            <div class="pdf-row">
                <div class="pdf-label">Name</div>
                <div class="pdf-value">${contact.name}</div>
            </div>

            <div class="pdf-row">
                <div class="pdf-label">Number</div>
                <div class="pdf-value">${contact.number}</div>
            </div>

            <div class="pdf-row">
                <div class="pdf-label">Location</div>
                <div class="pdf-value">${contact.location}</div>
            </div>

            <div class="pdf-row">
                <div class="pdf-label">Created By</div>
                <div class="pdf-value">${contact.createdBy}</div>
            </div>

            <div class="pdf-row">
                <div class="pdf-label">Created At</div>
                <div class="pdf-value">${contact.createdAt}</div>
            </div>

            <div class="pdf-row">
                <div class="pdf-label">Updated At</div>
                <div class="pdf-value">${contact.updatedAt}</div>
            </div>
        </div>

        <div class="pdf-footer">
            <p><b>${devName}</b></p>
            <p>
                Social Links:
                <a href="https://instagram.com/" target="_blank">Instagram</a> |
                <a href="https://linkedin.com/" target="_blank">LinkedIn</a> |
                <a href="https://github.com/" target="_blank">GitHub</a>
            </p>
        </div>
    `;

    document.getElementById("pdfPreview").innerHTML = html;
    document.getElementById("viewModal").style.display = "flex";
}

function closeViewModal() {
    document.getElementById("viewModal").style.display = "none";
}

function closeViewModal() {
    document.getElementById("viewModal").style.display = "none";
}


/* ================= SAVE AS PDF ================= */

function saveAsPDF() {

    if (!selectedContactData) {
        alert("No contact selected!");
        return;
    }

    let confirmDownload = confirm("Do you want to download this contact report as PDF?");

    if (!confirmDownload) {
        return;
    }

    if (!window.jspdf) {
        alert("jsPDF library not loaded!");
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF("p", "mm", "a4");

    const contact = selectedContactData;

    doc.setDrawColor(79, 70, 229);
    doc.setLineWidth(1);
    doc.rect(8, 8, 194, 281);

    doc.setFillColor(238, 242, 255);
    doc.rect(8, 8, 194, 40, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(17, 24, 39);
    doc.text("Aqua Portal", 20, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(107, 114, 128);
    doc.text("Water Management & Customer System", 20, 28);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(79, 70, 229);
    doc.text("CONTACT DETAILS REPORT", 20, 40);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(55, 65, 81);
    doc.text("Generated: " + new Date().toLocaleString(), 20, 50);

    let y = 70;

    function addRow(label, value) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.setTextColor(17, 24, 39);
        doc.text(label + ":", 20, y);

        doc.setFont("helvetica", "normal");
        doc.setTextColor(55, 65, 81);
        doc.text(String(value || "-"), 70, y);

        y += 10;
        doc.setDrawColor(229, 231, 235);
        doc.line(20, y - 5, 190, y - 5);
    }

    addRow("ID", contact.id);
    addRow("Name", contact.name);
    addRow("Number", contact.number);
    addRow("Location", contact.location);
    addRow("Created By", contact.createdBy);
    addRow("Created At", contact.createdAt);
    addRow("Updated At", contact.updatedAt);

    doc.setFillColor(238, 242, 255);
    doc.rect(8, 265, 194, 24, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(17, 24, 39);
    doc.text("Developed By Sarfraj Shaikh", 12, 275);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(79, 70, 229);
    doc.text("Instagram: https://instagram.com/", 12, 283);

    doc.save(contact.name + "-report.pdf");
}

/* ================= UPDATE MODAL ================= */

function openUpdateModal(index) {

    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    const contact = contacts[index];

    if (!contact) return;

    selectedContactIndex = index;

    document.getElementById("upName").value = contact.name;
    document.getElementById("upNumber").value = contact.number;
    document.getElementById("upLocation").value = contact.location;
    document.getElementById("upCreatedBy").value = contact.createdBy;

    clearErrors();

    document.getElementById("updateModal").style.display = "flex";
}

function closeUpdateModal() {
    document.getElementById("updateModal").style.display = "none";
    selectedContactIndex = null;
}


/* ================= FORM VALIDATION ================= */

function clearErrors() {
    document.getElementById("errName").textContent = "";
    document.getElementById("errNumber").textContent = "";
    document.getElementById("errLocation").textContent = "";
    document.getElementById("errCreatedBy").textContent = "";
}

function validateForm(name, number, location, createdBy) {

    clearErrors();
    let isValid = true;

    if (name.trim() === "") {
        document.getElementById("errName").textContent = "Name is required";
        isValid = false;
    }

    if (number.trim() === "") {
        document.getElementById("errNumber").textContent = "Number is required";
        isValid = false;
    } else if (!/^[0-9]{10}$/.test(number)) {
        document.getElementById("errNumber").textContent = "Enter valid 10 digit number";
        isValid = false;
    }

    if (location.trim() === "") {
        document.getElementById("errLocation").textContent = "Location is required";
        isValid = false;
    }

    if (createdBy.trim() === "") {
        document.getElementById("errCreatedBy").textContent = "Created By is required";
        isValid = false;
    }

    return isValid;
}


/* ================= UPDATE CONTACT ================= */

function updateContact() {

    if (selectedContactIndex === null) return;

    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    let name = document.getElementById("upName").value;
    let number = document.getElementById("upNumber").value;
    let location = document.getElementById("upLocation").value;
    let createdBy = document.getElementById("upCreatedBy").value;

    if (!validateForm(name, number, location, createdBy)) {
        return;
    }

    contacts[selectedContactIndex].name = name;
    contacts[selectedContactIndex].number = number;
    contacts[selectedContactIndex].location = location;
    contacts[selectedContactIndex].createdBy = createdBy;
    contacts[selectedContactIndex].updatedAt = new Date().toLocaleString();

    localStorage.setItem("contacts", JSON.stringify(contacts));

    closeUpdateModal();
    loadContact();
}