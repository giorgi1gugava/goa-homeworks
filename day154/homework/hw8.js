
let map = new Map([
    ["apple", 5],
    ["banana", 2],
    ["orange", 8]
  ]);
  
  let newMap = new Map();
  
  map.forEach((value, key) => {
    if (value > 4) {
      newMap.set(key, value);
    }
  });
  
  console.log(newMap);