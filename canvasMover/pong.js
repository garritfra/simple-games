const c = document.getElementById("context");
const ctx = c.getContext("2d");
const width = c.width;
const height = c.height;

let xPos = width / 2;
let yPos = height / 2;

function clear() {
  ctx.clearRect(0, 0, c.width, c.height);
}

function draw() {
  clear();
  ctx.fillStyle = "white";
  ctx.fillRect(xPos, yPos, 20, 20);

  document.onkeydown = e => {
    switch (e.keyCode) {
      case 37:
        xPos--;
        break;
      case 38:
        yPos--;
        break;
      case 39:
        xPos++;
        break;
      case 40:
        yPos++;
        break;
    }
  };
}

setInterval(draw, 10);
