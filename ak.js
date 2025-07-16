function toggleMenu(){
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none: "block";
    }

const audio = document.getElementById("audi");
const playPause = document.getElementById("playPause");
const progress = document.getElementById("progress");
playPause.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPause.textContent = "⏸";
  } else {
    audio.pause();
    playPause.textContent = "▶";
  }
});
audio.addEventListener("timeupdate", () => {
  progress.value = audio.currentTime;
  progress.max = audio.duration;
});
progress.addEventListener("input", () => {
  audio.currentTime = progress.value;
});
