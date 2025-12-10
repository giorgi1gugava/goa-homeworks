const input = document.getElementById("textInput");
  const colorBoxes = document.querySelectorAll(".color-box");

  colorBoxes.forEach(box => {
    box.addEventListener("click", function(event) {
      const selectedColor = event.target.dataset.color;

      input.style.color = selectedColor;
    });
  });