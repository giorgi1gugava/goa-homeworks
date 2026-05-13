const input = document.getElementById("inp");
const button = document.getElementById("add-btn");
const list = document.getElementById("list");
const trash = document.getElementById("img");

button.addEventListener("click",()=> {

        let txt = input.value;

        list.style.display = "flex";

        const newDiv = document.createElement("div");
        newDiv.innerHTML =`<p>${txt}</p><button id="img"><img src="./trash-can_18928845.png" width="20"></button>`;

        newDiv.classList.add("item");
        list.appendChild(newDiv);


        localStorage.setItem("name", txt);
        
       
        input.value = "";
    
});


