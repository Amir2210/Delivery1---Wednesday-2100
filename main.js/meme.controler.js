"use strict"
const myInput = document.querySelector(".TextInput")
let gCanvas
let gCtx
let gImg
let isDragging = false
let dragOffsetX, dragOffsetY

function onInit() {
  gCanvas = document.querySelector("canvas")
  gCtx = gCanvas.getContext("2d")

  renderImgs()
  window.addEventListener("resize", resizeCanvas)

  // Call resizeCanvas initially to set the initial canvas size and positions
  resizeCanvas()
}

function resizeCanvas() {
  // Check the window width and set the canvas size accordingly
  if (window.innerWidth < 800) {
    gCanvas.width = 430
    gCanvas.height = 430

    // Adjust font size for smaller window width
    setFontSizes(40) // Set your desired smaller font size here

    // Set initial positions for text lines
    getMeme().lines[0].pos = { x: 250, y: 50 }
    getMeme().lines[1].pos = { x: 250, y: 300 }
  } else {
    // Set your default canvas size here (if needed)
    gCanvas.width = 700
    gCanvas.height = 600

    // Reset font size to default when the window is wider
    setFontSizes(60) // Set your default font size here

    // Reset initial positions for text lines
    getMeme().lines[0].pos = { x: 215, y: 50 }
    getMeme().lines[1].pos = { x: 215, y: 300 }
  }

  // Redraw the image after resizing the canvas
  redrawImg()
}

function setFontSizes(fontSize) {
  // Set font size for all text lines in the meme
  if (Array.isArray(getMeme().lines)) {
    getMeme().lines.forEach((line) => {
      line.size = fontSize
    })
  }

  // Redraw the image with the updated font size
  redrawImg()
}

function renderMeme(elImg) {
  gImg = elImg
  getMeme().selectedImgId = +gImg.dataset.id
  gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)

  const elMemeController = document.querySelector(".meme-controller")
  elMemeController.classList.remove("hidden")
  elMemeController.classList.add("flex", "space-around")

  const elSectionImg = document.querySelector(".gallery .imges")
  elSectionImg.classList.add("hidden")

  const elGallerySearchBox = document.querySelector(".gallery-nav .search-box")
  elGallerySearchBox.classList.add("hidden")

  const elGalleryFilterBox = document.querySelector(".gallery-nav .filter-box")
  elGalleryFilterBox.classList.add("hidden")

  const elGallerynavRow2 = document.querySelector(".gallery-nav .nav-row2")
  elGallerynavRow2.classList.add("hidden")

  if (Array.isArray(getMeme().lines) && getMeme().lines.length >= 2) {
    drawText(getMeme().lines[0].txt, 215, 50, 0)
    drawText(getMeme().lines[1].txt, 215, 300, 1)
  }

  myInput.addEventListener("input", () => {
    getMeme().lines[getMeme().selectedLineIdx].txt = myInput.value
    redrawImg()
  })
  gCanvas.addEventListener("click", (event) => {
    const clickX = event.offsetX
    const clickY = event.offsetY

    for (let i = 0; i < getMeme().lines.length; i++) {
      const { x, y, txt } = getMeme().lines[i].pos
      const textWidth = gCtx.measureText(txt).width
      const textHeight = getMeme().lines[i].size || 20

      if (
        clickX >= x - textWidth / 2 &&
        clickX <= x + textWidth / 2 &&
        clickY >= y - textHeight / 2 &&
        clickY <= y + textHeight / 2
      ) {
        getMeme().selectedLineIdx = i

        myInput.value = getMeme().lines[i].txt

        redrawImg()
        break
      }
    }
  })
  // SUPPORT DRAG AND DROP
  gCanvas.addEventListener("mousedown", handleMouseDown)
  gCanvas.addEventListener("mousemove", handleMouseMove)
  gCanvas.addEventListener("mouseup", handleMouseUp)

  gCanvas.addEventListener("touchstart", handleTouchStart, false)
  gCanvas.addEventListener("touchmove", handleTouchMove, false)
  gCanvas.addEventListener("touchend", handleTouchEnd, false)

  // WHEN THE CANVAS CLICKED IS REMOVE THE FRAME FROM THE SELECTED TEXT LINE
  gCanvas.addEventListener("click", (event) => {
    const clickX = event.offsetX
    const clickY = event.offsetY

    let isLineClicked = false

    for (let i = 0; i < getMeme().lines.length; i++) {
      const { x, y, txt } = getMeme().lines[i].pos
      const textWidth = gCtx.measureText(txt).width
      const textHeight = getMeme().lines[i].size || 20

      if (
        clickX >= x - textWidth / 2 &&
        clickX <= x + textWidth / 2 &&
        clickY >= y - textHeight / 2 &&
        clickY <= y + textHeight / 2
      ) {
        getMeme().selectedLineIdx = i

        myInput.value = getMeme().lines[i].txt

        redrawImg()
        isLineClicked = true
        break
      }
    }

    if (!isLineClicked) {
      getMeme().selectedLineIdx = null
      redrawImg()
    }
  })
}

