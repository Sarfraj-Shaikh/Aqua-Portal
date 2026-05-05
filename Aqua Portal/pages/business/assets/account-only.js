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

    location.assign("../../../index.html");

});

let navPrimaryCtaBtn = document.getElementById("navPrimaryCtaBtn");
navPrimaryCtaBtn.addEventListener("click", function () {

    location.assign("../index.html");
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

            window.open("../../login.html", "_self");

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

                window.open("../../profile-photo.html", "_self");

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

/* =============== BUSINESS SECTION =============== */

const COMPANY_KEY = "business_company_data";
const UNIT_KEY = "unit_measure_data";
const TAX_KEY = "tax_setup_data";
const VOUCHER_KEY = "voucher_number_data";
const INVOICE_KEY = "sales_invoice_list";

// ================= ELEMENTS =================
const companyLogoImg = document.getElementById("companyLogoImg");
const companyNameText = document.getElementById("companyNameText");

const unitMeasureBtn = document.getElementById("unitMeasureBtn");
const salesVoucherBtn = document.getElementById("salesVoucherBtn");
const shutCompanyBtn = document.getElementById("shutCompanyBtn");
const backBtn = document.getElementById("backBtn");

const unitModal = document.getElementById("unitModal");
const closeUnitModal = document.getElementById("closeUnitModal");

const unitForm = document.getElementById("unitForm");
const unitSymbol = document.getElementById("unitSymbol");
const unitFormalName = document.getElementById("unitFormalName");

const viewUnitBox = document.getElementById("viewUnitBox");

// ================= TAX SETUP =================
const taxSetupBtn = document.getElementById("taxSetupBtn");
const viewTaxBtn = document.getElementById("viewTaxBtn");

const taxModal = document.getElementById("taxModal");
const closeTaxModal = document.getElementById("closeTaxModal");

const viewTaxModal = document.getElementById("viewTaxModal");
const closeViewTaxModal = document.getElementById("closeViewTaxModal");

const taxForm = document.getElementById("taxForm");
const taxName = document.getElementById("taxName");
const taxPercent = document.getElementById("taxPercent");
const taxListBox = document.getElementById("taxListBox");

// ================= SALES VOUCHER =================
const salesVoucherModal = document.getElementById("salesVoucherModal");
const closeSalesVoucherModal = document.getElementById("closeSalesVoucherModal");

const voucherNumberText = document.getElementById("voucherNumberText");
const voucherDateText = document.getElementById("voucherDateText");

const invCompanyName = document.getElementById("invCompanyName");
const invCompanyAddress = document.getElementById("invCompanyAddress");
const invCompanyFax = document.getElementById("invCompanyFax");
const invCompanyCIN = document.getElementById("invCompanyCIN");
const invCompanyLogo = document.getElementById("invCompanyLogo");

const customerName = document.getElementById("customerName");
const customerEmail = document.getElementById("customerEmail");
const customerAddress = document.getElementById("customerAddress");
const customerMobile = document.getElementById("customerMobile");

const invoiceBody = document.getElementById("invoiceBody");
const addRowBtn = document.getElementById("addRowBtn");

const subTotalText = document.getElementById("subTotalText");
const taxText = document.getElementById("taxText");
const totalText = document.getElementById("totalText");
const balanceText = document.getElementById("balanceText");

const saveInvoiceBtn = document.getElementById("saveInvoiceBtn");

// ================= SAVED INVOICE LIST =================
const invoiceListModal = document.getElementById("invoiceListModal");
const closeInvoiceListModal = document.getElementById("closeInvoiceListModal");
const invoiceListBox = document.getElementById("invoiceListBox");
const viewInvoicesBtn = document.getElementById("viewInvoicesBtn");

// ================= INIT =================
loadCompanyData();
checkUnitSaved();
checkTaxExists();
setupVoucherNumber();
setTodayDate();
createDefaultRow();

// ================= LOAD COMPANY =================
function loadCompanyData() {
    const companyData = JSON.parse(localStorage.getItem(COMPANY_KEY));

    if (!companyData) {
        alert("No company found! Redirecting...");
        window.location.href = "../business.html";
        return;
    }

    companyLogoImg.src = companyData.logo;
    companyNameText.innerText = companyData.companyName;

    // Invoice company details
    invCompanyLogo.src = companyData.logo;
    invCompanyName.innerText = companyData.companyName;
    invCompanyAddress.innerText = companyData.address;
    invCompanyFax.innerText = companyData.fax;
    invCompanyCIN.innerText = companyData.cin;
}

// ================= UNIT MODAL =================
unitMeasureBtn.addEventListener("click", () => {
    unitModal.style.display = "flex";
    checkUnitSaved();
});

closeUnitModal.addEventListener("click", () => {
    unitModal.style.display = "none";
});

// ================= SAVE UNIT =================
unitForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const symbol = unitSymbol.value.trim();
    const formalName = unitFormalName.value.trim();

    if (!symbol || !formalName) {
        alert("Both fields are required!");
        return;
    }

    const unitData = { symbol, formalName, createdAt: new Date().toLocaleString() };
    localStorage.setItem(UNIT_KEY, JSON.stringify(unitData));

    alert("Unit Saved Successfully!");
    unitForm.reset();
    checkUnitSaved();
});

