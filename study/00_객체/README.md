# 자바스크립트: (1)객체

## 객체란?

자바스크립트에서에서 객체는 다양한 데이터를 담을 수 있는 자료형이다.  
`key-value` 쌍을 저장하는 형태이며 다른 언어에서의 구조체 혹은 딕셔너리 비슷한 동작을 하는 듯 싶다.   
프로퍼티와 메서드로 구성되어 있다.   

- 프로퍼티(Property): 객체의 상태를 나타내는 값(Data)
- 메서드(Method): 프로퍼티를 참조할 수 있는 함수

## 객체 생성

객체는 `new Object()`혹은 중괄호`{}`를 사용하여 선언할 수 있다.  

```javascript
let user = new Object();
```

```javascript
let user = {
    // Key: Value,
    name: "byungwook",
    age: 24,
    hello: function(){
        alert("Hello" + this.name);
    },
};
```

객체를 선언하고 `typeof`로 선언한 객체의 타입을 확인해보면 타입이 `object`인 것을 확인할 수 있다.

```javascript
var obj = {};
var obj2 = new Object();

console.log(typeof obj); // object
console.log(typeof obj2); // object
```



## 프로퍼티 접근

```javascript
let user = {
    'fname': "byungwook",
    'last-name': "son",
    age: 24,
    1: 10,
}
```

> 속성값에 문자형이나 심볼형에 속하지 않은 값이 들어가면 자동으로 문자열로 변환됩니다.  
> 따라서 키 값 `1` 은 자동으로 문자열 `"1"`로 변환됩니다. 

### 점 표기법

객체의 속성과 메소드에는 **점 표기법**을 통해 접근할 수 있다.

```javascript
user.fname; // "byungwook"
user.last-name; // `-`가 javascript의 예약어라 SyntaxError 발생.
user.age; // 24
```

### 대괄호 표기법

**대괄호 표기법**을 사용하여 `예약어`를 포함하고 있는 속성에 접근할 수 있다.  
예약어를 포함하여 띄어쓰기등 키값에 어떤 문자열이 들어가던 동작한다. 단, 대괄호 안의 키값은 항상 따옴표로 감싸주어야 한다("", '' 둘다 사용 가능하다).  
**대괄호 표기법**이 **점 표기법**보다 표현할 수 있는 범위가 훨씬 넓다. 근데 이게 좋은건지는 잘 모르겠다. `key`값이 길고 복잡하면 불편할거같아서 나라면 그냥 점 표기법으로 `key`값을 `CamelCase`로 나타내지 않을까 싶다.

```javascript
user['first name']; // "byungwook"
user['last-name'] // "son"

let key = "age";
user[key] // "24"

```

### 프로퍼티 삭제

`delete` 연산자를 사용하여 객체의 프로퍼티를 삭제할 수 있다.

```javascript
console.log(user);
delete user.name;
console.log(user);

delete user;
console.log(user);
```



## Const 객체

자바스크립트에서는 `const`로 선언된 객체도 수정할 수 있다.  
처음엔 이게 뭔 소린가 싶었다.. `const`는 상수를 의미하는데 **const 객체의 프로퍼티를 생성, 수정, 삭제가 가능하다**니..?  
더 알아보니 `const` 객체의 프로퍼티는 보호받지 못하지만 객체에 대한 참조를 변경하지 못한다고 한다 (재할당 no!). 또 `const`로 객체를 생성하고 프로퍼티값에 변화를 주어도 객체의 주소값은 변하지 않아 객체를 생성할 때는 `const`로 생성하는 것이 좋다고 한다.

```javascript
const user = {};
user.name = "byungwook";
user.name = "hello";
```

`const 객체`는 아래와 같이 `user = ~~~`처럼 재할당을 시도하면 에러가 발생한다.

```javascript
const user = {};
user = {
    name: "byungwook",
    age: 24,
};
```

```
Uncaught TypeError: Assign to constant variable.
```



## 단축 프로퍼티

아래와 같이 객체의 `key`값과 `value`값이 같을 경우 줄여서 사용할 수 있다.

```javascript
function createUser(name, age) {
    let obj = {
        name: name,
        age: age,
    };
    return obj;
}
```

```javascript
function createUser(name, age) {
    let obj = {
        name,
        age,
    };
    return obj;
}
```

## `in` 연산자

Javascript에서는 존재하지 않는 프로퍼티에 접근하면 `undefined`를 반환해주어 프로퍼티의 존재 여부를 알 수 있다.  
그 외에도 `in`연산자를 사용하여 존재 여부를 알 수 있다.  

```javascript
const user = {
    name: "byungwook",
    age: 24,
};

console.log("name" in user);
```



## `for .. in` 반복문

`for .. in`반복분으로 객체의 모든 키값을 조회할 수 있다.

```javascript
let user = {
    name: "byungwook",
    age: 24,
    gender: "male",
};

for (k in user) {
    console.log(k); // name, age, gender
    console.log(user[k]); // "byungwook", 24, "male"
}

```
