// ===============================
// DEFAULT ADMIN LOGIN
// ===============================
let defaultAdmin = {
    email: "admin@gmail.com",
    password: "12345",
    name: "Admin User",
    profileImg: "https://i.pravatar.cc/150?img=12"
};

/* =============== LOGIN FORM VALIDATION SECTION =============== */

function formVal() {

    let emailInput = document.getElementById("emailInput").value;
    let passInput = document.getElementById("passwordInput").value;
    let inputBox = document.getElementsByClassName("input");
    let errorText = document.getElementsByClassName("errorText");

    const capital = /[A-Z]/g;
    const small = /[a-z]/g;
    const num = /[0-9]/g;
    const sym = /[~!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;

    /* =============== EMAIL VALIDATION =============== */

    if (emailInput.trim() === "") {

        inputBox[0].style.borderColor = "#ff0000";
        errorText[0].style.display = "block";
        errorText[0].textContent = "Email ID Is Required";

    } else if (emailInput.match("@")) {

        if (emailInput.match("gmail.com")) {

            inputBox[0].style.borderColor = "inherit";
            errorText[0].style.display = "none";
            errorText[0].textContent = "";

            /* =============== PASSWORD VALIDATION =============== */

            if (passInput.trim() === "") {

                inputBox[1].style.borderColor = "#ff0000";
                errorText[1].style.display = "block";
                errorText[1].textContent = "Password Is Required";

            } else if (passInput.match(capital)) {

                if (passInput.match(small)) {

                    if (passInput.match(num)) {

                        if (passInput.match(sym)) {

                            if (passInput.length > 6) {

                                inputBox[1].style.borderColor = "inherit";
                                errorText[1].style.display = "none";
                                errorText[1].textContent = "";

                                /* =============== LOAD LOGIN DETAILS =============== */
                                const admin = JSON.parse(localStorage.getItem("adminDetails"));

                                if (admin !== null) {

                                    if (admin.email === emailInput) {

                                        inputBox[0].style.borderColor = "inherit";
                                        errorText[0].style.display = "none";
                                        errorText[0].textContent = "";

                                        if (admin.password === passInput) {

                                            inputBox[1].style.borderColor = "inherit";
                                            errorText[1].style.display = "none";
                                            errorText[1].textContent = "";

                                            /* =============== SAVE LOGIN DETAILS =============== */

                                            sessionStorage.setItem("currentAdmin", emailInput.trim());
                                            isAdminLogin();

                                        } else {

                                            inputBox[1].style.borderColor = "#ff0000";
                                            errorText[1].style.display = "block";
                                            errorText[1].textContent = "Password Is Incorrect";

                                        }

                                    } else {

                                        inputBox[0].style.borderColor = "#ff0000";
                                        errorText[0].style.display = "block";
                                        errorText[0].textContent = "Oops! Wrong Email ID";

                                    }

                                }

                            } else {

                                inputBox[1].style.borderColor = "#ff0000";
                                errorText[1].style.display = "block";
                                errorText[1].textContent = "Enter Minimum 6 Digits";
                            }

                        } else {

                            inputBox[1].style.borderColor = "#ff0000";
                            errorText[1].style.display = "block";
                            errorText[1].textContent = "Use Special Symbol";
                        }

                    } else {

                        inputBox[1].style.borderColor = "#ff0000";
                        errorText[1].style.display = "block";
                        errorText[1].textContent = "Use Numbers";

                    }


                } else {

                    inputBox[1].style.borderColor = "#ff0000";
                    errorText[1].style.display = "block";
                    errorText[1].textContent = "Use Lowercase Letter";

                }


            } else {

                inputBox[1].style.borderColor = "#ff0000";
                errorText[1].style.display = "block";
                errorText[1].textContent = "Use Uppercase Letter";

            }

        } else {

            inputBox[0].style.borderColor = "#ff0000";
            errorText[0].style.display = "block";
            errorText[0].textContent = "Only 'gmail.com' Allowed";
        }

    } else {

        inputBox[0].style.borderColor = "#ff0000";
        errorText[0].style.display = "block";
        errorText[0].textContent = "Invalid Email ID";

    }
};

/* =============== PASSWORD TOGGLE SECTION =============== */
const passIcon = document.getElementById("passIcon");
passIcon.onclick = function () {

    const passInput = document.getElementById("passwordInput");

    if (passInput.type === "text") {

        passInput.type = "password";
        passIcon.className = className = "ri-eye-line passIcon";

    } else {

        passInput.type = "text";
        passIcon.className = "ri-eye-off-line passIcon";

    }
};

/* =============== AUTHENTICATION CHECK =============== */

function isAdminLogin() {

    /* =============== LOAD LOGIN DETAILS =============== */
    const admin = JSON.parse(localStorage.getItem("adminDetails"));

    if (admin === null) {

        const adminDetails = {
            name: "Mo. Sarfraj Shaikh",
            email: "admin@gmail.com",
            password: "Admin@123",
        }

        localStorage.setItem("adminDetails", JSON.stringify(adminDetails));
        isAdminLogin();

    } else {

        /* =============== LOAD CURRENT ADMIN DETAILS =============== */
        const currentAdmin = sessionStorage.getItem("currentAdmin");

        if (currentAdmin !== null) {

            window.open("./pages/dashboard.html", "_self");

        } else {

            /* If the admin is not logged in, the user will be redirected to the login page. However, redirection is not possible because the user is already on the login page. */

        }

    }
}

isAdminLogin();

// ===============================
// INIT STORAGE
// ===============================
if (!localStorage.getItem("adminUser")) {
    localStorage.setItem("adminUser", JSON.stringify(defaultAdmin));
}

if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([]));
}

