let map = new Map([
    ["apple", 5],
    ["banana", 2],
    ["orange", 8]
  ]);
  
  map.forEach((value, key) => {
    if (value > 4) {
      console.log(key, value);
    }
  });