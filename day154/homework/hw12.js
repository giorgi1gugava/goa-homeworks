let numbers = [1,2,3,4,5,6,7,8,9];

let map = new Map([
  ["even", []],
  ["odd", []]
]);

numbers.forEach(num => {
  if (num % 2 === 0) {
    map.get("even").push(num);
  } else {
    map.get("odd").push(num);
  }
});

console.log(map);