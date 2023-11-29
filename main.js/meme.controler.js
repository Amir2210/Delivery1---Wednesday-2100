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
}

// function onDownloadCanvas(elLink) {
//   const dataUrl = gCanvas.toDataURL()
//   elLink.href = dataUrl
//   elLink.download = "my-img"
// }
