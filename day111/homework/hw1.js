function counterEffect(hitCount) {
    let result = [];
  
    for (let i = 0; i < hitCount.length; i++) {
      let digit = Number(hitCount[i]);
      let innerArray = [];
      for (let j = 0; j <= digit; j++) {
        innerArray.push(j);
      }
      result.push(innerArray);
    }
  
    return result;
  }
  