"use strict"

function renderImgs() {
  const filterInput = document.getElementById("imageFilterInput")

  // Get all images
  const allImages = [...getSquareImgs()]

  renderGallery(allImages)

  filterInput.addEventListener("input", filterImages)
}

function filterImagesByKeyword(keyword) {
  const allImages = [...getSquareImgs()]

  const filteredImages = allImages.filter((img) =>
    img.keywords.map((kw) => kw.toLowerCase()).includes(keyword.toLowerCase())
  )

  renderGallery(filteredImages)
}

function renderGallery(images) {
  const elImgsSection = document.querySelector(".imges")
  const strHtml = images
    .map(
      (img) =>
        `
            <div class="image-container">
                <img data-id=${img.id} onclick="renderMeme(this)" src="${img.src}" alt="memeImg">
            </div>
            `
    )
    .join("")

  elImgsSection.innerHTML = strHtml
}

function filterImages() {
  const filterInput = document.getElementById("imageFilterInput")
  const filterValue = filterInput.value.toLowerCase()

  const allImages = [...getSquareImgs()]

  const filteredImages = allImages.filter((img) => {
    const keywords = img.keywords.map((keyword) => keyword.toLowerCase())
    return keywords.some((keyword) => keyword.includes(filterValue))
  })

  renderGallery(filteredImages)
}

function clearFilter() {
  const filterInput = document.getElementById("imageFilterInput")
  filterInput.value = ""
  renderImgs()
}

function goGallery() {
  const elSectionImg = document.querySelector(".gallery .imges")
  elSectionImg.classList.remove("hidden")

  const elGallerySearchBox = document.querySelector(".gallery-nav .search-box")
  elGallerySearchBox.classList.remove("hidden")

  const elGalleryFilterBox = document.querySelector(".gallery-nav .filter-box")
  elGalleryFilterBox.classList.remove("hidden")

  const elGallerynavRow2 = document.querySelector(".gallery-nav .nav-row2")
  elGallerynavRow2.classList.remove("hidden")
  elGallerynavRow2.style.display = "block"

  const elMemeController = document.querySelector(".meme-controller")
  elMemeController.classList.remove("flex", "space-around")
  elMemeController.classList.add("hidden")
  renderImgs()
}
