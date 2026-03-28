const moodButtons = document.querySelectorAll(".mood-btn");
const songBox = document.getElementById("songBox");

moodButtons.forEach(button => {
  button.addEventListener("click", () => {
    moodButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const selectedMood = button.dataset.mood;
    const moodData = songsByMood[selectedMood];

    if (!moodData || !moodData.songs || moodData.songs.length === 0) {
      songBox.textContent = "No songs found";
      return;
    }

    const randomIndex = Math.floor(Math.random() * moodData.songs.length);
    const randomSong = moodData.songs[randomIndex];

    songBox.innerHTML = `${randomSong.title}<br><span style="font-size: 0.8em;">${randomSong.artist}</span>`;
  });
});