// ================= VIEW UNIT =================
function checkUnitSaved() {
    const unitData = JSON.parse(localStorage.getItem(UNIT_KEY));

    if (unitData) {
        viewUnitBox.style.display = "block";
        viewUnitBox.innerHTML = `
      <h3 style="margin-bottom:10px;">View Saved Unit of Measure</h3>
      <p><b>Symbol:</b> ${unitData.symbol}</p>
      <p><b>Formal Name:</b> ${unitData.formalName}</p>
      <p><b>Saved At:</b> ${unitData.createdAt}</p>
    `;
    } else {
        viewUnitBox.style.display = "none";
        viewUnitBox.innerHTML = "";
    }
}

// ================= TAX SETUP =================
taxSetupBtn.addEventListener("click", () => {
    taxModal.style.display = "flex";
});

closeTaxModal.addEventListener("click", () => {
    taxModal.style.display = "none";
});

taxForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = taxName.value.trim();
    const percent = taxPercent.value.trim();

    if (!name || percent === "") {
        alert("Tax Name and Tax % required!");
        return;
    }

    if (Number(percent) < 0 || Number(percent) > 100) {
        alert("Tax % must be between 0 and 100!");
        return;
    }

    let taxList = JSON.parse(localStorage.getItem(TAX_KEY)) || [];

    taxList.push({
        taxName: name,
        taxPercent: Number(percent),
        createdAt: new Date().toLocaleString()
    });

    localStorage.setItem(TAX_KEY, JSON.stringify(taxList));

    alert("Tax Saved Successfully!");
    taxForm.reset();
    taxModal.style.display = "none";

    checkTaxExists();
    calculateTotals();
});

// ================= VIEW TAX =================
viewTaxBtn.addEventListener("click", () => {
    showTaxList();
    viewTaxModal.style.display = "flex";
});

closeViewTaxModal.addEventListener("click", () => {
    viewTaxModal.style.display = "none";
});

function showTaxList() {
    const taxList = JSON.parse(localStorage.getItem(TAX_KEY)) || [];

    if (taxList.length === 0) {
        taxListBox.innerHTML = "<p>No Tax Found!</p>";
        return;
    }

    let html = "";
    taxList.forEach((tax, index) => {
        html += `
      <div class="invoice-card">
        <h4>Tax #${index + 1}</h4>
        <p><b>Name:</b> ${tax.taxName}</p>
        <p><b>Percent:</b> ${tax.taxPercent}%</p>
        <p><b>Saved At:</b> ${tax.createdAt}</p>
      </div>
    `;
    });

    taxListBox.innerHTML = html;
}

function checkTaxExists() {
    const taxList = JSON.parse(localStorage.getItem(TAX_KEY)) || [];

    if (taxList.length > 0) {
        viewTaxBtn.style.display = "flex";
    } else {
        viewTaxBtn.style.display = "none";
    }
}

// ================= SALES VOUCHER MODAL =================
salesVoucherBtn.addEventListener("click", () => {
    salesVoucherModal.style.display = "flex";
    setTodayDate();
    setupVoucherNumber();
    calculateTotals();
});

closeSalesVoucherModal.addEventListener("click", () => {
    salesVoucherModal.style.display = "none";
});

