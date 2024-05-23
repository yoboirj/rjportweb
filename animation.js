document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");
  const audio = document.getElementById("myAudio");
  const bgImg = document.querySelector(".img-sec-anim img");

  body.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      bgImg.style.animationPlayState = "running";
      bgImg.classList.add("rotate-in");
    } else {
      audio.pause();
      bgImg.style.animationPlayState = "paused";
      bgImg.classList.remove("rotate-in");
    }
  });

  audio.addEventListener("play", function () {
    bgImg.style.animationPlayState = "running";
  });

  audio.addEventListener("pause", function () {
    bgImg.style.animationPlayState = "paused";
  });

  audio.addEventListener("ended", function () {
    bgImg.style.animationPlayState = "paused";
  });
});
