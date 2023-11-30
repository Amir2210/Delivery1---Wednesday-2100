"use strict"
const myInput = document.querySelector(".firstTextIn")
let gCanvas
let gCtx
// let firstText = "your text..."
let gFirstText = {
  text: "your text...",
  color: "white",
  fontSize: 60
}

let gImg

function changeColor() {
  gFirstText.color = document.getElementById("color").value
  gFirstText.strokeColor = document.getElementById("StrokeColor").value
  redrawImg()
}

function onInit() {
  gCanvas = document.querySelector("canvas")
  gCtx = gCanvas.getContext("2d")

  renderImgs()
}

function renderMeme(elImg) {
  gImg = elImg
  gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)

  const elMemeController = document.querySelector(".meme-controller")
  elMemeController.classList.remove("hidden")

  const elSectionImg = document.querySelector(".gallery .imges")
  elSectionImg.classList.add("hidden")

  const elGalleryNav = document.querySelector(".gallery-nav")
  elGalleryNav.classList.add("hidden")

  drawText(gFirstText.text, 350, 50)

  myInput.addEventListener("input", () => {
    redrawImg()
  })
}

function increaseFont(fontSize) {
  gFirstText.fontSize += fontSize
  redrawImg()
}

function decreaseFont(fontSize) {
  gFirstText.fontSize -= fontSize
  redrawImg()
}

function redrawImg() {
  gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
  gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height)
  var inputValue = myInput.value
  gFirstText.text = myInput.value
  drawText(inputValue, 350, 50, gFirstText.fontSize)
}

function drawText(text, x, y) {
  // gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
  gCtx.lineWidth = 3.5
  gCtx.strokeStyle = gFirstText.strokeColor
  gCtx.fillStyle = gFirstText.color
  gCtx.font = gFirstText.fontSize + `px Impact`
  gCtx.textAlign = "center"
  gCtx.textBaseline = "middle"
  gCtx.fillText(text, x, y)
  gCtx.strokeText(text, x, y)
}

function getDrawText() {
  return myInput.value
}

function onDownloadCanvas(elLink) {
  const dataUrl = gCanvas.toDataURL()
  elLink.href = dataUrl
  elLink.download = "my-img"
}
