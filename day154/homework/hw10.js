let map = new Map([
    ["a", 10],
    ["b", 20],
    ["c", 30]
  ]);
  
  let sum = 0;
  
  map.forEach((value) => {
    sum += value;
  });
  
  let average = sum / map.size;
  
  console.log(average);