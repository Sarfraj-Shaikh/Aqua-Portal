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

/* =============== LOAD COMPANY DETAILS =============== */

function loadCompanyData() {

    let companyContainer = document.getElementById("companyContainer");
    let noDataBox = document.getElementById("noDataBox");

    /* =============== LOAD ALL COMPANY DATA =============== */
    let companyData = JSON.parse(localStorage.getItem("companyData"));

    if (companyData.length === 0) {

        companyContainer.style.display = "none";
        noDataBox.style.display = "flex";

    } else {

        companyContainer.innerHTML = "";
         let found = false;

        for (let i = 0; i < companyData.length; i++) {

            if (companyData[i].stockType === "Account Only") {

                found = true;

                companyContainer.innerHTML += `

                            <div class="company-card">

                <!-- Card Header -->
                <div class="card-header">
                    <div class="logo-box">
                        <img src="${companyData[i].logo}" alt="${companyData[i].companyName}">
                    </div>

                    <div class="company-info">
                        <h2>${companyData[i].companyName}</h2>
                        <span class="tag">${companyData[i].stockType}</span>
                    </div>
                </div>

                <!-- Card Body -->
                <div class="card-body">

                    <div class="info-grid">

                        <div class="info-box">
                            <span class="title"><i class="ri-mail-line"></i> Email</span>
                            <span class="value">${companyData[i].email}</span>
                        </div>

                        <div class="info-box">
                            <span class="title"><i class="ri-phone-line"></i> Contact Number</span>
                            <span class="value">${companyData[i].mobile}</span>
                        </div>

                        <div class="info-box">
                            <span class="title"><i class="ri-map-pin-line"></i> Address</span>
                            <span class="value">${companyData[i].address}</span>
                        </div>

                        <div class="info-box">
                            <span class="title"><i class="ri-mail-send-line"></i> Mailing Name</span>
                            <span class="value">${companyData[i].mailingName}</span>
                        </div>

                        <div class="info-box">
                            <span class="title"><i class="ri-printer-line"></i> Fax Number</span>
                            <span class="value">${companyData[i].fax}</span>
                        </div>

                        <div class="info-box">
                            <span class="title"><i class="ri-file-text-line"></i> CIN Number</span>
                            <span class="value">${companyData[i].cin}</span>
                        </div>

                        <div class="info-box">
                            <span class="title"><i class="ri-global-line"></i> Website</span>
                            <span class="value">${companyData[i].website}</span>
                        </div>

                        <div class="info-box">
                            <span class="title"><i class="ri-calendar-line"></i> Financial Year</span>
                            <span class="value">${companyData[i].financialYear}</span>
                        </div>

                        <div class="info-box">
                            <span class="title"><i class="ri-bar-chart-line"></i> Total Sales Voucher</span>
                            <span class="value">${companyData[i].voucherNo}</span>
                        </div>

                        <div class="info-box">
                            <span class="title"><i class="ri-building-line"></i> Company ID</span>
                            <span class="value">${companyData[i].companyId}</span>
                        </div>

                        <div class="info-box">
                            <span class="title"><i class="ri-user-3-line"></i> Company Owner</span>
                            <span class="value">${companyData[i].creator}</span>
                        </div>

                    </div>

                </div>

                <!-- Card Footer -->
                <div class="card-footer">

                    <button class="print-btn" onclick="printCompanyCard(this)">
                        <i class="ri-printer-line"></i> Print
                    </button>

                    <button class="delete-btn" onclick="deleteCompany(${i})">
                        <i class="ri-delete-bin-6-line"></i> Delete
                    </button>
                </div>

            </div>
                
                `;

            } else {

                companyContainer.style.display = "none";
                noDataBox.style.display = "flex";

            }

        }

        if (!found) {

            companyContainer.style.display = "none";
            noDataBox.style.display = "flex";

        } else {

            companyContainer.style.display = "flex";
            noDataBox.style.display = "none";

        }

    }

}

/* =============== PRINT COMPANY DETAILS =============== */

function printCompanyCard(btn) {

    let card = document.querySelectorAll(".company-card");
    let selected = btn.closest(".company-card")

    card.forEach((c) => {

        c.classList.remove("printMe");

    })

    selected.classList.add("printMe");
    window.print();

    setTimeout(function () {

        selected.classList.remove("printMe");

    }, 500);

}

