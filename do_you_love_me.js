const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container.yes");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");
const surat = document.querySelector(".surat");

const playBtn = document.getElementById("playMusic");
const backsound = document.getElementById("backsound");

let isPlaying = false;

playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    backsound.play();
    playBtn.textContent = "Pause Music";
    isPlaying = true;
  } else {
    backsound.pause();
    playBtn.textContent = "Play Music";
    isPlaying = false;
  }
});
// surat.style.display = "none";
// /change the postion of no button
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// yes button functionality

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  surat.classList.add("show");
  

});
