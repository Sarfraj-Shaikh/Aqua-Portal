# Aqua Portal – Project Overview

Hello Sir/Ma’am,  
Welcome to **Aqua Portal** 🚀  

Aqua Portal ek **professional business connection platform** hai jisko **HTML5, CSS3 aur JavaScript** ka use karke develop kiya ja raha hai. Ye platform specially business users ke liye design kiya gaya hai jisme multiple useful features aur strong security measures include kiye gaye hain.

---

## ⚡ Important Note (Bugs / Feedback Support)

Aqua Portal me kaafi saare features aur functionalities implement kiye gaye hain aur security ko bhi properly consider kiya gaya hai.  

Lekin kyunki ye project development phase me hai, isliye kuch **bugs, glitches ya minor issues** ho sakte hain.  

📌 Agar aapko koi issue ya unexpected behavior mile, toh aap apna feedback/report share kar sakte hain.  
Hum aapki help ke liye **hamesha available** rahenge.

---

## 🔐 Data Storage & Security System

Is platform me CRUD operations (Create, Read, Update, Delete) perform karne ke liye:

- **Local Storage**
- **Session Storage**
- **Cookies**

ka use kiya gaya hai.

### Data Protection
Aapko chinta karne ki zarurat nahi hai, kyunki platform me stored data ko **encrypt karke save** kiya ja raha hai, jisse koi unauthorized user data ko read nahi kar payega.

---

# 📌 Platform Working (Basic Flow)

Aqua Portal me user apna business manage kar sakta hai. Iske liye user ko:

1. Sabse pehle **Account Create** karna hota hai  
2. Uske baad user **Login / Logout** kar sakta hai  
3. Login hone ke baad user ko dashboard access milta hai  
4. User business accounts aur customer contacts manage kar sakta hai  

---

# 👤 User Registration System

Jab user registration karta hai, toh account create karne ke liye following details required hongi:

- Full Name  
- Email ID  
- Mobile Number  
- Password  
- Profile Photo  

### Unique Account Rule
Same **Name, Email ya Mobile Number** se duplicate account create nahi kiya ja sakta.

---

# 🔑 Login System

Account login karne ke liye user ko:

- Email  
- Password  

enter karna hoga.

---

# 📊 Dashboard Features

Login successfully hone ke baad user dashboard par ye details dekh sakta hai:

- Profile Photo  
- User Name  
- Last Login Date & Time  
- Logout Button  

### Dashboard me niche features ki list show hogi:
- Manage Business  
- All Contacts  
- Video Player  
- About Me  
- Settings  

---

# 🌐 Common Features (Pure Platform Me Available)

Pure Aqua Portal platform me kuch common features har page par available rahenge:

- ✅ Loading Effect  
- ✅ Dialog / Alert Messages  
- ✅ Internet Connection Checker  
- ✅ Right Click Disabled  
- ✅ Encrypted Data Storage  
- ✅ Secure Access System  

📌 **Important:**  
Agar user login nahi hai, toh wo kisi bhi data ko access nahi kar sakta. System automatically user ko **Login Page par redirect** kar dega.

---

# ⏳ Loading Animation & Internet Check System

Website ke important pages open karte time:

- Home Page  
- Login Page  
- Register Page  

loading animation show hoga aur system automatically internet connection check karega.

---

# 🏠 Home Page Behavior (Login Based Changes)

Agar user already login hai, toh Home Page me dynamic changes honge:

### Navbar Changes
- Navbar me jo button pehle **Login** hota hai, wo change hokar **Dashboard** ban jayega  
- Dashboard button par click karte hi direct Dashboard open hoga  

### Hero Section Changes
- Hero section ka **Login Button hide** ho jayega  
- "Get Started" button ka text change hokar **Dashboard** ho jayega  
- Click karne par direct Dashboard open hoga  

---

# 📞 Contacts Management System (Major Feature)

User ko business contacts manage karne ka full option diya gaya hai.

### User contacts me ye details add kar sakta hai:
- Name  
- Mobile Number  
- Location  

