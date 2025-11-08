//შექმენით ობიექტი ,სადაც გექნებათ თავიდან 3 property(თქვენ რაზეც გინდათ) , ამის შემდეგ ამ ობიექტში დაამატეთ კიდევ 2 property ,(დააკონსოლლოგეთ ობიექტი რომ ნახოთ ჩაემატა თუ არა) ,ამის შემდეგ ამოშალეთ ობიექტიდან თავიდან თქვენს მოერ შექმნილი 3 property და დატოვეთ მხოლოდ ჩამატებულები, დააკონსოლლოგეთ ობიექტი რომ ნახოთ შედეგი ამოიშალა თუ არა 


let about = {
    name : "gio",
    age : 17,
    loc : "tbilisi"
}

about.saurname = "gugava"
about.weight = 100

delete about.name
delete about.age
delete about.loc

console.log(about)