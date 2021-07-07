// function a(name: string): number {
//   return name.length
// }
// function b(name: string):number|null {
//   return name.length
// }

// class Animal {
//   aaa(){}
// }
// class Bird extends Animal {
//   chirp(){}
// }
// class Crow extends Bird {
//   caw(){}
// }
// function clone(f:(b:Bird)=> Bird):void {
//   f(new Crow)
// }
// function animalToBird(a:Animal):Bird {
//   a.aaa()
//   return new Bird
// }
// function crowToBird(a:Crow):Bird {
//   a.caw()
//   return new Bird
// }

// clone(animalToBird)
// clone(crowToBird)
// function chirp(bird: Bird):Bird {
//   bird.chirp()
//   return bird;
// }
// function birdToBird(bird: Bird):Bird {
//   bird.chirp()
//   return bird;
// }
// function birdToCrow(bird: Bird):Crow {
//   return new Crow
// }
// function birdToAnimal(bird: Bird):Animal {
//   return new Animal
// }

// function clone(f:(b:Bird)=> Bird):void {}
// // clone(birdToAnimal)

// function clone2(f:(b:Bird)=> Bird):void {
//   let parent = new Bird()
//   let babyBird = f(parent)
//   babyBird.chirp()
// }

// const a:'x' = 'x'
// let b = a

// function x() {
//   let a = null
//   a = 3
//   a = 'b'
//   return a
// }

// let c = {x:3} as const
// let e= [1, {x:2}] as const

// type Options = {
//   baseURL: string;
//   tier?: 'prod'|'dev'
// }
// class API {
//   constructor(private options: Options) {
//   }
// }
// new API({
//   baseURL: 'df',
//   badTier: 'prod'
// } as Options)

// const ops = {
//   baseURL: 'df',
//   badTier: 'prod'
// }
// new API(ops)

// type UserTextEvent = {type: 'textEvent',value:string,target: HTMLInputElement}
// type UserMouseEvent = {type: 'mouseEvent',value: [number,number], target: HTMLElement}

// type UserEvent = UserTextEvent | UserMouseEvent

// function handle(event: UserEvent) {
//   if(event.type === 'textEvent') {
//     let res = event.value
//     let target= event.target
//     return res
//   }
//   let res = event.value
//   let target= event.target
//   return res
// }

// type APIResponse = {
//   user: {
//     userId: string;
//     friendList: {
//       count: number;
//       friends: {
//         firstName: string;
//         lastName: string;
//       }
//     }[]
//   }
// }

// type ResponseKeys = keyof APIResponse['user']

// function get<
//   O extends object,
//   K extends keyof O
// >(o:O,k:K):O[K] {
//   return o[k]
// }

// type Get = {
//   <
//     O extends object,
//     K1 extends keyof O
//   >(o:O,k1:K1):O[K1]
//   <
//     O extends object,
//     K1 extends keyof O,
//     K2 extends keyof O[K1]
//   >(o:O,k1:K1, k2:K2):O[K1][K2]
//   <
//     O extends object,
//     K1 extends keyof O,
//     K2 extends keyof O[K1],
//     K3 extends keyof O[K1][K2]
//   >(o:O,k1:K1, k2:K2, k3:K3):O[K1][K2][K3]
// }

// const get:Get = (obj:any, ...keys:string[]) => {
//   let result = obj
//   keys.forEach(k => result = result[k])
//   return result
// }

// const response:APIResponse = {
//   user: {
//     userId: '123',
//     friendList: [{
//       count: 1,
//       friends: {
//         firstName: 'zhangqi',
//         lastName: 'qi'
//       }
//     }]
//   }
// }
// let res = get(response, 'user', 'friendList', 0)
// const list = response.user.friendList

// type FriendList = APIResponse['user']['friendList']
// type Friend = FriendList[number]['friends']
// function renderList(friendList: FriendList) {}

// renderList(list)

// type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
// type Day = Weekday | 'Sat' | 'Sun'

// type T = keyof Weekday

// let nextDay: Record<Weekday, Day> = {
//   Mon: 'Tue'
// }

// import {AAA} from './Currency'
// let a:AAA = 3
// let b = 'a' + AAA

import {Currency} from './Currency'

let curr:Currency ={
  unit: 'EUR',
  value: 1
}
Currency.DEFAULT = 'JPY'