// ================= OUTSIDE CLICK CLOSE =================
window.addEventListener("click", (e) => {
    if (e.target === unitModal) unitModal.style.display = "none";
    if (e.target === taxModal) taxModal.style.display = "none";
    if (e.target === viewTaxModal) viewTaxModal.style.display = "none";
    if (e.target === salesVoucherModal) salesVoucherModal.style.display = "none";
    if (e.target === invoiceListModal) invoiceListModal.style.display = "none";
});

// ================= SHUT COMPANY =================
shutCompanyBtn.addEventListener("click", () => {
    const confirmShut = confirm("Are you sure you want to shut company?");
    if (!confirmShut) return;

    alert("Company Shut Successfully!");
    window.location.href = "../business.html";
});

// ================= BACK =================
backBtn.addEventListener("click", () => {
    window.location.href = "../business.html";
});

// ================= DATE =================
function setTodayDate() {
    const today = new Date();
    voucherDateText.innerText = today.toLocaleDateString();
}

// ================= VOUCHER NUMBER AUTO =================
function setupVoucherNumber() {
    let voucherNo = localStorage.getItem(VOUCHER_KEY);

    if (!voucherNo) {
        voucherNo = 1;
        localStorage.setItem(VOUCHER_KEY, voucherNo);
    }

    voucherNumberText.innerText = voucherNo;
}

// ================= DEFAULT ITEM ROW =================
function createDefaultRow() {
    invoiceBody.innerHTML = "";
    addRow();
}

// ================= ADD ROW =================
addRowBtn.addEventListener("click", () => {
    addRow();
});

function addRow() {
    const row = document.createElement("tr");

    row.innerHTML = `
    <td><input type="text" class="itemName" placeholder="Item Name"></td>
    <td><input type="number" class="price" placeholder="Price" disabled></td>
    <td><input type="number" class="qty" placeholder="Qty" disabled></td>
    <td><input type="number" class="amount" placeholder="Amount" disabled></td>
    <td><input type="text" class="remarks" placeholder="Remarks"></td>
    <td><button class="btn danger deleteRowBtn"><i class="ri-delete-bin-6-line"></i></button></td>
  `;

    invoiceBody.appendChild(row);

    const itemName = row.querySelector(".itemName");
    const price = row.querySelector(".price");
    const qty = row.querySelector(".qty");
    const amount = row.querySelector(".amount");
    const deleteBtn = row.querySelector(".deleteRowBtn");

    // RULE: Item name required before enabling price/qty
    itemName.addEventListener("input", () => {
        if (itemName.value.trim() !== "") {
            price.disabled = false;
            qty.disabled = false;
        } else {
            price.disabled = true;
            qty.disabled = true;
            amount.value = "";
            calculateTotals();
        }
    });

    // Amount calculation
    function updateAmount() {
        const p = Number(price.value);
        const q = Number(qty.value);

        if (p > 0 && q > 0) {
            amount.value = (p * q).toFixed(2);
        } else {
            amount.value = "";
        }

        calculateTotals();
    }

    price.addEventListener("input", updateAmount);
    qty.addEventListener("input", updateAmount);

    // Delete row (min 1 row mandatory)
    deleteBtn.addEventListener("click", () => {
        if (invoiceBody.rows.length === 1) {
            alert("Minimum 1 row mandatory. Last row cannot be deleted!");
            return;
        }
        row.remove();
        calculateTotals();
    });
}

// ================= CALCULATIONS =================
function calculateTotals() {
    let subtotal = 0;

    document.querySelectorAll(".amount").forEach((amt) => {
        subtotal += Number(amt.value) || 0;
    });

    const taxList = JSON.parse(localStorage.getItem(TAX_KEY)) || [];
    let totalTax = 0;

    taxList.forEach((tax) => {
        totalTax += (subtotal * tax.taxPercent) / 100;
    });

    const total = subtotal + totalTax;

    subTotalText.innerText = subtotal.toFixed(2);
    taxText.innerText = totalTax.toFixed(2);
    totalText.innerText = total.toFixed(2);
    balanceText.innerText = total.toFixed(2);
}

