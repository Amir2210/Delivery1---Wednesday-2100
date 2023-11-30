"use strict"

function renderImgs() {
  const elImgsSection = document.querySelector(".imges")
  var strHtml = getSquareImgs()
    .map(
      (img) =>
        `
        <div class=" image-container">
      <img data-id = ${img.id} onclick=" renderMeme(this)" src="images/meme-imgs (square)/${img.id}.jpg" alt="memeImg">
      </div>
      `
    )
    .join("")
  strHtml += getAspectRatiosImgs()
    .map(
      (img) =>
        `
        <div class=" image-container">
      <img data-id = ${img.id}  onclick=" renderMeme(this)" src="images/meme-imgs (various aspect ratios)/${img.id}.jpg" alt="memeImg">
      </div>
      `
    )
    .join("")

  elImgsSection.innerHTML = strHtml
}
function goGallery() {
  const elSectionImg = document.querySelector(".gallery .imges")
  elSectionImg.classList.remove("hidden")

  const elGalleryNav = document.querySelector(".gallery-nav")
  elGalleryNav.classList.remove("hidden")

  const elMemeController = document.querySelector(".meme-controller")
  elMemeController.classList.add("hidden")
}
