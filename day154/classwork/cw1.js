let arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

let map = new Map();

arr.forEach(item => {
    if (map.has(item)) {
        map.set(item, map.get(item) + 1);
    } else {
        map.set(item, 1);
    }
});

console.log(map);