# Chapter 50 - Part 9

## Task:
Ek aisa project banao jisme user **Registration** aur **Login** dono kar sake.

---

## Registration Form Fields:
User se ye details lo:
- **Name**
- **Email**
- **Number**
- **Password**

---

## Data Storage Requirement:
- In sab details ko ek **object** me store karo.
- **Email ko key** banakar user ka data **Local Storage** me store karo.
- Data store karne ke liye **`JSON.stringify()`** ka use mandatory hai.

Example format:
- Key: `userEmail@gmail.com`
- Value: `{"name":"...","email":"...","number":"...","password":"..."}`

---

## Duplicate Registration Check:
- Pehle check karo ki same email se user already registered hai ya nahi.
- Agar user already registered ho to **text me error message show karo**:
  - `"User already registered"`

---

## Login Feature:
- User login kare **email aur password** ke through.
- Local Storage se data fetch karke match karo.
- Agar details match ho jaye to **success message show karo**.
- Agar match na ho to **error message show karo**.

# Chapter 50 - Part 12

## Task

Ek aisa project banaiye jisme user ko bola jaye ki **apna profile photo upload kare**.

## Requirements

- User ko profile photo upload karne ka option diya jaye.
- Jab user photo upload kare, toh uska **preview screen par show hona chahiye**.
- Photo upload karne ki condition honi chahiye:
  - User **1MB se zyada size ki image upload nahi kar sakta**.
- Agar user invalid image upload kare ya size limit exceed ho jaye:
  - Toh **error message text me show hona chahiye**.
- Agar image valid ho:
  - Toh **Next button automatically enable ho jana chahiye**.
- Jaise hi user **Next button par click kare**:
  - User ka profile photo **localStorage me save ho jana chahiye**.
- Next time jab user profile open kare:
  - Toh photo **direct localStorage se load hoke show ho**.
  - Aur ek **welcome message bhi display ho**.

# Chapter 50 - Part 13

## Task

Ek aisa project banaiye jisme **Register** aur **Login** ka option ho. User ka data **localStorage** me store kiya jaye aur login karte time data **sessionStorage** me store ho.

## Requirements

- Project me **Register** aur **Login** dono ka option hona chahiye.
- Register karte time user ka data **localStorage** me save hona chahiye.
- Login karte time user ka data **sessionStorage** me save hona chahiye.

## Encryption / Decryption

- Data ko encrypt karne ke liye **btoa()** ka use karna hai.
- Data ko match / decrypt karne ke liye **atob()** ka use karna hai.

## Profile Photo Upload (First Time User)

- Agar user **first time registration/login** kar raha hai toh usko **profile photo upload** karne ka option milna chahiye.
- Profile photo upload ki condition:
  - Sirf **1MB tak ki image allowed** hogi.
- Photo upload hone ke baad:
  - Image ka **preview show hona chahiye**.
  - **Next button show hona chahiye**.

## Next Action

- Jaise hi user **Next button par click kare**:
  - User ko **Welcome message show hona chahiye**.

## Profile Page Protection

- Login hone ke baad user agar **profile page ka URL copy karke direct open kare**, toh us page ko **protect** kiya jana chahiye.
- Without proper login/session ke profile page access nahi hona chahiye.

# Chapter 50 - Part 14

## Task

Ek aisa project banaiye jisme **Chapter 50 - Part 13** ke jaisa **Register** aur **Login** ka option ho, aur proper **validation** bhi implement ki jaye.

## Requirements

### Register / Login System

- Project me **Register** aur **Login** ka option hona chahiye.
- Registration aur login ke time **validation** apply hona chahiye (empty fields allow na ho).
- User ka data **localStorage** me store hona chahiye.
- Login hone ke baad user ko **Dashboard page** par redirect kiya jaye.

---

## Dashboard Page

Login hone ke baad user ko ek dashboard dikhna chahiye jisme:

### Profile Card

Dashboard ke top par ek card hona chahiye jisme:

