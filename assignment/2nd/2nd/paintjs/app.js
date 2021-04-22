const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

const palette = document.getElementsByClassName("controls__color");
const range = document.getElementById("jsRange");
const modeBtn = document.getElementById("jsMode");

const INITIAL_COLOR = "3c3c3c";

// all the features in this context will use these values...
// setting the default value
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting;
let filling; // false: paint, true: fill

function startPainting() {
  painting = !filling ? true : false;
}

function stopPainting() {
  painting = false;
}

// happens everytime when the mouse moves
// manipulating each pixel at once
function onMouseMove(event) {
  // screenX, screenY : perspective of the screen
  // clientX, clientY : perspective of the browser
  // offsetX, offsetY : perspective of the canvas
  let x = event.offsetX;
  let y = event.offsetY;

  if (!painting) {
    // make new path // path === line
    // all the commands after this will be used for making the path
    ctx.beginPath();
    // move pen to (x, y)
    ctx.moveTo(x, y);
  } else {
    // draw the line from the previous position of the path
    // to the position of the line which is (x, y)
    ctx.lineTo(x, y);
    // fill/ stroke with the set color
    ctx.stroke();
  }
}

function handleColorClick(event) {
  let setColor = event.target.style.backgroundColor;
  ctx.strokeStyle = setColor;
  ctx.fillStyle = setColor;
}

function handleRangeChange(event) {
  ctx.lineWidth = event.target.value;
}

function handleModeClick(event) {
  // now fill -> change into print mode
  if (filling) {
    event.target.innerText = "fill";
  }
  // now print -> change into fill mode
  else {
    event.target.innerText = "print";
  }
  filling = !filling;
}

function fillCanvas(event) {
  if (filling) {
    event.target.style.backgroundColor = ctx.fillStyle;
  }
}

// do this only if the canvas exists
if (canvas) {
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", fillCanvas);
}

if (palette) {
  Array.from(palette).forEach((color) =>
    color.addEventListener("click", handleColorClick)
  );
}

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (modeBtn) {
  modeBtn.addEventListener("click", handleModeClick);
}
