const btn = document.getElementById("btn");
const input = document.getElementById("Input");
const error = document.getElementById("error");
const colorText = document.getElementById("Text");


function is(color) {
  const test = document.createElement("div");
  test.style.color = color;
  return test.style.color !== "";
}

btn.addEventListener("click", () => {
  const userColor = input.value;

  if (is(userColor)) {
    document.body.style.backgroundColor = userColor;
    colorText.textContent = `Background Color: ${userColor}`;
    error.textContent = "";
  } else {
    error.textContent = "try again!";
  }
});
