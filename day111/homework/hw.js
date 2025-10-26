function calculate(string) {
    let num1 = 0;
    let num2 = 0;
    let result = 0;
  
    let words = string.split(" ");
  
    for (let i = 0; i < words.length; i++) {
      if (!isNaN(words[i])) {
        if (num1 === 0) {
          num1 = Number(words[i]);
        } else {
          num2 = Number(words[i]);
        }
      }
    }
  
    if (string.includes("gains")) {
      result = num1 + num2;
    } else if (string.includes("loses")) {
      result = num1 - num2;
    }
  
    return result;
  }
  