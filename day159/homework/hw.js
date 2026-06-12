const input = document.getElementById("inp");
const button = document.getElementById("add-btn");
const list = document.getElementById("list");
const trash = document.getElementById("img");

button.addEventListener("click",()=> {
        
        let txt = input.value;

        list.style.display = "flex";
        
        const trashBtn = document.createElement("button");
        trashBtn.innerHTML = `<img src="/day159/classwork/trash-can_18928845.png" width="20">`;



        const newDiv = document.createElement("div");
        newDiv.innerHTML =`<div id="answ-div" ><div></div><p id="txt">${txt}</p></div><div></button><button id="img-write"><img src="./pages_3884607.png" width="20"></button></div>`;
        //
        

        newDiv.classList.add("item");
        

       
        
        
        list.appendChild(newDiv);
        newDiv.appendChild(trashBtn);


        localStorage.setItem("name", txt);

        trashBtn.addEventListener("click", ()=>{
                newDiv.remove();
        })
        
       
        input.value = "";
    
});

