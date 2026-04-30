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
│   ├── signup.html
│   ├── dashboard.html
│   ├── contact.html
│   ├── profile-photo.html
│
├── Assets/
│   ├── css/
│   │   ├── common.css
│   │   ├── style.css
│   │   ├── pages/
│   │   │   ├── login.css
│   │   │   ├── signup.css
│   │   │   ├── dashboard.css
│   │   │   ├── contact.css
│   │   │   ├── profile-photo.css
│   │
│   ├── js/
│   │   ├── common.js
│   │   ├── main.js
│   │   ├── pages/
│   │       ├── login.js
│   │       ├── signup.js
│   │       ├── dashboard.js
│   │       ├── contact.js
│   │       ├── profile-photo.js
│   │
│   ├── img/
│       ├── logo.avif
│       ├── default-dp.png
│       ├── login.png
│   
│   
│
└── Admin Panel/
    │
    ├── dashboard.html
    ├── users.html
    ├── contacts.html
    ├── deleted-contacts.html
    │
    ├── Assets/
    │   │
    │   ├── css/
    │   │   ├── admin-common.css
    │   │   ├── admin-style.css
    │   │   ├── pages/
    │   │       ├── dashboard.css
    │   │       ├── users.css
    │   │       ├── contacts.css
    │   │       ├── deleted-contacts.css
    │   │
    │   ├── js/
    │   │   ├── admin-common.js
    │   │   ├── admin-main.js
    │   │   ├── pages/
    │   │       ├── dashboard.js
    │   │       ├── users.js
    │   │       ├── contacts.js
    │   │       ├── deleted-contacts.js
    │   │
    │   ├── img/
    │       ├── 
    │       ├── 

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

## Home Page Redirect Restrictions

Humne **login** aur **non-login users** ke liye **separate redirection flow** implement kiya hai taaki security aur user experience maintain rahe.

### ✅ Logged-in User Behavior
- Agar user **login** hai, toh navbar ka CTA button **"Login"** se change hokar **"Dashboard"** ho jayega.
- Hero section me **"Login"** button hide ho jayega.
- **"Get Started"** button bhi update hokar **"Dashboard"** me convert ho jayega.

👉 Agar user **Dashboard** button par click karta hai, toh user directly **Dashboard page** par redirect ho jayega.

### ✅ Non-Logged-in User Behavior
- Agar user **login nahi hai**, toh system **default redirection flow** follow karega (jo pehle se non-login users ke liye tha).
- Navbar aur hero section me **Login button visible** rahega.

## Registration (Signup) Page Redirection

Signup page par bhi humne **login** aur **non-login users** ke liye redirection rules apply kiye hain.

### ✅ Logged-in User Behavior
- Agar user already **login** hai, toh usko automatically **Dashboard page** par redirect kar diya jayega.
- Is case me signup page access nahi hoga.

### ✅ Non-Logged-in User Behavior
- Agar user **login nahi hai**, toh signup page normally open hoga aur **koi redirection apply nahi hoga**.

### ⚠️ Note
Agar user ko **new account create** karna hai, toh pehle current logged-in account ko **logout** karna zaroori hai.

## Login Page Redirection

Login page par humne logged-in users ke liye strict redirection flow implement kiya hai.

### ✅ Logged-in User Behavior
Agar user already **login** hai aur dubara **Login page access** karne ki koshish karta hai, toh usko direct login page par rehne nahi diya jayega.

System pehle check karega:

- **Agar user ne profile photo upload nahi ki hai**, toh user ko **Profile Photo Upload page** par redirect kar diya jayega.
- **Agar profile photo already uploaded hai**, toh user ko directly **Dashboard page** par redirect kar diya jayega.

### ✅ Non-Logged-in User Behavior
Agar user **login nahi hai**, toh login page normally open hoga aur **koi redirection apply nahi hoga**.

## Profile Photo Upload Redirection

Profile photo upload page par bhi redirection rules apply kiye gaye hain.

### ✅ Already Uploaded Photo
- Agar user ne pehle se **profile photo upload** kar rakhi hai, toh user ko automatically **Dashboard page** par redirect kar diya jayega.

### ✅ Photo Not Uploaded
- Agar user ne abhi tak photo upload nahi ki hai, toh user **same page par continue** karega aur photo upload kar sakta hai.

## Dashboard Page Redirection

Dashboard page access ke liye authentication mandatory rakha gaya hai.

### ✅ Logged-in User Behavior
- Agar user **login** hai, toh dashboard page normally open hoga aur **koi redirection apply nahi hoga**.

### ❌ Non-Logged-in User Behavior
- Agar user **login nahi hai**, toh usko automatically **Login page** par redirect kar diya jayega.

# Contact Page Validation and Redirection

## Redirection

