"use strict"

var gMeme = {
  selectedImgId: 5,
  selectedLineIdx: 0,
  lines: [
    {
      txt: "your first text...",
      size: 60,
      color: "white",
      pos: {
        x: 350,
        y: 50
      }
    },
    {
      txt: "your second text...",
      size: 60,
      color: "white",
      pos: {
        x: 350,
        y: 500
      }
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