- User ka **Profile Photo**
- User ka **Name**
- User ka **Last Login Date**
- Niche ek **Logout Button**

---

## Dashboard Options Cards

Profile card ke niche multiple cards hone chahiye jinme ye options hon:

- **Businesses**
- **About Me**
- **All Contacts**
- **Playlist**

---

## Footer Section

Dashboard ke sabse niche ek footer section hona chahiye jisme:

- Website ka **Copyright Message**
- Developer ka **Credit / Name**

# Chapter 50 - Part 15

## Task

Ek aisa project banaiye jisme user ko **Contact Add** karne ka option mile. User contact ka **Name**, **Mobile Number**, aur **Location** add kar sake aur data ko **localStorage** me save kiya jaye.

---

## Requirements

### Add Contact Form

User contact add kar sake jisme ye fields hon:

- **Contact Name**
- **Mobile Number**
- **Location**

---

### Contact List Display

- Add kiye gaye contacts ki **list screen par show honi chahiye**.
- Har contact ke sath:
  - **Name**
  - **Mobile Number**
  - **Location**
- Ye details **icons ke sath show honi chahiye**.

---

### Search Option

- Contact list ke sabse upar ek **Search Bar** hona chahiye.
- Search se user contact ko easily access kar sake (name ya number se).

---

## Validation

- Validation lagani hai ki:
  - **Same name ya same number se contact dobara save nahi hona chahiye**.
- Agar duplicate contact add karne ki koshish kare:
  - Toh **error message text me show hona chahiye**.

---

## Storage

- Saara contact data **localStorage** me store hona chahiye.
- Page refresh hone ke baad bhi contact list **wapis show honi chahiye**.

# Chapter 50 - Part 16

**Task:**  
Ek project banao jisme contacts delete karne ki functionality ho. Delete karne se pehle user se confirmation lo ki wo sach me delete karna chahta hai ya nahi.  
Agar saare contacts delete ho jayein, toh ek message show karo ki "Contact list empty hai".

# Chapter 50 - Part 17

## Task:
Ek aisa project banao jisme jo contact tha usko **edit** karne ka option ho aur edit karne ke baad data ko **update** bhi kiya ja sake.

# Chapter 50 - Part 19

## Task:
Ek aisa project banao jisme **all deleted contacts** show ho.

- Agar deleted contacts me koi data available nahi hai, toh **"No Data Found"** ka message show karo.

### Deleted Contact List me ye fields show karni hain:
- **Name**
- **Number**
- **Location**
- **Expiry Date**

### Action Column:
- **Restore Button** dena hai **icon ke sath**

# Chapter 50 - Part 20

## Task:
Ek aisa project banao jisme jab user **Restore Button** par click kare, toh:

- Deleted contact **Contacts List** me wapas add ho jaye.
- Aur woh contact **Deleted Contacts List** se remove ho jaye.

# Chapter 50 - Part (1 - 20) Extra Project

## Task:
Ek aisa **Admin Panel** banao jisme admin ko users aur contacts ka complete management system mile.

---

## Admin Panel Features:

### 1. Admin Login Page
- Admin panel me **Login Page** hona chahiye.
- Login **Username** aur **Password** se hona chahiye.

---

## 2. All Registered Users Management
Admin ko **all registered users** ki details dekhne ka option hona chahiye.

### Features:
- All users ko **ek saath delete** karne ka option ho.
- Kisi **specific user** ko:
  - **Update** kiya ja sake
  - **Delete** kiya ja sake

### All Users Table me ye details show honi chahiye:
- **Full Name**
- **Last Login**
- **Profile Picture**
- **Email ID**
- **Mobile Number**
- **Password**
- **User ID**

---

## 3. All Saved Contacts Management
Admin ko **all saved contacts** ki details dekhne ka option hona chahiye.

### Features:
- Contacts ko **delete** kiya ja sake
- Contacts ko **update/edit** kiya ja sake

### All Contacts Table me ye details show honi chahiye:
- **Contact Name**
- **Mobile Number**
- **Location**
- **Saved By (User Name)**
- **Saved By (User ID)**