### ✅ Logged-in User Behavior
- Agar user already login hai, toh **Dashboard page normally open hoga** aur koi redirection apply nahi hoga.
- Lekin system pehle check karega ki user ne **Profile Picture setup ki hai ya nahi**:
  - Agar Profile Picture setup nahi hai, toh user ko **Profile Setup page** par redirect kiya jayega.
  - Agar Profile Picture already set hai, toh **Dashboard normally open hoga**.

### ❌ Non-Logged-in User Behavior
- Agar user login nahi hai, toh user ko automatically **Login page** par redirect kar diya jayega.

---

## Validation

### New Contact
- Koi bhi input field empty nahi ho sakta. Agar empty hua toh **error message show hoga**.
- Mobile number ka length **exactly 10 digits** hona chahiye.
- Sirf **Indian mobile numbers** hi accepted honge.
- Agar same number pehle se contacts me saved hai, toh **"Number already exists"** ka error message show hoga.

---

## Contacts List
- Strong security implement ki gayi hai: jo user contact create karega, **sirf wahi user usko access kar sakta hai**.
- User apne contacts ko **modify (update)** ya **delete** kar sakta hai.
- Update ya delete karne se pehle system user se **confirmation** leta hai.
- Jab user contact update karta hai, toh contact ka **updated time bhi change/update ho jata hai**.

---

## Deleted Contacts List
- Deleted contacts ko ek **separate list** me show kiya jata hai.
- Deleted contacts bhi **sirf usi account me visible honge** jisne delete kiya hoga.
- Deleted contacts ke liye **Restore button** diya gaya hai, taki user by mistake delete huye contact ko restore kar sake.
- Restore karne se pehle bhi system user se **confirmation** leta hai.

---

## Search Filters

- Is feature me user contacts ko **Name**, **Mobile Number**, aur **Location** ke basis par search kar sakta hai.
- User sirf wahi contacts search kar sakta hai jo **usi account se create ya delete** kiye gaye hain.
- Kisi dusre user ke contacts ko search ya access karna allowed nahi hai, isse proper security maintain hoti hai.

# Admin Panel Login Validation

## Login Details
Sabse pehle yeh check kiya jayega ki admin ki login details available hain ya nahi.  
Agar details available nahi hain, toh system automatically admin ka **name, email aur password** store karke login details create kar dega.

## Redirection
Agar admin already login hai aur phir bhi login page access karne ki koshish karta hai, toh usko directly **dashboard page par redirect** kar diya jayega.

## Form Validation
Agar user kisi bhi input field ko empty chhodta hai, toh usko proper **error message** show kiya jayega.  

Email validation me:
- **"@"** hona compulsory hai  
- Sirf **gmail.com domain** ko allowed kiya gaya hai

## Password Validation
Password strong hona chahiye, isliye password me kam se kam:
- **One uppercase letter**
- **One lowercase letter**
- **One number**
- **One special character**

Password ki minimum length **6 characters** rakhi gayi hai, taaki admin panel ki security maintain rahe.

## Admin Login Details Validation
Jab admin login karta hai, toh entered email aur password ko saved admin credentials ke saath match kiya jata hai.

- Agar email ya password wrong hota hai, toh user ko **error message** show kiya jayega.
- Agar login successful hota hai, toh admin ki access permission **session storage** me store kar di jayegi.

Iska purpose yeh hai ki admin ko baar-baar login na karna pade aur agar admin dobara login page open kare, toh system usko dashboard par redirect kar de.

Yeh process mainly security concept follow karne ke liye implement kiya gaya hai.  

Halanki application offline mode me run karta hai, isliye production level security jitna impact nahi hoga, lekin production projects me use hone wale authentication concepts ko follow karte hue yeh approach use ki gayi hai.

## Admin Panel – Dashboard Page Validation

### Security
Agar admin ki login details available nahi hoti hain, toh user ko automatically **admin panel ke login page** par redirect kar diya jata hai.  
Isse admin dashboard ko **without authorization access** nahi kiya ja sakta.

Agar admin already **logged in** hai, toh koi redirection nahi hota.

---

### Sidebar
Admin ki details fetch karke **sidebar me admin ka name** show kiya jata hai.

---

### Dashboard – Profile Section
Admin ki details fetch karke **profile section me admin ka name aur email ID** display kiya jata hai.

---

### Dashboard – Stats Section
Is section me:
- **Total Users**
- **Total Contacts**
- **Total Deleted Contacts**

In sabka data **separately fetch** kiya jata hai.  
Jo results milte hain, unhe stats section me **update karke show** kiya jata hai.

---

### Note
Har detail ko **separately fetch** kiya jata hai.  

Agar kisi specific detail ka data available nahi hota, toh us particular field ko **update nahi kiya jata**.