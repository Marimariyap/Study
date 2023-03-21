//함수 - 하나의 로직을 재실행, 코드의 재사용성(한 번 만들고 여러 번 사용)을 높여줌
//재사용성이 높아지면 유지보수 용이, 가독성 상승
// function numbering(){      //함수 선언
//     let i= 0;
//     while(i<2){
//         document.write(i+"<br />");
//         i+=1;
//     }
// }
// for(let i= 0; i<=3; i++){      //반복문 : 기계적, 일정한 반복, 한자리에서 실행  함수 : 반복적 실행이 여러 맥락에서 사용
//     numbering();               //함수 실행
// }

//함수 출력 - return
// function get_member1(){
//     return '마리마리';        //return : 종료 및 출력
// }
// function get_member2(){
//     return '얍';
// }
// document.write(get_member1());
// document.write(get_member2() + "<br />");

//함수 입력 - 인자(매개변수)
//인자란 함수로 유입되는 입력 값
// function get_argument(arg1, arg2){         //arg : 매개변수 - 인자값을 받는 변수
//     return arg1 + arg2;                    //<< 출력, 하나만 가질수 있음
// }
// document.write(get_argument(10, 20));      //<< 입력, 여러개의 값을 받을 수 있음
// document.write(get_argument(20, 30) + "<br />");      //(20, 30) : 인자 - 함수로 유입되는 값

//함수를 정의하는 다른 방법 - 익명함수 : 정의와 호출 가능
// (function(){
//     var i= 0;
//     while(i<3){
//         document.write(i);
//         i+=1;
//     }
// }) ();      //(정의) (호출);
// //함수는 코드의 재활용성을 높여줌, JS는 다른언어에 비해 함수를 자주 사용
console.log("1. 함수");

//함수지향 (함수의 핵심은 로직의 재활용)
//함수의 전역변수와 지역변수
//전역변수는 사용하지 않는 것이 좋음, 이유로 그 값이 변경될 수 있기 때문
//변수를 선언할 때는 꼭 var을 붙이는 것을 습관화
// var vscope= 'global';       //전역변수, JS전역에서 접근할 수 있는 변수
// function fscope(){
//     var vscope= 'local';    //지역변수, 함수의 {중괄호}안 쪽에서만 접근할 수 있는 변수
//     console.log(vscope);    //함수안에 지역변수가 선언 되어 있어 함수안의 변수를 사용할때 지역변수로 사용 된다(햠수내에서 정의된 변수 사용)
// }
// function fscope2(){
//     console.log(vscope);
// }
// fscope();
// fscope2();

//함수의 유효범위
// function a(){
//     var i= 0;               //var를 붙이지 않을 경우 전역변수가 계속 0으로 바뀌어 반복문이 무한반복함
// }
// for(var i=0; i<3; i++){     //var i << 전역변수
//     a();
//     document.write(i);
// }

//전역변수의 사용
// (function(){                        //익명함수를 호출 함으로서 전역변수를 지역변수로 바꿈
//     MYAPP = {}                      //하나의 객체를 전역변수로 만들고
//     MYAPP.calculator = {            //객체의 속성으로 변수를 관리하는 방법을 사용
//         'left' : null,
//         'right' : null
//     }
//     MYAPP.coordinate = {
//         'left' : null,
//         'right' : null
//     }

//     MYAPP.calculator.left = 10;
//     MYAPP.calculator.right = 20;
//     function sum(){
//         return MYAPP.calculator.left + MYAPP.calculator.right;
//     }
//     document.write(sum());
// });
//이러한 방법은 JS에서 로직을 모듈화하는 일반적 방법

//유효범위의 대상 (함수)
// for(var i = 0; i < 1; i++){
//     var name = 'coding everybody';      //지역변수는 함수에 대해서만 유효, 다른 대상(조건문, 반복문 등)에게는 허용 되지 않음
// }
// console.log(name);

//정적 유효범위 - 함수가 선언된 시점에서의 유효범위를 갖게됨
// var i = 5;
// function a(){
//     var i = 10;
//     b();
// }
// function b(){               //함수가 호출될 때가 아닌 정의될 때 유효범위를 갖게됨 (정적 유효범위)
//     document.write(i);
// }
// a();
console.log("1-1. 함수지향");

