import birdsName from "./birdsName.js";

let imageContainer = document.querySelector(".birds");
birdsName.forEach((birdName, index) => {
  // console.log(birdName, index);
  let imgTag = document.createElement("img");
  imgTag.setAttribute("src", `./assets/images/${birdName}.png`);
  imgTag.setAttribute("alt", `${birdName}`);
  imgTag.setAttribute("title", `${birdName}`);
  imgTag.setAttribute("id", `${birdName}`);
  imageContainer.append(imgTag);
});
let birdImages = document.querySelectorAll("img");

birdImages.forEach((birdImage, index) => {
  // console.log(birdImage, index);
  birdImage.onclick = () => {
    let birdSound = birdsName[index];
    // console.log(birdSound);
    const sound = new Howl({
      src: [`./assets/audio/${birdSound}.mp3`],
      volume: 1,
    });
    sound.play();
  };
});
