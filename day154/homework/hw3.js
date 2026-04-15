let map = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3]
  ]);
  
  map.clear();
  
  if (map.size === 0) {
    console.log("ცარიელია");
  } else {
    console.log("არ არის ცარიელი");
  }