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