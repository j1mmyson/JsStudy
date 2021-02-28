# 자바스크립트: (1)객체

## 객체란?

자바스크립트에서에서 객체는 다양한 데이터를 담을 수 있는 자료형이다.  
`key-value` 쌍을 저장하며 다른 언어에서의 구조체 비슷한 역할을 한다.  
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

```javascript
user['fname']; // "byungwook"
user['last-name'] // "son"
user['age'] // "24"
```

### Const 객체

자바스크립트에서는 `const`로 선언된 객체도 수정할 수 있다.

```javascript
const user = {};
user.name = "byungwook";
user.name = "hello";
```

`const 객체`는 아래와 같이 `user = ~~~`처럼 전체적으로 설정하려고 하면 에러가 발생한다.

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

### 프로퍼티 삭제

`delete` 연산자를 사용하여 객체의 프로퍼티를 삭제할 수 있다.

```javascript
console.log(user);
delete user.name;
console.log(user);

delete user;
console.log(user);
```

### 단축 프로퍼티

아래와 같이 객체의 `key`값과 `value`값이 같을 경우 줄여서 사용할 수 있다.

```javascript
function createUser(name, age) {
    let obj = {
        name: name,
        age: age,
    }
    return obj;
}
```

```javascript
function createUser(name, age) {
    let obj = {
        name,
        age,
    }
    return obj;
}
```

### `for .. in` 반복분

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