---

## 4. Deleted Contacts Management
Admin ko **all deleted contacts** ki list dekhne ka option hona chahiye.

### Features:
- Deleted contacts ka **Expiry Date edit/update** kiya ja sake
- Deleted contacts ko **restore** kiya ja sake

### Deleted Contacts Table me ye details show honi chahiye:
- **Contact Name**
- **Mobile Number**
- **Location**
- **Deleted By (User Name)**
- **Deleted By (User ID)**

# Chapter 51 - Part (1 - 13)

## Task:
Ek aisa project banaiye jisme user apne device se video upload kar sake. Upload hone ke baad video ka naam display hona chahiye aur video par **Like** aur **Dislike** ka option bhi available ho.

Is project me aapko ek **fully custom video player** develop karna hai jisme ye features hon:

- **Play / Pause Button**
- **Progress Bar** (click karne par video ka current time change ho sake)
- Video kitna **load ho chuka hai**, wo progress ke through show ho
- Video ko **URL link** se play karne ka option
- `networkState()` ka use karke check kiya jaye ki video **valid hai ya nahi**
- **Playback Speed Control** ka option
- **Fast Forward / Backward Buttons** (10 seconds + / -)
- Video ki **volume/value adjust** karne ka option
- Video ko **Fullscreen Mode** me open karne ka feature

> Kindly ensure karein ki ye saare features properly working condition me ho.

## 📌 Chapter 52 - Part 3

**Task:**  
Ek professional **Business Page** design karo jisme:

- Page Title me: **"Business Management System"** likha ho  
- Slogan me:  
  **"Manage Your All Business Details Like Ledger, Voucher, Tax, Balance Sheet and Many More"**
- User ka **Profile Section** clearly visible ho

Page ke niche ye buttons hone chahiye:

- **Create Company**
- **Delete Company**
- **My Company**
- **Logout**

---

## 📌 Chapter 52 - Part 4

**Task:**  
Jab user **Create Company** button par click kare, tab ek form show ho aur usme proper validation apply karo.

Form me ye required fields hone chahiye:

- **Company Logo** *(Preview ke saath, Max 1MB Allowed)*
- **Company Name**
- **Mailing Name**
- **Address**
- **Mobile Number**
- **Fax Number**
- **CIN Number**
- **Email**
- **Website**
- **Financial Year**
- **Stock Type** *(Account Only, Account With Inventory)*

---

## 📌 Chapter 52 - Part 5

**Task:**  
Create Company form me strict validation lagao:

- **Har field required** honi chahiye  
- Mailing Name me **mandatory** hai ke in me se koi ek word include ho:  
  **ptv**, **ltd**, **govt**

---

## 📌 Chapter 52 - Part 6

**Task:**  

- Ek user **sirf ek hi company account create** kar sakta hai (LocalStorage overflow avoid karne ke liye).
- Agar company already exist karti hai:
  - **Create Company button hide** kar do
  - **Delete Company option show** kar do

### Delete Company Feature:
Jab user **Delete Company** par click kare:

- Ek **popup / modal** open ho
- Us popup me company ki **complete details show** ho
- Niche ek **Confirm Delete** button ho

---

## 📌 Chapter 52 - Part (7 - 8)

**Task:**  
`Pages` folder ke andar ek folder create karo:

📂 **Business Assets**

Jab user **My Company** par click kare:

- System check kare ke company ka **Stock Type** kya hai:
  - **Account Only**
  - **Account With Inventory**

Phir usi ke according user ko relevant page par redirect karo.

---

### ✅ Account Only Page Requirements:

Account Only page me:

- Company ka **Logo**
- Company ka **Name**

Aur niche ye options hone chahiye:

- **Unit Of Measure**
- **Sales Voucher**
- **Shut Company**

---

## 📌 Chapter 52 - Part 9

**Task:**  
Jab user **Unit Of Measure** par click kare, tab ek **popup/modal** show karo.

