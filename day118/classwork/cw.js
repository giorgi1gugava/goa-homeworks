// js ში createElement ის დახმარებით შექმენით div, p, button შემდეგ p და button ჩაამატეთ div ში, ამ დივს დაამატებთ dom ში
const body = document.getElementsByName("body");
const tag = document.createElement("paragraph");
const tag1 = document.createElement("button");
const tag2 = document.createElement("div");
tag2.textContent = "item";

body.appendChild(tag);
body.appendChild(tag1);
body.appendChild(tag2);

console.log(tag);
console.log(tag1);
console.log(tag2);
