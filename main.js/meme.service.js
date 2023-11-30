"use strict"

var gMeme = {
  selectedImgId: 5,
  selectedLineIdx: 0,
  lines: [
    {
      txt: "your text...",
      size: 60,
      color: "white"
    },
    {
      txt: "your text...",
      size: 60,
      color: "white"
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