### Contacts ke available options:
- ✅ Add Contacts  
- ✅ Search Contacts  
- ✅ Delete Contacts  
- ✅ Deleted Contacts List (Separate Section)  
- ✅ Restore Deleted Contacts  

### Deleted Contacts Rules
- Deleted contacts separate list me show hongi  
- User chahe toh restore kar sakta hai  
- Agar restore nahi kiya gaya, toh contact **automatic 30 days baad expire** ho jayega  
- Deleted history me expiry date bhi show hogi  

---

# 📌 Logs System (Logs.md File Explanation)

Project ko easily understand karne ke liye **Logs.md** file provide ki gayi hai.

### Logs.md me kya milega?
- Sabse pehle mention hoga ki main kaam kya complete hua hai  
- Har entry ka ek log number hoga  
- Agar ek hi day multiple updates huye hain ya multiple days me kaam hua hai, toh accordingly multiple logs add honge  

### Logs Order
Logs **descending order** me honge:

- Latest logs upar  
- Purane logs niche  

### Logs Timeline Details
Har log me ye details mention rahengi:

- Date (kis date ko kaam hua)  
- Start Time  
- Completion Time  
- Features list (uss time me kya implement kiya gaya)  

---

# 📌 Task.md File Explanation

Project me ek **Task.md** file bhi available hogi jisme mention hoga:

- Project banane ke liye hume kya tasks diye gaye the  
- Kaunse tasks complete kiye gaye  
- Detailed working aur updates Logs.md me available honge  

---

# 📌 Readme.md File Explanation

Project me ek **Readme.md** file bhi include hogi jisme Aqua Portal ke baare me complete detailed description di gayi hogi.  
(Currently aap wahi content read kar rahe hain.)

---

# 📁 Project Folder Structure

Aqua Portal ka folder structure kuch is tarah se organized hai:

```plaintext
Aqua Portal/
│── index.html
│── Readme.md
│── Task.md
│
├── Pages/
│   ├── login.html
│   ├── profile-photo.html
│   ├── signup.html
│
├── Assets/
│   ├── files/
│   │   ├── css/
│   │   │   ├── common.css
│   │   │   ├── style.css
│   │   │   ├── pages/
│   │   │       ├── login.css
│   │   │       ├── profile-photo.css
│   │   │       ├── signup.css
│   │
│   │   ├── js/
│   │       ├── common.js
│   │       ├── main.js
│   │       ├── pages/
│   │           ├── login.js
│   │           ├── profile-photo.js
│   │           ├── signup.js
│
│   ├── img/
│       ├── logo.avif
```

## ✅ Final Message

Aqua Portal ek **secure** aur **feature-rich business platform** hai jo user ko business aur contacts management ka powerful experience provide karta hai.  

Agar aapko project use karte time koi **bug** ya **issue** mile, toh kindly usko report karein. Hum usko resolve karne ke liye hamesha ready rahenge.  

Thank You 😊 
**Mo. Sarfraj Shaikh**

---

# Registration Form Validation

Humne registration form par kuch strong validations implement ki hain, taaki user ka account secure rahe aur incorrect details submit na ho.

## Full Name
- User maximum **15 characters** tak enter kar sakta hai.
- Name ka **first letter capital** hona chahiye.
- Sirf **blank spaces** allow nahi honge.

## Email ID
- **Blank spaces allowed nahi** hain.
- **@ mandatory** hai.
- Sirf **gmail.com domain** allow hoga.

## Mobile Number
- **Blank spaces allowed nahi** hain.
- Maximum **10 digits** allowed hain.
- Sirf **Indian mobile numbers** allowed honge.

## Password
- **Blank spaces allowed nahi** hain.
- Minimum **8 characters** required hain.
- Password me kam se kam:
  - **1 lowercase letter**
  - **1 uppercase letter**
  - **1 number**
  - **1 special symbol**
  hona compulsory hai.

## Note
Login page par bhi **Email ID aur Password** ke liye same validation rules follow kiye jayenge.