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

/* =============== LOAD ALL SALES VOUCHER DATA =============== */

function loadSalesVoucher() {

    const pageWrapper = document.getElementById("pageWrapper");
    const voucherContainer = document.getElementById("voucherContainer");

    let currentUser = null;

    if (sessionLogin === true) {

        currentUser = sessionStorage.getItem("currentUser");

    } else {

        currentUser = localStorage.getItem("currentUser");

    }

    let salesVoucher = JSON.parse(localStorage.getItem("salesVoucher")) || [];

    voucherContainer.innerHTML = "";

    let found = false;

    if (salesVoucher.length === 0) {

        pageWrapper.style.display = "none";
        return;

    }

    for (let i = 0; i < salesVoucher.length; i++) {

        const voucher = salesVoucher[i];

        if (voucher.creator !== currentUser) continue;

        found = true;

        let rows = "";

        for (let j = 0; j < voucher.items.length; j++) {

            const item = voucher.items[j];

            const remarks = item.remarks && item.remarks.trim() !== ""
                ? item.remarks
                : "No Remarks";

            rows += `
                <tr>
                    <td>${item.itemName}</td>
                    <td>${item.qty}</td>
                    <td>₹${item.totalAmount}</td>
                    <td>₹${item.paidAmount}</td>
                    <td>₹${item.dueAmount}</td>
                </tr>
            `;

        }

        const statusText = "Bill";
        const statusClass = "active";

        voucherContainer.innerHTML += `
        
            <div class="voucher-card">

                <div class="card-top-strip"></div>

                <!-- HEADER -->
                <div class="card-header">

                    <div class="left">

                        <h2>Sales Voucher</h2>

                        <p>Voucher No: ${voucher.voucherNo}</p>

                    </div>

                    <div class="status ${statusClass}">
                        ${statusText}
                    </div>

                </div>

                <!-- INFO -->
                <div class="voucher-grid">

                    <div class="info-box">
                        <span class="title">Customer</span>
                        <span class="value">${voucher.customerName}</span>
                    </div>

                    <div class="info-box">
                        <span class="title">Date</span>
                        <span class="value">${voucher.invoiceDate}</span>
                    </div>

                    <div class="info-box">
                        <span class="title">Email</span>
                        <span class="value">${voucher.customerEmail}</span>
                    </div>

                    <div class="info-box">
                        <span class="title">Mobile</span>
                        <span class="value">${voucher.customerMobile}</span>
                    </div>

                    <div class="info-box full-width">
                        <span class="title">Address</span>
                        <span class="value">${voucher.customerAddress}</span>
                    </div>

                </div>

                <!-- TABLE -->
                <div class="table-wrapper">

                    <table>

                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Qty</th>
                                <th>Total</th>
                                <th>Paid</th>
                                <th>Due</th>
                            </tr>
                        </thead>

                        <tbody>
                            ${rows}
                        </tbody>

                    </table>

                </div>

                <!-- SUMMARY -->
                <div class="summary-section">

                    <div class="summary-box">
                        <span>Sub Total</span>
                        <strong>${voucher.subTotal}</strong>
                    </div>

                    <div class="summary-box">
                        <span>Total Tax</span>
                        <strong>${voucher.totalTax}</strong>
                    </div>

                    <div class="summary-box">
                        <span>Total Amount</span>
                        <strong>${voucher.totalAllAmount}</strong>
                    </div>

                    <div class="summary-box">
                        <span>Total Paid</span>
                        <strong>${voucher.totalPaid}</strong>
                    </div>

                    <div class="summary-box due-box">
                        <span>Total Due</span>
                        <strong>${voucher.totalDue}</strong>
                    </div>

                </div>

                <!-- ACTIONS -->
                <div class="card-actions">

                    <button class="edit-btn" onclick="editVoucher(${i})">
                        <i class="ri-edit-line"></i>
                        Edit
                    </button>

                    <button class="delete-btn" onclick="deleteVoucher(${i})">
                        <i class="ri-delete-bin-6-line"></i>
                        Delete
                    </button>

                </div>

            </div>

        `;

    }

    // FINAL STATE CHECK
    if (!found) {

        voucherContainer.innerHTML = `
            <div class="empty-state">
                No Voucher Found
            </div>
        `;

        pageWrapper.style.display = "block";

    } else {

        pageWrapper.style.display = "block";

    }

}

