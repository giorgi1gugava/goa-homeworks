const input = document.getElementById("inp");
const button = document.getElementById("add-btn");
const list = document.getElementById("list");

let total = 0;
let done = 0;

const counter = document.querySelector("#one-div p");

button.addEventListener("click", () => {

    let txt = input.value;

    if (txt.trim() === "") {
        return
    };

    list.style.display = "flex";

    total++;
    counter.textContent = `${done}/${total}`;

    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = `<img src="/day159/classwork/trash-can_18928845.png" width="20">`;

    const newDiv = document.createElement("div");

    newDiv.innerHTML = `
        <div id="answ-div">
            <div></div>
            <p id="txt">${txt}</p>
        </div>
        <div>
            <button id="img-write">
                <img src="./pages_3884607.png" width="20">
            </button>
        </div>
    `;

    newDiv.classList.add("item");

    list.appendChild(newDiv);
    newDiv.appendChild(trashBtn);

    const circle = newDiv.querySelector("#answ-div div");

    let clicked = false;

    circle.addEventListener("click", () => {
        if (!clicked) {
            clicked = true;
            done++;

            counter.textContent = `${done}/${total}`;
            circle.style.backgroundColor = "green";
        }
    });

    trashBtn.addEventListener("click", () => {

        total--;

        if (clicked) {
            done--;
        }

        counter.textContent = `${done}/${total}`;

        newDiv.remove();
    });

    input.value = "";
});