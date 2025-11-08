function makeConsecutive(arr) {
    if (arr.length <= 1) return 0; 
    
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    return (max - min + 1) - arr.length;
}

console.log(makeConsecutive([4, 8, 6])); 
console.log(makeConsecutive([-1, -5]));  
console.log(makeConsecutive([1]));       
console.log(makeConsecutive([]));        