loadSalesVoucher();

/* =============== DELETE VOUCHER DATA =============== */

function deleteVoucher(index) {

    /* =============== LOAD ALL UOM DATA =============== */
    let salesVoucher = JSON.parse(localStorage.getItem("salesVoucher"));

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
    popupMessage.textContent = "Are You Want To Sure To Delete This Voucher?";

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

        if (salesVoucher.length !== 0) {

            salesVoucher.splice(index, 1);
            localStorage.setItem("salesVoucher", JSON.stringify(salesVoucher));

            loadSalesVoucher();

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

/* =============== EDIT VOUCHER DATA =============== */

function editVoucher(index) {

    document.getElementById("editModal").style.display = "flex";


    /* =============== LOAD ALL UOM DATA =============== */
    let salesVoucher = JSON.parse(localStorage.getItem("salesVoucher"));
    let voucher = salesVoucher[index];

    if (salesVoucher.length !== 0) {

        let date = convertDate(voucher.invoiceDate);
        document.getElementById("editIndex").value = index;
        document.getElementById("editCustomerName").value = voucher.customerName;
        document.getElementById("editEmail").value = voucher.customerEmail;
        document.getElementById("editMobile").value = voucher.customerMobile;
        document.getElementById("editDate").value = date;
        document.getElementById("editAddress").value = voucher.customerAddress;
        document.getElementById("editTotalAmount").value = voucher.totalAllAmount;
        document.getElementById("editTotalDue").value = voucher.totalDue;

    }


}

function convertDate(dateString) {

    // split month/day/year
    let parts = dateString.split("/");

    let month = parts[0].padStart(2, "0");
    let day = parts[1].padStart(2, "0");
    let year = parts[2];

    return `${year}-${month}-${day}`;

}

function saveEditVoucher() {

    let editCustomerName = document.getElementById("editCustomerName").value;
    let editEmail = document.getElementById("editEmail").value;
    let editMobile = document.getElementById("editMobile").value;
    let editDate = document.getElementById("editDate").value;
    let editAddress = document.getElementById("editAddress").value;
    let editTotalAmount = document.getElementById("editTotalAmount").value;
    let editTotalDue = document.getElementById("editTotalDue").value;

    if (editCustomerName.trim() === "") {

        Toastify({
            text: "Enter Customer Name ",
            duration: 2000,
            close: false,
            gravity: "top",
            position: "right",
            style: {

                background: "#ff1100",
                color: "#FFFFFF",
                borderRadius: "10px"

            }
        }).showToast();

    }
    else if (editEmail.trim() === "") {

        Toastify({
            text: "Enter Customer Email ",
            duration: 2000,
            close: false,
            gravity: "top",
            position: "right",
            style: {

                background: "#ff1100",
                color: "#FFFFFF",
                borderRadius: "10px"

            }
        }).showToast();

    }
    else if (editEmail.match("@")) {

        if (editEmail.match("gmail.com")) {

            if (editMobile.trim() === "") {

                Toastify({
                    text: "Enter Customer Mobile Number ",
                    duration: 2000,
                    close: false,
                    gravity: "top",
                    position: "right",
                    style: {

                        background: "#ff1100",
                        color: "#FFFFFF",
                        borderRadius: "10px"

                    }
                }).showToast();

            }
            else if (editMobile[0].match(/[7-9]/g)) {


                if (editMobile.length === 10) {

                    if (editDate.trim() === "") {

                        Toastify({
                            text: "Select Invoice Date ",
                            duration: 2000,
                            close: false,
                            gravity: "top",
                            position: "right",
                            style: {

                                background: "#ff1100",
                                color: "#FFFFFF",
                                borderRadius: "10px"

                            }
                        }).showToast();

                    }
                    else {

                        if (editAddress.trim() === "") {

                            Toastify({
                                text: "Enter Customer Address ",
                                duration: 2000,
                                close: false,
                                gravity: "top",
                                position: "right",
                                style: {

                                    background: "#ff1100",
                                    color: "#FFFFFF",
                                    borderRadius: "10px"

                                }
                            }).showToast();

                        }
                        else {

                            if (editTotalAmount.trim() === "") {

                                Toastify({
                                    text: "Enter Total Amount ",
                                    duration: 2000,
                                    close: false,
                                    gravity: "top",
                                    position: "right",
                                    style: {

                                        background: "#ff1100",
                                        color: "#FFFFFF",
                                        borderRadius: "10px"

                                    }
                                }).showToast();

                            }
                            else {

                                if (editTotalDue.trim() === "") {

                                    Toastify({
                                        text: "Enter Total Due Amount ",
                                        duration: 2000,
                                        close: false,
                                        gravity: "top",
                                        position: "right",
                                        style: {

                                            background: "#ff1100",
                                            color: "#FFFFFF",
                                            borderRadius: "10px"

                                        }
                                    }).showToast();

                                }
                                else {

                                    updateVoucherData();

                                }

                            }

                        }
                    }

                } else {

                    Toastify({
                        text: "Invalid Mobile Number ",
                        duration: 2000,
                        close: false,
                        gravity: "top",
                        position: "right",
                        style: {

                            background: "#ff1100",
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

                        background: "#ff1100",
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

                    background: "#ff1100",
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

                background: "#ff1100",
                color: "#FFFFFF",
                borderRadius: "10px"

            }
        }).showToast();

    }

}

function updateVoucherData() {

    let currentUser = null;

    if (sessionLogin === true) {

        currentUser = sessionStorage.getItem("currentUser");

    } else {

        currentUser = localStorage.getItem("currentUser");

    }

    let salesVoucher = JSON.parse(localStorage.getItem("salesVoucher")) || [];
    let index = document.getElementById("editIndex").value;

    if (salesVoucher[index].creator === currentUser) {

        salesVoucher[index].customerName = document.getElementById("editCustomerName").value;
        salesVoucher[index].customerEmail = document.getElementById("editEmail").value;
        salesVoucher[index].customerMobile = document.getElementById("editMobile").value;
        salesVoucher[index].invoiceDate = document.getElementById("editDate").value;
        salesVoucher[index].customerAddress = document.getElementById("editAddress").value;
        salesVoucher[index].totalAllAmount = document.getElementById("editTotalAmount").value;
        salesVoucher[index].totalDue = document.getElementById("editTotalDue").value;

        localStorage.setItem("salesVoucher", JSON.stringify(salesVoucher));

        closeEditModal();
        loadSalesVoucher();

        Toastify({
            text: "Updated Successfully ",
            duration: 2000,
            close: false,
            gravity: "top",
            position: "right",
            style: {

                background: "#23c906",
                color: "#FFFFFF",
                borderRadius: "10px"

            }
        }).showToast();

    }

}

/* =============== CLOSE VOUCHER EDIT MODEL =============== */

function closeEditModal() {

    document.getElementById("editModal").style.display = "none";

}

/* =============== SEACH VOUCHER =============== */

function searchVoucher() {

    let searchInput = document.getElementById("searchInput").value.trim().toLowerCase();
    const pageWrapper = document.getElementById("pageWrapper");
    const voucherContainer = document.getElementById("voucherContainer");

    let salesVoucher = JSON.parse(localStorage.getItem("salesVoucher")) || [];

    let currentUser = null;

    if (sessionLogin === true) {

        currentUser = sessionStorage.getItem("currentUser");

    } else {

        currentUser = localStorage.getItem("currentUser");

    }

    if (searchInput === "") {

        loadSalesVoucher();
        return;

    }

    voucherContainer.innerHTML = "";

    if (salesVoucher.length === 0) {

        voucherContainer.innerHTML = `
        
            <div class="empty-state">
                No Voucher Found
            </div>
            
        `;

        pageWrapper.style.display = "block";
        return;
    }

    let found = false;

    for (let i = 0; i < salesVoucher.length; i++) {

        const voucher = salesVoucher[i];

        // ONLY CURRENT USER VOUCHERS
        if (voucher.creator !== currentUser) continue;

        // SAFE SEARCH VALUES
        let name = String(voucher.customerName || "")
            .trim()
            .toLowerCase();

        let email = String(voucher.customerEmail || "")
            .trim()
            .toLowerCase();

        let address = String(voucher.customerAddress || "")
            .trim()
            .toLowerCase();

        let number = String(voucher.customerMobile || "")
            .trim()
            .toLowerCase();

        let voucherNo = String(voucher.voucherNo || "")
            .trim()
            .toLowerCase();

        let date = String(voucher.invoiceDate || "")
            .trim()
            .toLowerCase();

        if (name.includes(searchInput) || email.includes(searchInput) || address.includes(searchInput) || number.includes(searchInput) || voucherNo.includes(searchInput) || date.includes(searchInput)
        ) {

            found = true;

            let rows = "";

            for (let j = 0; j < voucher.items.length; j++) {

                const item = voucher.items[j];

                rows += `
                
                    <tr>
                        <td>${item.itemName}</td>
                        <td>${item.qty}</td>
                        <td>₹${item.totalAmount}</td>
                        <td>₹${item.paidAmount}</td>
                        <td>₹${item.dueAmount}</td>
                    </tr>
                    
                `;

            }

            const statusText = "Bill";
            const statusClass = "active";

            voucherContainer.innerHTML += `

                <div class="voucher-card">

                    <div class="card-top-strip"></div>

                    <!-- HEADER -->
                    <div class="card-header">

                        <div class="left">

                            <h2>Sales Voucher</h2>

                            <p>
                                Voucher No: ${voucher.voucherNo}
                            </p>

                        </div>

                        <div class="status ${statusClass}">
                            ${statusText}
                        </div>

                    </div>

                    <!-- INFO -->
                    <div class="voucher-grid">

                        <div class="info-box">
                            <span class="title">Customer</span>
                            <span class="value">
                                ${voucher.customerName}
                            </span>
                        </div>

                        <div class="info-box">
                            <span class="title">Date</span>
                            <span class="value">
                                ${voucher.invoiceDate}
                            </span>
                        </div>

                        <div class="info-box">
                            <span class="title">Email</span>
                            <span class="value">
                                ${voucher.customerEmail}
                            </span>
                        </div>

                        <div class="info-box">
                            <span class="title">Mobile</span>
                            <span class="value">
                                ${voucher.customerMobile}
                            </span>
                        </div>

                        <div class="info-box full-width">
                            <span class="title">Address</span>
                            <span class="value">
                                ${voucher.customerAddress}
                            </span>
                        </div>

                    </div>

                    <!-- TABLE -->
                    <div class="table-wrapper">

                        <table>

                            <thead>

                                <tr>
                                    <th>Item</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                    <th>Paid</th>
                                    <th>Due</th>
                                </tr>

                            </thead>

                            <tbody>
                                ${rows}
                            </tbody>

                        </table>

                    </div>

                    <!-- SUMMARY -->
                    <div class="summary-section">

                        <div class="summary-box">
                            <span>Sub Total</span>
                            <strong>
                                ${voucher.subTotal}
                            </strong>
                        </div>

                        <div class="summary-box">
                            <span>Total Tax</span>
                            <strong>
                                ${voucher.totalTax}
                            </strong>
                        </div>

                        <div class="summary-box">
                            <span>Total Amount</span>
                            <strong>
                                ${voucher.totalAllAmount}
                            </strong>
                        </div>

                        <div class="summary-box">
                            <span>Total Paid</span>
                            <strong>
                                ${voucher.totalPaid}
                            </strong>
                        </div>

                        <div class="summary-box due-box">
                            <span>Total Due</span>
                            <strong>
                                ${voucher.totalDue}
                            </strong>
                        </div>

                    </div>

                    <!-- ACTIONS -->
                    <div class="card-actions">

                        <button 
                            class="edit-btn" 
                            onclick="editVoucher(${i})">

                            <i class="ri-edit-line"></i>
                            Edit

                        </button>

                        <button 
                            class="delete-btn" 
                            onclick="deleteVoucher(${i})"
                        >

                            <i class="ri-delete-bin-6-line"></i>
                            Delete

                        </button>

                    </div>

                </div>

            `;

        }

    }

    if (!found) {

        voucherContainer.innerHTML = `

                <div class="empty-state">
                    No Voucher Found
                </div>

            `;

        pageWrapper.style.display = "block";

    } else {

        pageWrapper.style.display = "block";

    }

}