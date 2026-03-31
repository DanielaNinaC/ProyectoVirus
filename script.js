const introScreen = document.getElementById("introScreen");
const startPrankBtn = document.getElementById("startPrank");
const surpriseText = document.getElementById("surpriseText");
const mainCard = document.getElementById("mainCard");
const openEnvelopeBtn = document.getElementById("openEnvelope");
const letter = document.getElementById("letter");
const loveBtn = document.getElementById("loveBtn");
const loveMessage = document.getElementById("loveMessage");
const heartRainBtn = document.getElementById("heartRain");

const reasons = [
  "Porque tu abrazo es mi lugar favorito.",
  "Porque eres tierno, divertido y auténtico.",
  "Porque contigo quiero todos mis futuros.",
  "Porque tus ojitos me reinician el corazón.",
  "Porque eres pff pff.",
  "Porque cada día te esfuerzas por hacerme feliz.",
  "Porque estamos loquitos.",
  "Porque conectamos de una manera única y especial.",
  "Porque crecemos juntos y nos apoyamos mutuamente.",
  "Porque eres mi enojoncito favorito.(ya no lo seas más)",
];

startPrankBtn.addEventListener("click", () => {
  const revealDelayMs = 180;
  const introHideMs = 900;

  startPrankBtn.disabled = true;
  introScreen.classList.add("panic");

  setTimeout(() => {
    introScreen.classList.add("fade-out");
    mainCard.classList.remove("hidden-main");
    mainCard.setAttribute("aria-hidden", "false");

    surpriseText.classList.remove("hidden");
    surpriseText.classList.add("show-on-card");
    runHeartRain(30, 85, 2.6, 4.2, 24, 42);

    setTimeout(() => {
      surpriseText.classList.add("hidden");
      surpriseText.classList.remove("show-on-card");
    }, 2600);
  }, revealDelayMs);

  setTimeout(() => {
    introScreen.classList.add("hidden");
  }, introHideMs);
});

openEnvelopeBtn.addEventListener("click", () => {
  const isOpen = openEnvelopeBtn.classList.toggle("open");
  letter.classList.toggle("hidden", !isOpen);
  openEnvelopeBtn.setAttribute("aria-expanded", String(isOpen));
});

loveBtn.addEventListener("click", () => {
  const randomReason = reasons[Math.floor(Math.random() * reasons.length)];
  loveMessage.textContent = randomReason;
});

heartRainBtn.addEventListener("click", () => {
  runHeartRain(28, 90, 2.4, 3.8, 22, 40);
});

function runHeartRain(
  total,
  delay,
  minDuration = 2,
  maxDuration = 4,
  minSize = 16,
  maxSize = 32
) {
  for (let i = 0; i < total; i += 1) {
    setTimeout(() => {
      spawnHeart(minDuration, maxDuration, minSize, maxSize);
    }, i * delay);
  }
}

function spawnHeart(minDuration = 2, maxDuration = 4, minSize = 16, maxSize = 32) {
  const heart = document.createElement("span");
  const durationSec = minDuration + Math.random() * (maxDuration - minDuration);

  heart.className = "heart";
  heart.textContent = Math.random() > 0.25 ? "❤" : "✿";
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${durationSec}s`;
  heart.style.fontSize = `${minSize + Math.random() * (maxSize - minSize)}px`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, durationSec * 1000 + 300);
}
