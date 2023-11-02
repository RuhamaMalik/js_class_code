// Slider
var images = [
  "https://www.tripsavvy.com/thmb/eEymkEZ9Ys9LxYw6yPGgbxCvNT4=/2125x1411/filters:fill(auto,1)/GettyImages-534909771-580f5f4c5f9b58564cc08bf2.jpg",
  "https://tse2.mm.bing.net/th?id=OIP.8ScMoLjYut8Lf9octX3gWgHaE8&pid=Api&P=0&h=220",
  "http://1.bp.blogspot.com/-Ufar9q8Bk1s/VQG6NUfCSUI/AAAAAAAAAnI/IF8hXyNRF-A/s1600/Seoul.jpg",
];

var index = 0;
var sliderImg = document.getElementById("img");
// console.log(sliderImg);

function slideRight() {
  // index += 1;

  // if (index < images.length - 1) {
  //   index += 1;
  //   sliderImg.src = images[index];
  // }

  if (index === images.length - 1) {
    index = 0;
    sliderImg.src = images[index];
  } else {
    index += 1;
    sliderImg.src = images[index];
  }
}

function slideLeft() {
  // index -= 1
  // if(index >0){
  //   index -= 1;
  //   console.log("Left Arrow " + index);
  //   sliderImg.src = images[index];
  // }
  if (index === 0) {
    index = images.length - 1;
    sliderImg.src = images[index];
  } else {
    index -= 1;
    sliderImg.src = images[index];
  }
}
