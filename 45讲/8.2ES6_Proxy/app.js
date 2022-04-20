let employee = {
  name: '米斯特吴',
  age: 32,
  salary: 1000
};

// let handlerGet = {
//   get: function(target, property) {
//     return property in target ? target[property] : '没有该属性';
//   }
// };

// let proxyGet = new Proxy(employee, handlerGet);
// console.log(proxyGet.name);

let handlerSet = {
  set: function(target, property, value) {
    if (typeof value === 'number' || !isNaN(value)) {
      Reflect.set(target, property, value);
    }
  }
};

let proxySet = new Proxy(employee, handlerSet);
// proxySet.salary = 'hello';
proxySet.salary = 5000;
console.log(proxySet.salary);

let handlerHas = {
  has: function(target, property) {
    return property in target;
  }
};

let proxyHas = new Proxy(employee, handlerHas);
console.log('age' in proxyHas ? 'age: Yes' : 'age:No');
