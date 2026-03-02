let values = [0, "0", "", "false", false, null, undefined, [], {}, NaN, 25];

let truthyValues = [];
let falsyValues = [];

for (let value of values) {
  if (value) {
    truthyValues.push(value); 
  } else {
    falsyValues.push(value);   
  }
}

console.log(truthyValues);
console.log(falsyValues);