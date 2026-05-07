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

            window.open("../../profile-photo.html", "_self");

        } else {

            /* No operation will be performed here because the user is still on the Contact page, and we have received login details for the current user. If profile photo details are not provided, then the operation will be performed in the `if` part. */

        }

    }

}

isLogin();

/* =============== LOAD COMPANY DETAILS SECTION =============== */

function loadCompanyDetails() {

    let companyLogoImg = document.getElementById("companyLogoImg");
    let companyNameText = document.getElementById("companyNameText");

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


                companyLogoImg.src = companyData[i].logo;
                companyNameText.textContent = companyData[i].companyName;

                if (companyData[i].stockType === "Account Only") {


                } else {

                    window.open("../index.html", "_self");

                }

            }

        }

    }

    window.scrollTo(0, 0);
}

loadCompanyDetails();

/* =============== OPEN ADD UNIT OF MEASURE SECTION =============== */

let unitMeasureBtn = document.getElementById("unitMeasureBtn");
unitMeasureBtn.addEventListener("click", () => {

    let unitModal = document.getElementById("unitModal");
    unitModal.style.display = "flex";

});

/* =============== ADD UNIT OF MEASURE SECTION =============== */

let saveUnitOfMeasureBtn = document.getElementById("saveUnitOfMeasureBtn");
saveUnitOfMeasureBtn.addEventListener("click", addUnitOfMeasure);

