let score = prompt("enter score")
let score1 = Number(score)

if (score1 < 50){
    console.log("ჩაიჭერი")
} else if (score1 >= 50 && score <= 69){
    console.log("საშუალო")
} else if (score1 >= 70 && score1 <= 89){
    console.log("კარგი")
} else if (score1 >= 90 && score1 <= 100){
    console.log("ძალიან კარგი")
} else{
    console.log("არასწორი მონაცემი")
}