//값으로서의 함수 - JS에서는 함수도 객체, 일종의 값, 거의 모든 언어가 함수를 가지고 있음
//function a(){} >>표현가능>> var a= function, 함수가 값이기 때문에 변수와 객체 안에 들어갈 수 있음
//그냥 정의되어 있는 함수는 함수, 객체 안에 정의 되어있는 함수는 메소드라고함
// a = {                           //이 객체 안에서 변수의 역활을 하는 것을 속성(property)이라고함, 객체의 속성값으로 담겨진 함수를 메소드(method)라고 함
//     b:function(){               //a의 변수의 객체는 b라는 속성이 담겨 있고 속성의 값은 함수임 이함수는 메소드라고 함
//     }
// };
// function cal(func, num){            //함수 선언
//     return func(num)                //함수 실행 increase(1) >> num+1 >> 1+1 >> 2
// }
// function increase(num){             //함수 선언
//     return num+1                    //매개변수(num)+1
// }
// console.log(cal(increase, 1));      //함수 increase와 값 1이 함수 cal의 인자로 전달, 함수는 값이기 때문에 다른 함수의 인자로 전달 가능
// function cal(mode){
//     var funcs = {
//         'plus' : function(left, right){return left + right},
//         'minus' : function(left, right){return left - right}
//     }
//     return funcs[mode];                //return 값으로도 함수 사용가능
// }
// console.log(cal('plus')(2,1));
// console.log(cal('minus')(2,1));
// var process = [                       //배열 값으로도 함수 사용가능
//     function(input){ return input + 10;},               //1+10
//     function(input){ return input * input;},            //11*11
//     function(input){ return input / 2;}                 //121/2
// ];
// var input = 1;
// for(var i = 0; i < process.length; i++){    //0 1 2 i는 0부터 process.length(3)까지 1씩 증가
//     input = process[i](input);              //process[0...2](input) var input = 1이기 때문에 [0]번째 input에 1
// }
// console.log(input);             //60.5
//이와 같이 함수는 변수, 매개변수, return값, 배열, 객체(<< 이런것들을 first class citizen(object) 이라고 함)에 사용가능
console.log("1-2. 값으로서의 함수");

//콜백 - 함수가 수신하는 인자가 함수인 경우, 값으로 사용될 수 있는 특성을 이용하면 함수의 인자로 함수로 전달
// var numbers= [20,10,9,8,7,6,5,4,3,2,1];
// var func= function(a,b){            //numbers 값을 비교 ex) a(20)>b(10)
//     return a-b;
// }
// console.log(numbers.sort(func));    //콜백 함수, 인자로 전달된 함수 func의 구현에 따라서 sort의 동작방법이 바뀜
console.log("1-3. 콜백");

//비동기 콜백 - 비동기식이란 여러가지 일이 동시적으로 발생한다는 뜻, 서버와 통신하는 동안 다른 작업을 할 수 있다는 의미 (나중에 다시 보기)
//아주 중요한 개념, Ajax(Asynchronous JavaScript And XML) 최근에는 XML보다 JSON을 더 많이 사용
//브라우저마다 사용 방법이 다름, 하지만 jQuery를 이용하여 Ajax를 사용
console.log("1-4. 비동기 콜백");

//클로저 - 내부함수가 외부함수의 맥락에 접근할 수 있는 것, 외부함수의 맥락에 접근하는 내부함수가 소멸될 때까지 함수는 소멸되지 않는다
// function outter(){                          //외부함수
//     var title = 'coding everybody';         //외부함수의 지역함수
//     function inner(){                       //내부함수
//         alert(title);                       //내부함수에서 외부함수의 지역변수에 접근 할 수 있음 (클로저)
//     }
//     inner();                                //외부함수에서 내부함수 실행
// }
// outter();                                   //외부함수 실행

//클로저 사용
// function outter(){
//     var title = 'coding everybody';
//     return function(){                         //return을 통해 외부함수는 종료와 동시에 내부함수 정의
//         alert(title);                          //외부함수가 종료 되었지만 내부함수에서는 외부함수의 지역변수를 가져올 수 있다 (클로저)
//     }
// }
// inner = outter();
// inner();

//private Variable(전용변수)
// function factoryMov(title){
//     return {                            //return을 통해 외부함수가 종료 됨에 따라 지역변수인 title은 내부함수을 통해서만 접근할 수 있는 변수가 됨 (private variable)
//         get_title: function(){          //오픈되어 있는, 누구나 접근할 수 있는 메소드
//             return title;               //내부함수에서 외부함수의 지역변수를 가져옴
//         },
//         set_title: function(_title){    //오픈되어 있는, 누구나 접근할 수 있는 메소드
//                 title = _title
//         }
//     }
// }
// ghost= factoryMov('Ghost in the');      //return 되는 객체는 똑같이 담고 있지만
// matrix= factoryMov('Matrix');           //내부적으로 가지고 있는 메소드들이 접근하는 변수의 값은 서로 다름
// console.log(ghost.get_title());         //같은 객체이지만 담긴 매개변수(지역변수)는 서로 달라서
// console.log(matrix.get_title());        //다른 값이 나옴
// ghost.set_title('유령');                //결국엔 factoryMov(title)의 매개변수(지역변수) title을 바꾸게 됨, ghost의 값만 바꿈
// console.log(ghost.get_title());         //ghost의 값만 바뀌어서 '유령'
// console.log(matrix.get_title());        //matrix의 값은 바뀌지 않아서 'matrix'

