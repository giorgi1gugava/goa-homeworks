//2) დაამატეთ საიტზე ღილაკი როცა ამ ღილაკს დააჭერთ კონსოლში დაიბეჭდოს რომ ღილაკს დაეჭირა და ამასთან ერთად გვერძე მიეწეროს მერამდენე დაჭერა(დაკლიკება მოხდა)

const btn = document.getElementById(`btn`)
let count = 1
function clickFunc(){
    console.log("clicked")
    count ++
}
btn.addEventListener("click-", clickFunc)
