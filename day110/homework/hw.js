function validParentheses(str) {
    let bal = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") {
        bal++;
      } else if (str[i] === ")") {
        bal--;
      }
      if (bal < 0) {
        return false;
      }
    }
    return bal === 0;
  }
  