function handleTouchStart(event) {
  const touch = event.touches[0]
  const clickX = touch.pageX - gCanvas.offsetLeft
  const clickY = touch.pageY - gCanvas.offsetTop

  handleMouseDown({ offsetX: clickX, offsetY: clickY })
}

function handleTouchEnd() {
  isDragging = false
}

function handleTouchMove(event) {
  if (!isDragging) return

  const touch = event.touches[0]
  const newX = touch.pageX - gCanvas.offsetLeft - dragOffsetX
  const newY = touch.pageY - gCanvas.offsetTop - dragOffsetY

  getMeme().lines[getMeme().selectedLineIdx].pos.x = newX
  getMeme().lines[getMeme().selectedLineIdx].pos.y = newY

  redrawImg()

  event.preventDefault()
}

function handleMouseDown(event) {
  const clickX = event.offsetX
  const clickY = event.offsetY

  for (let i = 0; i < getMeme().lines.length; i++) {
    const { x, y, txt } = getMeme().lines[i].pos
    const textWidth = gCtx.measureText(txt).width
    const textHeight = getMeme().lines[i].size || 20

    if (
      clickX >= x - textWidth / 2 &&
      clickX <= x + textWidth / 2 &&
      clickY >= y - textHeight / 2 &&
      clickY <= y + textHeight / 2
    ) {
      isDragging = true

      dragOffsetX = clickX - x
      dragOffsetY = clickY - y

      getMeme().selectedLineIdx = i

      myInput.value = getMeme().lines[i].txt

      redrawImg()
      break
    }
  }
}

function handleMouseMove(event) {
  if (isDragging) {
    const newX = event.offsetX - dragOffsetX
    const newY = event.offsetY - dragOffsetY

    // Update the position of the selected line
    getMeme().lines[getMeme().selectedLineIdx].pos.x = newX
    getMeme().lines[getMeme().selectedLineIdx].pos.y = newY

    redrawImg()
  }
}

