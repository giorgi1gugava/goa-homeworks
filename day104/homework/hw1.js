//
function func(list , neWOne){
    list.push(neWOne);
    console.log(list);
}

function func(list , student){
    list.push(student);
    console.log(list);
}

function func(list){
    return list.pop();
}

function func(product) {
    const soldProduct = product.pop();
    console.log("გაყიდული იყო:", soldProduct);
    
}

function  func(list, newElement) {
    list.unshift(newElement);
    console.log(list);
}


function func(list , city){
    list.unshift(city);
    console.log(list);
}


function func(list){
    list.shift();
    console.log(list);
}

function getLength(list) {
    return "სიაში არის " + list.length + " ელემენტი";
}



function combineLists(list1, list2) {
    return list1.concat(list2);
}


function pushPop(list) {
    list.push("test");   
    list.pop();         
    return list;         
}
function unshiftShift(list) {
    list.unshift("hello");  
    list.shift();          
    return list;           
}
  



function processList(list) {
list.unshift("A");      
list.push("Z");          
list.shift();            
list.pop();              
  
const anotherList = ["X", "Y"];           
const finalList = list.concat(anotherList); 
  
console.log("საბოლოო სიის სიგრძე არის: " + finalList.length + " და საბოლოო სიაა " + finalList);
}
  