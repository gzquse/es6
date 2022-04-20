// Symbol(唯一)
// let sym1 = Symbol();
// console.log(Symbol() === Symbol());  //false

// 2.类型修饰
// let sym2 = Symbol('dept');
// let sym3 = Symbol('dept');

// console.log(sym2 === sym3);   // false

// console.log(sym2);

// 3.类型转换
// console.log(sym2.toString());
// console.log(String(sym2));
// console.log(Boolean(sym2));

// 4.对象属性声明方式
// let sym = Symbol();

// 写法1
// let a = {};
// a[sym] = 'a';
// console.log(a[sym]);

// 写法2
// let b = {
//   [sym]: 'b'
// };
// console.log(b[sym]);

// 写法3
// let c = {};
// Object.defineProperty(c, sym, { value: 'c' });

// console.log(Object.getOwnPropertySymbols);

// 5.报错方式
// alert(sym2); // error
// alert(sym2.toString());

// let id = new Symbol('id'); // 报错 不能使用new

// 6.值共享
// let s1 = Symbol.for('share');
// let s2 = Symbol.for('share');
// console.log(s1 === s2); // true

// 7.Symbol.for 和 Symbol()的区别
// let s1 = Symbol.for('share');
// let s3 = Symbol.for('share');
// console.log(Symbol.keyFor(s1));
// console.log(s1 === s3);

// let s2 = Symbol('share');
// let s4 = Symbol('share');
// console.log(Symbol.keyFor(s2));
// console.log(s2 === s4);

// Symbol.hasinstance
// aObj instanceof bClass;
// bClass[Symbol.hasInstance](aObj);

// class Student {}

// console.log([] instanceof Student); // false

// class Student {
//   static [Symbol.hasInstance](obj) {
//     return Array.isArray(obj);
//   }
// }

// console.log([] instanceof Student); // true

// Symbol.iterator
// 8.遍历 数组天生自带Symbol.iterator
// let numbers = [10, 20, 30];
// for (const num of numbers) {
//   console.log(num);
// }

// let numsSym = numbers[Symbol.iterator]();
// console.log(numsSym.next());
// console.log(numsSym.next());
// console.log(numsSym.next());
// console.log(numsSym.next());

// let unit;
// while ((unit = numsSym.next())) {
//   if (unit.done) {
//     break;
//   }
//   let numSym = unit.value;
//   console.log(numSym);
// }
