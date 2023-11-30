"use strict"
const myInput = document.querySelector(".TextInput")
let gCanvas
let gCtx
let gImg

//get the position of the text on the canvas
// var { posX, posY } = getMeme().lines[getMeme().selectedLineIdx].pos

function onInit() {
  gCanvas = document.querySelector("canvas")
  gCtx = gCanvas.getContext("2d")

  renderImgs()
}
function changeColor() {
  getMeme().lines[getMeme().selectedLineIdx].color =
    document.getElementById("color").value

  getMeme().lines[getMeme().selectedLineIdx].strokeColor =
    document.getElementById("StrokeColor").value

  redrawImg()

  getMeme().lines[getMeme().selectedLineIdx].color =
    getMeme().lines[getMeme().selectedLineIdx].color
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

  drawText(getMeme().lines[0].txt, 350, 50, 0)
  drawText(getMeme().lines[1].txt, 350, 500, 1)

  myInput.addEventListener("input", () => {
    redrawImg()
    getMeme().lines[getMeme().selectedLineIdx].txt = myInput.value
  })
}

function increaseFont(fontSize) {
  getMeme().lines[getMeme().selectedLineIdx].size += fontSize
  redrawImg()
}

function decreaseFont(fontSize) {
  getMeme().lines[getMeme().selectedLineIdx].size -= fontSize
  redrawImg()
}

function redrawImg() {
  gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
  gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height)
  var inputValue = myInput.value
  getMeme().lines[getMeme().selectedLineIdx].txt = inputValue

  for (let i = 0; i < getMeme().lines.length; i++) {
    drawText(
      getMeme().lines[i].txt,
      getMeme().lines[i].pos.x,
      getMeme().lines[i].pos.y,
      i
    )
  }
}

function drawText(text, x, y, lineIndex) {
  const lines = getMeme().lines
  if (lines && lines[lineIndex]) {
    const currentLine = lines[lineIndex]

    gCtx.lineWidth = 3.5
    gCtx.strokeStyle = currentLine.strokeColor || "black" // Default color if undefined
    gCtx.fillStyle = currentLine.color || "white" // Default color if undefined
    gCtx.font = (currentLine.size || 20) + "px Impact" // Default size if undefined
    gCtx.textAlign = "center"
    gCtx.textBaseline = "middle"

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)

    if (lineIndex === getMeme().selectedLineIdx) {
      const textWidth = gCtx.measureText(text).width
      const textHeight = currentLine.size || 20
      const framePadding = 10

      gCtx.beginPath()
      gCtx.rect(
        x - textWidth / 2 - framePadding,
        y - textHeight / 2 - framePadding,
        textWidth + 2 * framePadding,
        textHeight + 2 * framePadding
      )
      gCtx.strokeStyle = "#333" //
      gCtx.stroke()
    }
  }
}

function getDrawText() {
  return gFirstText
}

function AddNewLine() {
  getMeme().lines.push({
    txt: "your text...",
    size: 60,
    color: "white",
    pos: {
      x: gCanvas.width / 2,
      y: gCanvas.height / 2
    }
  })
  drawText(
    getMeme().lines[getMeme().lines.length - 1].txt,
    gCanvas.width / 2,
    gCanvas.height / 2,
    getMeme().lines.length - 1
  )

  getMeme().selectedLineIdx = getMeme().lines.length - 1
}

function switchLines() {
  getMeme().selectedLineIdx = getMeme().selectedLineIdx === 0 ? 1 : 0
}

function onDownloadCanvas(elLink) {
  const dataUrl = gCanvas.toDataURL()
  elLink.href = dataUrl
  elLink.download = "my-img"
}
