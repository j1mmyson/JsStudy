# [Js]자바스크립트: (2)함수

## 함수 선언

### 함수 선언문

가장 일반적인 함수 선언 방식입니다. 함수 선언문은 아래와 같이 작성할 수 있습니다.

``` javascript
function hello(){
    console.log("hello world!");
}

function printInput(input){
    console.log(input);
    return input;
}
```

함수 선언문으로 정의된 함수는 아래와 같이 호출할 수 있습니다.  
반환값을 갖는 함수의 경우 함수의 반환값을 변수에 저장할 수 있습니다.

```javascript
hello();
printInput("hello world!");

let result = printInput("hello world!");
```

### 함수 표현식

함수 선언문 말고 함수 표현식을 사용해서도 함수를 선언할 수 있습니다.  
함수 표현식은 아래와 같이 작성할 수 있습니다. 

```javascript
let sayHello = function(){
    console.log("Hello!");
};
```

> 함수 표현식의 경우 `let variable = ~~~;`의 형태를 띄고있기 때문에 끝에 세미콜론`;`이 들어가게됩니다.  
> 자바스크립트에서 `if {}`, `for{}`, `function f{}`과 같이 중괄호로 만들어진 블록에서는 끝에 세미콜론`;`을 붙이지 않아도 됩니다.

### 화살표 함수

위에서 설명한 두 방법 외에 더 간결하고 트렌디해보이는 방법으로도 함수를 선언할 수 있습니다.  
화살표 함수를 사용하는 것인데 화살표 함수는 아래와 같이 나타낼 수 있습니다.

```javascript
// let func = (args1, args2, ...) => expression;
let printInput = (input) => console.log(input);

// let multipleLine = (args, args2, ...) => {
// 		expression;
//};
let add = (a, b) =>{
    console.log(a+b);
    return a+b;
};
```

### 함수 표현식 vs 함수 선언문

함수 표현식으로 선언한 함수의 경우에는 함수 표현식이 있는 행까지 스크립트가 실행되어야 해당 함수를 사용할 수 있습니다. 아래와 같이 함수 표현식까지 도달하지 못한 상태에서 해당 함수를 호출하려고 하면 에러가 발생하는 것을 확인할 수 있다.

```javascript
hello(); // error!

let hello = function(){
    console.log("hello world!");
};

hello(); // 정상 작동.
```

반대로 함수 선언문을 통해 함수를 선언해주면 선언문까지 도달하지 않은 상태에서도 함수를 호출할 수 있습니다. 그 이유는 자바스크립트에서는 스크립트를 실행하기 전에 전역에 선언된 함수 선언문을 찾고 미리 해당 함수를 생성해 놓기 때문입니다. 그래서 함수 선언식으로 함수를 선언해주면 언제 어디에서든 해당 함수에 접근을 할 수 있는 것이죠.

## 매개변수

### 원시 타입 인수

함수에 전달하려는 매개변수의 타입이 원시 타입 변수인 경우 `Call By Value`로 동작합니다.  
`call by value`는 `깊은복사`로써 인자의 값만 복사하는 것 입니다.  

```javascript
function plus(num){
    num += 1;
    return num;
}

let n = 0;
let result = plus(n);

console.log(result); // 1
console.log(n); // 0
```

### 객체형 인수

객체형 인수가 함수의 인자로 전달되면 `Call By Reference`로 동작합니다.   
`call by reference`는 `call by value`와 달리 얕은복사로 값을 전달하여 함수 내에서 매개변수의 값을 변경했을 때 객체형의 인수값도 같이 변경이 됩니다. 

```javascript
function setName(obj){
    obj.name = "byungwook";
}
const obj = {
    name: 'son',
};
console.log(obj.name); // son
setName(obj);
console.log(obj.name); // byungwook
```

## Function property

### function.length

length 프로퍼티는 함수 정의 시 작성된 매개변수의 갯수를 나타냅니다.  

```javascript
function foo(){}
console.log(foo.length); // 0

function bar(x){
    return x;
}
console.log(bar.length); // 1
```

### function.name

name 프로퍼티는 함수명을 값으로 갖습니다.  
익명함수의 경우에는 빈문자열을 값으로 갖습니다.

```javascript
const f = function hello(){};
console.log(f.name); // hello

const anonymous = function(){};
console.log(anonymous.name); // ''
```

