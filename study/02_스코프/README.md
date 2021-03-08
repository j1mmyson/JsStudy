# [Js]자바스크립트: (3)스코프

## 스코프란?

**스코프**란 말 그대로 어떤 객체의 유효범위를 의미합니다. 혹은 어떤 함수가 어떤 변수를 참조할 때 그 변수를 어떻게 찾는지, 참조하려는 변수의 이름이 중복되었을 경우 어떻게 명시할 것인지 찾는 규칙이라고도 볼 수 있습니다.  
아래와 같은 코드가 주어졌을 때 `console.log(x)`함수는 어떤 x값을 참조해야하는지 어떤 규칙에 따라 정해야 할 것입니다. 

```javascript
const x = "global x";

function f(){
    const x = "local x";
    console.log(x);
}

f(); // "local x"
console.log(x); // "global x"
```

보시다시피 `f();`의 실행값과 `console.log(x);`의 실행값이 다른 것을 확인할 수 있습니다. 만약 스코프가 존재하지 않았다면 `console.log(x)`가 어디에 있는 x값을 참조해야하는지 알 수 없었을 것입니다. 이렇듯 스코프는 식별자 이름의 충돌을 방지해주는 역할을 합니다. 오늘은 자바스크립트에서의 스코프에 대해 알아 보겠습니다. 결론부터 말하자면 자바스크립트에서는 **함수 레벨 스코프(function-level-scope)**와 **렉시컬 스코프(Lexical scope)**를 따른다. 그렇다면 **함수 레벨 스코프**와 **렉시컬 스코프**가 무엇인지, 또 다른 종류의 스코프는 어떤게 있는지에 대해 알아보겠습니다.

## 블록 레벨 스코프 vs 함수 레벨 스코프

블록 레벨 스코프란 코드블록 `{ ... }`내에서만 참조(접근)할 수 있는 스코프를 의미합니다.  
블록 안에서 생성된 변수를 그 블록 밖에서 참조할 수 없다는 의미입니다. 대부분의 C-Family language는 블록 레벨 스코프를 따릅니다. 아래는 블록 레벨 스코프의 한 예시 입니다.

```c
int main(){
    if(true){
        int x = 5;
        printf("x = %d", x);
    }
    printf("x = %d", x); // error!
    
    return;
}
```

위 코드처럼 `if`문 블록 안에서 선언된 변수 `x`를 `if`문 블록 밖에서 참조하지 못하는 것을 블록 레벨 스코프라고 할 수 있겠습니다. 

앞서 자바스크립트에서는 함수 레벨 스코프를 따른다고 했는데 함수 레벨 스코프란 함수 내에서 선언된 변수를 함수 밖에서는 참조하지 못하는 것을 의미합니다. 따라서 함수가 아닌 블록에서 선언된 변수를 블록 밖에서도 참조할 수 있습니다.

```javascript
var x = 0;
{
    var x = 1;
    console.log(x); // 1
}
console.log(x); // 1
```

하지만 자바스크립트에서도 블록 레벨 스코프를 사용할 수 있습니다.  
`let`과 `const`로 변수를 선언해주게되면 해당 변수는 블록 레벨 스코프를 따릅니다.  

##### (자바스크립트에서 `var`사용은 지양하고 `let`과 `const`사용을 지향하는데 자바스크립트가 함수 레벨 스코프를 따른다고 말해도 될지 잘 모르겠다 ㅇㅅㅇ;)

```javascript
let block = 0;
{
    let block = 1;
    console.log(block); // 1
}
console.log(block); // 0, block변수가 블록 스코프를 따름!
```

## 내부함수

내부함수는 자신을 포함하고 있는 외부함수의 변수에 접근할 수 있습니다. 

```javascript
var x = 'global';

function foo(){
    var x = 'local';
    console.log(x); // "local"
    
    function bar(){
        console.log(x); // "local"
    }
    bar();
}
foo();
console.log(x); // "global"
```

## 렉시컬 스코프

글의 시작에서 자바스크립트는 렉시컬 스코프를 따른다고 했었습니다.  
렉시컬 스코프란 함수를 어디서 호출하는지가 아니라 어디에 선언하였는지에 따라 변수의 스코프를 결정해주는 것을 의미합니다. 따라서 아래와 같은 코드에서 `bar()`함수의 변수`x`는 자신을 호출한 함수 `foo()`의 `x`를 참조하는 것이 아닌, 전역변수인 `x`를 참조합니다.

```javascript
var x = 1;

function foo(){
    var x = 10;
    bar();
}

function bar(){
    console.log(x);
}

foo(); // 1
bar(); // 1
```

## 암묵적 전역

아래와 같은 코드에서 변수 `y`를 보면 선언하지 않았는데 값을 할당하려는 것을 볼 수 있습니다. 자바스크립트에서 이는 에러를 발생시키지 않고 전역변수가 선언된 것 처럼 기능합니다. 이렇게 `y=20;`이라고 선언을 해주면 `window`객체의 프로퍼티`y`값을 생성하게 됩니다. 따라서 `window.y`는 전역 객체의 프로퍼티가 되어 전역 변수처럼 동작하게 되고 이를 암묵적 전역(implicit global)이라고 합니다.

암묵적 전역으로 생성된 `y`는 window객체의 프로퍼티 입니다.  
`var global = 10;`처럼 생성된 변수는 전역객체입니다.  
따라서 `y`는 객체의 프로퍼티를 삭제하는 `delete`연산으로 삭제할 수 있지만 전역변수로 선언된 `global`변수는 `delete`연산자로 삭제할 수 없습니다.

```javascript
var global = 10;
prop = 20;

console.log(window.global) // 10
console.log(window.prop) // 20

delete global; // false, 전역변수라 삭제되지 않음.
delete prop; // true, 프로퍼티라 삭제됨.

console.log(window.global); // 10
console.log(window.prop); // undefined
```