//클로저의 응용
// var arr = []
// for(var i = 0; i < 5; i++){
//     arr[i] = function(id) {
//         return function(){
//             return id;              //내부함수가 외부함수의 지역변수에 접근 할 수 있음
//         }
//     }(i);                           //id라는 외부함수의 매개변수(지역변수)에 i값(전역변수)을 받아서 함수 내부로 전달
// }
// for(var index in arr) {
//     console.log(arr[index]());
// }
// 아직 알 필요성은 적지만 나중에는 알아야 하는 것
console.log("1-5. 클로저");

//arguments(인자) - 변수에 담긴 숨겨진 유사 배열
//인자 : 매개변수에 들어가는 값, 매개변수 : 인자가 들어갈수 있는 빈공간(변수)
// function sum(){                                             //매개변수가 정의 되지 않고 인자의 수를 수정해도 에러나지 않음
//     var i, _sum = 0;
//     for(i = 0; i < arguments.length; i++){                  //arguments 특수한 이름의 변수명(지정변수) : 사용자가 전달한 인자들에 접근
//         document.write(i+' : '+arguments[i]+'<br />');      //arguments는 유사배열이므로 length를 사용하여 인자의 갯수를 알 수 있음
//         _sum += arguments[i];
//     }
//     return _sum;
// }
// document.write('result : ' + sum(1,2,3,4));                 //인자 삽입

//매개변수의 수
// function zero(){
//     console.log(
//         'zero.length', zero.length,                //함수에 정의된 매개변수의 갯수
//         'arguments', arguments.length              //함수로 유입된 인자의 갯수
//     );
// }
// zero();                                            // zero.length 0 arguments 0
// function one(arg1){
//     console.log(
//         'one.length', one.length,
//         'arguments', arguments.length
//     );
// }
// one('val1', 'val2');                              // one.length 1 arguments 2
// function two(arg1, arg2){
//     console.log(
//         'two.length', two.length,
//         'arguments', arguments.length
//     );
// }
// two('val1');                                     // two.length 2 arguments 1
console.log("1-6. arguments(인자)");

//함수의 호출 - 함수는 객체, 객체 Function이 가지고 있는 메소드들을 이용 (Function.apply, Function.call)
// function sum(arg1, arg2){                   //객체 >안에> 속성(함수) >안에> 메소드(내장객체)
//     return arg1+arg2;
// }
// console.log(sum.apply(null, [1,2]));        //첫번째 인자는 함수(sum)가 실행될 맥락, 두번째 인자는 배열(함수의 인자)인데 순차적으로 대입

//apply의 사용 - 특정 함수를 어떤 this위에서 굴릴지 적용하는 메소드
// o1 = {val1:1, val2:2, val3:3}
// o2 = {v1:10, v2:50, v3:100, v4:25}
// function sum(){
//     var _sum = 0;                         //this는 sum.apply(o1)으로 인해 o1이 되었고 var this= o1; 이라는 코드가 들어갔다고 생각
//     for(name in this){                    //this는 기본값이 window이어서 호출을 할 경우 변경이됨
//         _sum += this[name];
//     }
//     return _sum;
// }
// console.log(sum.apply(o1));               //apply메소드(함수)에 o1이라는 객체를 첫번째 인자로 입력하게 되면 this=o1이 됨
// console.log(sum.apply(o2));               //apply를 사용하여 함수가 호출되는 시점에서 함수의 this값을 변경해서 o2객체의 속성인 것처럼 실행
console.log("1-7. 함수의 호출");

//배열 - 저장된 데이터들이 순서를 가지고 있음, 여러가지 데이터를 모아서 하나의 데이터로 관리하기 위해 사용하는 데이터 타입
//배열 생성방법 [대괄호]를 통해 만들고 (,)로 구분해서 나열
// var member= ['마리','마리','얍'];        //각각의 데이터는 원소(Element)
// document.write(member[0]);              //[0]<< index값 : 첫번째 원소('마리')를 가져오기 위해 [0]
// document.write(member[1]);              //0 부터 카운트를 하여 첫번째 원소를 가져오기 위해 [0]이 되어야 함
// document.write(member[2]);

