// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const button = document.getElementById("SubmitBtn");

// Modal Elements
const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close-btn");

// 1. Click Envelope to show Letter
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    document.querySelector(".letter-window").classList.add("open");
  }, 50);

  // Ensure the final button is hidden initially
  button.style.display = "none";
});

// 2. Logic to make YES btn grow when NO is clicked
let yesScale = 1;

yesBtn.style.position = "relative";
yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.3s ease";

noBtn.addEventListener("click", () => {
  yesScale += 0.5; // Changed from 2 to 0.5 so it grows more smoothly

  if (yesBtn.style.position !== "fixed") {
    yesBtn.style.position = "fixed";
    yesBtn.style.top = "50%";
    yesBtn.style.left = "50%";
  }
  yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
});

// 3. YES is clicked - Show the "Submit" button
yesBtn.addEventListener("click", () => {
  title.textContent = "Happy Valentines Day!!!!!!!";
  catImg.src = "cat_dance.gif";
  document.querySelector(".letter-window").classList.add("final");

  buttons.style.display = "none";
  finalText.style.display = "block";
  button.style.display = "block"; // This shows the "Ấn ở đây nè" button
});

// 4. Modal Logic (Showing the image window)
button.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close modal when X is clicked
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal if user clicks outside the content box
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
