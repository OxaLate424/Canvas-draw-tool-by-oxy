// Canvas setup
const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

let painting = false;
let brushColor = "#000000";
let brushSize = 5;

document.getElementById("colorPicker").addEventListener("change", (e) => {
    brushColor = e.target.value;
});

document.getElementById("brushSize").addEventListener("input", (e) => {
    brushSize = e.target.value;
});

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mousemove", draw);

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
    
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.strokeStyle = brushColor;

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
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
