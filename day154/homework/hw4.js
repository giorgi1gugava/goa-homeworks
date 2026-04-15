let map = new Map([
    ["x", 10],
    ["y", 20],
    ["z", 30]
  ]);
  
  for (let [key, value] of map) {
    console.log(key);
  }

  map.forEach((value, key) => {
    console.log(key);
  });

  for (let [key, value] of map) {
    console.log(value);
  }

  map.forEach((value) => {
    console.log(value);
  });