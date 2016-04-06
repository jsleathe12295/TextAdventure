window.onload = init;

var gCanvas;
var g2d;
var width = 854;
var height = 480;

var title = "Text Adventure";
var gameState = 0;


function init() {
  gCanvas = document.getElementById("gameCanvas");
  gCanvas.width = width;
  gCanvas.height = height;

  g2d = gCanvas.getContext("2d");
  g2d.imageSmoothingEnabled = false;
  g2d.webkitImageSmoothingEnabled = false;
  g2d.mozImageSmoothingEnabled = false;

  console.log("Game canvas initialized");
  draw();
}

function draw() {
  if (gameState == 0) {
    g2d.font = "60px Courier New BOLD";
    g2d.fillStyle = "#FFFFFF";
    g2d.fillText(title, (width / 2) - (g2d.measureText(title).width / 2), 140);

    g2d.font = "24px Courier New";
    g2d.fillStyle = "#CCCCCC";
    g2d.fillText("1. Play Game", (width / 2) - (g2d.measureText("1. Play Game").width / 2), 300);
    g2d.fillText("2. Exit Game", (width / 2) - (g2d.measureText("2. Exit Game").width / 2), 330);

    var input = new CanvasInput({
      canvas: gCanvas,
      x: 3,
      y: 450,
      width: 834,
      backgroundColor: "#000000",
      fontSize: 16,
      fontFamily: "Courier New",
      borderWidth: 0,
      boxShadow: "0px 0px 0px rgba(255,255,255,1)",
      selectionColor: "#FFFFFF",
      fontColor: "#FFFFFF",
      placeHolder: 'Enter choice here...',
      onsubmit: function() {
      if (input._value=="2"){
        enterState(1);
      }
      if (input._value == "reset"){
        enterState(0);

      }
      }
    });
    input.focus();

  }
  if (gameState == 1) {
    g2d.font = "60px Courier New BOLD";
    g2d.fillStyle = "#FFFFFF";
    g2d.fillText("Thanks For Playing", (width / 2) - (g2d.measureText("Thanks For Playing").width / 2), 140);

    g2d.font = "24px Courier New";
    g2d.fillStyle = "#CCCCCC";
    g2d.fillText("Programmed by Jonathan Leathe", (width / 2) - (g2d.measureText("Programmed by Jonathan Leathe").width / 2), 300);
    g2d.fillText("Type -reset- to play again", (width / 2) - (g2d.measureText("Type -reset- to play again").width / 2), 330);
    g2d.fillText("Type -reset- to play again", (width / 2) - (g2d.measureText("Type -reset- to play again").width / 2), 330);


  }
  console.log("Game drawn successfully");
}

function enterState(state){
  gameState = state;
  clearCanvas(g2d, gCanvas);
  draw();
}

function clearCanvas(context, canvas) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  var w = gCanvas.width;
  canvas.width = 1;
  canvas.width = w;
}
