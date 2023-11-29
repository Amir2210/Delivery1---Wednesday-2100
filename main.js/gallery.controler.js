"use strict"

function renderImgs() {
  const elImgsSection = document.querySelector(".imges")
  var strHtml = getSquareImgs()
    .map(
      (img) =>
        `
      <img  onclick=" renderMeme(this)" src="images/meme-imgs (square)/${img.id}.jpg" alt="memeImg">
      `
    )
    .join("")
  strHtml += getAspectRatiosImgs()
    .map(
      (img) =>
        `
      <img  onclick=" renderMeme(this)" src="images/meme-imgs (various aspect ratios)/${img.id}.jpg" alt="memeImg">
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
