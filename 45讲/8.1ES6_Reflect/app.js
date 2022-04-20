// reflect
const user = {
  name: '米斯特吴',
  password: 'password123'
};
// 追加属性
// user.age = 32;
// Object.defineProperty(user, 'age', { value: 32 });
Reflect.defineProperty(user, 'age', { value: 33 });

// 删除属性
Reflect.deleteProperty(user, 'name');

// 判断对象属性
// console.log('name' in user);
// console.log(Reflect.has(user, 'password'));

// Reflect.apply
// function roomArea(length, width) {
//   return `${length * width}, ${this.units}`;
// }

// let value = {
//   units: '米'
// };

// let args = [20, 5];

// let calculatedArea = Reflect.apply(roomArea, value, args);
// console.log(calculatedArea);

// Reflect.construct
class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get description() {
    return `员工的名字是: ${this.name}, 年龄是: ${this.age}`;
  }
}

let args = ['米斯特吴', 31];

class NewEmployee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get description() {
    return `员工的名字是: ${this.name}, 年龄是: ${this.age} - newEmployee`;
  }
}

// let employee = new Employee('米斯特吴', 32);

// let employee = Reflect.construct(Employee, args);

let newEmployee = Reflect.construct(Employee, args, NewEmployee);

// console.log(newEmployee.description);

// Reflect.get
// console.log(
//   Reflect.get(newEmployee, 'description', { name: '米修在线', age: 2 })
// );

// Reflect.ownKeys
console.log(Reflect.ownKeys(newEmployee));