//배열의 필요성 - 함수는 여러개의 입력과 하나의 출력으로 이루어져 있어 배열 사용시 하나의 출력이지만 여러개의 값이 됨
// function get_members(){
//     return ['뿌슝','뿌슝','얍'];
// }
// var members= get_members();
// document.write(members[0]);
// document.write(members[1]);
// document.write(members[2]);

//배열의 사용 - 배열의 데이터들을 꺼내서 그 값들을 가공하는 것, 반복문과 사용
// function get_members(){                                         //<< 사용자정의함수
//     return ['chring','chring','yep'];
// }
// var members= get_members();
// for(let i=0; i<members.length; i++){                            //<< 배열의 크기 - length(배열의 원소 갯수)
//     document.write(members[i].toUpperCase() + "<br />");        //<< toUpperCase()(대문자로 바꾸기)는 내장함수
// }

//배열의 제어 - 제거 및 추가
//배열 추가
// var li= ['a','b','c','d','e'];
// li.push('f');               //<< push() 배열뒤에 추가
// li.unshift('z');            //<< unshift() 배열앞에 추가
// li= li.concat(['g','h']);   //<< concat() 두가지의 배열을 하나의 배열로
// li.splice(2,3,'ㄴ','ㄷ');   //<< splice() 첫번째 인자에 해당하는 원소부터 두번째 인자에 해당하는 원소의 숫자만큼의 값을 배열로부터 제거한 후에 리턴
// document.write(li + "<br />");

//배열 제거
// li.shift();                 //<< shift() 배열앞에 제거
// li.pop();                   //<< pop() 배열뒤에 제거
// li.reverse();               //<< reverse() 역순으로 정렬
// li.sort();                  //<< sort() 정렬, 기본적 순서대로 정렬하지만 어떠한 기준에 따라 정렬 하기 위해 https://opentutorials.org/course/50/109 확인
// document.write(li);
console.log("2. 배열");

//객체 - 배열과 유사, 인덱스로 문자사용 가능, 객체 지향과 아주 중요하게 연결
//객체 안에 저장된 값을 배열과 달리 순서가 없고 key와 value가 있음, 순서가 없기 때문에 값을 가져올때 순서에 따라서 나오지 않음
//객체란 JS에서는 어떠한 값을 담는 그릇으로 시작해서 프로그램을 구조적이고 사용할 수 있는 로직을 만들 수 있는 단위
//객체의 생성 방법 {중괄호}를 통해 만들고 (,)로 구분해서 나열
// var grades= {'마리':10, '뿌슝':15, '얍':20};        //'마리'(index) - key:10(데이터 값) - value
// document.write(grades['마리']);               //아래의 예제와 같은 값이 나옴 하지만 프로그래밍적으로 써야할 상황이 생김
// document.write(grades.마리+ "<br />");        //위의 예제와 접근법은 다르지만 값은 같음

//객체 다루기 - 반복문과 사용
//for in문(객체뿐만 아니라 배열에서도 사용 가능) 사용, 객체안에 있는 값을 열거하는 방법
// for(var name in grades){                                 //for in 문은 in을 중심으로 뒤쪽엔 객체, 앞쪽엔 객체의 key값
//     document.write(key+ "<br />");               //객체에 담겨있는 값 하나하나의 key값을 반복문으로 실행할 때 내부적으로 key라는 변수의 이름으로 돌려줌
//     document.write(grades[key]+ "<br />");       //비슷한 유형 : member[i]
//     document.write("<li>이름 : " +name+ "값 : " +grades[name]+ "</li>");  //프로그래밍적으로 HTML제어
// }

//객체 지향
//객체 안에 객체와 함수를 담을 수 있음
// var grade= {                                                //객체 안의 객체와 함수를 그룹핑 한 것 서로가 관련성을 갖고 있음 = 객체 지향 프로그래밍
//     'list' : {'마리마리':10, '뿌슝뿌슝':15, '치링치링':20},
//     'show' : function(){                                    //JS에서는 함수도 일종의 값
//         for(var name in this.list){                         //함수 선언, this : 이 함수가 속해있는 객체를 나타내는 변수, 함수생성 방법에 따라 달라질 수 있음
//         console.log(name, this.list[name]);
//         }
//     }
// }
// console.log(grade['list']);
// console.log(grade['list']['치링치링']);
// grade.show();                                           //함수 실행
//서로 연관되어 있는 데이터와 연관되어 있는 처리방식을 하나의 그릇에 그룹핑 해놓은 프로그래밍 스타일 = 객체 지향 프로그래밍
console.log("3. 객체");

//정규표현식 - 문자열에서 특정한 문자를 찾아냄, 하나의 언어 (일단 skip)
//어떠한 텍스트 안에 정보가 있는지 없는지 찾거나, 여러 정보들 중 어떤 패턴에 해당하는 것을 찾아 다른 텍스트로 치환할 때 사용
console.log("4. 정규표현식");

