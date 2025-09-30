//შექმენი ფუნქცია რომელსაც არგუმენტად გადაეცემა სია,შენი დავალებაა რომ ამ სიიდან გამოიტანო თითეული ელემენტი ცალ ცალკე,გამოიყენე for loop/while loop
let list = ["გიორგი", 14, "საბა"];

function elements(arr) {
    let i = 0;
    while (i < arr.length) {
      console.log(arr[i]);
      i = i + 1;
    }
  }
  
  elements(list);
    