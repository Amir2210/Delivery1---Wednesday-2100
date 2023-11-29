"use strict"

function onInit() {
  renderImgs()
}

function renderImgs() {
  const elImgsSection = document.querySelector(".imges")
  var strHtml = getSquareImgs()
    .map(
      (img) =>
        `
      <img  onclick="onSelectImg(this)" src="images/meme-imgs (square)/${img.id}.jpg" alt="memeImg">
      `
    )
    .join("")
  strHtml += getAspectRatiosImgs()
    .map(
      (img) =>
        `
      <img  onclick="onSelectImg(this)" src="images/meme-imgs (various aspect ratios)/${img.id}.jpg" alt="memeImg">
      `
    )
    .join("")

  elImgsSection.innerHTML = strHtml
}

function onSelectImg() {
  console.log("img click")
}
