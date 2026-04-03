class Calculator{
    constructor(text){
        this.text = text
        this.a = ""
        this.b = ""
        this.op = ""
    }
    click(value){
        if (!isNaN(value)){
            if(this.op ===""){
                this.a += value
                this.text.textContent = this.a
            }else{
                this.b += value
                this.text.textContent = this.b
            }
        }
        if(value === "+" || value == "-" || value === "*"  || value === "/"){

            this.op = value
            this.text.textContent = this.op
        }
        if (value === "="){
            let result
            if(this.op === "+"){
                result = Number(this.a) + Number(this.b)
            }
            if(this.op === "-"){
                result = Number(this.a) - Number(this.b)
            }
            if(this.op === "*"){
                result = Number(this.a) * Number(this.b)
            }
            if(this.op === "/"){
                result = Number(this.a) / Number(this.b)
            }
            this.text.textContent = result
            this.a = result
            this.b = ""
            this.op = ""
        }

    }
}
let calc = new Calculator(document.getElementById("text"));

let buttons = document.querySelectorAll("#buttons button");
buttons.forEach(btn =>{
    btn.onclick = () => {
        calc.click(btn.textContent);
    }
})