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

    location.assign("../index.html");

});

let navPrimaryCtaBtn = document.getElementById("navPrimaryCtaBtn");
navPrimaryCtaBtn.addEventListener("click", function () {

    location.assign("./dashboard.html");
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

            window.open("./login.html", "_self");

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

                window.open("./profile-photo.html", "_self");

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

/* =============== VIDEO FILE SELECT =============== */
let videoInput = document.getElementById("videoFile");
videoFile.onchange = () => {

    let videoPlayerContainer = document.getElementById("videoPlayerContainer");
    let videoUploader = document.getElementById("videoUploader");
    let mainVideo = document.getElementById("mainVideo");
    let videoTimeline = document.getElementById("videoTimeline");
    let errorBox = document.getElementById("videoErrorPage");
    let errorMessage = document.getElementById("videoErrorMsg");
    let videoNameText = document.getElementById("videoNameText");
    let videoSizeText = document.getElementById("videoSizeText");
    let videoDateText = document.getElementById("videoDateText");
    let videoProgress = document.getElementById("videoProgress");

    let file = videoInput.files[0]

    errorBox.style.display = "none";
    videoUploader.style.display = "none";
    videoPlayerContainer.style.display = "flex";

    /* =============== CHECK EMPTY FILE =============== */

    if (!file) {

        errorBox.style.display = "flex";
        videoPlayerContainer.style.display = "none";
        errorMessage.innerText = "No file selected. Please upload a video file.";
        return;

    }

    /* =============== CHECK VIDEO EXTENTION FILE =============== */

    if (!file.type.startsWith("video/")) {

        errorBox.style.display = "flex";
        videoPlayerContainer.style.display = "none";
        errorMessage.innerText = "Invalid file type. Please upload a valid video.";
        return;

    }

    let fileReader = new FileReader();

    fileReader.onload = () => {

        mainVideo.src = fileReader.result;
        mainVideo.load();
        videoNameText.innerText = file.name
        videoSizeText.innerText = (file.size / (1024 * 1024)).toFixed(2) + " MB";
        videoDateText.innerText = new Date(file.lastModifiedDate).toLocaleString();
    }

    fileReader.readAsDataURL(file);

    /* =============== WHEN VIDEO FILE DATA IS READY =============== */

    mainVideo.onloadedmetadata = () => {

        let maxTime = formatMaxTime(mainVideo.duration);
        let currentTime = formatCurrentTime(mainVideo.currentTime);

        videoTimeline.innerHTML = `${currentTime} : ${maxTime}`;
        videoProgress.max = mainVideo.duration;

    }
}

/* =============== VIDEO TIME FORMAT =============== */

function formatMaxTime(seconds) {
    seconds = Math.floor(seconds);

    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;

    mins = String(mins).padStart(2, "0");
    secs = String(secs).padStart(2, "0");

    return `${mins}:${secs}`;
};

function formatCurrentTime(seconds) {
    seconds = Math.floor(seconds);

    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;

    mins = String(mins).padStart(2, "0");
    secs = String(secs).padStart(2, "0");

    return `${mins}:${secs}`;
}

/* =============== VIDEO PLAY/PAUSE SECTION =============== */

function videoPlay() {

    let mainVideo = document.getElementById("mainVideo");
    let playPauseIcon = document.getElementById("playPauseIcon");

    if (playPauseIcon.className === "ri-restart-line") {

        mainVideo.play();
        playPauseIcon.className = "ri-pause-fill";
    }
    else if (playPauseIcon.className === "ri-play-large-fill") {

        mainVideo.play();
        playPauseIcon.className = "ri-pause-fill";

    } else {

        mainVideo.pause();
        playPauseIcon.className = "ri-play-large-fill";

    }

}

/* =============== VIDEO ERROR HANDLING & STATES UPDATE =============== */

let videoControlBar = document.getElementById("videoControlBar");
let videoStatusLoader = document.getElementById("videoStatusLoader");
let videoPlayerContainer = document.getElementById("videoPlayerContainer");
let videoUploader = document.getElementById("videoUploader");
let errorBox = document.getElementById("videoErrorPage");
let errorMessage = document.getElementById("videoErrorMsg");
let mainVideo = document.getElementById("mainVideo");

mainVideo.addEventListener("loadstart", () => {

    videoControlBar.style.opacity = "0";
    videoStatusLoader.style.display = "flex";

});

mainVideo.addEventListener("loadedmetadata", () => {
    status.textContent = "Info ready";
});

mainVideo.addEventListener("canplay", () => {

    videoControlBar.style.opacity = "1";
    videoStatusLoader.style.display = "none";

});

mainVideo.addEventListener("canplaythrough", () => {

    videoControlBar.style.opacity = "1";
    videoStatusLoader.style.display = "none";

});

mainVideo.addEventListener("waiting", () => {

    videoControlBar.style.opacity = "0";
    videoStatusLoader.style.display = "flex";

});

mainVideo.addEventListener("stalled", () => {

    videoControlBar.style.opacity = "0";
    videoStatusLoader.style.display = "flex";

});

mainVideo.addEventListener("error", () => {

    videoControlBar.style.opacity = "0";
    videoStatusLoader.style.display = "none";
    videoPlayerContainer.style.display = "none";
    errorBox.style.display = "flex";
    errorMessage.innerText = "Invalid Video or Blocked By Cors";

});

/* =============== VIDEO PROGRESS UPDATE =============== */

mainVideo.addEventListener("timeupdate", () => {

    let maxTime = formatMaxTime(mainVideo.duration);
    let currentTime = formatCurrentTime(mainVideo.currentTime);
    let videoProgress = document.getElementById("videoProgress");
    let playPauseIcon = document.getElementById("playPauseIcon");


    videoTimeline.innerHTML = `${currentTime} : ${maxTime}`;

    if (currentTime === maxTime) {

        playPauseIcon.className = "ri-restart-line";
        mainVideo.pause();

    }
    else if (mainVideo.paused) {

        playPauseIcon.className = "ri-play-large-fill";
        mainVideo.pause();

    } else {

        playPauseIcon.className = "ri-pause-fill";
        mainVideo.play();
    }

    videoProgress.value = mainVideo.currentTime;

    videoProgress.onclick = (event) => {

        const rect = videoProgress.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const width = rect.width;

        const clickRatio = clickX / width;
        mainVideo.currentTime = clickRatio * mainVideo.duration;

        mainVideo.play();
        playPauseIcon.className = "ri-pause-fill";
    }

});

/* =============== VIDEO REWIND & FORWARD =============== */

function rewindVideo() {

    let playPauseIcon = document.getElementById("playPauseIcon");

    if (mainVideo.currentTime <= 0) {

    } else {

        mainVideo.currentTime -= 10;
        mainVideo.play();
        playPauseIcon.className = "ri-pause-fill";

    }

}

function forwardVideo() {

    let playPauseIcon = document.getElementById("playPauseIcon");

    mainVideo.currentTime += 10;
    mainVideo.play();
    playPauseIcon.className = "ri-pause-fill";

}

/* =============== VIDEO MUTE/UNMUTE =============== */

function muteUnmute() {

    let volumeIcon = document.getElementById("volumeIcon");

    if (volumeIcon.className === "ri-volume-up-fill") {

        mainVideo.muted = true;
        volumeProgress.style.display = "none";
        volumeIcon.className = "ri-volume-off-vibrate-fill";

    } else {

        mainVideo.muted = false;
        volumeProgress.style.display = "block";
        volumeIcon.className = "ri-volume-up-fill";

    }
}

/* =============== VIDEO FULL SCREEN =============== */

function openFullScreen() {

    mainVideo.requestFullscreen();
}

/* =============== VIDEO VALUME =============== */

let volumeProgress = document.getElementById("volumeProgress");
volumeProgress.onclick = (event) => {

    let volumeIcon = document.getElementById("volumeIcon");

    let rect = volumeProgress.getBoundingClientRect();
    let clickX = event.clientX - rect.left;

    let percent = clickX / rect.width;
    mainVideo.volume = percent;
    volumeProgress.value = percent * 100;
    volumeProgress.title = volumeProgress.value.toFixed(0);

    if (volumeProgress.value.toFixed(0) <= 0) {

        mainVideo.muted = true;
        volumeIcon.className = "ri-volume-off-vibrate-fill";

    } else {

        volumeIcon.className = "ri-volume-up-fill";
        mainVideo.muted = false;
    }
};

/* =============== VIDEO LIKE & DISLIKE =============== */

function like() {

    let likeIcon = document.getElementById("likeIcon");
    let dislikeIcon = document.getElementById("dislikeIcon");

    if (likeIcon.className === "ri-thumb-up-line") {

        likeIcon.classList = "ri-thumb-up-fill";
        dislikeIcon.classList = "ri-thumb-down-line";
        sessionStorage.setItem("videoLikeStatus", "Like");

    } else {

        likeIcon.classList = "ri-thumb-up-line";
        dislikeIcon.classList = "ri-thumb-down-line";
        sessionStorage.setItem("videoLikeStatus", "None");
    }
}

function disLike() {

    let likeIcon = document.getElementById("likeIcon");
    let dislikeIcon = document.getElementById("dislikeIcon");

    if (dislikeIcon.className === "ri-thumb-down-line") {

        likeIcon.classList = "ri-thumb-up-line";
        dislikeIcon.classList = "ri-thumb-down-fill";
        sessionStorage.setItem("videoLikeStatus", "Dislike");

    } else {

        likeIcon.classList = "ri-thumb-up-line";
        dislikeIcon.classList = "ri-thumb-down-line";
        sessionStorage.setItem("videoLikeStatus", "None");
    }
}

/* =============== CHECK VIDEO LIKE & DISLIKE =============== */

function checkLike() {

    let likeIcon = document.getElementById("likeIcon");
    let dislikeIcon = document.getElementById("dislikeIcon");

    let status = sessionStorage.getItem("videoLikeStatus");

    if (status === null) {

        sessionStorage.setItem("videoLikeStatus", "None");
        likeIcon.classList = "ri-thumb-up-line";
        dislikeIcon.classList = "ri-thumb-down-line";

    }
    else if (status === "Like") {

        likeIcon.classList = "ri-thumb-up-fill";
        dislikeIcon.classList = "ri-thumb-down-line";

    }
    else if (status === "Dislike") {

        likeIcon.classList = "ri-thumb-up-line";
        dislikeIcon.classList = "ri-thumb-down-fill";

    }

}

checkLike();

/* =============== UPLOAD ANOTHER VIDEO =============== */

function uploadOtherVideo() {

    let videoPlayerContainer = document.getElementById("videoPlayerContainer");
    let videoUploader = document.getElementById("videoUploader");
    let errorBox = document.getElementById("videoErrorPage");
    let errorMessage = document.getElementById("videoErrorMsg");

    let likeIcon = document.getElementById("likeIcon");
    let dislikeIcon = document.getElementById("dislikeIcon");

    mainVideo.pause();

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
    popupMessage.textContent = "Are You Want To Sure To Upload Another Video?";

    popupCloseIcon.onclick = () => {

        mainVideo.play();

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

        mainVideo.play();

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

        errorBox.style.display = "none";
        videoUploader.style.display = "flex";
        videoPlayerContainer.style.display = "none";

        mainVideo.src = "";
        videoInput.value = "";

        sessionStorage.removeItem("videoLikeStatus");

        likeIcon.classList = "ri-thumb-up-line";
        dislikeIcon.classList = "ri-thumb-down-line";

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

/* =============== CHANGE VIDEO PLAYBACK SPEED =============== */

function videoSpeed(value) {

    mainVideo.playbackRate = Number(value);
}

mainVideo.addEventListener("mouseenter", () => {

    videoControlBar.classList.add("active");

});

mainVideo.addEventListener("mouseleave", () => {

    setTimeout(() => {

        videoControlBar.classList.remove("active");

    }, 3500);
});

