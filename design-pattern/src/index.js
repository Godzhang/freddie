class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} eat something`);
  }

  speak() {
    console.log(`My name is ${this.name}, age is ${this.age}`);
  }
}

let p = new Person("zhangqi", 30);
p.eat();
p.speak();

class Student extends Person {
  constructor(name, age, number) {
    super(name, age);
    this.number = number;
  }

  study() {
    console.log(`${this.name} is studying`);
  }
}

let xiaoming = new Student("xiaoming", 2, "A1");
xiaoming.speak();
xiaoming.study();
console.log(xiaoming.number);
