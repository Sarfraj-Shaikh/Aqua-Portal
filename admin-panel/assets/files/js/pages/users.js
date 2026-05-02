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

/* =============== LOAD USERS DETAILS =============== */

function loadUsers() {

    let userContainer = document.getElementById("userContainer");
    let notFoundBox = document.getElementById("noDataBox");

    /* =============== LOAD USERS =============== */
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users === null) {

        userContainer.style.display = "none";
        notFoundBox.style.display = "flex";

    } else {

        if (users.length === 0) {

            userContainer.style.display = "none";
            notFoundBox.style.display = "flex";

        } else {

            userContainer.style.display = "grid";
            notFoundBox.style.display = "none";

            /* =============== SHOW ALL USERS =============== */

            userContainer.innerHTML = "";

            for (let i = 0; i < users.length; i++) {

                let profileImg = (users[i].profileImg && users[i].profileImg.trim() !== "")
                    ? users[i].profileImg
                    : "../../assets/img/default-dp.jpg";

                userContainer.innerHTML += `
                
                <div class="user-card" id="userCard">

                    <div class="user-header">

                        <img class="user-profile-img" src="${profileImg}" alt="Profile Picture">
                        
                        <div class="user-info">
                            <h2>${users[i].name}</h2>
                            <p>Hey, I'm User Of <b> Aqua Portal </b></p>
                        </div>
                    </div>

                    <div class="user-details">

                    <div class="detail-row">
                        <div class="left">
                            <i class="ri-id-card-line"></i>
                            <span>User ID</span>
                        </div>
                        <div class="right">${users[i].id}</div>
                    </div>

                    <div class="detail-row">
                        <div class="left">
                            <i class="ri-mail-line"></i>
                            <span>Email</span>
                        </div>
                        <div class="right">${users[i].email}</div>
                    </div>

                    <div class="detail-row">
                        <div class="left">
                            <i class="ri-phone-line"></i>
                            <span>Mobile</span>
                        </div>
                        <div class="right">${users[i].number}</div>
                    </div>

                    <div class="detail-row">
                        <div class="left">
                            <i class="ri-lock-line"></i>
                            <span>Password</span>
                        </div>
                        <div class="right">${users[i].password}</div>
                    </div>

                    <div class="detail-row">
                        <div class="left">
                            <i class="ri-time-line"></i>
                            <span>Created At</span>
                        </div>
                        <div class="right">${users[i].createdAt}</div>
                    </div>

                    <div class="detail-row">
                        <div class="left">
                            <i class="ri-refresh-line"></i>
                            <span>Updated At</span>
                        </div>
                        <div class="right">${users[i].updatedAt}</div>
                    </div>

                </div>

                <div class="actions">
                    <button class="btn btn-view" onclick="viewBox(${[i]})">
                        <i class="ri-eye-line"></i> View
                    </button>

                    <button class="btn btn-edit" onclick="editContact(${[i]})">
                        <i class="ri-edit-line"></i> Edit
                    </button>

                    <button class="btn btn-delete" onclick="deleteUser(${[i]})">
                        <i class="ri-delete-bin-line"></i> Delete
                    </button>
                </div>

            </div>
            
                `;

            }

        }

    }
}

loadUsers();

/* ================= DELETE CONTACT ================= */

