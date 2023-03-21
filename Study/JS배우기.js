// let w = 11
// let s = 4
// let str = '마리마리'
// let str2 = '얍'

// 자료형

// 문자를 숫자로 변환
// let st= Number('11') //11(Number)
// console.log(typeof(st))
// console.log (st)
// let st2= parseInt('11') //11(Number) 정수
// console.log(typeof(st2))
// console.log (st2)
// let st3= parseFloat('11.1') //11.1(Number) 실수
// console.log(typeof(st3))
// console.log (st3)
// 숫자를 문자로 변환
// let nu= w.toString(2) //1011(string) 진법 2,16...
// console.log (typeof(nu))
// console.log (nu)
// let nu2= w.toFixed(2) //11.00(string) 소수점 자리수 표현
// console.log (typeof(nu2))
// console.log (nu2)

// 연산자

// 산술 연산자 - 더하기(+), 빼기(-), 곱하기(*), 나누기(/), 나머지 값(%)
// let sum= w+s
// console.log (sum) //15
// let sub= w-s
// console.log (sub) //7
// let mul= w*s
// console.log (mul) //44
// let div= w/s
// console.log (div) //2.75
// let rem= w%s
// console.log (rem) //3
// 문자 결합 연산자 - (문자+문자), (문자+숫자) = 문자
// let stsu= str+str2+'입니다'+'20'+22 //마리마리얍입니다2022(string) 문자+숫자= 문자
// console.log(typeof(stsu))
// console.log(stsu)
// 대입 연산자 - 값을 대입해서 저장하는 것은 문자, 숫자 뿐만 아닌 html태그, 변수 등도 대입이 가능
// console.log(w=s)  //4  w=2 단순 대입 연산자
// console.log(w+=s) //8  w=8 복합 대입 연산자
// console.log(w-=s) //4  w=4
// console.log(w*=s) //16 w=16
// console.log(w/=s) //4  w=4
// console.log(w%=s) //0  w=0
// 증감 연산자 - 연산자의 위치에 따라 결과값이 달라짐
// let ws= w++
// let ws2= --w
// console.log(ws)  //11 변수에 대입 후 w를 증가
// console.log(ws2) //10 감소시킨 값을 변수에 대입
// 비교 연산자 - 비교를 통해 참(true)과 거짓(false)으로 판단
// console.log(w>s)        //true  w가 s보다 큼
// console.log(w<s)        //false w가 s보다 작음
// console.log(w>=s)       //true  w가 s보다 크거나 같음
// console.log(w<=s)       //false w가 s보다 작거나 같음
// console.log(w==s)       //false w와 s가 같음
// console.log(10=="10")   //true  10과 '10'은 같음 (자료형 상관X)
// console.log(10==='10')  //false 10과 '10'은 같음 (자료형 상관O)
// console.log(10!=10)     //false 10과 10은 같지 않다
// console.log(10!=='10')  //true  10과 '10'은 같지 않다 (자료형 상관O)
// 논리 연산자 - 어떠한 논리에 대해 참(true)과 거짓(false)을 판단
// console.log(w>s || w<s)  // true    or:논리가 하나라도 참이면 참으로 반환
// console.log(w>s && w<s)  // false   and:논리가 하나라도 거짓이면 거짓으로 반환
// console.log(w>s !== w<s) //         not:논리가 참이면 거짓으로 거짓이면 참으로 결과값을 반대로 반환
// 삼항 조건 연산자 - 3개의 연산할 항을 가진 연산자
// let thop=  w>s ? '참(true)' : '거짓(false)'
// console.log(thop) //참(true) 조건 ? true : false > 조건이 참일때 true 반환 아닐 시 false 반환

// 제어문

let i = 0;
let w = 11;
let s = 4;
let str = "마리마리";
let str2 = "얍";

