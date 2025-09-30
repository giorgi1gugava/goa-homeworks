//შექმენით ფუნქცია average(arr) – მიიღოს რიცხვების სია და დააბრუნოს მათი საშუალო (ჯამი / რაოდენობა).6)შექმენით ფუნქცია რომელსაც გადასცემთ არგუმენტად სიას --> ["გიორგი" , 14 , "საბა" , 90.5 , "ირაკლი" , true]----შენი დავალებაა რომ ამ სიაში მყოფი მესამე ინდექსზე მდგომი ელემენტი შეცვალო --> 10.89 ით----შენი დავალებაა რომ ამ სიაში მყოფი მეხუთე ინდექსზე მდგომი ელემენტი შეცვალო ---> false ით---შენი დავალებაა რომ ამ სიაში მყოფი პირველ ინდექსზე მდგომი ელემენტი შეცვალო ---> "ირაკლი" ით.
// ფუნქცია, რომელიც რიცხვების სიიდან ითვლის საშუალოს
function average(list) {
    let sum = 0;
    let count = 0;
  
    for (let i = 0; i < list.length; i++) {
      sum = sum + list[i];
      count = count + 1;
    }
  
    if (count === 0) {
      return 0;
    }
  
    return sum / count;
  }
  

  function modifyList(list) {
    list[3] = 10.89;      
    list[5] = false;      
    list[1] = "ირაკლი";   
    return list;
  }
  
  
  let myList = ["გიორგი", 14, "საბა", 90.5, "ირაკლი", true];
  
  console.log("Average:", average([14, 90.5])); 
  
  let modifiedList = modifyList(myList);
  console.log(modifiedList);
  
  