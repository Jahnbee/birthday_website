const heart = document.getElementById("heart");
let taps = 0;

if (heart) {
  heart.addEventListener("click", () => {
    taps++;
    if (taps >= 5) {
      heart.classList.add("burst");
      setTimeout(() => {
        window.location.href = "quiz.html";
      }, 500);
    } else {
      heart.style.transform = `scale(${1 + taps * 0.05})`;
    }
  });
}