//객체지향프로그래밍 - 로직을 상태와 행동(변수와 메소드)로 나누고 연관된 것들끼리 그룹핑한 것을 객체라 하고 이를 조립해 프로그래밍을 하는 것
//구체적인, 문법적인 기능이 언어차원에서 제공되는 기능
//목적에 따라 기능과 연관 되어 있는 변수와 메소드(객체 내부에 선언된 함수)를 객체라는 것에 넣고, 서로 연관이 없는 로직과 구분해주는 것이 객체
console.log("5. 객체 지향 프로그램 (OOP)");

//객체 생성 - 객체란 서로 연관된 변수와 함수를 모아놓은 것
//생성자와 new : 객체의 구조를 재활용할 수 있는 방법
// var person= {
//     'name': '마리마리얍',
//     'introduce': function(){
//         return 'My name is ' + this.name;
//     }
// }
// document.write(person.introduce());

//생성자 - 객체를 만드는 역활을 하는 함수, 함수는 재사용 가능한 로직의 묶음이 아니라 객체를 만드는 창조자
// function Person(){}
// var p = new Person();                   //앞에 new가 붙으면 함수가 아닌 객체의 생성자임(<< 비슷한 유형 : var p= {})
// console.log(p);                         //생성자는 new로 인해서 비어있는 객체를 만들고 변수에 대입 (Person{})
// p.name = '마리마리얍';
// p.introduce = function(){               //여러개의 객체가 생성이 되면 여러번의 메소드를 정의해야함
//     return 'My name is '+this.name;     //중복이 발생하게 됨
// }
// document.write(p.introduce());

//초기화
// function Person(name){                                   //생성자 - 객체를 만드는 함수
//     this.name = name;   //프로퍼티                       //생성자에 객체에서 쓸 프로퍼티, 메소드등을 정의하면 new 생성자이름(인자) 한번 실행 하는 것으로,
//     this.introduce = function(){  //메소드               //인자와 관련된 객체를 만듦 (한번의 메소드만 정의 가능)
//         return 'My name is '+this.name;                 //이 속성들을 정의하는 과정을 초기화(init) 라고 함
//     }
// }
// var p1 = new Person('egoing');                           //Person()라는 함수 앞에 new를 붙이면 새로운 객체를 만들어 return
// document.write(p1.introduce()+"<br />");

// var p2 = new Person('leezche');                          //2개의 객체를 만듬
// document.write(p2.introduce());
console.log("5-1. 생성자와 new");

//생성자 함수 (붕어빵 틀과 붕어빵)
// let n= 'name';
// let a= 'age';
// const user= {
//     name: '띠롱띠롱',
//     [a]: 30     //변수에 할당된 값이 들어가게 됨 [a]=age 이것을 Computed propety(계산된 프로퍼티)라고 함
// }
// const user2= Object.assign({}, user);       //user객체를 복제  {}+{ name: '띠롱띠롱', age: 30 }
// user2.name= '뽀짝뽀짝'                      //key가 같을 경우 덮어쓰기

// console.log(user);
// console.log(user2);
// console.log(Object.keys(user2))            //key값만 배열로 반환
// console.log(Object.values(user));          //value값만 배열로 반환
// console.log(Object.entries(user));         //key값, value값을 쌍으로 묶은 후 배열로 반환

// let arr= [
//     [ 'name', '띠롱띠롱' ],     //[key, value]
//     [ 'age', 30 ]
// ]
// console.log(Object.fromEntries(arr));      //배열을 객체로 만듬

// function User(name, age){
//     this.name= name;
//     this.age= age;
//     this.say= function(){
//         console.log('자기소개 저는 '+name+'얍 입니다.');
//     }
// }
// let User1= new User('마리마리',15);
// let User2= User('뿌슝뿌슝',20);         //new를 붙이지않고 사용할 경우 일반함수가 실행(undefined)
// let User3= new User('피슝피슝',25);
// let User4= new User('빵야빵야',5);

// User1.say();
// console.log(User1,User2,User3,User4);
console.log("5-1-1. 생성자 함수");

//다른 사람의 코드
// const user= {
//     '이름': '띠롱띠롱',
//     '나이': 30
// };

// user.showName= function(){};             //사용자 화면에 표시됨 - 저의 showName은(는), function(){} 입니다.
// const showName= Symbol('show name');        //유일한 프로퍼티 생성을 함으로서 사용자 화면에서 숨길 수 있다.
// user[showName]= function(){
//     console.log(this.이름);
// };

// user[showName]();

