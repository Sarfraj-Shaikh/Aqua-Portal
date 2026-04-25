/* =============== NAVBAR =============== */

let navLeft = document.getElementById("navLeft");
navLeft.addEventListener("click", function () {

    location.reload();

});

let navPrimaryCtaBtn = document.getElementById("navPrimaryCtaBtn");
navPrimaryCtaBtn.addEventListener("click", function(){

    location.assign("./pages/login.html");
});

let getStartBtn = document.getElementById("getStartBtn");
getStartBtn.addEventListener("click", function(){

    location.assign("./pages/signup.html");
});

let loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", function(){

    location.assign("./pages/login.html");
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
};

const navWebName = document.getElementById("navWebName");
navWebName.textContent = webDetail.title;

const heroWelText = document.getElementById("heroWelText");
heroWelText.innerHTML = `Welcome To ${webDetail.title}`;

const heroSubTitle = document.getElementById("heroSubTitle");
heroSubTitle.innerHTML = `${webDetail.slogan}`;