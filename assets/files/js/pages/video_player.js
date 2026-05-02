// ===================== LOADER =====================
window.onload = function () {
    const pageLoader = document.getElementById("pageLoader");

    setTimeout(() => {
        pageLoader.style.display = "none";
    }, 300);
};

// ===================== CHECK INTERNET =====================
setInterval(() => {
    const noInternetDiv = document.getElementById("noInternet");

    if (navigator.onLine) {
        noInternetDiv.style.display = "none";
    } else {
        noInternetDiv.style.display = "flex";
    }
}, 400);

// ===================== VIDEO PLAYER =====================
const video = document.getElementById("video");
const uploadSection = document.getElementById("uploadSection");
const playerSection = document.getElementById("playerSection");
const errorBox = document.getElementById("error");

const videoLoader = document.getElementById("videoLoader");
const playBtn = document.getElementById("playBtn");
const timelineBar = document.getElementById("timelineBar");
const bufferedBar = document.getElementById("bufferedBar");
const playedBar = document.getElementById("playedBar");
const thumb = document.getElementById("thumb");

const currentTimeEl = document.getElementById("currentTime");
const durationTimeEl = document.getElementById("durationTime");

const volumeSlider = document.getElementById("volume");
const volIcon = document.getElementById("volIcon");

const speedSelect = document.getElementById("speedSelect");
const logsBox = document.getElementById("logs");
const videoTitle = document.getElementById("videoTitle");

const likeCountEl = document.getElementById("likeCount");
const dislikeCountEl = document.getElementById("dislikeCount");
const likeBtn = document.getElementById("likeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");

// ===================== HELPERS =====================
function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return "00:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function showError(msg) {
    errorBox.innerText = msg;
}

function clearError() {
    errorBox.innerText = "";
}

function showLoader() {
    videoLoader.style.display = "flex";
}

function hideLoader() {
    videoLoader.style.display = "none";
}

// ===================== LOAD VIDEO =====================
function loadVideo() {
    clearError();

    const file = document.getElementById("fileInput").files[0];
    const url = document.getElementById("urlInput").value.trim();

    if (!file && !url) {
        showError("Select a video file or paste a direct video URL.");
        return;
    }

    showLoader();

    if (file) {
        const src = URL.createObjectURL(file);
        playVideo(src, file.name, `${(file.size / (1024 * 1024)).toFixed(2)} MB`);
    } else {
        if (!url.startsWith("http")) {
            hideLoader();
            showError("Invalid URL. Must start with http/https.");
            return;
        }

        if (!url.match(/\.(mp4|webm|ogg)(\?.*)?$/i)) {
            hideLoader();
            showError("Only direct MP4/WebM/Ogg links supported.");
            return;
        }

        playVideo(url, url.split("/").pop(), "URL Video");
    }
}

// ===================== PLAY VIDEO =====================
function playVideo(src, title, size) {
    video.pause();
    video.src = "";

    video.onerror = () => {
        hideLoader();
        uploadSection.style.display = "flex";
        playerSection.style.display = "none";
        showError("Video cannot be loaded (CORS blocked or broken link).");
    };

    video.onloadedmetadata = () => {
        hideLoader();
        durationTimeEl.innerText = formatTime(video.duration);
    };

    video.onwaiting = showLoader;
    video.onplaying = hideLoader;

    video.onended = () => {
        playBtn.innerHTML = `<i class="ri-play-fill"></i>`;
    };

    video.src = src;
    video.load();

    uploadSection.style.display = "none";
    playerSection.style.display = "flex";

    videoTitle.innerHTML = `<i class="ri-video-line"></i> ${title}`;

    resetReactions();
    saveLog({ title, size, date: new Date().toLocaleString() });
    renderLogs();
}

// ===================== CONTROLS =====================
function togglePlay() {
    if (!video.src) return;

    if (video.paused) {
        video.play();
        playBtn.innerHTML = `<i class="ri-pause-fill"></i>`;
    } else {
        video.pause();
        playBtn.innerHTML = `<i class="ri-play-fill"></i>`;
    }
}

function forward() {
    video.currentTime = Math.min(video.currentTime + 15, video.duration);
}

function backward() {
    video.currentTime = Math.max(video.currentTime - 15, 0);
}

// ===================== TIMELINE =====================
video.addEventListener("timeupdate", () => {
    if (!video.duration) return;

    const percent = (video.currentTime / video.duration) * 100;
    playedBar.style.width = percent + "%";
    thumb.style.left = percent + "%";

    currentTimeEl.innerText = formatTime(video.currentTime);
});

