//შექმენი ფუნქცია რომელსაც გადაეცემა სტრინგები და ინტეჯერები,შენი დავალებაა რომ თუ სიაში მყოფი რომელიმე ელემენტი არის სტრინგ ტიპის,ასეთი ელემენტი ჩაანაცვლო true - ით


function replaceStringsWithTrue(arr) {


    for (let i = 0; i < arr.length; i +=1) {
      if (typeof arr[i] === 'string') {
        arr[i] = true;
      }
    }
    return arr;
  }
  
  const input = [1, 'hello', 3, 'world', 5];


  const result = replaceStringsWithTrue(input);

  console.log(result); 
  