function deleteUser(index) {

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
    popupMessage.innerHTML = `Are You Want To Sure To Delete This User Account Permanently?`;

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

        let users = JSON.parse(localStorage.getItem("users")) || [];

        /* =============== DELETE CONTACT =============== */

        users.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(users));
        loadUsers();

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
    const users = JSON.parse(localStorage.getItem("users")) || [];

    let userContainer = document.getElementById("userContainer");
    let notFoundBox = document.getElementById("noDataBox");

    let userInput = document.getElementById("searchUser").value.toLowerCase().trim();

    userContainer.innerHTML = "";

    if (userInput === "") {
        loadUsers();
        return;
    }

    let found = false;

    for (let i = 0; i < users.length; i++) {

        let name = String(users[i].name).toLowerCase();
        let number = String(users[i].number).toLowerCase();
        let email = String(users[i].email).toLowerCase();

        if (name.includes(userInput) || number.includes(userInput) || email.includes(userInput)) {

            found = true;

            let profileImg = (users[i].profileImg && users[i].profileImg.trim() !== "")
                ? users[i].profileImg
                : "../../assets/img/default-dp.jpg";

            userContainer.innerHTML += `
                
                <div class="user-card" id="userCard">

                    <div class="user-header">

                        <img class="user-profile-img" src="${profileImg}" alt="Profile Picture">
                        
                        <div class="user-info">
                            <h2>${users[i].name}</h2>
                            <p>Hey, I'm User Of <b> Aqua Portal </b></p>
                        </div>
                    </div>

                    <div class="user-details">

                    <div class="detail-row">
                        <div class="left">
                            <i class="ri-id-card-line"></i>
                            <span>User ID</span>
                        </div>
                        <div class="right">${users[i].id}</div>
                    </div>

                    <div class="detail-row">
                        <div class="left">
                            <i class="ri-mail-line"></i>
                            <span>Email</span>
                        </div>
                        <div class="right">${users[i].email}</div>
                    </div>

                    <div class="detail-row">
                        <div class="left">
                            <i class="ri-phone-line"></i>
                            <span>Mobile</span>
                        </div>
                        <div class="right">${users[i].number}</div>
                    </div>

                    <div class="detail-row">
                        <div class="left">
                            <i class="ri-lock-line"></i>
                            <span>Password</span>
                        </div>
                        <div class="right">${users[i].password}</div>
                    </div>

                    <div class="detail-row">
                        <div class="left">
                            <i class="ri-time-line"></i>
                            <span>Created At</span>
                        </div>
                        <div class="right">${users[i].createdAt}</div>
                    </div>

                    <div class="detail-row">
                        <div class="left">
                            <i class="ri-refresh-line"></i>
                            <span>Updated At</span>
                        </div>
                        <div class="right">${users[i].updatedAt}</div>
                    </div>

                </div>

                <div class="actions">
                    <button class="btn btn-view" onclick="viewBox(${[i]})">
                        <i class="ri-eye-line"></i> View
                    </button>

                    <button class="btn btn-edit" onclick="editContact(${[i]})">
                        <i class="ri-edit-line"></i> Edit
                    </button>

                    <button class="btn btn-delete" onclick="deleteUser(${[i]})">
                        <i class="ri-delete-bin-line"></i> Delete
                    </button>
                </div>

            </div>
            
                `;

        }
    }

    if (!found) {

        userContainer.style.display = "none";
        notFoundBox.style.display = "flex";

    } else {

        userContainer.style.display = "grid";
        notFoundBox.style.display = "none";

    }

}

/* ================= VIEW & PRINT CONTACT DETAILS ================= */

