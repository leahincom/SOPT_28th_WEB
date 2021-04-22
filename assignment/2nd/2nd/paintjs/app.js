const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

const palette = document.getElementsByClassName("controls__color");

// all the feature in this context will use this value...
ctx.lineWidth = 2.5;

let painting;

function startPainting() {
  painting = true;
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
  // event.target.style.background
  ctx.strokeStyle = event.target.style.backgroundColor;
}

// do this only if the canvas exists
if (canvas) {
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  Array.from(palette).forEach((color) =>
    color.addEventListener("click", handleColorClick)
  );
}
