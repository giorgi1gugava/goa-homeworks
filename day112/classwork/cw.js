
function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function sumSaving(pairs) {
    return pairs.reduce((total, [a, b]) => total + (a * b - (a * b) / gcd(a, b)), 0);
}
