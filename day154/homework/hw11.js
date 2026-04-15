let word = "javascript";

let map = new Map();

for (let char of word) {
  if (map.has(char)) {
    map.set(char, map.get(char) + 1);
  } else {
    map.set(char, 1);
  }
}

console.log(map);