Popup ke andar 2 required inputs hone chahiye:

- **Symbol** *(Example: Kg, Pc)*
- **Formal Name** *(Example: Kilo Gram, Piece)*

📌 **Note:**  
Symbol me short form enter hoga aur Formal Name me uska full form.

Popup ke niche ek button hona chahiye:

- **Save**

---

## 📌 Chapter 52 - Part 10

**Task:**  
Jab user **Sales Voucher** par click kare, tab ek **popup/modal** open ho jisme **Invoice Generate** karne ka complete system ho.

---

## ✅ Sales Voucher / Invoice Layout Requirements

Popup ke andar:

### 🔹 Header Section
- **Sales Voucher Title** show karo  
- **Voucher Number** dynamically generate ho *(auto increment / unique)*  
- Right side me **Date** show ho

---

## ✅ Company Details Section

### Left Side:
- **Company Name**
- **Company Address**
- **Fax Number**
- **CIN Number**

### Right Side:
- **Company Logo**

---

## ✅ Customer Details Section (Inputs)

Niche customer ke details ke liye required input fields rakho:

- **Customer Name**
- **Customer Email**
- **Customer Address**
- **Customer Mobile Number**

---

## ✅ Items / Product Section

Niche ek item entry section banao jisme ye fields fill karne ka option ho:

- **Item Name**
- **Price**
- **Quantity**
- **Amount**
- **Remarks**
- **Delete**

### ➕ Add Item Feature
- Niche **Add** button rakho  
- Add button par click karne se **same fields ka ek aur row** dynamically add ho jaye  
- User multiple items add kar sake

---

## ✅ Invoice Calculation Section

Popup ke bottom me ye values dynamically show honi chahiye:

- **Subtotal**
- **Tax**
- **Total**
- **Balance Due**

📌 **Note:**  
Subtotal, tax, total aur balance due values items ke price, quantity aur tax ke basis par automatically calculate hon.

## Chapter 52 – Part 11

### Task:
- Item name fill karne ke baad hi **Price** aur **Quantity** input enabled hone chahiye.  
- By default **Price**, **Quantity**, aur **Amount** inputs disabled hone chahiye.  

---

## Chapter 52 – Part 12

### Task:
- Item table ka row delete karne par selected row delete ho jayega.  
- Lekin table me **minimum 1 row mandatory** rehni chahiye (last row delete nahi hona chahiye).  

---

### Calculation Requirement:
- Quantity enter karte hi **Price × Quantity** karke **Amount** calculate hona chahiye.  
- Amount update hote hi **Subtotal** automatically calculate ho kar display hona chahiye.  

---

### Validation Requirement (Save Button):
- Save button click par system ko verify karna chahiye ki saare required fields me data present hai.  
- Agar koi required field empty hai, toh **invoice save nahi hona chahiye**.

## Chapter 52 – Part 13

### Task:
- Agar **Unit of Measure** me data available ho, toh **“View Saved Unit of Measure”** ka option available hona chahiye.  

- Iske alawa **Tax Setup** ka option hona chahiye.  
  - Is par click karne par ek **popup modal** open hona chahiye.  
  - Modal me 2 input fields hone chahiye:  
    1. Tax Name  
    2. Tax %  
  - Saath me ek **Save** button hona chahiye.  

- Agar tax details already available hain, toh **“View All Tax”** ka option show hona chahiye.  

---

## Chapter 52 – Part 16

### Task:
- Ek aisa project develop karna hai jisme user apne **notes likh sake**.  
- User apne notes ko **custom name dekar save** kar sake.  
- System me pehle se saved `.txt` files ko select karke user **view kar sake**.

## Chapter 52 – Part 19

### Task:
- Ek aisa project develop karna hai jisme **PDF Converter** functionality ho.  
- Is functionality ke through kisi specific page ya web page ko **PDF format me convert** kiya ja sake.  

---

### Requirements:
- PDF generation ke liye following libraries ka use karna hoga:
  - jQuery  
  - html2canvas  
  - jsPDF (CDN)  

