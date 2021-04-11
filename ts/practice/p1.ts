class Person {
  private _name: string
  private _age: number
  private _width: number
  private _height: number

  // 方法单一化原则，一个方法只做一件事
  public getName() {
    return this._name
  }

  public setName(val: string) {
    this._name = val
  }

  public getAge() {
    return this._age
  }

  public setAge(val: number) {
    this._age = val
  }

  public getWidth() {
    return this._width
  }

  public setWidth(val: number) {
    this._width = val
  }

  public getHeight() {
    return this._height
  }

  public setHeight(val: number) {
    this._height = val
  }

  public playFootball() {
    console.log('play football')
  }

  public playBasketball() {
    console.log('play basketball')
  }
}

interface IAnimal {
  eat:()=>void
  run:()=>void
  sleep:()=>void
  speak:()=>void
}

class Person2 implements IAnimal {
  public eat() {}
  public run() {}
  public sleep() {}
  public speak() {}
}