//사용자가 보는 화면
// for(let key in user){
//     console.log('저의 ' +key+ '은(는), ' +user[key]+ ' 입니다.');
// };
console.log("5-1-2. Symbol(심볼)");

//전역객체 - 모든 객체는 전역객체의 프로퍼티
// function func(){                //전역함수, 전역변수라고 하여도 사실은 window라는 전역객체의 프로퍼티임
//     document.write('Hello?');
// }
// func();                         //func()라는 함수는 사실 window객체의 메소드, 편의를 위해 전역객체(window)를 생략해도 됨
// window.func();                  //window(객체).func()(속성>>함수>>메소드), 암시적 : 생략하였을때 기본적으로 무엇이 사용 되었다
//JS가 객체 지향 언어인 이유는 객체라고 하는 것에 모든 것이 소속 되어 있기 때문에
console.log("5-2. 전역객체");

//this - 함수를 어떻게 호출하느냐에 따라서 this가 가리키는 대상이 달라짐
//함수의 호출
// function func(){
//     if(window === this){                    //this는 전역객체인 window와 같음
//         document.write("window === this");  //window.func() : 전역객체의 this(=window)
//     }
// }
// func();

//메소드의 호출
// var o = {
//     func : function(){
//         if(o === this){                        //o라는 객체의 소속인 메소드의 this는 그 객체(o)를 가르킴
//             document.write("o === this");      //o.func() : o 객체의 this(=o)
//         }
//     }
// }
// o.func();

//생성자의 호출 - 객체가 생성 되기전에 그 객체를 참고 할 수 있는 식별자가 this임
// var funcThis = null;

// function Func(){
//     funcThis = this;                    //if(o2===this) : undefined
// }                                       //객체는 만들어졌지만 실제로는 o2라는 변수에 할당이 되지 않음
// var o1 = Func();
// if(funcThis === window){                //일반함수의 this는 전역객체인 window 이므로
//     document.write('window <br />');    //this(=window)
// }

// var o2 = new Func();                    //o2라는 새로운 객체가 생성이 됨(생성자라는 호출이 끝난 다음 o2라는 변수에 할당됨)
// if(funcThis === o2){                    //객체내의 메소드(함수)의 this는 객체인 o2 이므로
//     document.write('o2 <br />');        //this(=o2)
// }

//
// var o = {}
// var p = {}
// function func(){
//     switch(this){
//         case o:
//             document.write('o<br />');
//             break;
//         case p:
//             document.write('p<br />');
//             break;
//         case window:
//             document.write('window<br />');
//             break;
//     }
// }
// func();
// func.apply(o);      //apply를 사용하여 현재 사용하는 this(=o)의 값을 제어 할 수 있음
// func.apply(p);      //>> var p= {func: function(){~~}}이므로 이객체의 메소드(함수)안의 this(=p)는 그 객체를 가르킴
console.log("5-3. this");

//상속 - 객체의 로직을 그대로 물려 받는 것, 기존의 로직을 수정하고 변경해서 파생된 새로운 객체를 만들 수 있음
//상속 준비, prototype : 어떠한 객체를 상속 받고 싶을때 그 객체의 생성자에 할당시키면 됨
//pro() 생성자와 Person() 생성자가 동일한 기능을 할 수 있게 하기
// function Person(name){                         //부모
//     this.name= name;
// }
// Person.prototype.name= null;                   //생성자.prototype을 하게되면 생성자에 의해서 객체 생성 >>
// Person.prototype.introduce= function(){        //그 객체 안에 prototype.생성자 함수 안에 있는 객체를 복사
//     return '내 이름은 ' + this.name;           //('My name is ' >>부모객체의 코드 변경>> '내 이름은 ')부모객체를 상속받고 있는 객체의 기능도 다 같이 변경이 됨
// }
// function Programmer(name){
//     this.name= name;                           //introduce 메소드는 정의 되지 않음
// }
// Programmer.prototype= new Person();            //부모인 생성자에서 상속 받음(=Person())
// Programmer.prototype.coding= function(){       //.prototype을 통해 Person()안에 있는 prototype의 객체(prototype.name과 prototype.introduce)를 상속받음
//     return 'hello world';                      //기능의 추가
// }
// function Designer(name){
//     this.name = name;
// }
// Designer.prototype = new Person();             //부모인 생성자에서 상속 받음(=Person()), 상속 받은 기본적인 기능을 지니고
// Designer.prototype.design = function(){        //부모 객체를 확장해서 자신의 맥락에 맞는 기능을 추가 할 수 있게 됨
//     return "Beautiful!";
// }

// var p= new Person('마리마리얍')
// document.write(p.introduce() + '<br />');     //introduce를 사용 할 수 있는 이유는 Programmer()가 Person()을 상속 받을 수 있었기 때문

