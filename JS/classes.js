class Animal {
    constructor(name, legCount, speaks) {
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    static myType() {
        console.log("Animal")
    }

    speak() {
        console.log("hi there " + this.speaks);
    }
}

let dog = new Animal("doggie", 4, "bhow bhow");
let cat = new Animal("cat", 4, "meow");

cat.speak()