// ================= SAVE INVOICE VALIDATION =================
saveInvoiceBtn.addEventListener("click", () => {
    // CUSTOMER VALIDATION
    if (
        customerName.value.trim() === "" ||
        customerEmail.value.trim() === "" ||
        customerAddress.value.trim() === "" ||
        customerMobile.value.trim() === ""
    ) {
        alert("Customer details are required!");
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(customerEmail.value.trim())) {
        alert("Enter valid customer email!");
        return;
    }

    if (!/^[0-9]{10,15}$/.test(customerMobile.value.trim())) {
        alert("Customer mobile must be 10 to 15 digits numeric!");
        return;
    }

    // ITEM VALIDATION
    const rows = invoiceBody.querySelectorAll("tr");

    for (let row of rows) {
        const itemName = row.querySelector(".itemName").value.trim();
        const price = row.querySelector(".price").value.trim();
        const qty = row.querySelector(".qty").value.trim();
        const amount = row.querySelector(".amount").value.trim();

        if (!itemName) {
            alert("Each row must have Item Name!");
            return;
        }

        if (!price || Number(price) <= 0) {
            alert("Each row must have valid Price!");
            return;
        }

        if (!qty || Number(qty) <= 0) {
            alert("Each row must have valid Quantity!");
            return;
        }

        if (!amount || Number(amount) <= 0) {
            alert("Each row must have valid Amount!");
            return;
        }
    }

    // SAVE INVOICE DATA
    const invoiceItems = [];

    rows.forEach((row) => {
        invoiceItems.push({
            itemName: row.querySelector(".itemName").value.trim(),
            price: Number(row.querySelector(".price").value),
            qty: Number(row.querySelector(".qty").value),
            amount: Number(row.querySelector(".amount").value),
            remarks: row.querySelector(".remarks").value.trim()
        });
    });

    const invoiceData = {
        voucherNo: Number(voucherNumberText.innerText),
        date: voucherDateText.innerText,
        customer: {
            name: customerName.value.trim(),
            email: customerEmail.value.trim(),
            address: customerAddress.value.trim(),
            mobile: customerMobile.value.trim()
        },
        items: invoiceItems,
        subtotal: Number(subTotalText.innerText),
        tax: Number(taxText.innerText),
        total: Number(totalText.innerText),
        balanceDue: Number(balanceText.innerText),
        createdAt: new Date().toLocaleString()
    };

    let invoiceList = JSON.parse(localStorage.getItem(INVOICE_KEY)) || [];
    invoiceList.push(invoiceData);
    localStorage.setItem(INVOICE_KEY, JSON.stringify(invoiceList));

    // UPDATE VOUCHER NUMBER
    let voucherNo = Number(localStorage.getItem(VOUCHER_KEY));
    voucherNo++;
    localStorage.setItem(VOUCHER_KEY, voucherNo);

    alert("Invoice Saved Successfully!");

    // RESET FORM
    customerName.value = "";
    customerEmail.value = "";
    customerAddress.value = "";
    customerMobile.value = "";

    createDefaultRow();
    setupVoucherNumber();
    calculateTotals();
});

// ================= VIEW INVOICES =================
viewInvoicesBtn.addEventListener("click", () => {
    showInvoiceList();
    invoiceListModal.style.display = "flex";
});

closeInvoiceListModal.addEventListener("click", () => {
    invoiceListModal.style.display = "none";
});

function showInvoiceList() {
    const invoiceList = JSON.parse(localStorage.getItem(INVOICE_KEY)) || [];

    if (invoiceList.length === 0) {
        invoiceListBox.innerHTML = "<p>No invoices saved yet.</p>";
        return;
    }

    let html = "";

    invoiceList.forEach((inv) => {
        html += `
      <div class="invoice-card">
        <h4>Voucher #${inv.voucherNo}</h4>
        <p><b>Date:</b> ${inv.date}</p>
        <p><b>Customer:</b> ${inv.customer.name}</p>
        <p><b>Email:</b> ${inv.customer.email}</p>
        <p><b>Mobile:</b> ${inv.customer.mobile}</p>
        <p><b>Subtotal:</b> ${inv.subtotal}</p>
        <p><b>Tax:</b> ${inv.tax}</p>
        <p><b>Total:</b> ${inv.total}</p>
        <p><b>Balance Due:</b> ${inv.balanceDue}</p>
        <p><b>Saved At:</b> ${inv.createdAt}</p>
      </div>
    `;
    });

    invoiceListBox.innerHTML = html;
}