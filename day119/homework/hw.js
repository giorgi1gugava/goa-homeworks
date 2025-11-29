let count = 0;

const counter = document.getElementById("counter");
const btnDecrease = document.getElementById("decrease");
const btnReset = document.getElementById("reset");
const btnIncrease = document.getElementById("increase");

function updateColor() {
  if (count > 0) {
    counter.style.color = "green";
  } else if (count < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "white";
  }
}

btnIncrease.addEventListener("click", () => {
  count++;
  counter.textContent = count;
  updateColor();
});

btnDecrease.addEventListener("click", () => {
  count--;
  counter.textContent = count;
  updateColor();
});

btnReset.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
  updateColor();
});