if (!localStorage.getItem("contacts")) {
    localStorage.setItem("contacts", JSON.stringify([]));
}

if (!localStorage.getItem("deletedContacts")) {
    localStorage.setItem("deletedContacts", JSON.stringify([]));
}

// ===============================
// LOGIN FUNCTION
// ===============================
function adminLogin(e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let admin = JSON.parse(localStorage.getItem("adminUser"));

    if (email === admin.email && password === admin.password) {

        localStorage.setItem("loggedInAdmin", JSON.stringify(admin));
        window.location.href = "./pages/dashboard.html";

    } else {

        let err = document.getElementById("errorMsg");
        err.style.display = "block";
        err.innerText = "Invalid Email or Password!";

    }
}

// ===============================
// CHECK LOGIN
// ===============================
function checkAuth() {

    let admin = JSON.parse(localStorage.getItem("loggedInAdmin"));

    if (!admin) {
        window.location.href = "./index.html";
    }
}

// ===============================
// LOAD ADMIN PROFILE
// ===============================
function loadAdminProfile() {
    let admin = JSON.parse(localStorage.getItem("loggedInAdmin"));

    if (admin) {
        document.getElementById("adminName").innerText = admin.name;
        document.getElementById("adminEmail").innerText = admin.email;
        document.getElementById("adminImg").src = admin.profileImg;
    }
}

// ===============================
// SIDEBAR TOGGLE
// ===============================
function openSidebar() {
    document.getElementById("sidebar").classList.add("active");
}

function closeSidebar() {
    document.getElementById("sidebar").classList.remove("active");
}

// ===============================
// LOGOUT MODAL
// ===============================
function openLogoutModal() {
    document.getElementById("logoutModal").classList.add("active");
}

function closeLogoutModal() {
    document.getElementById("logoutModal").classList.remove("active");
}

function confirmLogout() {
    localStorage.removeItem("loggedInAdmin");
    window.location.href = "login.html";
}

// ===============================
// DASHBOARD STATS
// ===============================
function loadDashboardStats() {
    let users = JSON.parse(localStorage.getItem("users"));
    let contacts = JSON.parse(localStorage.getItem("contacts"));
    let deletedContacts = JSON.parse(localStorage.getItem("deletedContacts"));

    document.getElementById("totalUsers").innerText = users.length;
    document.getElementById("totalContacts").innerText = contacts.length;
    document.getElementById("totalDeleted").innerText = deletedContacts.length;
}