function handleMouseUp() {
  // Stop dragging when the mouse button is released
  isDragging = false
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

  for (let i = 0; i < getMeme().lines.length; i++) {
    drawText(
      getMeme().lines[i].txt,
      getMeme().lines[i].pos.x,
      getMeme().lines[i].pos.y,
      i
    )
  }
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

function drawText(text, x, y, lineIndex) {
  const selectedFont = document.getElementById("fontPicker").value
  const lines = getMeme().lines

  if (Array.isArray(lines) && lines[lineIndex]) {
    const currentLine = lines[lineIndex]

    gCtx.lineWidth = 3.5
    gCtx.strokeStyle = currentLine.strokeColor || "black" // Default color if undefined
    gCtx.fillStyle = currentLine.color || "white" // Default color if undefined
    gCtx.font = (currentLine.size || 20) + "px " + selectedFont // Default size if undefined
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
  redrawImg()
}

function switchLines() {
  getMeme().selectedLineIdx = getMeme().selectedLineIdx === 0 ? 1 : 0
  myInput.value = getMeme().lines[getMeme().selectedLineIdx].txt
  redrawImg()
}

function alignToLeft() {
  const selectedLineIdx = getMeme().selectedLineIdx

  if (selectedLineIdx !== undefined) {
    const selectedLine = getMeme().lines[selectedLineIdx]

    // Align to left by setting the x position to the leftmost point
    selectedLine.pos.x = selectedLine.size * 2

    // Redraw the canvas with the updated alignment
    redrawImg()
  }
}
function alignToRigth() {
  const selectedLineIdx = getMeme().selectedLineIdx

  if (selectedLineIdx !== undefined) {
    const selectedLine = getMeme().lines[selectedLineIdx]

    // Align to left by setting the x position to the leftmost point
    selectedLine.pos.x = selectedLine.size * 10

    // Redraw the canvas with the updated alignment
    redrawImg()
  }
}
function alignToCenter() {
  const selectedLineIdx = getMeme().selectedLineIdx

  if (selectedLineIdx !== undefined) {
    const selectedLine = getMeme().lines[selectedLineIdx]

    // Align to left by setting the x position to the leftmost point
    selectedLine.pos.x = 350

    // Redraw the canvas with the updated alignment
    redrawImg()
  }
}

function dltText() {
  const selectedLineIdx = getMeme().selectedLineIdx

  if (
    selectedLineIdx !== undefined &&
    selectedLineIdx < getMeme().lines.length
  ) {
    // Remove the selected line from the lines array
    getMeme().lines.splice(selectedLineIdx, 1)

    // Clear the input value
    myInput.value = ""

    // Reset the selected line index to prevent referencing a non-existing line
    getMeme().selectedLineIdx = undefined

    // Redraw the canvas without the deleted line
    redrawImg()
  }
}

function getRandomImage() {
  const images = getSquareImgs()

  if (Array.isArray(images) && images.length > 0) {
    const randomIndex = Math.floor(Math.random() * images.length)

    const imgElement = document.createElement("img")
    imgElement.setAttribute("data-id", randomIndex + 1)
    imgElement.setAttribute("onclick", "renderMeme(this)")
    imgElement.setAttribute(
      "src",
      `images/meme-imgs (square)/${randomIndex + 1}.jpg`
    )
    imgElement.setAttribute("alt", "memeImg")
    return imgElement
  }

  console.error("Invalid image format")
  return null
}

function generateRandomMeme() {
  const elMemeController = document.querySelector(".meme-controller")
  elMemeController.classList.remove("hidden")

  const elSectionImg = document.querySelector(".gallery .imges")
  elSectionImg.classList.add("hidden")

  const elGalleryNav = document.querySelector(".gallery-nav")
  elGalleryNav.classList.add("hidden")

  const elNav = document.querySelector(".nav-row2")
  console.log(elNav)
  elNav.classList.add("hidden")

  // Reset the meme data
  resetMeme()

  const randomImg = getRandomImage()

  if (randomImg) {
    renderMeme(randomImg)

    addDefaultTextLine()
  }
}

function addDefaultTextLine() {
  // Add a default text line to the meme
  getMeme().lines.push({
    txt: "Your text here",
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

  redrawImg()
}

function resetMeme() {
  // Reset the meme data
  getMeme().selectedImgId = null
  getMeme().lines = []
  getMeme().selectedLineIdx = null
}

function onDownloadCanvas(elLink) {
  const dataUrl = gCanvas.toDataURL()
  elLink.href = dataUrl
  elLink.download = "my-img"
}

function onUploadImg() {
  // Gets the image from the canvas
  const imgDataUrl = gCanvas.toDataURL("image/jpeg")

  function onSuccess(uploadedImgUrl) {
    // Handle some special characters
    const url = encodeURIComponent(uploadedImgUrl)
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${url}`)
  }

  // Send the image to the server
  doUploadImg(imgDataUrl, onSuccess)
}

// Upload the image to a server, get back a URL
// call the function onSuccess when done
function doUploadImg(imgDataUrl, onSuccess) {
  // Pack the image for delivery
  const formData = new FormData()
  formData.append("img", imgDataUrl)

  // Send a post req with the image to the server
  const XHR = new XMLHttpRequest()
  XHR.onreadystatechange = () => {
    // If the request is not done, we have no business here yet, so return
    if (XHR.readyState !== XMLHttpRequest.DONE) return
    // if the response is not ok, show an error
    if (XHR.status !== 200) return console.error("Error uploading image")
    const { responseText: url } = XHR
    // Same as
    // const url = XHR.responseText

    // If the response is ok, call the onSuccess callback function,
    // that will create the link to facebook using the url we got
    console.log("Got back live url:", url)
    onSuccess(url)
  }
  XHR.onerror = (req, ev) => {
    console.error(
      "Error connecting to server with request:",
      req,
      "\nGot response data:",
      ev
    )
  }
  XHR.open("POST", "//ca-upload.com/here/upload.php")
  XHR.send(formData)
}
