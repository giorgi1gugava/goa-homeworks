function letterCheck(arr) {
    let [first, second] = arr.map(s => s.toLowerCase());
    return [...second].every(char => first.includes(char));
}

console.log(letterCheck(["ab", "aaa"]));        
console.log(letterCheck(["trances", "nectar"])); 
console.log(letterCheck(["compadres", "DRAPES"])); 
console.log(letterCheck(["parses", "parsecs"]));   
