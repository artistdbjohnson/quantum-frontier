(function () {
  const audio = document.getElementById("player");
  const status = document.getElementById("audio-status");
  if (!audio || !status) return;
  audio.addEventListener("error", function () {
    status.textContent = "Audio file is not on this host yet. Wired to /audio/first-water.mp3.";
  });
  audio.addEventListener("loadeddata", function () {
    status.textContent = "Leo · First Water · Chapter One of Ark Survey";
  });
})();