// ===============================
// USERS PAGE FUNCTIONS
// ===============================
function renderUsers() {
    let users = JSON.parse(localStorage.getItem("users"));
    let tbody = document.getElementById("usersTableBody");

    tbody.innerHTML = "";

    users.forEach((u) => {
        tbody.innerHTML += `
        <tr>
            <td>${u.id}</td>
            <td>${u.name}</td>
            <td>${u.email}</td>
            <td>${u.number}</td>
            <td>${u.createdAt}</td>
            <td>${u.updatedAt}</td>
            <td>
                <div class="action-btns">
                    <button class="btn-edit" onclick="openEditUserModal('${u.id}')">
                        <i class="ri-edit-box-line"></i>
                    </button>
                    <button class="btn-delete" onclick="openDeleteUserModal('${u.id}')">
                        <i class="ri-delete-bin-6-line"></i>
                    </button>
                </div>
            </td>
        </tr>
        `;
    });
}

function searchUsers() {
    let input = document.getElementById("searchUser").value.toLowerCase();
    let rows = document.querySelectorAll("#usersTableBody tr");

    rows.forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(input) ? "" : "none";
    });
}

// ===============================
// ADD USER
// ===============================
function openAddUserModal() {
    document.getElementById("userFormTitle").innerText = "Add New User";
    document.getElementById("saveUserBtn").onclick = saveNewUser;
    document.getElementById("userModal").classList.add("active");

    document.getElementById("uName").value = "";
    document.getElementById("uEmail").value = "";
    document.getElementById("uNumber").value = "";
    document.getElementById("uPassword").value = "";
}

function closeUserModal() {
    document.getElementById("userModal").classList.remove("active");
}

function saveNewUser() {
    let nameInput = document.getElementById("uName").value;
    let emailInput = document.getElementById("uEmail").value;
    let numberInput = document.getElementById("uNumber").value;
    let passwordInput = document.getElementById("uPassword").value;

    if (!nameInput || !emailInput || !numberInput || !passwordInput) {
        alert("All fields required!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users"));
    let currentDate = new Date();

    let newUser = {
        id: emailInput,
        name: nameInput,
        email: emailInput,
        number: numberInput,
        password: passwordInput,
        profileImg: "",
        createdAt: currentDate.toLocaleDateString() + " at " + currentDate.toLocaleTimeString(),
        updatedAt: currentDate.toLocaleDateString() + " at " + currentDate.toLocaleTimeString()
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    closeUserModal();
    renderUsers();
}

// ===============================
// EDIT USER
// ===============================
let editUserId = null;

function openEditUserModal(id) {
    let users = JSON.parse(localStorage.getItem("users"));
    let user = users.find(u => u.id === id);

    editUserId = id;

    document.getElementById("userFormTitle").innerText = "Edit User";
    document.getElementById("saveUserBtn").onclick = updateUser;

    document.getElementById("uName").value = user.name;
    document.getElementById("uEmail").value = user.email;
    document.getElementById("uNumber").value = user.number;
    document.getElementById("uPassword").value = user.password;

    document.getElementById("userModal").classList.add("active");
}

function updateUser() {
    let users = JSON.parse(localStorage.getItem("users"));

    let currentDate = new Date();

    users = users.map(u => {
        if (u.id === editUserId) {
            return {
                ...u,
                name: document.getElementById("uName").value,
                email: document.getElementById("uEmail").value,
                number: document.getElementById("uNumber").value,
                password: document.getElementById("uPassword").value,
                updatedAt: currentDate.toLocaleDateString() + " at " + currentDate.toLocaleTimeString()
            };
        }
        return u;
    });

    localStorage.setItem("users", JSON.stringify(users));
    closeUserModal();
    renderUsers();
}

// ===============================
// DELETE USER
// ===============================
let deleteUserId = null;

function openDeleteUserModal(id) {
    deleteUserId = id;
    document.getElementById("deleteModal").classList.add("active");
}

function closeDeleteModal() {
    document.getElementById("deleteModal").classList.remove("active");
}

function confirmDeleteUser() {
    let users = JSON.parse(localStorage.getItem("users"));
    users = users.filter(u => u.id !== deleteUserId);

    localStorage.setItem("users", JSON.stringify(users));

    closeDeleteModal();
    renderUsers();
}