"use strict"

var gMeme = {
  selectedImgId: 5,
  selectedLineIdx: 0,
  lines: [
    {
      txt: "your text...",
      size: 20,
      color: "red"
    }
  ]
}

var gKeywordSearchCountMap = {
  funny: 12,
  cat: 16,
  baby: 2
}

function getMeme() {
  return gMeme
}

function setLineTxt() {
  gMeme.lines[0].txt = getDrawText()
}

// function setSelectedImgId(){
//   gMeme.selectedImgId
// }