// 조건문 - 조건식이 참이면 true, 거짓이면 false를 반환하여 코드를 실행
// if문
// if(w>s){                //마리마리  조건식이 true일 경우에만 코드를 실행
//     console.log(str)    //if문 안에 또 if문을 중첩 사용가능
// }else{                  //조건식에 0, null(데이터가 없음), ""(빈 문자), undefuned(데이터가 부여되지 않은 기본값),빈 값이면 false가 나와 실행X
//     console.log(str2)   //else 안에는 if 조건식에 해당하지 않을 경우 코드를 실행
// }
// else if문 - if에 만족하는 값이 없을떄 else if마다 조건식을 두어 조건이 만족하면 실행
// if(w>s){                   //마리마리
//     console.log(str)       //w>s = true 일때
// }
// else if(w<s){              //얍
//     console.log(str2)      //w<s = true 일때
// }
// else {                     //마리마리얍
//     console.log(str+str2)  //위 두개의 조건식이 다 아닐경우
// }
// 중첩 if문 - 첫번째 조건식이 맞을 경우 두번째 조건식을 실행
// if(w>s){                      //w>s = true 일때
//     if(str!==str2){           //str!==str2 = true 일때
//         console.log(str+str2) //마리마리얍 반환
//     }
//     else{                     //str!==str2 = false 일때
//         console.log(str)      //마리마리 반환
//     }
// }
// else{                         //w>s = false 일때
//     console.log(str2)         //얍 반환
// }
// 선택문 - 여러개의 경우의 수중 일치하는 데이터를 찾아 해당 코드 실행
// switch문 - 케이스마다 검사하며 만족하는 경우에 break해서 검사를 종료하고 해당되는 메세지를 출력
// switch(w+s){
//     case 15 : console.log(str+str2) //w+s= 15 일때
//     break                           //마리마리얍
//     case 16 : console.log(str)      //w+s= 16 일때
//     break                           //마리마리
//     case 17 : console.log(str2)     //w+s= 17 일때
//     break                           //얍
//     default : console.log(str2+str) //얍마리마리 전부 아닐경우
// }
// 반복문 - 특정한 조건을 만족할 때까지 코드를 반복
// while문 - (조건식)동안 실행할 코드를 담음
// while(i<=s){                    //s보다 작거나 같을때 까지 i가 1씩 증가
//     if(w>s){                    //w가 s 보다 클경우 코드 실행
//         console.log(str+str2)   //i가 s만큼 증가한 수만큼 실행
//     }                           //마리마리얍*5
//     i++
// }
// while(i<=s){                    //s보다 작거나 같을때 까지 i가 1씩 증가
//     console.log(str2+str2);     //얍얍*5
//     i++;
// }
// do while문 - 조건이 만족하면 종료
// do{
//     i+=w                           //do의 내용을 무조건 한 번 실행 후 while조건식에 따라 종료
// }                                  //i에 w를 더해서 대입
// while(i<=110){                     //i가 110보다 크거나 작을때 작업종료
//     console.log(str2+w)            //얍11
// }
// for문 - while문과 원리는 같지만 쓰기가 편해서 더 자주씀
// for(i=0; i<=w-1; i++){          //변수 i를 0으로 선언 후 i가 w-1이하가 될땍까지 1씩 더함
//     console.log(str2+s)         //얍*11 0부터 10까지 11번 반복
// }
// for(i=1; i<=s; i++){               //첫번째 조건이 만족할때까지 두번째 조건에 맞게 반복
//     for(let j=1; j<=w; j++){       //변수 j를 1으로 선언 후 j가 w이하가 될땍까지 1씩 더함
//         console.log(i+"행"+j+"열") //1행1열...4행11열
//     }
//     console.log(' ')               //두번째 조건이 끝날때마다 ' '반복 1행11열 2행1열
// }
//continue -  for, while문에서 제외하고 싶은 조건옆에 사용하게되면 다음으로 오는 코드를 건너뜀
// for(i=1; i<=10; i++){              //변수 i를 1으로 선언 후 i가 10이하가 될땍까지 1씩 더함
//     if(i%2==0) continue;           //i를 2로 나눳을 때 0이 나오는 걸 제외
//     console.log(i);                //1 3 5 7 9
// }
// console.log("End");                //1 3 5 7 9 End

const stri = "hello";
console.log(stri);
