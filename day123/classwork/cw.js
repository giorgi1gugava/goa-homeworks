function Student(name, date) {
    this.name = name;
    this.date = date;

    this.sum = function() {
        console.log("name: " + name);
        console.log("date: " + date);
    }
}

let person = new Student("Gio", "08..12.25");
person.sum();
