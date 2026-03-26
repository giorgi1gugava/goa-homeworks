// დავალება არ გვქონია

// ვქმნით კლასს (template-ს)
class animal {

    // constructor მუშაობს როცა ვქმნით ახალ ობიექტს (new-ის დროს)
    constructor(name, type) {

        // this ნიშნავს ახლად შექმნილ ობიექტს
        // name-ს ვინახავთ ობიექტში
        this.name = name

        // type-ს ვინახავთ ობიექტში
        this.type = type
    }
}

// აქ ვქმნით ახალ ობიექტს ამ კლასის მიხედვით
// "bobi" გადაეცემა name-ს
// "avchalka" გადაეცემა type-ს
const dog = new animal("bobi", "avchalka")

// ვბეჭდავთ შედეგს კონსოლში
console.log(dog)

// შედეგი იქნება:
// animal { name: "bobi", type: "avchalka" }