function viewBox(index) {

    document.getElementById("viewDetail").classList.add("active");

    /* =============== LOAD CONTACTS =============== */
    const users = JSON.parse(localStorage.getItem("users")) || [];

    let userId = document.getElementById("userId");
    let userName = document.getElementById("userName");
    let userNumber = document.getElementById("userNumber");
    let userLocation = document.getElementById("userLocation");
    let userCreatedBy = document.getElementById("userCreatedBy");
    let userCreatedAt = document.getElementById("userCreatedAt");
    let userUpdatedAt = document.getElementById("userUpdatedAt");

    let pdfBox = document.getElementById("viewDetail");
    let pdfBtn = document.getElementById("pdfBtn");

    if (users !== null) {

        userId.innerHTML = users[index].id;
        userName.innerHTML = users[index].name;
        userNumber.innerHTML = users[index].number;
        userLocation.innerHTML = users[index].email;
        userCreatedBy.innerHTML = users[index].password;
        userCreatedAt.innerHTML = users[index].createdAt;
        userUpdatedAt.innerHTML = users[index].updatedAt;
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

                    pdf.save("User-" + users[index].name + "-Details.pdf");
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

/* ================= UPDATE USER DETAILS ================= */

function editContact(index) {

    let table = document.getElementById("tableContainer");
    let notFoundBox = document.getElementById("noDataBox");
    let usersTableBody = document.getElementById("usersTableBody");
    let updateBtn = document.getElementById("updateBtn");
    let addUserBtn = document.getElementById("addUser-Btn");
    let editboxTitle = document.getElementById("editboxTitle");

    editboxTitle.innerHTML = "Update User";

    if (editboxTitle.textContent === "Update User") {

        updateBtn.style.display = "flex";
        addUserBtn.style.display = "none";

    } else {

        updateBtn.style.display = "none";
        addUserBtn.style.display = "flex";

    }

    document.getElementById("editContainer").classList.add("active");

    /* =============== ALL INPUT =============== */
    let nameInput = document.getElementById("nameInput");
    let numberInput = document.getElementById("numberInput");
    let emailInput = document.getElementById("emailInput");
    let pfpInput = document.getElementById("pfpInput");
    let passInput = document.getElementById("passInput");
    let inputBox = document.getElementsByClassName("inputBox");
    let errorText = document.getElementsByClassName("error-text");

    /* =============== LOAD CONTACTS =============== */
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users !== null) {

        nameInput.value = users[index].name;
        numberInput.value = users[index].number;
        emailInput.value = users[index].email;
        pfpInput.value = users[index].profileImg;
        passInput.value = users[index].password;

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

            if (emailInput.value.trim() === "") {

                inputBox[2].style.borderColor = "#FF0000";
                errorText[2].style.display = "block";
                errorText[2].innerHTML = "Email Is Required";

            }
            else if (emailInput.value.match("@")) {

                if (emailInput.value.match("gmail.com")) {

                    inputBox[2].style.borderColor = "#e5e7eb";
                    errorText[2].style.display = "none";
                    errorText[2].innerHTML = "";

                    if (pfpInput.value.trim() === "") {

                        inputBox[3].style.borderColor = "#FF0000";
                        errorText[3].style.display = "block";
                        errorText[3].innerHTML = "Enter User Profile URL";

                    }
                    else if (/(png|jpg|gif|jpeg)/i.test(pfpInput.value)) {

                        inputBox[3].style.borderColor = "#e5e7eb";
                        errorText[3].style.display = "none";
                        errorText[3].innerHTML = "";

                        if (passInput.value.trim() === "") {

                            inputBox[4].style.borderColor = "#FF0000";
                            errorText[4].style.display = "block";
                            errorText[4].innerHTML = "Password Is Required";

                        }
                        else if (passInput.value.match(/[A-Z]/g)) {

                            if (passInput.value.match(/[a-z]/g)) {

                                if (passInput.value.match(/[0-9]/g)) {

                                    if (passInput.value.match(/[~!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g)) {

                                        if (passInput.value.length > 8) {

                                            inputBox[4].style.borderColor = "#e5e7eb";
                                            errorText[4].style.display = "none";
                                            errorText[4].innerHTML = "";

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
                                            popupMessage.innerHTML = `Are You Want To Sure To Update This User Details?`;

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

                                                /* =============== LOAD ALL USERS =============== */

                                                let users = JSON.parse(localStorage.getItem("users")) || [];

                                                /* =============== RESTORING CONTACT =============== */

                                                let currentDate = new Date();

                                                users[index].name = nameInput.value;
                                                users[index].number = numberInput.value;
                                                users[index].id = emailInput.value;
                                                users[index].email = emailInput.value;
                                                users[index].profileImg = pfpInput.value;
                                                users[index].password = passInput.value;
                                                users[index].updatedAt = currentDate.toLocaleDateString() + " at " + currentDate.toLocaleTimeString();

                                                localStorage.setItem("users", JSON.stringify(users));
                                                loadUsers();

                                                document.getElementById("editContainer").classList.remove("active");

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

                                        } else {

                                            inputBox[4].style.borderColor = "#FF0000";
                                            errorText[4].style.display = "block";
                                            errorText[4].innerHTML = "Minimum 8 Characters Required";

                                        }


                                    } else {

                                        inputBox[4].style.borderColor = "#FF0000";
                                        errorText[4].style.display = "block";
                                        errorText[4].innerHTML = "Use at least 1 Special Symbol";

                                    }

                                } else {

                                    inputBox[4].style.borderColor = "#FF0000";
                                    errorText[4].style.display = "block";
                                    errorText[4].innerHTML = "Use at least 1 Number";

                                }

                            } else {

                                inputBox[4].style.borderColor = "#FF0000";
                                errorText[4].style.display = "block";
                                errorText[4].innerHTML = "Use at least 1 LowerCase";

                            }

                        } else {

                            inputBox[4].style.borderColor = "#FF0000";
                            errorText[4].style.display = "block";
                            errorText[4].innerHTML = "Use at least 1 UpperCase";

                        }

                    } else {

                        inputBox[3].style.borderColor = "#FF0000";
                        errorText[3].style.display = "block";
                        errorText[3].innerHTML = "Invalid Profile URL";

                    }

                } else {

                    inputBox[2].style.borderColor = "#FF0000";
                    errorText[2].style.display = "block";
                    errorText[2].innerHTML = "Only 'gmail.com' Allowed";

                }

            } else {

                inputBox[2].style.borderColor = "#FF0000";
                errorText[2].style.display = "block";
                errorText[2].innerHTML = "Invalid Email ID";
            }

        } else {

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

/* ================= ADD NEW USER ================= */

function addNewUser() {

    let notFoundBox = document.getElementById("noDataBox");
    let updateBtn = document.getElementById("updateBtn");
    let addUserBtn = document.getElementById("addUser-Btn");
    let editboxTitle = document.getElementById("editboxTitle");

    editboxTitle.innerHTML = "Add New User";

    if (editboxTitle.textContent === "Update User") {

        updateBtn.style.display = "flex";
        addUserBtn.style.display = "none";

    } else {

        updateBtn.style.display = "none";
        addUserBtn.style.display = "flex";

    }

    document.getElementById("editContainer").classList.add("active");

    /* =============== ALL INPUT =============== */
    let nameInput = document.getElementById("nameInput");
    let numberInput = document.getElementById("numberInput");
    let emailInput = document.getElementById("emailInput");
    let pfpInput = document.getElementById("pfpInput");
    let passInput = document.getElementById("passInput");
    let inputBox = document.getElementsByClassName("inputBox");
    let errorText = document.getElementsByClassName("error-text");

    nameInput.value = "";
    numberInput.value = "";
    emailInput.value = "";
    pfpInput.value = "";
    passInput.value = "";

    inputBox[0].style.borderColor = "#e5e7eb";
    errorText[0].style.display = "none";
    errorText[0].innerHTML = "";

    inputBox[1].style.borderColor = "#e5e7eb";
    errorText[1].style.display = "none";
    errorText[1].innerHTML = "";

    inputBox[2].style.borderColor = "#e5e7eb";
    errorText[2].style.display = "none";
    errorText[2].innerHTML = "";

    inputBox[3].style.borderColor = "#e5e7eb";
    errorText[3].style.display = "none";
    errorText[3].innerHTML = "";

    inputBox[4].style.borderColor = "#e5e7eb";
    errorText[4].style.display = "none";
    errorText[4].innerHTML = "";

    addUserBtn.onclick = function () {

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

            if (emailInput.value.trim() === "") {

                inputBox[2].style.borderColor = "#FF0000";
                errorText[2].style.display = "block";
                errorText[2].innerHTML = "Email Is Required";

            }
            else if (emailInput.value.match("@")) {

                if (emailInput.value.match("gmail.com")) {

                    inputBox[2].style.borderColor = "#e5e7eb";
                    errorText[2].style.display = "none";
                    errorText[2].innerHTML = "";

                    if (pfpInput.value.trim() === "") {

                        inputBox[3].style.borderColor = "#FF0000";
                        errorText[3].style.display = "block";
                        errorText[3].innerHTML = "Enter User Profile URL";

                    }
                    else if (/(png|jpg|gif|jpeg)/i.test(pfpInput.value)) {

                        inputBox[3].style.borderColor = "#e5e7eb";
                        errorText[3].style.display = "none";
                        errorText[3].innerHTML = "";

                        if (passInput.value.trim() === "") {

                            inputBox[4].style.borderColor = "#FF0000";
                            errorText[4].style.display = "block";
                            errorText[4].innerHTML = "Password Is Required";

                        }
                        else if (passInput.value.match(/[A-Z]/g)) {

                            if (passInput.value.match(/[a-z]/g)) {

                                if (passInput.value.match(/[0-9]/g)) {

                                    if (passInput.value.match(/[~!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g)) {

                                        if (passInput.value.length > 8) {

                                            inputBox[4].style.borderColor = "#e5e7eb";
                                            errorText[4].style.display = "none";
                                            errorText[4].innerHTML = "";

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
                                            popupMessage.innerHTML = `Are You Want To Sure To Create This User Accounts?`;

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

                                                /* =============== READ USERS ACCOUNTS =============== */
                                                let users = JSON.parse(localStorage.getItem("users")) || [];

                                                /* =============== DUPLICATE EMAIL SECURITY =============== */
                                                let emailExist = false;

                                                for (let i = 0; i < users.length; i++) {

                                                    if (users[i].email === emailInput.value) {

                                                        emailExist = true;
                                                        break;
                                                    }
                                                }

                                                /* =============== DUPLICATE NUMBER SECURITY =============== */
                                                let numExist = false;

                                                for (let i = 0; i < users.length; i++) {

                                                    if (users[i].number === numberInput.value) {

                                                        numExist = true;
                                                        break;
                                                    }

                                                }

                                                /* =============== NEW USER DATA =============== */
                                                let currentDate = new Date();

                                                let newUser = {
                                                    id: emailInput.value,
                                                    name: nameInput.value,
                                                    email: emailInput.value,
                                                    number: numberInput.value,
                                                    password: passInput.value,
                                                    profileImg: pfpInput.value,
                                                    createdAt: currentDate.toLocaleDateString() + " at " + currentDate.toLocaleTimeString(),
                                                    updatedAt: currentDate.toLocaleDateString() + " at " + currentDate.toLocaleTimeString()
                                                }

                                                /* =============== CHECK CONDITION FOR DATA STORE =============== */

                                                if (emailExist === true) {

                                                    inputBox[2].style.borderColor = "#FF0000";
                                                    errorText[2].style.display = "block";
                                                    errorText[2].innerHTML = "Email ID Already Registered";

                                                } else {

                                                    inputBox[2].style.borderColor = "#e5e7eb";
                                                    errorText[2].style.display = "none";
                                                    errorText[2].innerHTML = "";

                                                    if (numExist === true) {

                                                        inputBox[1].style.borderColor = "#FF0000";
                                                        errorText[1].style.display = "block";
                                                        errorText[1].innerHTML = "Number Already Registered";

                                                    } else {

                                                        inputBox[1].style.borderColor = "#e5e7eb";
                                                        errorText[1].style.display = "none";
                                                        errorText[1].innerHTML = "";

                                                        /* =============== STORE USER DATA =============== */
                                                        users.push(newUser);
                                                        localStorage.setItem("users", JSON.stringify(users));
                                                        loadUsers();
                                                        document.getElementById("editContainer").classList.remove("active");

                                                    }

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

                                        } else {

                                            inputBox[4].style.borderColor = "#FF0000";
                                            errorText[4].style.display = "block";
                                            errorText[4].innerHTML = "Minimum 8 Characters Required";

                                        }


                                    } else {

                                        inputBox[4].style.borderColor = "#FF0000";
                                        errorText[4].style.display = "block";
                                        errorText[4].innerHTML = "Use at least 1 Special Symbol";

                                    }

                                } else {

                                    inputBox[4].style.borderColor = "#FF0000";
                                    errorText[4].style.display = "block";
                                    errorText[4].innerHTML = "Use at least 1 Number";

                                }

                            } else {

                                inputBox[4].style.borderColor = "#FF0000";
                                errorText[4].style.display = "block";
                                errorText[4].innerHTML = "Use at least 1 LowerCase";

                            }

                        } else {

                            inputBox[4].style.borderColor = "#FF0000";
                            errorText[4].style.display = "block";
                            errorText[4].innerHTML = "Use at least 1 UpperCase";

                        }

                    } else {

                        inputBox[3].style.borderColor = "#FF0000";
                        errorText[3].style.display = "block";
                        errorText[3].innerHTML = "Invalid Profile URL";

                    }

                } else {

                    inputBox[2].style.borderColor = "#FF0000";
                    errorText[2].style.display = "block";
                    errorText[2].innerHTML = "Only 'gmail.com' Allowed";

                }

            } else {

                inputBox[2].style.borderColor = "#FF0000";
                errorText[2].style.display = "block";
                errorText[2].innerHTML = "Invalid Email ID";
            }

        } else {

            inputBox[1].style.borderColor = "#FF0000";
            errorText[1].style.display = "block";
            errorText[1].innerHTML = "Only Indian Number Allowed";

        }
    }

}

let addUser = document.getElementById("addUser");
addUser.onclick = () => {

    addNewUser();

}


