# [Js] 자바스크립트: (4)프로토 타입과 this

## 프로토타입 이란?

자바스크립트의 모든 객체는 프로토타입을 갖습니다. 프로토타입이란 객체의 부모 역할을 담당하는 객체로 해당 객체에 존재하지 않는 프로퍼티에 접근하려고 할 때, 자바스크립트는 객체의 프로토타입 객체에서 그 프로퍼티를 찾으려 시도합니다. 나한테 존재하지 않은 프로퍼티를 프로토타입(부모) 객체에서 상속받았다고 생각하면 편합니다. 

아래 예시코드를 들어보겠습니다. 자신의 이름을 출력하는 함수 `sayHello`를 가진 객체 `person`이 있고, `sayHello`를  갖지 않는 객체 `student`의 프로토타입을 `person`으로 해주었습니다. 맨 마지막 줄에서 `student`가 갖고있지 않은 프로퍼티 `sayHello`를 호출했고 자바스크립트는 `student`의 프로토타입인 `person`에서 `sayHello`를 찾게됩니다.

```javascript
let person = {
    sayHello: function(){
        console.log(this.name);
    },
    name: "noname",
}

let student = {
    name: "byungwook",
    age: 24,
    grade: "A",
}

student.__proto__ = person;

student.sayHello() // "byungwook"
```

> 모든 객체는 [[Prototype]]을 갖습니다.  
> 유일하게 함수 객체의 경우에만 `prototype`프로퍼티를 갖습니다. 

```javascript
function sayHello(){
    
}
console.log(sayHello.prototype.constructor) // sayHello
```



## constructor 프로퍼티

모든 프로토타입 객체는 `constructor`프로퍼티를 갖습니다. `constructor`프로퍼티는 자기 자신을 생성한 객체를 가리킵니다. 

## 프로토타입 변경

프로토타입 객체는 다른 객체로 변경할 수 있습니다. 이 때 아래와 같은 과정을 거치게 됩니다.  

- 프로토타입 객체 변경 시점 이전에 생성된 객체
  : 기존 프로토타입 객체를 [[Prototype]]에 바인딩 합니다.
- 프로토타입 객체 변경 시점 이후에 생성된 객체
  : 변경된 프로토타입 객체를 [[Prototype]]에 바인딩 합니다.

```javascript
function Person(name){
    this.name = name;
}

const foo = new Person('son');

Person.prototype = {gender: 'male'};

const bar = new Person('byungwook');

console.log(foo.gender); // undefined
console.log(bar.gender); // 'male'

console.log(foo.constructor); // Person(name)
console.log(bar.constructor); // Object()
```

## this

`this`는 프로토타입에 영향을 받지 않습니다.   
`this`는 어디에서 호출했든 상관없이 `.`앞에 있는 객체를 가리킵니다.  
아래 코드를 통해 예시를 들어봅시다.

```javascript
let hamster = {
    stomach: ['banana', 'apple'],
    eat(food){
        this.stomach.push(food);
    }
};

let ham1 = {
    __proto__: hamster,
    stomach: [],
};

let ham2 = {
    __proto__: hamster,
    stomach: [],
};

ham1.eat("orange");
ham2.eat("grape");

console.log(ham1.stomach);
console.log(ham2.stomach);
```

`this`가 프로토타입에 영향을 받았다면 마지막 두 출력문에서 모두 `['banana', 'apple', 'orange', 'grape']`가 나왔어야 합니다. `ham1.eat`에서 `eat`함수안의 `this`는 `.eat` 앞의 `ham1`을 참조하게 됩니다.
