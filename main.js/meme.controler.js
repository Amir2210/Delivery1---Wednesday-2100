"use strict"

let gCanvas
let gCtx

function onInit() {
  gCanvas = document.querySelector("canvas")
  gCtx = gCanvas.getContext("2d")
  renderImgs()
}

function renderMeme(elImg) {
  gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)
  drawLineText("your text...", 225, 50)
}

function drawLineText(text, x, y) {
  gCtx.lineWidth = 3.5
  gCtx.strokeStyle = "#000"
  gCtx.fillStyle = "#fff"
  gCtx.font = "60px Impact"
  gCtx.textAlign = "center"
  gCtx.textBaseline = "middle"
  gCtx.fillText(text, x, y)
  gCtx.strokeText(text, x, y)
}

// function onDownloadCanvas(elLink) {
//   const dataUrl = gCanvas.toDataURL()
//   elLink.href = dataUrl
//   elLink.download = "my-img"
// }
