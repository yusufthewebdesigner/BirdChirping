import sounds from "./sounds.js";

let birds = document.querySelectorAll("img");

birds.forEach((bird, index) => {
  //   console.log(index);
  bird.onclick = () => {
    // console.log(`${index} no bird`);

    let birdSound = sounds[index];
    const sound = new Howl({
      src: [`${birdSound}`],
      volume: 1,
    });
    sound.play();
  };
});