/* =============== DELETE COMPANY DETAILS =============== */
function deleteCompany(index) {

    /* =============== LOAD ALL COMPANY DATA =============== */
    let companyData = JSON.parse(localStorage.getItem("companyData"));

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
    popupMessage.innerHTML = `Are You Want To Sure To Delete This Company Permanently?`;

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

        companyData.splice(index, 1);
        localStorage.setItem("companyData", JSON.stringify(companyData));
        companyData();

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

/* =============== SEARCH COMPANY =============== */

function searchUsers() {

    let companyContainer = document.getElementById("companyContainer");
    let noDataBox = document.getElementById("noDataBox");
    let searchUser = document.getElementById("searchUser").value.trim();

    /* =============== LOAD ALL COMPANY DATA =============== */
    let companyData = JSON.parse(localStorage.getItem("companyData"));

    companyContainer.innerHTML = "";

    if (searchUser === "") {
        loadCompanyData();
        return;
    }

    let found = false;

    for (let i = 0; i < companyData.length; i++) {

        if (companyData[i].stockType === "Account Only") {

            let name = String(companyData[i].companyName).toLowerCase();
            let number = String(companyData[i].email).toLowerCase();
            let email = String(companyData[i].mobile).toLowerCase();

            if (name.includes(searchUser) || number.includes(searchUser) || email.includes(searchUser)) {

                found = true;

                companyContainer.innerHTML += `

                            <div class="company-card">

                <!-- Card Header -->
                <div class="card-header">
                    <div class="logo-box">
                        <img src="${companyData[i].logo}" alt="${companyData[i].companyName}">
                    </div>

                    <div class="company-info">
                        <h2>${companyData[i].companyName}</h2>
                        <span class="tag">${companyData[i].stockType}</span>
                    </div>
                </div>

                <!-- Card Body -->
                <div class="card-body">

                    <div class="info-grid">

                        <div class="info-box">
                            <span class="title"><i class="ri-mail-line"></i> Email</span>
                            <span class="value">${companyData[i].email}</span>
                        </div>

                        <div class="info-box">
                            <span class="title"><i class="ri-phone-line"></i> Contact Number</span>
                            <span class="value">${companyData[i].mobile}</span>
                        </div>

                        <div class="info-box">
                            <span class="title"><i class="ri-map-pin-line"></i> Address</span>
                            <span class="value">${companyData[i].address}</span>
                        </div>

                        <div class="info-box">
                            <span class="title"><i class="ri-mail-send-line"></i> Mailing Name</span>
                            <span class="value">${companyData[i].mailingName}</span>
                        </div>

                        <div class="info-box">
                            <span class="title"><i class="ri-printer-line"></i> Fax Number</span>
                            <span class="value">${companyData[i].fax}</span>
                        </div>

                        <div class="info-box">
                            <span class="title"><i class="ri-file-text-line"></i> CIN Number</span>
                            <span class="value">${companyData[i].cin}</span>
                        </div>

                        <div class="info-box">
                            <span class="title"><i class="ri-global-line"></i> Website</span>
                            <span class="value">${companyData[i].website}</span>
                        </div>

                        <div class="info-box">
                            <span class="title"><i class="ri-calendar-line"></i> Financial Year</span>
                            <span class="value">${companyData[i].financialYear}</span>
                        </div>

                        <div class="info-box">
                            <span class="title"><i class="ri-bar-chart-line"></i> Total Sales Voucher</span>
                            <span class="value">${companyData[i].voucherNo}</span>
                        </div>

                    </div>

                </div>

                <!-- Card Footer -->
                <div class="card-footer">

                    <button class="print-btn" onclick="printCompanyCard(this)">
                        <i class="ri-printer-line"></i> Print
                    </button>

                    <button class="delete-btn" onclick="deleteCompany(${i})">
                        <i class="ri-delete-bin-6-line"></i> Delete
                    </button>
                </div>

            </div>
                
                `;

            }

        }

    }

    if (!found) {

        companyContainer.style.display = "none";
        noDataBox.style.display = "flex";

    } else {

        companyContainer.style.display = "flex";
        noDataBox.style.display = "none";

    }

}

loadCompanyData();
