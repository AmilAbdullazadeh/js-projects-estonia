const video = document.querySelector(".video");
const toggleBtn = document.querySelector(".toggleButton");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const sliders = document.querySelectorAll(".controls__slider");
const skipBtns = document.querySelectorAll("[data-skip]");

function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
    toggleBtn.innerHTML = "❚ ❚";
  } else {
    video.pause();
    toggleBtn.innerHTML = "►";
  }
}

toggleBtn.addEventListener("click", togglePlay);

document.addEventListener("keydown", (e) => {
  e.code === "Space" && togglePlay;
});

function updateTimer() {
  const { currentTime, duration } = video;
  let calculatePercent = (currentTime / duration) * 100;
  progressBar.style.flexBasis = `${calculatePercent}%`;
}

video.addEventListener("timeupdate", updateTimer);

function skipTime() {
  video.currentTime += Number(this.dataset.skip);
}

skipBtns.forEach((skipBtn) => {
  skipBtn.addEventListener("click", skipTime);
});

let isMouseDown = false;

progress.addEventListener("mousedown", () => changeStatus(true));

progress.addEventListener("mouseup", () => changeStatus(false));

progress.addEventListener("mousemove", (e) => {
  isMouseDown && scrub(e);
});

function changeStatus(propsArgs) {
  isMouseDown = propsArgs;
}

function scrub(e) {
  let clickedTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = clickedTime;
}
