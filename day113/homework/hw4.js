//შექმენი ობიექტი movie ველებით: name, genre, rating.Object.keys() მეთოდის გამოყენებით გამოიტანე ყველა key ცალ ცალკე ხაზზე (for loop)ასევე Object.values() მეთოდის გამოყენებით გამოიტანე ყველა value ცალ ცალკე ხაზზე (for loop)


let movie = {
    name : "deadpool",
    genre : "action",
    rating : 10
}

for (let i in movie){
    console.log(Object.keys(movie))
    console.log(Object.values(movie))
}
console.log(movie)