video.addEventListener("progress", () => {
    try {
        if (video.buffered.length > 0) {
            const bufferedEnd = video.buffered.end(video.buffered.length - 1);
            bufferedBar.style.width = (bufferedEnd / video.duration) * 100 + "%";
        }
    } catch { }
});

timelineBar.addEventListener("click", (e) => {
    const rect = timelineBar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    video.currentTime = pos * video.duration;
});

// ===================== VOLUME =====================
volumeSlider.value = 1;

volumeSlider.addEventListener("input", (e) => {
    video.volume = e.target.value;

    if (video.volume == 0) volIcon.className = "ri-volume-mute-line";
    else if (video.volume < 0.5) volIcon.className = "ri-volume-down-line";
    else volIcon.className = "ri-volume-up-line";
});

// ===================== SPEED =====================
speedSelect.addEventListener("change", () => {
    video.playbackRate = speedSelect.value;
});

// ===================== THEME =====================
function applyTheme(color) {
    document.documentElement.style.setProperty("--theme", color);
    localStorage.setItem("themeColor", color);
}

(function () {
    const saved = localStorage.getItem("themeColor");
    if (saved) applyTheme(saved);
})();

// ===================== BACK =====================
function goBackUpload() {
    video.pause();
    uploadSection.style.display = "flex";
    playerSection.style.display = "none";
}

// ===================== LOGS =====================
function saveLog(videoData) {
    let logs = JSON.parse(localStorage.getItem("videoLogs")) || [];
    logs.unshift(videoData);
    logs = logs.slice(0, 7);
    localStorage.setItem("videoLogs", JSON.stringify(logs));
}

function clearLogs() {
    localStorage.removeItem("videoLogs");
    renderLogs();
}

function renderLogs() {
    let logs = JSON.parse(localStorage.getItem("videoLogs")) || [];
    logsBox.innerHTML = "";

    if (logs.length === 0) {
        logsBox.innerHTML = `<div class="empty-logs">No videos played yet.</div>`;
        return;
    }

    logs.forEach(v => {
        const div = document.createElement("div");
        div.className = "log-item";

        div.innerHTML = `
            <div class="log-icon">
                <i class="ri-video-line"></i>
            </div>

            <div class="log-content">
                <b>${v.title}</b>
                <div class="log-meta">${v.size} • ${v.date}</div>
            </div>
        `;

        logsBox.appendChild(div);
    });
}

renderLogs();

// ===================== LIKE / DISLIKE =====================
function resetReactions() {
    likeBtn.classList.remove("active-like");
    dislikeBtn.classList.remove("active-dislike");
}

function likeVideo() {
    let likes = parseInt(localStorage.getItem("likes") || "0");
    let dislikes = parseInt(localStorage.getItem("dislikes") || "0");

    if (likeBtn.classList.contains("active-like")) {
        likeBtn.classList.remove("active-like");
        likes--;
    } else {
        likeBtn.classList.add("active-like");
        dislikesBtnReset();
        likes++;
    }

    if (likes < 0) likes = 0;

    localStorage.setItem("likes", likes);
    localStorage.setItem("dislikes", dislikes);

    updateReactions();
}

function dislikeVideo() {
    let likes = parseInt(localStorage.getItem("likes") || "0");
    let dislikes = parseInt(localStorage.getItem("dislikes") || "0");

    if (dislikeBtn.classList.contains("active-dislike")) {
        dislikeBtn.classList.remove("active-dislike");
        dislikes--;
    } else {
        dislikeBtn.classList.add("active-dislike");
        likeBtnReset();
        dislikes++;
    }

    if (dislikes < 0) dislikes = 0;

    localStorage.setItem("likes", likes);
    localStorage.setItem("dislikes", dislikes);

    updateReactions();
}

function likeBtnReset() {
    if (likeBtn.classList.contains("active-like")) {
        likeBtn.classList.remove("active-like");
    }
}

function dislikesBtnReset() {
    if (dislikeBtn.classList.contains("active-dislike")) {
        dislikeBtn.classList.remove("active-dislike");
    }
}

function updateReactions() {
    likeCountEl.innerText = localStorage.getItem("likes") || "0";
    dislikeCountEl.innerText = localStorage.getItem("dislikes") || "0";
}

updateReactions();