---

### Implementation Logic:
- PDF create karne ke liye `jsPDF` ka object initialize karna hoga:

```javascript
let pdf = new jsPDF('p', 'pt', 'a4');

Kisi specific section ka PDF generate karne ke liye:

```
pdf.addHTML(document.body, function () {

    pdf.save("file.pdf");

});

```

---

### Note:

`save()` function ke andar jo string pass ki jayegi wahi download hone wale PDF ka file name hoga.

Function ke andar target section define karna hoga jiska PDF generate karna hai.

## Chapter 52 – Part (31–33)

### Task:
- Ek aisa project develop karna hai jisme **User Profile Dashboard** ho.  

---

### Features:

- User ka **Profile Photo** display hona chahiye.  
- Saath me **Title** aur **Description** show hona chahiye.  
- **Business Mode** clearly visible hona chahiye.  
- Current **Date aur Time** display hona chahiye.  

---

### Company Section:

- Page ke niche **Company ka Name aur Logo** show hona chahiye.  

---

### Navigation Options:

Company section ke neeche following options available hone chahiye:

- Ledger  
- Unit of Measure  
- Voucher  
- Stocks  
- Profit and Loss  
- Balance Sheet  
- Transaction  
- Exit  

---

### Note:
- UI clean aur structured hona chahiye.  
- Navigation options properly clickable aur functional hone chahiye.  
- Layout dashboard style me design hona chahiye.

## Chapter 52 – Part (34–40)

### Task:
Ek aisa project develop karna hai jisme **Ledger Management System** ho jisme CRUD operations (Add, Manage, Edit, Delete, Search) available hon.

---

## 1. Add Ledger Page

### Fields:
- Ledger Name  
- Ledger Number  
- Ledger Type:
  - Capital Accounts  
  - Purchase Accounts  
  - Sales Accounts  
  - Sundry Creditors  
  - Sundry Debtors  
  - Cash In Hand  
- Opening Balance  
- Mode:
  - Credit  
  - Debit  
- Customer Name  
- Email  
- Address  

---

## 2. Manage Ledger Page

### Display Details:
- Ledger ID  
- Ledger Name  
- Ledger Number  
- Ledger Type  
- Opening Balance  
- Mode  
- Customer Name  
- Email  
- Address  
- Created At (Date & Time)  
- Updated At (Date & Time)  

---

### Additional Calculations:
- **Debit Balance** show hona chahiye  
- **Credit Balance** show hona chahiye  
- Dono ka **total calculated value** bhi display hona chahiye  

---

### Actions:
- Edit Button  
- Delete Button  

---

## 3. Search Functionality:
- Ledger ko **name, number, email ya type** ke basis par search kiya ja sake  

---

## 4. Filter Functionality:
Ledger ko uske **type ke according filter** kiya ja sake:

- Purchase Accounts  
- Sales Accounts  
- Capital Accounts  
- Sundry Creditors  
- Sundry Debtors  
- Cash In Hand  

---

### Note:
- System fully dynamic hona chahiye  
- CRUD operations real-time reflect hone chahiye  
- Filtering aur search fast aur accurate hona chahiye

## Chapter 52 – Part (41–43)

### Task:
Ek aisa project develop karna hai jisme **Unit of Measure Management System** ho jisme CRUD operations aur search functionality available ho.

---

## Features:

### 1. Add Unit of Measure:
- User ko new unit add karne ka option hona chahiye  
- Fields:
  - Unit Name  
  - Unit Code  
  - Description (optional)  

---

### 2. Manage Unit of Measure:
- Sabhi added units list form me show hone chahiye  
- Har record ke sath following details show honi chahiye:
  - Unit ID  
  - Unit Name  
  - Unit Code  
  - Description  
  - Created At (Date & Time)  
  - Updated At (Date & Time)  

---

### 3. Actions:
- Edit Unit  
- Delete Unit  

---

### 4. Search Functionality:
- Units ko **name ya code ke basis par search** kiya ja sake  
- Search real-time aur accurate hona chahiye  

---

## Note:
- CRUD operations properly working hone chahiye  
- Data update hote hi UI me reflect hona chahiye  
- Delete operation confirmation ke sath hona chahiye  
- System clean aur structured hona chahiye

## Chapter 52 – Part (44–58)

### Task:
Ek **Voucher Management System** develop karna hai jisme complete CRUD functionality ho aur 2 tabs available hon:
- Sales Voucher  
- Purchase Voucher  

---

## 1. Common Header Section:
Har voucher page ke top par company details show honi chahiye:

- Company Name  
- Logo  
- Address  
- Mobile Number  
- Fax Number  
- CIN Number  

---

## 2. Tabs Structure:

### Tabs:
- Sales Voucher  
- Purchase Voucher  

---

## 3. Purchase Voucher Module:

### Voucher Header Fields:
- Voucher Number  
- Party Name  
- Supplier Name  
- Mobile Number  
- Address  
- Date  
- Current Balance  

---

## 4. Items Section (Dynamic Table):

Har voucher me multiple items add kiye ja sake:

### Item Fields:
- Item Name  
- Price  
- Quantity  
- Unit (Unit of Measure module se data fetch hoga)  
- Amount (auto calculated: Price × Quantity)  
- Sale Price  
- Action (Delete Button)  

---

### Item Actions:
- Row delete karne ka option  
- “Add Item” button  
  - Click karne par new item row dynamically add ho jaye  

---

## 5. Calculations Section:

Automatically calculated values:

- Subtotal (all item amounts ka sum)  
- Tax (configured tax setup ke basis par)  
- Total (Subtotal + Tax)  
- Paid Amount  
- Balance Due (Total - Paid)  

---

## 6. CRUD Operations:
- Create Voucher  
- View Voucher List  
- Edit Voucher  
- Delete Voucher  

---

## 7. Sales Voucher Tab:
- Same structure as Purchase Voucher  
- Difference sirf transaction type (Sales side calculations and parties accordingly)  

---

## Note:
- Item table fully dynamic hona chahiye  
- Unit dropdown Unit of Measure module se connected hona chahiye  
- All calculations real-time update hone chahiye  
- Delete operations confirmation ke sath honi chahiye  
- Data consistency maintain karni mandatory hai

## Chapter 52 – Part (59–62)

### Task:
Same **Purchase Voucher** ki tarah ek **Sales Voucher Module** develop karna hai jisme complete CRUD functionality available ho.

---

## Sales Voucher Requirements:

### 1. Structure:
- Sales Voucher ka structure **Purchase Voucher jaisa hi hoga**  
- Sirf ek difference: **Selling Price field remove karna hai**

---

### 2. Voucher Header Fields:
- Voucher Number  
- Party Name  
- Customer Name  
- Mobile Number  
- Address  
- Date  
- Current Balance  

---

### 3. Items Section (Dynamic Table):

### Item Fields:
- Item Name  
- Price  
- Quantity  
- Unit (Unit of Measure module se fetch hoga)  
- Amount (auto calculated: Price × Quantity)  
- Action (Delete Button)  

---

### 4. Item Management:
- Add Item button available hoga  
- Click karne par new item row add ho jaye  
- Row delete ka option bhi available hoga  

---

### 5. Calculations Section:
Automatically calculate hona chahiye:

- Subtotal (total item amount)  
- Tax (configured tax setup ke basis par)  
- Total (Subtotal + Tax)  
- Paid Amount  
- Balance Due (Total - Paid)  

---

### 6. CRUD Operations:
- Create Sales Voucher  
- View Sales Voucher List  
- Edit Sales Voucher  
- Delete Sales Voucher  

---

## Note:
- Design and functionality **Purchase Voucher ke same standards follow karegi**  
- Only difference: **Selling Price field removed**  
- All calculations real-time update hone chahiye  
- Data consistency aur validation strictly implement karni hogi