function addUnitOfMeasure() {

    /* =============== ALL INPUTS =============== */
    let unitSymbol = document.getElementById("unitSymbol");
    let unitFormalName = document.getElementById("unitFormalName");

    /* =============== VALIDATION =============== */
    if (unitSymbol.value.trim() === "") {

        Toastify({
            text: "Enter Unit Of Symbol ",
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

        if (unitFormalName.value.trim() === "") {

            Toastify({
                text: "Enter Unit Formal Name ",
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

            saveUnitOfMeasure(unitSymbol.value.trim(), unitFormalName.value.trim());
            unitSymbol.value = "";
            unitFormalName.value = "";

        }

    }


}

/* =============== SAVE UNIT OF MEASURE SECTION =============== */

function saveUnitOfMeasure(symbol, formalName) {

    let unitModal = document.getElementById("unitModal");
    let companyNameText = document.getElementById("companyNameText").textContent

    let currentUser = null;

    if (sessionLogin === true) {

        currentUser = sessionStorage.getItem("currentUser");

    } else {

        currentUser = localStorage.getItem("currentUser");

    }

    let currentDate = new Date();

    let unitData = {
        symbol: symbol,
        formalName: formalName,
        companyName: companyNameText,
        unitCreator: currentUser,
        createdAt: currentDate.toLocaleDateString() + " at " + currentDate.toLocaleTimeString(),
    }

    /* =============== LOAD ALL UNIT OF MEASURE DATA =============== */
    let unitOfMeasure = JSON.parse(localStorage.getItem("unitOfMeasure")) || [];

    if (unitOfMeasure.length === 0) {

        unitOfMeasure.push(unitData);
        localStorage.setItem("unitOfMeasure", JSON.stringify(unitOfMeasure));
        loadUnitOfMeasureData();
        unitModal.style.display = "none";

        Toastify({
            text: "Created Successfully ",
            duration: 2000,
            close: false,
            gravity: "top",
            position: "right",
            style: {

                background: "#057d17",
                color: "#FFFFFF",
                borderRadius: "10px"

            }
        }).showToast();


    } else {

        let found = false;

        for (let i = 0; i < unitOfMeasure.length; i++) {

            if (unitOfMeasure[i].unitCreator === currentUser) {

                if (unitOfMeasure[i].symbol === symbol || unitOfMeasure[i].formalName === formalName) {

                    found = true;
                }

            }
        }

        if (found) {

            Toastify({
                text: "Unit Symbol or Formal Name Already Exist ",
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

            unitOfMeasure.push(unitData);
            localStorage.setItem("unitOfMeasure", JSON.stringify(unitOfMeasure));
            loadUnitOfMeasureData();
            unitModal.style.display = "none";

            Toastify({
                text: "Created Successfully ",
                duration: 2000,
                close: false,
                gravity: "top",
                position: "right",
                style: {

                    background: "#057d17",
                    color: "#FFFFFF",
                    borderRadius: "10px"

                }
            }).showToast();

        }

    }


}

/* =============== LOAD UNIT OF MEASURE DATA =============== */

function loadUnitOfMeasureData() {

    let currentUser = null;

    if (sessionLogin === true) {

        currentUser = sessionStorage.getItem("currentUser");

    } else {

        currentUser = localStorage.getItem("currentUser");

    }

    let ManageunitMeasureBtn = document.getElementById("ManageunitMeasureBtn");

    /* =============== LOAD ALL UNIT OF MEASURE DATA =============== */
    let unitOfMeasure = JSON.parse(localStorage.getItem("unitOfMeasure")) || [];

    if (unitOfMeasure.length !== 0) {

        for (let i = 0; i < unitOfMeasure.length; i++) {

            if (unitOfMeasure[i].unitCreator === currentUser) {

                ManageunitMeasureBtn.style.display = "flex";
                break;

            }

        }

    }

    window.scrollTo(0, 0);

}

loadUnitOfMeasureData();

/* =============== CLOSE ADD UNIT OF MEASURE SECTION =============== */

let closeUnitModal = document.getElementById("closeUnitModal");
closeUnitModal.addEventListener("click", () => {

    let unitModal = document.getElementById("unitModal");
    unitModal.style.display = "none";

});

/* =============== OPEN ADD TAX SETUP SECTION =============== */

let taxSetupBtn = document.getElementById("taxSetupBtn");
taxSetupBtn.addEventListener("click", () => {

    let taxModal = document.getElementById("taxModal");
    taxModal.style.display = "flex";

});

/* =============== ADD TAX SETUP SECTION =============== */

let saveTaxSetupBtn = document.getElementById("saveTaxSetupBtn");
saveTaxSetupBtn.addEventListener("click", addTaxSetup);

function addTaxSetup() {

    /* =============== ALL INPUTS =============== */
    let taxName = document.getElementById("taxName");
    let taxPercent = document.getElementById("taxPercent");

    /* =============== VALIDATION =============== */
    if (taxName.value.trim() === "") {

        Toastify({
            text: "Enter Tax Name ",
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

        if (taxPercent.value.trim() === "") {

            Toastify({
                text: "Enter Tax Value ",
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

            if (taxPercent.value.trim().match(/^[0-9]+$/)) {

                saveTaxSetup(taxName.value.trim(), taxPercent.value.trim());
                taxName.value = "";
                taxPercent.value = "";

            } else {

                Toastify({
                    text: "Only Numbers Allowed ",
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

    }


}

/* =============== SAVE TAX SETUP SECTION =============== */

function saveTaxSetup(taxName, taxPercent) {

    let taxModal = document.getElementById("taxModal");
    let companyNameText = document.getElementById("companyNameText").textContent

    let currentUser = null;

    if (sessionLogin === true) {

        currentUser = sessionStorage.getItem("currentUser");

    } else {

        currentUser = localStorage.getItem("currentUser");

    }

    let currentDate = new Date();

    let taxData = {
        taxName: taxName,
        taxPercent: taxPercent,
        companyName: companyNameText,
        taxCreator: currentUser,
        createdAt: currentDate.toLocaleDateString() + " at " + currentDate.toLocaleTimeString(),
    }

    /* =============== LOAD ALL UNIT OF MEASURE DATA =============== */
    let taxSetup = JSON.parse(localStorage.getItem("taxSetup")) || [];

    if (taxSetup.length === 0) {

        taxSetup.push(taxData);
        localStorage.setItem("taxSetup", JSON.stringify(taxSetup));
        loadTaxSetupData();
        taxModal.style.display = "none";

        Toastify({
            text: "Created Successfully ",
            duration: 2000,
            close: false,
            gravity: "top",
            position: "right",
            style: {

                background: "#057d17",
                color: "#FFFFFF",
                borderRadius: "10px"

            }
        }).showToast();


    } else {

        let found = false;

        for (let i = 0; i < taxSetup.length; i++) {

            if (taxSetup[i].taxCreator === currentUser) {

                if (taxSetup[i].taxName === taxName) {

                    found = true;
                }

            }
        }

        if (found) {

            Toastify({
                text: "Tax Name Is Already Exist ",
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

            taxSetup.push(taxData);
            localStorage.setItem("taxSetup", JSON.stringify(taxSetup));
            loadTaxSetupData();
            taxModal.style.display = "none";

            Toastify({
                text: "Tax Created Successfully ",
                duration: 2000,
                close: false,
                gravity: "top",
                position: "right",
                style: {

                    background: "#057d17",
                    color: "#FFFFFF",
                    borderRadius: "10px"

                }
            }).showToast();

        }

    }


}

/* =============== LOAD TAX SETUP DATA =============== */

function loadTaxSetupData() {

    let currentUser = null;

    if (sessionLogin === true) {

        currentUser = sessionStorage.getItem("currentUser");

    } else {

        currentUser = localStorage.getItem("currentUser");

    }

    let ManagetaxSetupBtn = document.getElementById("ManagetaxSetupBtn");

    /* =============== LOAD ALL UNIT OF MEASURE DATA =============== */
    let taxSetup = JSON.parse(localStorage.getItem("taxSetup")) || [];

    if (taxSetup.length !== 0) {

        for (let i = 0; i < taxSetup.length; i++) {

            if (taxSetup[i].taxCreator === currentUser) {

                ManagetaxSetupBtn.style.display = "flex";
                break;

            }

        }

    }

    window.scrollTo(0, 0);

}

loadTaxSetupData();

/* =============== CLOSE ADD TAX SETUP SECTION =============== */

let closeTaxModal = document.getElementById("closeTaxModal");
closeTaxModal.addEventListener("click", () => {

    let taxModal = document.getElementById("taxModal");
    taxModal.style.display = "none";

});

/* =============== OPEN ADD SALES VOUCHER SECTION =============== */

let salesVoucherBtn = document.getElementById("salesVoucherBtn");
salesVoucherBtn.addEventListener("click", () => {

    let salesVoucherModal = document.getElementById("salesVoucherModal");
    salesVoucherModal.style.display = "flex";
    loadVoucherCompanyData();
    addVoucherRow();

});

/* =============== LOAD SALES VOUCHER - COMPANY DATA =============== */
function loadVoucherCompanyData() {

    let currentUser = null;

    if (sessionLogin === true) {

        currentUser = sessionStorage.getItem("currentUser");

    } else {

        currentUser = localStorage.getItem("currentUser");

    }

    let voucherNumberText = document.getElementById("voucherNumberText");
    let voucherDateText = document.getElementById("voucherDateText");
    let invCompanyName = document.getElementById("invCompanyName");
    let invCompanyAddress = document.getElementById("invCompanyAddress");
    let invCompanyFax = document.getElementById("invCompanyFax");
    let invCompanyCIN = document.getElementById("invCompanyCIN");
    let invCompanyLogo = document.getElementById("invCompanyLogo");

    let currentDate = new Date();

    /* =============== LOAD COMPANY DATA =============== */
    let companyData = JSON.parse(localStorage.getItem("companyData")) || [];

    if (companyData.length !== 0) {

        for (let i = 0; i < companyData.length; i++) {

            if (companyData[i].creator === currentUser) {

                voucherNumberText.textContent = companyData[i].voucherNo;
                voucherDateText.textContent = currentDate.toLocaleDateString();
                invCompanyName.textContent = companyData[i].companyName;
                invCompanyAddress.textContent = companyData[i].address;
                invCompanyFax.textContent = companyData[i].fax;
                invCompanyCIN.textContent = companyData[i].cin;
                invCompanyLogo.src = companyData[i].logo;

            }

        }
    }

}

/* =============== ADD SALES VOUCHER ITEM ROW =============== */

let addRowBtn = document.getElementById("addRowBtn");
addRowBtn.addEventListener("click", () => {

    addVoucherRow();

});

function addVoucherRow() {

    let currentUser = null;

    if (sessionLogin === true) {

        currentUser = sessionStorage.getItem("currentUser");

    } else {

        currentUser = localStorage.getItem("currentUser");

    }

    let invoiceBody = document.getElementById("invoiceBody");

    /* =============== LOAD ALL UNIT OF MEASURE =============== */
    let unitOfMeasure = JSON.parse(localStorage.getItem("unitOfMeasure")) || [];

    let unitOptions = `<option value="">Select Unit</option>`;

    for (let i = 0; i < unitOfMeasure.length; i++) {

        if (unitOfMeasure[i].unitCreator === currentUser) {

            unitOptions += `<option value="${unitOfMeasure[i].formalName}">${unitOfMeasure[i].symbol}</option>`;

        }
    }

    /* =============== LOAD ALL TAX =============== */
    let taxSetup = JSON.parse(localStorage.getItem("taxSetup")) || [];

    let taxOptions = `<option value="">Select Tax</option>`;

    for (let i = 0; i < taxSetup.length; i++) {

        if (taxSetup[i].taxCreator === currentUser) {

            taxOptions += `<option value="${taxSetup[i].taxPercent}">${taxSetup[i].taxName}</option>`;

        }
    }

    /* =============== PRINT ITEM INPUT DATA =============== */

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>
            <input type="text" class="itemName" placeholder="Item Name">
        </td>

        <td>
            <input type="number" class="price" placeholder="Price" disabled>
        </td>
        
        <td>
            <input type="number" class="qty" placeholder="Qty" disabled>
        </td>

        <td>
            <select class="unitOfMesaureInput" disabled>
                ${unitOptions}
            </select>

            <p class="unitText"></p>
        </td>

        <td>
            <input type="number" class="amount" placeholder="Amount" disabled>
        </td>

        <td>
            <select class="taxSetupInput" disabled>
                ${taxOptions}
            </select>

            <p class="taxText"></p>
        </td>

        <td>
            <input type="number" class="taxAmount" placeholder="Tax Amount" disabled>
        </td>

        <td>
            <input type="number" class="totalAmount" placeholder="Total" disabled>
        </td>

        <td>
            <input type="number" class="paidAmount" placeholder="Paid" disabled>
        </td>

        <td>
            <input type="number" class="dueAmount" placeholder="Due Amount" disabled>
        </td>

        <td>
            <input type="text" class="remarks" placeholder="Remarks">
        </td>

        <td>
            <button class="btn danger deleteRowBtn" onclick="deleteItemRow(this)">
                <i class="ri-delete-bin-6-line"></i>
            </button>
        </td>
      `;

    invoiceBody.appendChild(row);

    let subTotalText = document.getElementById("subTotalText");
    let totalTaxText = document.getElementById("taxText");
    let totalText = document.getElementById("totalText");
    let totalPaidText = document.getElementById("totalPaidText");
    let balanceText = document.getElementById("balanceText");

    /* =============== ON UNIT OF MEASURE SELECT =============== */
    let unitSelector = row.querySelector(".unitOfMesaureInput");
    let unitText = row.querySelector(".unitText");

    unitSelector.addEventListener("change", function () {

        unitText.textContent = this.value;

        if (this.value !== "") {

            taxSelector.disabled = false;

        } else {

            taxSelector.disabled = true;

        }

    });

    /* =============== ON TAX SELECT =============== */
    let taxSelector = row.querySelector(".taxSetupInput");
    let taxText = row.querySelector(".taxText");
    let totalAmount = row.querySelector(".totalAmount");

    taxSelector.addEventListener("change", function () {

        if (this.value === "") {

            taxText.textContent = "";
            taxAmount.value = "";
            totalAmount.value = "";
            paidAmount.value = "";
            paidAmount.disabled = true;

        } else {

            taxText.textContent = this.value + "%";
            taxAmount.value = (Number(amount.value) * Number(this.value) / 100).toFixed(2);
            totalAmount.value = (Number(amount.value) + Number(taxAmount.value)).toFixed(2);
            paidAmount.disabled = false;

            let totalTax = 0;

            for (let i = 0; i < allRows.length; i++) {

                let amountInput = allRows[i].querySelector(".taxAmount");
                totalTax += Number(amountInput.value) || 0;

            }

            totalTaxText.textContent = "₹" + totalTax.toFixed(2);

            let totalAmt = 0;

            for (let i = 0; i < allRows.length; i++) {

                let amountInput = allRows[i].querySelector(".amount");
                let TaxAmountInput = allRows[i].querySelector(".taxAmount");

                totalAmt += (Number(amountInput.value) + Number(TaxAmountInput.value)) || 0;

            }

            totalText.textContent = "₹" + totalAmt.toFixed(2);

        }

    });

    /* =============== ENABLE INPUTS =============== */
    let itemName = row.querySelector(".itemName");
    let price = row.querySelector(".price");
    let qty = row.querySelector(".qty");
    let paidAmount = row.querySelector(".paidAmount");
    let amount = row.querySelector(".amount");
    let taxAmount = row.querySelector(".taxAmount");
    let dueAmount = row.querySelector(".dueAmount");

    /* =============== TRACK ITEM NAME INPUT =============== */
    itemName.addEventListener("input", function () {

        if (itemName.value.trim() !== "") {

            price.disabled = false;

        } else {

            price.disabled = true;

        }

    });

    /* =============== TRACK ITEM PRICE INPUT =============== */
    price.addEventListener("input", function () {

        if (price.value.trim() !== "") {

            qty.disabled = false;

        } else {

            qty.disabled = true;

        }

    });

    /* =============== TRACK ITEM QUANTITY INPUT =============== */

    let allRows = invoiceBody.querySelectorAll("tr");

    qty.addEventListener("input", function () {

        if (qty.value.trim() !== "") {

            let calAmount = (Number(price.value) * Number(qty.value)).toFixed(2);
            amount.value = calAmount;

            if (qty.value > 0) {

                unitSelector.disabled = false;

                let subTotal = 0;

                for (let i = 0; i < allRows.length; i++) {

                    let amountInput = allRows[i].querySelector(".amount");
                    subTotal += Number(amountInput.value) || 0;

                }

                subTotalText.textContent = "₹" + subTotal.toFixed(2);

            } else {

                unitSelector.disabled = true;

            }

        } else {

            unitSelector.disabled = true;

        }

    });

    /* =============== TRACK ITEM QUANTITY INPUT =============== */
    amount.addEventListener("input", function () {

        if (amount.value.trim() !== "") {

            taxSelector.disabled = false;

        } else {

            taxSelector.disabled = true;

        }

    });

    /* =============== TRACK ITEM QUANTITY INPUT =============== */
    paidAmount.addEventListener("input", function () {

        let total = Number(totalAmount.value) || 0;
        let paid = Number(paidAmount.value) || 0;

        if (paidAmount.value.trim() === "") {

            dueAmount.value = "";
            return;

        }

        if (paidAmount.value.trim() !== "") {

            if (paid > total) {

                Toastify({
                    text: "Paid Amount Cannot Be Greater Than Total Amount ",
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

                dueAmount.value = "";
                return;
            }

            let due = total - paid;
            dueAmount.value = due.toFixed(2);

            let totalPaid = 0;

            for (let i = 0; i < allRows.length; i++) {

                let amountInput = allRows[i].querySelector(".paidAmount");

                totalPaid += Number(amountInput.value) || 0;

            }

            totalPaidText.textContent = "₹" + totalPaid.toFixed(2);

            let totalDue = 0;

            for (let i = 0; i < allRows.length; i++) {

                let amountInput = allRows[i].querySelector(".dueAmount");

                totalDue += Number(amountInput.value) || 0;

            }

            balanceText.textContent = "₹" + totalDue.toFixed(2);

        } else {

            taxSelector.disabled = true;

        }

    });
}

/* =============== DELETE SALES VOUCHER ITEM ROW =============== */

function deleteItemRow(btn) {

    let invoiceBody = document.getElementById("invoiceBody");

    if (invoiceBody.rows.length <= 1) {

        Toastify({
            text: "Minimum 1 Item Row Required!",
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

        return;
    }

    let tr = btn.closest("tr");
    tr.remove();

}

/* =============== SAVE SALES VOUCHER INVOICE =============== */

let saveInvoiceBtn = document.getElementById("saveInvoiceBtn");
saveInvoiceBtn.addEventListener("click", function () {

    let customerName = document.getElementById("customerName");
    let customerEmail = document.getElementById("customerEmail");
    let customerAddress = document.getElementById("customerAddress");
    let customerMobile = document.getElementById("customerMobile");

    let invoiceBody = document.getElementById("invoiceBody");
    let rows = invoiceBody.querySelectorAll("tr");

    if (customerName.value.trim() === "") {

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
    else if (customerEmail.value.trim() === "") {

        Toastify({
            text: "Enter Customer Email ID ",
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
    else if (customerEmail.value.trim().match("@")) {

        if (customerEmail.value.trim().match("gmail.com")) {

            if (customerAddress.value.trim() === "") {

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
            else if (customerMobile.value === "") {

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

            } else {

                if (customerMobile.value[0].match(/[7-9]/g)) {

                    if (customerMobile.value.length === 10) {

                        for (let i = 0; i < rows.length; i++) {

                            let itemName = rows[i].querySelector(".itemName").value.trim();
                            let price = rows[i].querySelector(".price").value.trim();
                            let qty = rows[i].querySelector(".qty").value.trim();
                            let unit = rows[i].querySelector(".unitOfMesaureInput").value.trim();
                            let amount = rows[i].querySelector(".amount").value.trim();
                            let tax = rows[i].querySelector(".taxSetupInput").value.trim();
                            let taxAmount = rows[i].querySelector(".taxAmount").value.trim();
                            let totalAmount = rows[i].querySelector(".totalAmount").value.trim();
                            let paidAmount = rows[i].querySelector(".paidAmount").value.trim();
                            let dueAmount = rows[i].querySelector(".dueAmount").value.trim();
                            let remarks = rows[i].querySelector(".remarks").value.trim();

                            if (itemName === "" || price === "" || qty === "" || unit === "" || amount === "" || tax === "" || taxAmount === "" || totalAmount === "" | paidAmount === "" || dueAmount === "") {

                                Toastify({
                                    text: `Row ${i + 1} Is Incomplete! Please Fill All Details.`,
                                    duration: 2500,
                                    close: false,
                                    gravity: "top",
                                    position: "right",
                                    style: {
                                        background: "#ff1100",
                                        color: "#FFFFFF",
                                        borderRadius: "10px"
                                    }
                                }).showToast();

                                return;

                            }
                        }

                        storeSalesVoucherInvoice();

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

});

/* =============== STORE SALES VOUCHER INVOICE =============== */
function storeSalesVoucherInvoice() {

    let salesVoucherModal = document.getElementById("salesVoucherModal");
    let customerName = document.getElementById("customerName");
    let customerEmail = document.getElementById("customerEmail");
    let customerAddress = document.getElementById("customerAddress");
    let customerMobile = document.getElementById("customerMobile");
    let voucherNumberText = document.getElementById("voucherNumberText");
    let voucherDateText = document.getElementById("voucherDateText");
    let subTotalText = document.getElementById("subTotalText");
    let taxText = document.getElementById("taxText");
    let totalText = document.getElementById("totalText");
    let totalPaidText = document.getElementById("totalPaidText");
    let balanceText = document.getElementById("balanceText");
    let invoiceBody = document.getElementById("invoiceBody");
    let rows = invoiceBody.querySelectorAll("tr");

    let currentUser = null;

    /* =============== LOAD ALL SALES VOUCHER INVOICE =============== */
    let salesVoucher = JSON.parse(localStorage.getItem("salesVoucher")) || [];

    if (sessionLogin === true) {

        currentUser = sessionStorage.getItem("currentUser");

    } else {

        currentUser = localStorage.getItem("currentUser");

    }

    let currentDate = new Date();

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
    popupMessage.textContent = "Are You Want To Sure To Create This Sales Voucher?";

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

        /* =============== STORE ITEMS DATA =============== */
        let items = [];

        for (let i = 0; i < rows.length; i++) {

            let itemData = {

                itemName: rows[i].querySelector(".itemName").value.trim(),
                price: rows[i].querySelector(".price").value.trim(),
                qty: rows[i].querySelector(".qty").value.trim(),
                unit: rows[i].querySelector(".unitOfMesaureInput").value.trim(),
                amount: rows[i].querySelector(".amount").value.trim(),
                tax: rows[i].querySelector(".taxSetupInput").value.trim(),
                taxAmount: rows[i].querySelector(".taxAmount").value.trim(),
                totalAmount: rows[i].querySelector(".totalAmount").value.trim(),
                paidAmount: rows[i].querySelector(".paidAmount").value.trim(),
                dueAmount: rows[i].querySelector(".dueAmount").value.trim(),
                remarks: rows[i].querySelector(".remarks").value.trim()

            };

            items.push(itemData);

        }

        let invoiceData = {

            customerName: customerName.value.trim(),
            customerEmail: customerEmail.value.trim(),
            customerMobile: customerMobile.value.trim(),
            customerAddress: customerAddress.value.trim(),
            voucherNo: voucherNumberText.textContent,
            invoiceDate: voucherDateText.textContent,
            items: items,
            subTotal: subTotalText.textContent,
            totalTax: taxText.textContent,
            totalAllAmount: totalText.textContent,
            totalPaid: totalPaidText.textContent,
            totalDue: balanceText.textContent,
            creator: currentUser,
            createdAt: currentDate.toDateString() + " at " + currentDate.toLocaleTimeString(),
            updatedAt: currentDate.toDateString() + " at " + currentDate.toLocaleTimeString(),

        }

        salesVoucher.push(invoiceData);
        localStorage.setItem("salesVoucher", JSON.stringify(salesVoucher));

        /* =============== LOAD ALL SALES VOUCHER INVOICE =============== */
        let companyData = JSON.parse(localStorage.getItem("companyData")) || [];

        if (companyData.length !== 0) {

            for (let i = 0; i < companyData.length; i++) {

                if (companyData[i].creator === currentUser) {

                    companyData[i].voucherNo += 1;
                    break;
                }

            }

            localStorage.setItem("companyData", JSON.stringify(companyData));
        }

        salesVoucherModal.style.display = "none";
        window.scrollTo(0, 0);
        loadSalesVoucherData();

        Toastify({
            text: "Voucher Created Successfully ",
            duration: 2000,
            close: false,
            gravity: "top",
            position: "right",
            style: {

                background: "#2baa00",
                color: "#FFFFFF",
                borderRadius: "10px"

            }
        }).showToast();

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

/* =============== LOAD SALES VOUCHER DATA =============== */
function loadSalesVoucherData() {

    let manageSalesVoucherBtn = document.getElementById("manageSalesVoucherBtn");

    let currentUser = null;

    if (sessionLogin === true) {

        currentUser = sessionStorage.getItem("currentUser");

    } else {

        currentUser = localStorage.getItem("currentUser");

    }

    /* =============== LOAD ALL SALES VOUCHER INVOICE =============== */
    let salesVoucher = JSON.parse(localStorage.getItem("salesVoucher")) || [];

    if (salesVoucher.length !== 0) {

        for (let i = 0; i < salesVoucher.length; i++) {

            if (salesVoucher[i].creator === currentUser) {

                manageSalesVoucherBtn.style.display = "flex";
                break;

            }

        }
    }

}

loadSalesVoucherData();

/* =============== CLOSE ADD SALES VOUCHER SECTION =============== */

let closeSalesVoucherModal = document.getElementById("closeSalesVoucherModal");
closeSalesVoucherModal.addEventListener("click", () => {

    let invoiceBody = document.getElementById("invoiceBody");
    let salesVoucherModal = document.getElementById("salesVoucherModal");

    let customerName = document.getElementById("customerName").value;
    let customerEmail = document.getElementById("customerEmail").value;
    let customerAddress = document.getElementById("customerAddress").value;
    let customerMobile = document.getElementById("customerMobile").value;

    salesVoucherModal.style.display = "none";
    invoiceBody.innerHTML = "";

    customerName.value = "";
    customerEmail.value = "";
    customerAddress.value = "";
    customerMobile.value = "";

});

/* =============== OPEN MANAGE PAGE =============== */

function manageUom() {

    window.open("./pages/manage-uom.html", "_self")

}

function manageTax() {

    window.open("./pages/manage-tax.html", "_self")

}

function manageVoucher() {

    window.open("./pages/manage-voucher.html", "_self")

}