// var p1= new Programmer('뚝딱뚝딱얍');
// document.write(p1.introduce() + '<br />');
// document.write(p1.coding() + '<br />');

// var p2= new Designer('사각사각얍');
// document.write(p2.introduce() + '<br />');
// document.write(p2.design() + '<br />');
//prototype은 JS에서 아주 중요하고 객체, 함수들의 관계에서 비중이 높은 기능임
console.log("5-4. 상속(prototype)");

//prototype(원형) -  prototype에 저장된 속성들은 생성자를 통해서 객체가 만들어질 때 그 객체에 연결됨(=상속)
//객체안 정보의 원형을 저장하는 곳이 prototype이라는 프로퍼티
// function Ultra(){}
// Ultra.prototype.ultraProp = true;   //Super.prototype = Ultra.prototype으로 하면 안됨, Super.prototype의 값을 변경하면 그것이 Ultra.prototype도 변경하기 때문

// function Super(){}                  //Super() 생성자의 prototype 객체는 new Ultra() 임
// Super.prototype = new Ultra();      //Super.prototype << 이 곳에 new Ultra()라는 객체를 저장해놧다가 new를 이용해 생성자를 호출(Sub.prototype = new Super())

// function Sub(){}
// Sub.prototype = new Super();        //Super.prototype << 이 곳에 저장 되어 있는 객체를 꺼내서 return(new Ultra())

// var o = new Sub();                  //객체 리터럴(var 0={}) 사용시 빈 공간, new를 통해(var o = new Sub()) 만들게 되면 객체 안에 로직과 데이터가 담겨 있기 때문
// console.log(o.ultraProp);
//객체 o에서 ultraProp를 찾기 >> 없다면 Sub.prototype.ultraProp 찾기 >> 없다면 Super.prototype.ultraProp 찾기 >> 없다면 Ultra.prototype.ultraProp 찾기
//이러한 경우를 prototype는 객체와 객체를 연결하는 체인, prototype chain(프로토타입 체인) 이라고 함
console.log("5-5. prototype chain(프로토타입 체인)");

//표준내장 객체의 확장 - JS의 내장 객체와 같은 것을 우리도 만들 수 있다는 것
// var arr = new Array('seoul','new york','ladarkh','pusan', 'Tsukuba');
// function getRandomValueFromArray(){                                    //배열의 확장(사용자 정의 객체 <-대비-> 표준 내장 객체)
//     var index = Math.floor(arr.length*Math.random());                  //수학 메소드(소수점아래 버림)(배열의 원소갯수 * 수학 메소드(랜덤))
//     return arr[index];
// }
// console.log(getRandomValueFromArray(arr));

//위 코드의 개선(잘못 작성한 것이 아님, 조금 더 가독성이 좋아진 것)
// Array.prototype.rand = function(){                      //rand라는 메소드(함수)가 Array라는 배열객체에 관련되어 있다는 것을 알 수 있음
//     var index = Math.floor(this.length*Math.random());
//     return this[index];                                 //this(=new Array), Array라는 객체 안에 있기 때문에
// }
// var arr = new Array('seoul','new york','ladarkh','pusan', 'Tsukuba');
// console.log(arr.rand());
console.log("5-6. 표준내장 객체의 확장");

//Object 객체(object) - JS의 모든 객체는 Object 객체를 상속, 모든 객체는 Object 객체의 프로퍼티를 가지고 있음
//object 객체의 프로퍼티(prototype)는 모든객체가 사용이 가능(object 객체는 모든 객체의 부모)
//모든 객체가 공통적으로 있어야 할 기능이라면 object에 prototype으로 지정 했을 것
//모든 객체가 있었으면 하는 기능이 있다면 object의 prototype에 기능을 추가하는 것을 통해 모든 객체가 사용할 수 있는 기능을 추가

// API에서 Object.(메소드)와 object.prototype.(메소드)의 차이점
// var arr= [1,2,3];
// console.log(Object.keys(arr)); //prototype에 속해있지 않음, 해당 메서드가 다른 객체의 prototype에 할당되지 않아 arr.keys(arr)로 호출이 불가능
// var o= new Object();
// console.log(o.toString());
// var a= new Array(1,2,3);
// console.log(a.toString());     //prototype에 속해있는 경우, new를 통해 상위 객체의 prototype 정보를 복사하여 할당이 가능하므로 a.toString()으로 호출이 가능
//여기서 코드는 중요하지 않고 Object.(메소드), object.prototype.(메소드)의 사용법이 중요함

