/*
! If want to stop the previous sound while clicking a new one.
*/
import birdsName from "./birdsName.js";

let imageContainer = document.querySelector(".birds");
birdsName.forEach((birdName, index) => {
  let imgTag = document.createElement("img");
  imgTag.setAttribute("src", `./assets/images/${birdName}.png`);
  imgTag.setAttribute("alt", `${birdName}`);
  imgTag.setAttribute("title", `${birdName}`);
  imgTag.setAttribute("id", `${birdName}`);
  imageContainer.append(imgTag);
});

let birdImages = document.querySelectorAll("img");

let currentSound = null; // To keep track of the currently playing sound

birdImages.forEach((birdImage, index) => {
  birdImage.onclick = () => {
    // Stop the previous sound if it's playing
    if (currentSound) {
      currentSound.stop();
      currentSound.unload(); // optional: free memory
    }

    let birdSound = birdsName[index];
    currentSound = new Howl({
      src: [`./assets/audio/${birdSound}.mp3`],
      volume: 1,
    });
    currentSound.play();
  };
});

/*
! If don't want to stop the previous sound while clicking a new one.
import birdsName from "./birdsName.js";

let imageContainer = document.querySelector(".birds");
birdsName.forEach((birdName, index) => {
  console.log(birdName, index);
  let imgTag = document.createElement("img");
  imgTag.setAttribute("src", `./assets/images/${birdName}.png`);
  imgTag.setAttribute("alt", `${birdName}`);
  imgTag.setAttribute("title", `${birdName}`);
  imgTag.setAttribute("id", `${birdName}`);
  imageContainer.append(imgTag);
});
let birdImages = document.querySelectorAll("img");

birdImages.forEach((birdImage, index) => {
  console.log(birdImage, index);
  birdImage.onclick = () => {
    let birdSound = birdsName[index];
    console.log(birdSound);
    const sound = new Howl({
      src: [`./assets/audio/${birdSound}.mp3`],
      volume: 1,
    });
    sound.play();
  };
});
*/
