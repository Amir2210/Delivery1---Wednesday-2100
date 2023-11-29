"use strict"
const myInput = document.querySelector(".firstTextIn")
let gCanvas
let gCtx
// let firstText = "your text..."
let gFirstText = {
  text: "your text..."
}

function changeColor() {
  gFirstText.color = document.getElementById("color").value
  gFirstText.strokeColor = getElementById("StrokeColor").value
}

function onInit() {
  gCanvas = document.querySelector("canvas")
  gCtx = gCanvas.getContext("2d")

  renderImgs()
}

function renderMeme(elImg) {
  gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)

  const elMemeController = document.querySelector(".meme-controller")
  elMemeController.classList.remove("hidden")

  const elSectionImg = document.querySelector(".gallery .imges")
  elSectionImg.classList.add("hidden")

  const elGalleryNav = document.querySelector(".gallery-nav")
  elGalleryNav.classList.add("hidden")

  drawText(gFirstText.text, 350, 50)

  //change the text every time the user press any letter on the keyboard
  myInput.addEventListener("input", () => {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)
    var inputValue = myInput.value
    drawText(inputValue, 350, 50)
    setLineTxt()
  })
}

function drawText(text, x, y) {
  // textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height)
  gCtx.lineWidth = 3.5
  gCtx.strokeStyle = gFirstText.strokeColor
  gCtx.fillStyle = "white"
  gCtx.font = "60px Impact"
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
