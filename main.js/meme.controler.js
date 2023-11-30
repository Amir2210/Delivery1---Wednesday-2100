"use strict"
const myInput = document.querySelector(".firstTextIn")
let gCanvas
let gCtx
let gImg

// let gFirstText = {
//   text: "your first text...",
//   color: "white",
//   fontSize: 60
// }
// let gSecondText = {
//   text: "your second text...",
//   color: "white",
//   fontSize: 60
// }

function changeColor() {
  // gFirstText.color = document.getElementById("color").value
  getMeme().lines[0].color = document.getElementById("color").value

  // gFirstText.strokeColor = document.getElementById("StrokeColor").value
  getMeme().lines[0].strokeColor = document.getElementById("StrokeColor").value

  redrawImg()

  // getMeme().lines[0].color = gFirstText.color
  getMeme().lines[0].color = getMeme().lines[0].color
}

function onInit() {
  gCanvas = document.querySelector("canvas")
  gCtx = gCanvas.getContext("2d")

  renderImgs()
}

function renderMeme(elImg) {
  gImg = elImg
  getMeme().selectedImgId = +gImg.dataset.id
  gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)

  const elMemeController = document.querySelector(".meme-controller")
  elMemeController.classList.remove("hidden")

  const elSectionImg = document.querySelector(".gallery .imges")
  elSectionImg.classList.add("hidden")

  const elGalleryNav = document.querySelector(".gallery-nav")
  elGalleryNav.classList.add("hidden")

  // drawText(gFirstText.text, 350, 50)
  // drawText(gSecondText.text, 350, 500)
  drawText(getMeme().lines[0].txt, 350, 50)
  drawText(getMeme().lines[0].txt, 350, 500)

  myInput.addEventListener("input", () => {
    redrawImg()
    // getMeme().lines[0].txt = gFirstText.text
    getMeme().lines[0].txt = getMeme().lines[0].txt
  })
}

function increaseFont(fontSize) {
  // gFirstText.fontSize += fontSize
  getMeme().lines[0].size += fontSize
  redrawImg()
  // getMeme().lines[0].size = gFirstText.fontSize
  getMeme().lines[0].size = getMeme().lines[0].size
}

function decreaseFont(fontSize) {
  // gFirstText.fontSize -= fontSize
  getMeme().lines[0].size -= fontSize
  redrawImg()
  // getMeme().lines[0].size = gFirstText.fontSize
  getMeme().lines[0].size = getMeme().lines[0].size
}

function redrawImg() {
  gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
  gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height)
  var inputValue = myInput.value
  // gFirstText.text = myInput.value
  getMeme().lines[0].txt = myInput.value

  // drawText(inputValue, 350, 50, gFirstText.fontSize)
  drawText(inputValue, 350, 50, getMeme().lines[0].size)
}

function drawText(text, x, y) {
  // gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
  gCtx.lineWidth = 3.5
  // gCtx.strokeStyle = gFirstText.strokeColor
  gCtx.strokeStyle = getMeme().lines[0].strokeColor

  // gCtx.fillStyle = gFirstText.color
  gCtx.fillStyle = getMeme().lines[0].color

  // gCtx.font = gFirstText.fontSize + `px Impact`
  gCtx.font = getMeme().lines[0].size + `px Impact`
  gCtx.textAlign = "center"
  gCtx.textBaseline = "middle"
  gCtx.fillText(text, x, y)
  gCtx.strokeText(text, x, y)
}

function getDrawText() {
  return gFirstText
}

function AddNewLine() {
  drawText(getMeme().lines[0].txt, gCanvas.width / 2, gCanvas.height / 2)
  getMeme().lines.push({
    txt: "your text...",
    size: 60,
    color: "white"
  })
}

function onDownloadCanvas(elLink) {
  const dataUrl = gCanvas.toDataURL()
  elLink.href = dataUrl
  elLink.download = "my-img"
}
