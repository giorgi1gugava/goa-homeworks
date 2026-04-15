class ToDo{
    constructor(){
        this.ul = document.getElementById("output");
        this.btn = document.getElementById("myButton");
        this.input = document.getElementById("myInput");
        this.btn.addEventListener("click", ()=>{
            this.addTask();
        });
        
        this.ul.addEventListener("click", (e) =>{
            this.removeTask(e);
        });
    }


    addTask(){
        if(this.input.value === ""){
            return;
        }

        this.ul.innerHTML +=
        `<li>${this.input.value}
            <button id="delete" class="delete">clear</button>
        </li>`
        this.input.value = ""

    }

    removeTask(e){
        if(e.target.classList.contains("delete")){
            e.target.parentElement.remove();
        }
    }
}

const clas = new ToDo();
        