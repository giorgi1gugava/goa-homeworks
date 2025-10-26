function mostFrequentItemCount(array) {
    if (array.length === 0) return 0;
  
    let maxCount = 0;
  
    for (let i = 0; i < array.length; i++) {
      let count = 0;
      for (let j = 0; j < array.length; j++) {
        if (array[i] === array[j]) {
          count++;
        }
      }
      if (count > maxCount) {
        maxCount = count;
      }
    }
  
    return maxCount;
  }