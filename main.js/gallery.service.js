"use strict"
var gSquareImgID = 1
var gRtionImgID = 1

const squareImgs = [
  {
    id: gSquareImgID++,
    src: "images/meme-imgs (square)/1.jpg",
    keywords: ["funny", "men", "comic"]
  },
  {
    id: gSquareImgID++,
    src: "images/meme-imgs (square)/2.jpg",
    keywords: ["animal"]
  },
  {
    id: gSquareImgID++,
    src: "images/meme-imgs (square)/3.jpg",
    keywords: ["funny", "animal"]
  },
  {
    id: gSquareImgID++,
    src: "images/meme-imgs (square)/4.jpg",
    keywords: ["funny", "comic", "animal"]
  },
  {
    id: gSquareImgID++,
    src: "images/meme-imgs (square)/5.jpg",
    keywords: ["funny", "comic"]
  },
  {
    id: gSquareImgID++,
    src: "images/meme-imgs (square)/6.jpg",
    keywords: ["funny", "comic", "men"]
  },
  {
    id: gSquareImgID++,
    src: "images/meme-imgs (square)/7.jpg",
    keywords: ["funny"]
  },
  {
    id: gSquareImgID++,
    src: "images/meme-imgs (square)/8.jpg",
    keywords: ["funny", "men"]
  },
  {
    id: gSquareImgID++,
    src: "images/meme-imgs (square)/9.jpg",
    keywords: ["funny", "smile", "comic"]
  },
  {
    id: gSquareImgID++,
    src: "images/meme-imgs (square)/10.jpg",
    keywords: ["funny", "smile", "men", "comic"]
  },
  {
    id: gSquareImgID++,
    src: "images/meme-imgs (square)/11.jpg",
    keywords: ["funny", "men", "comic"]
  },
  {
    id: gSquareImgID++,
    src: "images/meme-imgs (square)/12.jpg",
    keywords: ["funny", "men", "comic"]
  },
  {
    id: gSquareImgID++,
    src: "images/meme-imgs (square)/13.jpg",
    keywords: ["men", "smile"]
  },
  {
    id: gSquareImgID++,
    src: "images/meme-imgs (square)/14.jpg",
    keywords: ["men"]
  },
  {
    id: gSquareImgID++,
    src: "images/meme-imgs (square)/15.jpg",
    keywords: ["men"]
  },
  {
    id: gSquareImgID++,
    src: "images/meme-imgs (square)/16.jpg",
    keywords: ["funny", "men", "comic"]
  },
  {
    id: gSquareImgID++,
    src: "images/meme-imgs (square)/17.jpg",
    keywords: ["men", "comic"]
  },
  {
    id: gSquareImgID++,
    src: "images/meme-imgs (square)/18.jpg",
    keywords: ["funny", "comic"]
  }
]

const aspectRatiosImgs = [
  {
    id: gRtionImgID++,
    src: "images/meme-imgs (various aspect ratios)/1.jpg",
    keywords: ["women"]
  },
  {
    id: gRtionImgID++,
    src: "images/meme-imgs (various aspect ratios)/2.jpg",
    keywords: ["funny", "men", "comic"]
  },
  {
    id: gRtionImgID++,
    src: "images/meme-imgs (various aspect ratios)/3.jpg",
    keywords: ["animal"]
  },
  {
    id: gRtionImgID++,
    src: "images/meme-imgs (various aspect ratios)/4.jpg",
    keywords: ["funny", "comic"]
  },
  {
    id: gRtionImgID++,
    src: "images/meme-imgs (various aspect ratios)/5.jpg",
    keywords: ["funny", "comic"]
  },
  {
    id: gRtionImgID++,
    src: "images/meme-imgs (various aspect ratios)/6.jpg",
    keywords: ["funny", "animal"]
  },
  {
    id: gRtionImgID++,
    src: "images/meme-imgs (various aspect ratios)/7.jpg",
    keywords: ["funny", "men"]
  },
  {
    id: gRtionImgID++,
    src: "images/meme-imgs (various aspect ratios)/8.jpg",
    keywords: ["funny", "smile", "comic"]
  },
  {
    id: gRtionImgID++,
    src: "images/meme-imgs (various aspect ratios)/9.jpg",
    keywords: ["funny", "men", "comic"]
  },
  {
    id: gRtionImgID++,
    src: "images/meme-imgs (various aspect ratios)/10.jpg",
    keywords: ["funny", "men", "comic"]
  },
  {
    id: gRtionImgID++,
    src: "images/meme-imgs (various aspect ratios)/11.jpg",
    keywords: ["funny", "comic", "men"]
  },
  {
    id: gRtionImgID++,
    src: "images/meme-imgs (various aspect ratios)/12.jpg",
    keywords: ["funny", "comic", "men"]
  },
  {
    id: gRtionImgID++,
    src: "images/meme-imgs (various aspect ratios)/13.jpg",
    keywords: ["funny", "smile"]
  },
  {
    id: gRtionImgID++,
    src: "images/meme-imgs (various aspect ratios)/14.jpg",
    keywords: ["funny", "men", "comic"]
  },
  {
    id: gRtionImgID++,
    src: "images/meme-imgs (various aspect ratios)/15.jpg",
    keywords: ["funny"]
  },
  {
    id: gRtionImgID++,
    src: "images/meme-imgs (various aspect ratios)/16.jpg",
    keywords: ["funny", "animal"]
  },
  {
    id: gRtionImgID++,
    src: "images/meme-imgs (various aspect ratios)/17.jpg",
    keywords: ["funny", "smile", "men", "comic"]
  },
  {
    id: gRtionImgID++,
    src: "images/meme-imgs (various aspect ratios)/18.jpg",
    keywords: ["funny", "men", "comic"]
  },
  {
    id: gRtionImgID++,
    src: "images/meme-imgs (various aspect ratios)/19.jpg",
    keywords: ["men", "smile"]
  },
  {
    id: gRtionImgID++,
    src: "images/meme-imgs (various aspect ratios)/20.jpg",
    keywords: ["men"]
  },
  {
    id: gRtionImgID++,
    src: "images/meme-imgs (various aspect ratios)/21.jpg",
    keywords: ["men"]
  },
  {
    id: gRtionImgID++,
    src: "images/meme-imgs (various aspect ratios)/22.jpg",
    keywords: ["women", "funny"]
  },
  {
    id: gRtionImgID++,
    src: "images/meme-imgs (various aspect ratios)/23.jpg",
    keywords: ["funny", "men", "comic"]
  },
  {
    id: gRtionImgID++,
    src: "images/meme-imgs (various aspect ratios)/24.jpg",
    keywords: ["men", "comic"]
  },
  {
    id: gRtionImgID++,
    src: "images/meme-imgs (various aspect ratios)/25.jpg",
    keywords: ["funny", "comic"]
  }
]

function getSquareImgs() {
  return squareImgs
}
function getAspectRatiosImgs() {
  return aspectRatiosImgs
}
