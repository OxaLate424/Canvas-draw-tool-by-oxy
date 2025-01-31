// Canvas setup
const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");

// Adjust canvas size based on screen
function resizeCanvas() {
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.5;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let painting = false;
let brushColor = "#000000";
let brushSize = 5;

// Color and brush size selection
document.getElementById("colorPicker").addEventListener("change", (e) => {
    brushColor = e.target.value;
});
document.getElementById("brushSize").addEventListener("input", (e) => {
    brushSize = e.target.value;
});

// Desktop Mouse Events
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mousemove", draw);

// Touch Events for Mobile
canvas.addEventListener("touchstart", startDrawing);
canvas.addEventListener("touchend", stopDrawing);
canvas.addEventListener("touchmove", draw);

function startDrawing(e) {
    painting = true;
    draw(e);
}

function stopDrawing() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;

    e.preventDefault(); // Prevent scrolling on mobile

    let x, y;
    if (e.touches) {
        // Touchscreen coordinates
        x = e.touches[0].clientX - canvas.offsetLeft;
        y = e.touches[0].clientY - canvas.offsetTop;
    } else {
        // Mouse coordinates
        x = e.clientX - canvas.offsetLeft;
        y = e.clientY - canvas.offsetTop;
    }

    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.strokeStyle = brushColor;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

// Clear Canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Ad Mechanism
const adContainer = document.getElementById("adContainer");
const ads = [
    "🔥 Learn JavaScript Today! Click Here!",
    "🚀 Web Development Bootcamp - Enroll Now!",
    "🎨 Design Tools for Creatives - Try Free!",
];

function loadAd() {
    adContainer.innerHTML = ads[Math.floor(Math.random() * ads.length)];
}

setInterval(loadAd, 3000);
loadAd();