//Object 객체의 확장 - 장점 : 모든 객체에 영향을 줌, 단점 : 모든객체에 영향을 줌
// Object.prototype.contain= function(oa){
//     for(var name in this){                  //Object(모든객체의 부모).prototype(객체들이 메소드를 갖게 만듦).contain= function
//         if(this[name] === oa){              //메소드(함수) 안에서의 this(=o, =a)는 소속되어 있는 객체를 의미 for in문에서의 var name은 key값(배열에선 index)
//             return true;
//         }
//     }
//     return false;
// }

// var o = {'이름':'마리마리얍', '집':'부산'}
// console.log(o.contain('마리마리'));
// var a = ['마리마리','치링치링','뿌슝뿌슝'];
// console.log(a.contain('치링치링'));

//Object 객체의 확장의 위험
// for(var name in o){              //객체가 특정 프로퍼티를 가지고 있는지를 나타내는 불리언 값을 반환(hasOwnProperty)
//     if(o.hasOwnProperty(name)){  //직접 정의한 프로퍼티(var o={})와 상속받은 프로퍼티(contain)를 분별할 수 있음
//         console.log(name);       //(=object객체) object라고 하는 객체를 정의, 정의한 객체 안에는 contain이라는 메소드도 함께있음
//     }                            //이 객체를 정의 할때 for in을 동작시킬때 정의한 데이터만 열거 될 것을 생각했지만
// }                                //Object 객체의 확장을 통해 꼬여버렸음
console.log("5-7. Object 객체(object)");

//원시 데이터타입 - 객체가 아닌 데이터 타입
//숫자, 문자열, 불리언(true/false), null, undifined

//레퍼객체(wrapper Object) - 원시데이터 타입을 객체로 쓸 수있게 바꾸는 것
//원시 데이터 타입이 관련된 어떤 작업을 하려고 할 때 JS는 임시로 객체를 만들고 사용이 끝나면 제거하기 때문
//원시 데이터 타입과 객체는 좀 다른 동작 방법을 가지고 있다
//(문자열)String, (숫자)Number, (비교값)Boolean은 레퍼객체, null과 undefined는 레퍼 객체가 없음
console.log("5-8. 원시 데이터타입과 wrapper Object");

//참조 하기
//복제 : 원본과 복사본은 서로 연결 되어 있지 않은 별도의 데이터
// var a = 1;      //원본
// var b = a;      //b안의 값이 원시 데이터 타입 일때는 복제를 함
// b = 2;          //복사본은 변경해도 원본엔 영향을 주지 않음
// console.log(a); // 1

//참조 : 하나의 데이터를 공유
// var a = {'id':1};   //객체
// var b = a;          //안의 값이 객체 일때에는 복제를 하지 않고 참조를 함
// // b.id = 2;           //하나의 데이터를 참조하기 b.id의 값을 바꾸면 a.id도 바뀌게 됨
// b = {'id':2};       //새로운 객체를 생성하기 때문에 a를 참조하는 것이 아닌(=a.id 값은 바뀌지 않음) 새로운 객체를 할당함
// console.log(a.id);  // 2
//var b= a 부분에서 복제와 참조가 나뉨
//객체일때 b와 a는 똑같은 객체를 공유하게 됨
//원시데이터 타입일때 b는 a에 담겨있던 값이 복제되서 할당됨

//함수와 참조
// var a = 1;          //원본
// function func(b){   //참조하는 값이 원시데이터 이므로 복제를함
//     b = 2;
// }
// func(a);            //b=a, 복제를 함으로서 a의 값에 영향주지 않음
// console.log(a);     //1

// var a = {'id':1};   //객체
// function func(b){
//     b = {'id':2};   //b에 새로운 객체를 줌으로서 a와 b의 연결(참조하는 값)이 끊어짐
// }
// func(a);            //b=a, 객체이므로 하나의 값이 공유 되어야 하지만
// console.log(a.id);  // 1

// var a = {'id':1};
// function func(b){
//     b.id = 2;       //b의 id값을 2로 바꾸는데 a와 b가 하나의 값으로 연결됨
// }                   //b의 id값을 2로 바꾸는 것은 a의 id값도 같이 바뀌게 됨(a와 b는 서로 하나의 값을 공유)
// func(a);            //b=a, 객체이므로 하나의 값이 공유가 됨
// console.log(a.id);  // 2
console.log("5-9. 참조");

//재귀함수 - 함수내에 함수를 다시 호출 시켜서 반복문처럼 사용
// let num = 0;
// let answer = 0;
// function testFnc(num){
//     num++;
//     document.write(num,"<br>");
//     if(num >= 50){
//         return num;
//     }
//     return num+testFnc(num+1);
// }
// testFnc(1);
console.log("6. 재귀함수");
