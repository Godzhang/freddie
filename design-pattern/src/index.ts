class Person {
  name;
  age;
  protected weight; // 受保护的属性，只有自己或者子类可以访问
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.weight = 120;
  }

  eat() {
    console.log(`${this.name} eat something`);
  }

  speak() {
    console.log(`My name is ${this.name}, age is ${this.age}`);
  }
}

let p = new Person("zhangqi", 28);
alert(p.weight);
alert(Person.weight);

class Student extends Person {
  number;
  private girlfriend;
  constructor(name, age, number) {
    super(name, age);
    this.number = number;
    this.girlfriend = "jinge";
  }

  study() {
    console.log(`${this.name} is studying`);
  }

  getWeight() {
    alert(`weight is ${this.weight}`);
  }
}

let xiaoming = new Student("xiaoming", 2, "A1");

// console.log(xiaoming.weight);
// console.log(xiaoming.girlfriend);
xiaoming.getWeight();
alert(Student.girlfriend);
