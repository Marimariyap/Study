// 배열 자르기(.slice사용)
// var numbers= [1,2,3,4,5]
// var num1= 1
// var num2= 3

// var answer = 0
//     answer= numbers.slice(num1, num2+1)
//     // num2+1을 해준 이유 : num2가 3일때 3번째자리까지 자르기 때문에 그자리를 표시 하기위해 +1을해줌
//     // numbers.slice(num1, num2)=> [2,3]  numbers.slice(num1, num2+1)=>[2,3,4]
//     // num1부터 num2까지 자른 정수의 배열 나열
//     console.log(answer)

//특정 문자 제거하기
// var my_string = 'abcdef'
// var letter = 'f'

// var answer= 0
// var array= Array.from(my_string)
//     // 문자열을 배열로 변경
//     answer = array.filter(array=>array !==letter).join('')
//     // 문자 배열에 letter변수 값을 걸러서 다시 문자열로 변경 시켜줌
//     console.log(answer)

// 최댓값 만들기
// var numbers= [0, 31, 24, 10, 1, 9]
// var answer= []

// numbers.sort(function(a, b)  {
// // 배열 정렬 숫자의 크기 순으로 정렬하기 위해 아래의 함수 사용
//     if(a > b) return 1;
//     if(a === b) return 0;
//     if(a < b) return -1;
//   });
// answer= numbers.pop()*numbers.pop()
// // 배열 끝자리 두개를 곱해줌

// console.log(answer)

// 문자열안에 문자열
// var str1= "ab6CDE443fgh22iJKlmn1o"
// var str2= "6CD"

// var answer= 0
// answer= str1.indexOf(str2)===-1 ? 2:1
// // 특정 문자열(str2)이 존재하면 첫번째 str1[i]값 반환(2), 하지만 존재 하지 않으면 -1을 반환
// // .indexOf와 -1을 비교하여 맞을경우 2(특정문자열x) 아닐경우 1(특정문자열o)
// console.log(answer)

// 삼각형의 완성조건(1)
// var sides= [1, 3, 2]

// sides.sort(function(a, b){
//   if(a>b) return 1
//   if(a===b) return 0
//   if(a<b) return -1
// })
// // 배열의 숫자 크기대로 정렬
// if(sides[2]>=sides[0]+sides[1]){
//   // sides의 2번째 숫자가 0번째숫자+1번째 숫자보다 크거나 같을경우 2
//   console.log(2)
// }
//   else{
//     // 그 외 1
//     console.log(1)
//   }

// 문자열 정렬하기(1)
// var my_string= "hi12392"

// var str= my_string.match(/[0-9]/g).map(Number)
// // 정규 표현식(/[0-9]/)에서 특정 문자열 찾기(.match)
// // 정규 표현식 /[0-9]/는 모든 숫자를 매칭을 뜻함 /[^0-9]/는 부정을 뜻하는 ^를 붙여 모든 숫자를 제외한 문자만을 매칭 시켜줌
// // 그 후 발생할 모든 패턴에 대한 전체 검색을 뜻하는 플래그인 g를 붙여 사용
// // 각각의 요소에 대해 한번씩 순서대로 불러 그 함수의 반환값으로 새로운 배열을 만듦(.map)
// str.sort(function(a,b){
// // 배열을 유니코드 순서가 아닌 숫자의 크기대로 정렬
//   if(a>b) return 1
//   if(a===b) return 0
//   if(a<b) return -1
// })
//  console.log(str)

// 가장 큰 수 찾기
// var array= [1, 8, 3]

// var answer= 0
// var max= Math.max(...array)
// // 배열의 최대값 찾기(Math.max(...배열))대소문자 구분하기
// var maxindex= array.indexOf(max)
// // 배열의 주소 찾기(.indexOf)대소문자 구분하기
// answer= [max, maxindex]
// console.log(answer)

// 369게임
// var order= 29423

// var answer= 0
// var str= String(order)
// // 문자열로 변경
// var star= Array.from(str)
// // 문자열에서 각각의 배열로 변경
// answer= star.filter(star=>star ==='3' || star==='6' || star==='9').length
// // 배열(star)에 문자열('3','6','9')를 필터 해준 후 그 값의 길이(||로 구분하여 나눠줌)
// console.log(answer)

// 배열의 유사도
// var s1= ["a", "b", "c"]
// var s2= ["com", "b", "d", "p", "c"]

// var answer= 0
//     answer= s2.filter(s2=>s1.includes(s2)).length
//     // s1에 s2가 포함하는지 확인(.includes)한 후의 필터를 해준 후 그 값의 길이를 나타냄
//     console.log(answer)
//     // var answer= 0
//     // answer= s2.filter(s2=>s2===s1[0]||s2===s1[1]||s2===s1[2]).length
//     // return answer

// 모음 제거
// var my_string= "nice to meet you"

// var mor= ['a','e','i','o','u']
// // 모음의 배열 만들기
// var star= Array.from(my_string)
// // 문자열을 각각의 배열로 변경
// var answer= 0
// answer= star.filter(star=>!mor.includes(star)).join('')
// // mor에 star가 포함되는지 확인(.includes)한 후, 반대의(!) 남은문자만 남겨 다시 문자열로 변경(.join(''))
// console.log(answer)

// 문자열 정렬하기(2)
// var my_string= "heLLo"

// var answer= 0
// var star= [...my_string.toLowerCase()]
// // 문자열을 각각의 배열로 만든 후 소문자로 변경
// var answer= star.sort().join('')
// // 배열 정리후 다시 문자열로 변경
// console.log(answer)

// 대문자와 소문자
// var my_string= "abCdEfghIJ"

// var star= [...my_string]
// // 문자열을 배열로 만들기
// var answer= 0
// answer= star.map(char=>(char===char.toLowerCase() ? char.toUpperCase() : char.toLowerCase())).join('')
// // 각각의 요소에 호출해서 그 값을 변환(.map)하고 삼항연산자로 조건을 걸어줌
// // 인덱스값이 소문자일때 대문자로 아닐때는 소문자로 바꾸고 문자열로 바꿈
// console.log(answer)

// n의 배수 고르기
// var numlist= [2, 100, 120, 600, 12, 12]
// var n= 12

// var answer= 0
// var answer2= 0
// var ar=[]
// var i= 0
// for(i=0; i<=Math.max(...numlist); i++){
//     ar.push(i*n)

// }
// console.log(ar)
// // console.log(Math.max(...numlist))
// // 반복문으로 n의 배수의 배열 만듦
// // numlist.length가 아닌 Math.max(...numlist)를 해주어 더 큰 배수의 배열을 만들어줌
// answer= numlist.filter(numlist=>ar.includes(numlist))
// // numlist(배열)에 ar(배열)이 포함 되어있는지 확인 후 같은 숫자 필터
// // answer2= numlist.filter(num => num % n === 0);
// // n으로 나눳을때 0이 되면 n의 배수 이므로 numlist에 필터
// console.log(answer)

// 가위바위보
// var rsp= "205"

// var answer= []
// var rspar= [...rsp]
// // 문자열을 배열로
// answer= rspar.map(rspar=>{
// // (.map)을 사용해서 배열안에 값을 변환시켜줌
//     switch(rspar){
//         case '2':
//             return '0';

//         case '0':
//             return '5';

//         case '5':
//             return '2';
//     // switch문을 사용하여 조건을 걸어 값을 바꾼 후 다시 문자열로 바꿔줌
//     }}).join('')
//     console.log(answer)

// 중앙값 구하기
// var array= [9, -1, 0]
// var answer= 0
// var ar= []
//     ar= array.sort(function(a,b){
//         if(a>b) return 1
//         if(a===b) return 0
//         if(a<b) return -1
//     })[Math.floor(array.length / 2)]
// // ar= array의 배열을 숫자크기대로 정렬
// // [Math.floor(array.length / 2)]인덱스값의 가운데 값을 구함
// // ex)array.length=7일경우 / 2를 하면 3.5 거기서 소수점 반올림(5까지 버리는 듯)을 하여 3이나옴 =>array[3]
//     console.log(ar)

// 자릿수 더하기
// var n= 930211
// var answer=0
// var nar= ([...String(n)])
// // 문자열의 배열로 바꿔줌
// answer= nar.map(Number).reduce((a,c)=>a+c,0)
// // (.map)을 이용해 숫자형으로 바꿔주고 (.reduce)를 이용해 누산기(초기값 0)에 현재값을 다 더해줌
// console.log(answer)

// 숨어있는 숫자의 덧셈(1)
// var my_string= "1a2b3c4d123"

// var answer= 0
// var array= []
//     array= my_string.match(/[0-9]/g).map(Number)
// // 문자열을 (.map)을 사용 숫자로 변경후 (.match)를 사용하여 0~9까지 포함하는 숫자를 배열로 만듦
//     answer= array.reduce((a,c)=>a+c,0)
// // (.reduce)의 누산기를 사용, 누산기에 현재값을 모두 더함
//     console.log(answer)

// 직각삼각형 출력하기
// var a= []
// var answer= 0
// var i=0
//     for(i=1; i<=3; i++){
//         answer+='0'
//         console.log([...answer.substr(1)].map(answer=>(answer==='0'? '*':'')).join(''))
//     }

// 잘라서 배열로 저장하기
// var my_str= "abc1Addfggg4556b"
// var n= 6

// var array= [...my_str]
// var answer= []
//     while(array.length>0){
//     // while(조건)은 반복문이지만 조건이 들어감(t, f)
//     // arrray의 길이가 0보다 클 경우 반복
//         answer.push(array.splice(0,n).join(''))
//         //.splice([항목 삭제 위치], [삭제할 항목 수])를 사용하여 n의 크기만큼 잘라주고 문자열로 변환
//         console.log(answer)

//     }
//     console.log(answer)

// let strArr = my_str.split("");
// let ans = [];
// while(strArr.length > 0){
//    ans.push(strArr.splice(0,n).join(""));
//     }
//    console.log(ans)

// 배열 회전시키기
// var number= [4, 455, 6, 4, -1, 45, 6]
// var direction= "left"

// var answer= 0
//     answer= direction==='right' ? number.pop() : number.shift()
//     // direction이 'right'경우 참이면 .pop, 거짓이면 .shift
//             direction==='right' ? number.unshift(answer) : number.push(answer)
//     // direction이 'right'경우 참이면 answer값을 배열앞에 추가, 거짓이면 answer값을 배열뒤에 추가
//     console.log(number)

// 문자반복 출력하기
// var my_string= "hello"
// var n= 3

// var arr= [...my_string]
// // 각각의 배열로 변경
// var answer=[]
//         answer= arr.map(arr=>arr.repeat(n)).join('')
//         // 배열을 변환시킨다, (.repeat)문자열을 일정하게 반복하게, 그 후 배열합쳐서 문자열 만들기
//         console.log(answer)

// let w = 11
// let ar= w.toString(2) //1011(string)
// console.log (typeof(ar))
// let ar2= w.toFixed(2) //11.00(string)
// console.log (ar2)

// 중복된 문자 제거
// let my_string= "We are the world";

// let star= [...my_string];
// //배열로 만들기
// let set= new Set(star);
// //배열의 들어간 새로운 Set객체를 만들어줌(Set는 중복 데이터 저장을 허용하지 않는 자료구조)
// let answer= [...set].join(['']);
// //set을 배열로 다시 만들어준 후 문자열로 만들기
// console.log(answer)

// 인덱스 바꾸기
// let my_string= "I love you"
// let num1= 3
// let num2= 6

// let star= [...my_string]
// //배열로 만듦
// let answer= [star[num1], star[num2]]=[star[num2], star[num1]]
// //num1,num2의 인덱스를 num2,num1으로 강제 대입 ['o', ' '] => [' ', 'o']
// console.log(star.join(''))
// 다시 문자열로 변경

// 숫자 찾기
// let num= 123456;
// let k= 7;

// let nuar= String(num);                              //문자열로 변경
// let kst= String(k);                                 //숫자 !== 문자이기 때문에 문자열로 변경
// let answer= nuar.indexOf(kst);                      //문자열로 바뀐 num을 왼쪽부터 차례대로 검색해 kst의 값의 인덱스를 구함
//     console.log(answer === -1 ? -1 : answer+1);     //삼항 연산자를 이용하여 -1일땐 -1 원하는값을 찾았을땐 인덱스값을 구하는게 아닌
// answer이 -1인가 true (-1) : false (answer+1)        //숫자의 자리수를 찾아야 하므로 +1을 더해줌

// 7의 개수
// let array= [7,77,17];

// let answer= [];
// let i= 0;
// let ar= [...array.join('')];
// console.log(ar)
// console.log(typeof(ar[0]));
// console.log(ar.filter(ar => ar === '7').length);

// 문자열 계산하기
// let my_str= "3 + 4"

// const func= Function(`return ${my_str}`);           //eval을 대체하여 함수 생성자로 작성, 인자로는 변수만 들어가야 식이 완성되기 때문에 백틱을 사용
// console.log(func());                                //my_str을 변수로 리턴시켜 함수를 실행 시킴
// // console.log(eval(my_str));                       //eval를 사용하여 평가후 결과까지 얻을 수 있지만 eval에는 단점이 있음
//                                                     //단점 : 입력받은 문자열을 코드로 실행하기 때문에 입력값에 의해 코드의 실행 결과가 변경될 수 있음

//k의 개수
// let i= 3;
// let j= 10;
// let k= 2;

// let ar= [];
// let answer=0;

// for(i=i; i<j+1; i++){
//     ar.push(i);
// }
// answer=[...ar.join('')];
// console.log(answer);
// console.log(answer.filter(ar=>ar == String(k)).length);

//최댓값 만들기
// let number= [1, 2, -3, 4, -5];

// let ar=[];
// let answer=[];

// for(let i=0; i<number.length; i++){
//     for(let j=0; j<number.length; j++){
//         if(i!==j){
//             ar.push(number[i]*number[j]);
//         }
//     }
// }
// console.log(ar);
// console.log(Math.max(...ar));

//암호해독
// let cipher="dfjardstddetckdaccccdegk"
// let code=4
// let cip=0;
// let ar=[];
// let answer=0;
//     cip=[...cipher];
//     for(let i=1; i<cip.length; i++){
//        let j= i*code-1;
//        ar.push(cip[j]);
//     }
//     answer=(ar.filter(ar => ar !== undefined));
//     return answer.join('');

// cip=[...cipher];
// answer= cip.filter((cip, index) => (index+1)%code === 0).join('');
// console.log(answer);

//제곱수 판별하기
// let n= 144;

// let ar=[];
// let ar2=0;
// let answer=0;
// for(let i=0; i<n/10; i++){
//     ar.push(i*i);
//     ar2= ar.filter(ar => ar === n);

//     if(ar2[0]===n){
//         answer=1;
//     }else{
//         answer=2;
//     }
// }
// console.log(ar);
// console.log(answer);

//A로 B 만들기
// let before= "olleh";
// let after= "hello";

// let answer= 0;
// let aar=[...after].sort().join("");
// let bar=[...before].sort().join("");
// console.log(aar);
// console.log(bar);
// if(aar==bar){
//     answer= 1;
// }
// else{
//     answer= 0;
// }
// console.log(answer);

//진료 순서 정하기
//let emergency= [30, 10, 23, 6, 100];

//const emer= [...emergency].sort((a,b)=>b-a);

//console.log(emergency.map(a => emer.indexOf(a)+1));
//console.log(emer);

// 숨어있는 숫자의 덧셈 (2)
// let my_string= "aAb1B2cC34oOp"

// let answer= 0;

//     for(let i=0; i<my_string.length; i++){

//         let mys= 0;

//         while(!Number.isNaN(Number(my_string[i]))){
//             mys+= my_string[i];
//             i++;
//             // console.log(typeof(mys));
//         };
//         answer += Number(mys);
//         // console.log(answer);
//     }
//     console.log(answer);

//자연수 뒤집어 배열로 만들기
// let n= 	134510;

// let numar=[];
// let stn1= String(n);
// let stn= String(n).split('').reverse().map(stn=> Number(stn));
// console.log(stn);
// let nar= [...stn1].reverse();
// console.log(nar);
// for(var i=0; i<nar.length; i++){
//    numar.push(Number(nar[i]));
// }
// console.log(numar);

// 평균 구하기
// let arr= [1,2,3,4];

// let sum= 0;
// for(var i=0; i<arr.length; i++){
//    sum += arr[i]
// }

// console.log(sum/arr.length);

// 자릿수 더하기
// let n= 987;

// let answer= 0;
// let stn= [...String(n)];
// console.log(stn);
// for(var i=0; i<stn.length; i++){
//    answer+=Number(stn[i]);
//    console.log(typeof(Number(stn[i])));
// }
// console.log(answer);

//정수 내림차순으로 배치하기
// let n= 118372;

// console.log(Number([...String(n)].sort((a,b)=>b-a).join('')));

// let numbers= 'onetwothreefourfivesixseveneightnine';

// const num= ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

// for(var i=0; i<num.length; i++){
//     numbers= numbers.split(num[i]).join(i);
// }
// console.log(typeof(numbers));

//점의 위치 구하기
// let dot= [-2, -4];

// let answer= 0;

// for(var i= 0; i<dot.length; i++){
//     answer= dot[i] > 0 ? 1 : 3
// }
// if(dot[0] < 0 && dot[1] > 0){
//     answer= 2
// }else if(dot[0] > 0 && dot[1] < 0){
//     answer= 4
// }
// console.log(answer);

//한 번만 등장한 문자
// let s= 'aabbcc'

// let sar= [...s];
// let answer= [];

// sar.forEach((i)=>{
//     if(sar.indexOf(i)===sar.lastIndexOf(i)){
//         answer.push(i);
//     }
// });
// console.log(answer.sort().join(''));

// 문자열 내 p와 y의 개수
// let s= "pPoooyY"

// let sup= s.toUpperCase() ? s.toUpperCase() : s.toUpperCase;
// let supar=[...sup];
// let p= supar.filter(ar=> ar==='P');
// let y= supar.filter(ar=> ar==='Y');
// if(p.length===y.length){
//     console.log(true);
// }else {
//     console.log(false);
// }

// 최빈값 구하기
// let array= [1,2,1,1,2];

// const arr = array.reduce((accu, array) => {
//     console.log('누산값',accu, '배열', array, accu[array]);
//     accu[array] = (accu[array] || 0)+1;
//     return accu;
//   }, {});

// console.log(arr);
// let arkey= Object.keys(arr).sort((a,b)=> arr[b]-arr[a]);
// console.log(arkey);
// console.log(arr[arkey[0]]);             //arr[arkey[0]] -> arr Object에 key값을 넣어 value을 알수 있다
// console.log(arr[arkey[1]]);
// if (arr[arkey[0]] === arr[arkey[1]]){
//     console.log(-1);
// }else{
//     console.log(Number(arkey[0]));
// }

// 분수의 덧셈
// let numer1= 1;
// let denom1= 2;

// let numer2= 3;
// let denom2= 4;

// const top= (numer1*denom2) + (numer2*denom1);
// console.log("top", top);
// const bom= denom1*denom2;
// console.log("bom", bom);

// let min=0;
// if(top<bom){
//     min=top;
//     console.log("min", min);
// }else{
//     min=bom;
//     console.log("min", min);
// }
// while(true){
//     if(top%min === 0 && bom%min === 0){
//         console.log([top/min, bom/min]);
//     }
//     // min-=1;
// }

// 제일 작은 수 제거하기
// let arr=[4,2,1,3];

// let leng=arr.length;
// let min=arr[0];

// while(leng--){
//     if(arr[leng] < min){
//         min= arr[leng];
//     }
// }

// for(var i=0; i<arr.length; i++){
//     if(arr[i]===min){
//         arr.splice(i,1);
//         i--;
//     }
// }

// if(arr.length===0){
//     arr.push(-1);
//     console.log(arr);
// }else{
//     console.log(arr);
// }

// let num=63;
// let bucket = [];
// let answer=[];

// 	for(let i = 1; i<= num/2; i++){
// 		if(num % i === 0) {
// 			bucket.push(i);
// 		}
// 	}
// 	answer.push(...bucket, num);

//     console.log(answer.length);

// 체육복
// let n= 5; let lost=[2,4]; let reserve= [3];

// let answer= 0;

// // const a=reserve.includes(lost);
// // const lost_a= lost.sort((a,b)=>a-b).filter((lost)=> !reserve.includes(lost));
// // let reserve_a= reserve.sort((a,b)=>a-b).filter((reserve)=>!lost.includes(reserve));
// const lost_a= lost.sort((a,b)=> a-b);
// let reserve_a= reserve.sort((a,b)=>a-b);
// const last_lost=lost_a.filter((lost)=>{
//     const lend= reserve_a.find((reserve)=>Math.abs(reserve - lost)==1);
//     console.log('빌려줄수있는사람', lend);

//     if(!lend){
//         return lost;
//     }

//     reserve_a= reserve_a.filter((reserve)=> reserve !== lend);
//     console.log(reserve_a);
// });
// console.log('없는사람', last_lost);
// console.log('없는사람 수', last_lost.length);
// answer= n-last_lost.length;
// console.log(answer);

// 피자 나눠 먹기 (2)
// let n=10;

// for(var i=1; i<=n; i++){
//     if((i*6)%n===0){
//        Math.floor(i)
//     }
// }

// 피자 나눠 먹기 (3)
// let n=10;
// let slice=7;

// let eat= Math.floor(n/slice);

// if(n%slice>=1){
//     console.log(eat+1);
// }else{
//     console.log(eat);
// }

// 피자 나눠 먹기 (1)
// let n=1;

// console.log(Math.ceil(n/7));

// 아이스 아메리카노
// let money=15000;

// let ice=5500;
// let share=Math.floor(money/ice);
// let rest=Math.floor(money%ice);
// console.log([share, rest]);

// 옷가게 할인 받기
// let price= 580000;

// let five= Math.floor(price*0.05);
// let ten= Math.floor(price*0.1);
// let twenty= Math.floor(price*0.2);
// let answer=0;

// if(price<99999){
//     answer=price;
// }
// else if(price>=100000 && price<=299999){
//     answer=Math.floor(price-five);
// }else if(price>=300000 && price<=499999){
//     answer=Math.floor(price-ten);
// }else if(price>=500000){
//     answer=Math.floor(price-twenty);
// }
// console.log(answer);

// 개미군단
// let hp= 999;

// const one= Math.floor(hp/5);
// const two= Math.floor((hp - (one*5))/3);
// const three= hp - (one*5) - (two*3);
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(one+two+three);

// 순서쌍의 개수
// let n=20;

// arr=[];
// for(var i=0; i<=n; i++){
//     for(var j=0; j<=n; j++){
//         if(i*j===n){
//             arr.push(i);
//         }
//     }
// }
// console.log(arr.length);

//외계행성의 나이
// let age= 0;

// let arr= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
// let age_arr1=[];
// let answer= [];

// let age_arr= [...String(age)];
// console.log("age_arr", age_arr);

// for(var i=0; i<age_arr.length; i++){
//     age_arr1.push(Number(age_arr[i]));
//     console.log("number", age_arr1[i]);
//     answer.push(arr[age_arr1[i]]);
// }
// console.log(answer.join(''));

// 모스부호 (1)
// const morse = {
//     '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
//     '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
//     '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
//     '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
//     '-.--':'y','--..':'z'
// }
// let letter= ".... . .-.. .-.. ---";
// let answer= " ";

// for(let i = 0; i < letter.length; i++){
//     answer += morse[letter[i]];
// }
// console.log(answer);

// let letarr= letter.split(' ').map(letarr=>morse[letarr]).join('');

// 2차원으로 만들기
// let num_list= [1,2,3,4,5,6,7,8];
// let n= 2;

// let arr= [];
// function re(){
//     if(num_list.length!==0){
//         arr.push(num_list.splice(0,n));
//         re();
//     }else if(num_list===[]){
//         return;
//     }
// }

// re();
// console.log(arr);

// 약수의 합
// let n=3000;

// let answer=0;
// for(var i=1; i<=n; i++){
//     if(n%i===0){
//         answer+=i;
//     }
// }
// console.log(answer);

// 나누어 떨어지는 숫자 배열
// let arr=[3,2,6];
// let divisor= 10;

// let answer=[];

// answer=arr.filter((arr)=> arr%divisor===0).sort((a,b)=>a-b);
// console.log(answer.length===0 ? [-1] : answer);

// for(var i=0; i<arr.length; i++){
//     if(arr[i]%divisor===0){
//         answer.push(arr[i]);
//     }else if(arr[i]%divisor>=1){
//         answer.push(-1);
//     }
// }
// console.log(answer);

// let s='1210';
// // console.log(Math.floor(s));
// if(s.length!==4 && s.length!==6){
//     return false;
// }
// for(var i=0; i<s.length; i++){
//     if(isNaN(Number(s[i]))){
//         return false;
//     }else{
//         return true;
//     }
// }

// 이진수 더하기
// let bin1="10";
// let bin2="11";

// let binsum=parseInt(bin1,2)+ parseInt(bin2,2);

// console.log(binsum.toString(2));

// 정수 제곱근 판별
// let n= 121

// let nsq=Math.sqrt(n);
// console.log(nsq);

// console.log(n%nsq===0 ? (nsq+1)*(nsq+1) : -1);

// 두 정수 사이의 합
// let a=5;
// let b=3;

// let arr= 0;

// if(a===b){
//     arr = a;
// }else if(a<b){
//     for(var i=a; i<=b; i++){
//         arr += i;
//     }
// }else if(a>b){
//     for(var i=b; i<=a; i++){
//         arr += i;
//     }
// }
// console.log(arr);

// x만큼 간격이 있는 n개의 숫자
// let x= -4;
// let n= 2;

// let arr= [];
// for(var i= 1; i<=n; i++){
//     arr.push(i*x);
// }
// console.log(arr);

//수박수박수박수박수박수?

// let n= 3;

// let melon= '수박';
// let arr= [];
// for(var i=0; i<n; i++){
//     arr.push(melon);
// }
// console.log(arr);
// slicemelon=arr.join('').slice(0, n);
// console.log(slicemelon);

// 문자열 내림차순으로 배치하기
// let s= "Zbcdefg";

// let arr= [...s].sort((a,b)=> a>b ? -1 : 1).join('');
// console.log(arr);

// 약수의 개수와 덧셈
// let left= 13;
// let right= 17;

// let answer= 0;
// for(var i=left; i<=right; i++){
//     if(Number.isInteger(Math.sqrt(i))){          // 제곱근이 정수면 약수의 개수가 홀수다
//         answer-= i;
//     }else{
//         answer+= i;
//     }
// }
// console.log(answer);

// 핸드폰 번호 가리기
// let phone_number= '01033334444';
// let arr= [...(phone_number)];
// for(var i=0; i<arr.length-4; i++){
//     arr[i]='*';

// }
// console.log(String(arr.join('')));

// 주사위의 갯수
// let box= [10,8,6];
// let n= 3;

// let a=1;
// for(var i=0; i<box.length; i++){
//     a*=(Math.floor(box[i]/n));
// }
// console.log(a);

// 하샤드 수
// let arr= 13;

// let arr2ed= [...String(arr)];
// // console.log(arr2ed);
// let arrsum= 0;
// for(var i=0; i<arr2ed.length; i++){
//     arrsum+=Number(arr2ed[i]);
// }
// if(arr%arrsum===0){
//     console.log(true);
// }else{
//     console.log(false);
// }

// 서울에서 김서방 찾기
// let seoul= ["Jane", "Kim"];
// console.log('김서방은 ' + seoul.indexOf('Kim') +'에 있다');

// 크기가 작은 부분 문자열
// let t='3141592';
// let p='271'

// let a=[];
// let b=[];
// let answer=[];
// for(var i=0; i<t.length; i++){
//     a.push(t.slice(i,(i+p.length)));
//     if(a[i].length===p.length){
//         b.push(a[i]);
//     }
//     if(Number(b[i])<=Number(p)){
//         answer.push(b[i]);
//     }
// }
// console.log(answer.length);

// 같은 숫자는 싫어
// let arr = [1, 1, 1, 3, 3, 0, 1, 1];

// let arpop = 0;
// let answer = [];
// for (var i = 1; i < arr.length; i++) {
//   if (arr[i] !== arr[i - 1]) {
//     answer.push(arr[i - 1]);
//   }
// }
// arpop = arr.pop();
// console.log(answer.push(arpop));
// console.log(answer);

// 음양 더하기
// let absolutes = [1, 2, 3];
// let signs = [false, false, true];
// let sum = [];
// let answer = 0;
// for (var i = 0; i < absolutes.length; i++) {
//   if (signs[i] === false) {
//     signs[i] = "-";
//   } else if (signs[i] === true) {
//     signs[i] = "+";
//   }
//   sum.push(Number(signs[i] + absolutes[i]));
//   answer += sum[i];
// }
// console.log(sum);
// console.log(answer);

// 팩토리얼
// let n = 50000;

// let fact = 1;
// let answer = 0;
// for (var i = 1; i <= 10; i++) {
//   fact = fact * i;
//   if (fact <= n) {
//     answer = i;
//   }
// }
// console.log(answer);

// 콜라츠 추측
// let n = 626331;

// let a = 0;
// for (var i = 1; i <= 500; i++) {
//   if (n !== 1) {
//     n = n % 2 === 0 ? n / 2 : n * 3 + 1;
//     a = i;
//     // console.log(a);
//     if (i >= 500) {
//       a = -1;
//       //   console.log(a);
//     }
//   }
// }
// console.log(a);

// 합성수 찾기
// let n = 10;

// let answer = 0;
// for (var i = 1; i <= n; i++) {
//   let count = 0;
//   for (var j = 0; j <= i; j++) {
//     if (i % j === 0) {
//       count++;
//     }
//   }
//   if (count >= 3) {
//     answer += 1;
//   }
// }
// console.log(answer);

// 없는 숫자 더하기
// let numbers = [1, 2, 3, 4, 6, 7, 8, 0];

// let num = 45;
// let answer = 0;
// answer = num - numbers.reduce((a, c) => a + c, 0);
// console.log(answer);

// 가운데 글자 가져오기
// let s = "qwer";

// answer = [];
// if (s.length % 2 !== 0) {
//   answer = [...s].splice(s.length / 2, 1);
// } else {
//   answer = [...s].splice(s.length / 2 - 1, 2);
// }
// console.log(answer);

// 가까운 수
// let array = [3, 10, 28];
// let n = 20;

// let min = Math.min(...array.map((i) => Math.abs(n - i)));
// let answer = array.sort((a, b) => a - b).find((a) => Math.abs(a - n) === min);
// console.log(answer);

// 두 개 뽑아서 더하기
// let numbers = [5, 0, 2, 7];

// let num = [];
// let answer = [];
// for (var i = 0; i < numbers.length; i++) {
//   for (var j = 0; j < i; j++) {
//     num.push(numbers[i] + numbers[j]);
//   }
// }
// answer = [...new Set(num)].sort((a, b) => a - b);
// console.log(answer);

// 최댓값과 최솟값
// let s = "-1 -2 -3 -4";
// let s2 = s
//   .split(" ")
//   .map((i) => Number(i))
//   .sort((a, b) => a - b);
// console.log(String(s2[0] + " " + s2[s2.length - 1]));

// 내적
// let a = [-1, 0, 1];
// let b = [1, 0, -1];

// let answer = 0;
// for (var i = 0; i < a.length; i++) {
//   answer += a[i] * b[i];
// }
// console.log(answer);

// 소인수분해
// let n = 12;

// let prime = [];
// for (let i = 2; i <= Math.sqrt(n); i++) {
//   while (n % i === 0) {
//     prime.push(i);

//     n /= i;
//   }
// }
// if (n >= 2) {
//   prime.push(n);
// }
// let answer = [...new Set(prime)];
// console.log(answer.sort((a, b) => a - b));

// 부족한 금액 계산하기
// let price = 2;
// let money = 20;
// let count = 4;

// let sum = 0;
// let answer = 0;
// for (var i = 1; i <= count; i++) {
//   sum += price * i;
// }
// if (sum > money) {
//   answer = sum - money;
// } else {
//   answer;
// }
// console.log(answer);
// console.log(sum);

// JadenCase 문자열 만들기
// let s = "3people unFollowed me";

// s = s
//   .toLowerCase()
//   .split(" ")
//   .map((i) => i.charAt(0).toUpperCase() + i.substring(1))
//   .join(" ");
// console.log(s);

// 외계어 사전
// let spell = ["p", "o", "s"];
// let dic = ["def", "dww", "dzx", "loveaw"];

// console.log(
//   dic.filter((i) => spell.every((j) => i.includes(j))).length === 1 ? 1 : 2
// );

//컨트롤 제트
// let s = "10 Z 20 Z 1";

// let a = 0;
// s = s.split(" ");
// console.log(s);
// for (var i = 0; i < s.length; i++) {
//   if (s[i] === "Z") {
//     a -= +s[i - 1];
//   } else {
//     a += +s[i];
//   }
// }
// console.log(a);

// 로그인 성공?
// let id_pw = ["meosseugi", "1234"];
// let db = [
//   ["rardss", "123"],
//   ["yyoom", "1234"],
//   ["meosseugi", "1234"],
// ];

// let answer = "fail";
// db.forEach((E) => {
//   if (E[0] === id_pw[0] && E[1] !== id_pw[1]) {
//     answer = "wrong pw";
//   } else if (E[0] === id_pw[0] && E[1] === id_pw[1]) {
//     answer = "login";
//   }
// });
// answer;
// console.log(answer);
// const [id, pw] = id_pw;
// const map = new Map(db);
// console.log(map.has(id) ? (map.get(id) === pw ? "login" : "wrong pw") : "fail");
// console.log(map.get(id));

// 등수 매기기
// let score = [
//   [80, 70],
//   [90, 50],
//   [40, 70],
//   [50, 80],
// ];

// let answer = new Array(score.length).fill(1);
// const avg = score.map((e) => (e[0] + e[1]) / 2);

// for (var i = 0; i < avg.length; i++) {
//   for (var j = 0; j < avg.length; j++) {
//     if (avg[i] < avg[j]) {
//       answer[i]++;
//     }
//   }
// }
// console.log(answer);

// Leet code

// let nums = [-1, -2, -3, -4, -5];
// target = -8;

// let answer = [];
// for (var i = 0; i < nums.length; i++) {
//   for (var j = i + 1; j < nums.length; j++) {
//     if (target === nums[i] + nums[j]) {
//       answer.push(i, j);
//     }
//   }
// }
// console.log([...new Set(answer)]);

// let nums = [0, 1, 2, 2, 3, 0, 4, 2],
//   val = 2;
// for (var i = 0; i < nums.length; i++) {
//   if (nums[i] === val) {
//     nums.splice(i, 1);
//     i--;
//   }
// }
// console.log(nums);

// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// for (var i = 0; i < nums.length; i++) {
//   if (nums[i] === nums[i + 1]) {
//     nums.splice(i, 1);
//     i--;
//   }
// }
// console.log(nums);

// let list1 = [],
//   list2 = [0];

// let list = list1.concat(list2);
// list.sort((a, b) => a - b);
// console.log(list);

// let nums = [1, 2, 3, 4];
// let sum = 0;
// for (var i = 0; i < nums.length; i++) {
//   sum = sum + nums[i];
//   nums[i] = sum;
// }
// console.log(nums);

// let accounts = [
//   [1, 5],
//   [7, 3],
//   [3, 5],
// ];

// let answer = 0;
// for (var i = 0; i < accounts.length; i++) {
//   let sum = 0;
//   for (var j = 0; j < accounts[i].length; j++) {
//     sum += accounts[i][j];
//   }
//   answer = Math.max(sum, answer);
// }
// console.log(answer);

// let n = 15;
// let arr = [];
// for (var i = 1; i <= n; i++) {
//   arr.push(i);
// }
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] % 3 === 0 && arr[i] % 5 !== 0) {
//     arr[i] = "Fizz";
//   } else if (arr[i] % 3 !== 0 && arr[i] % 5 === 0) {
//     arr[i] = "Buzz";
//   } else if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
//     arr[i] = "FizzBuzz";
//   } else {
//     arr[i] += "";
//   }
// }
// console.log(arr);

// let num = 14;

// let count = 0;
// while (num !== 0) {
//   num % 2 === 0 ? (num /= 2) : num--;
//   count += 1;
// }
// console.log(count);

// let x = 8;
// x = Math.sqrt(x);
// console.log(x);

// let nums = [4,1,2,1,2];

// let answer=0;
// for(var i=0; i<nums.length; i++){
//   if(nums[i]===)
// }

// let n = 16;

// let x = 0;
// while (4 ** x <= n) {
//   4 ** x === n ? console.log(true) : x++;
// }
// console.log(false);

// let s = "Hello";
// s = s.toLowerCase();
// console.log(s);

// let grid = [
//   [3, 2],
//   [1, 0],
// ];

// let count = 0;
// for (var i = 0; i < grid.length; i++) {
//   for (var j = 0; j < grid[i].length; j++) {
//     if (0 > grid[i][j]) {
//       console.log(grid[i][j]);
//       count++;
//     }
//   }
// }
// console.log(count);

// let nums = [1, 2, 1];
// let copy = nums;

// nums = nums.concat(nums);
// console.log(nums);

// let nums = [-4, -1, 0, 3, 10];
// nums = nums.map((i) => i ** 2).sort((a, b) => a - b);
// console.log(nums);

// let arr = [3, 8, -10, 23, 19, -4, -14, 27];

// let abs = Infinity;
// let answer = [];
// arr = arr.sort((a, b) => a - b);
// for (var i = 0; i < arr.length - 1; i++) {
//   const min = arr[i + 1] - arr[i];
//   if (min < abs) {
//     abs = min;
//     answer = [[arr[i], arr[i + 1]]];
//   } else if (min === abs) {
//     answer.push([arr[i], arr[i + 1]]);
//   }
// }

// console.log(answer);

// let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];

// digits = String(BigInt(digits.join("")) + BigInt(1)).split("");
// console.log(digits);

// let s = "luffy is still joyboy";

// s = s.split(" ").filter((e) => e !== "");
// console.log(s[s.length - 1].length);

// let nums = [0];

// let even = [];
// let odd = [];
// for (var i = 0; i < nums.length; i++) {
//   if (nums[i] === 0) {
//     even.push(nums[i]);
//   } else if (nums[i] % 2 === 0) {
//     even.push(nums[i]);
//   } else {
//     odd.push(nums[i]);
//   }
// }
// console.log(even.concat(odd));

// let num1 = "11",
//   num2 = "123";

// console.log(String(BigInt(num1) + BigInt(num2)));

// let nums = [-1, 0, 1, 2, -1, -4];

// let answer = [];
// for (var i = 0; i < nums.length; i++) {
//   if (nums[i] + nums[i + 1] + nums[i + 2] === 0) {
//     answer.push([nums[i], nums[i + 1], nums[i + 2]]);
//   }
// }
// console.log(answer);

// let nums = [555, 901, 482, 1771];

// nums = nums.filter((i) => i.toString().length % 2 === 0).length;
// console.log(nums);
// nums = nums.map((i) => i.toString()).filter((i) => i.length % 2 === 0);
// console.log(nums);
// let arr = [];
// let count = 0;
// for (var i = 0; i < nums.length; i++) {
//   arr = nums[i].toString();
//   if (arr.length % 2 === 0) {
//     count++;
//   }
// }
// console.log(count);

// let arr = [
//   6, 0, 7, 0, 7, 5, 7, 8, 3, 4, 0, 7, 8, 1, 6, 8, 1, 1, 2, 4, 8, 1, 9, 5, 4, 3,
//   8, 5, 10, 8, 6, 6, 1, 0, 6, 10, 8, 2, 3, 4,
// ];

// arr = arr.sort((a, b) => a - b);
// console.log(arr);
// let five = arr.length * 0.05;
// let sum = 0;
// console.log(five);
// for (var i = five; i < arr.length - five; i++) {
//   sum += arr[i];
// }
// console.log(sum / (arr.length - five * 2));

// let nums = [-1, 0, 3, 5, 9, 12],
//   target = 9;

// let start = 0;
// let end = nums.length - 1;

// while (start <= end) {
//   let mid = Math.floor((start + end) / 2);

//   if (target == nums[mid]) {
//     return mid;
//   } else if (target > nums[mid]) {
//     start = mid + 1;
//   } else {
//     end = mid - 1;
//   }
// }
// return -1;

// let start = 0;
// let end = n;
// let mid = 0;
// while (end - start > 1) {
//   mid = Math.floor((start + end) / 2);
//   if (isBadVersion(mid)) {
//     end = mid;
//   } else {
//     start = mid;
//   }
// }
// return end;

// let nums = [1, 1, 2];
// nums = Array.from(new Set(nums)).sort((a, b) => a - b);
// console.log(nums);
// nums.length >= 3 ? nums.length - 3 : nums.length - 1;
// if (nums.length >= 3) {
//   nums = nums[nums.length - 3];
//   console.log(nums);
// } else {
//   nums = nums[nums.length - 1];
//   console.log(nums);
// }

// let s = ["h", "e", "l", "l", "o"];

// s = s.reverse();
// console.log(s);
// let nums = [1, 3, 5, 6],
//   target = 5;

// let start = 0;
// let end = nums.length - 1;

// while (start <= end) {
//   let mid = Math.floor(start + (end + start)) / 2;
//   if (target === nums[mid]) {
//     console.log(mid);
//   } else if (target > nums[mid]) {
//     start = mid + 1;
//   } else {
//     end = mid - 1;
//   }
// }
// console.log(start);

// let s = "     ";
// console.log(s.split(" ").filter((i) => i.trim()).length);

// let words = ["leetcode", "win", "loops", "success"],
//   pref = "code";
// words = words.filter((i) => i.startsWith(pref)).length;
// console.log(words);

// let a =
//     "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
//   b =
//     "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";

// a = BigInt("0b" + a) + BigInt("0b" + b).toString(2);
// console.log(a);

// let nums = [1, 15, 6, 3];

// let sum = 0;
// let arr = 0;
// for (var i = 0; i < nums.length; i++) {
//   sum += nums[i];
// }
// arr = [...nums.join("")];
// for (var i = 0; i < arr.length; i++) {
//   sum -= +arr[i];
// }
// console.log(sum);
// let sum_1 = nums.reduce((a, c) => a + c, 0);
// let sum_2 = nums
//   .join("")
//   .split("")
//   .reduce((a, c) => a + +c, 0);

// console.log(sum_1 - sum_2);

// let sentence = "The quick brown fox jumped over the lazy dog";
// const vowelSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
// // console.log(vowelSet);
// sentence = sentence
//   .split(" ")
//   .map((item, index) => {
//     return (
//       (vowelSet.has(item[0])
//         ? item + "ma"
//         : item.substring(1) + item[0] + "ma") + "a".repeat(index + 1)
//     );
//   })
//   .join(" ");
// console.log(sentence);
// sentence = sentence.split(" ").map((i) => i + "ma");
// console.log(sentence);
// let arr = [];
// for (var i = 0; i < sentence.length; i++) {
//   arr.push(sentence[i] + "a".repeat(i));
// }
// console.log(arr.join(" "));

// let nums = [0, 0, 1];
// for (var i = nums.length - 1; i >= 0; i--) {
//   if (nums[i] === 0) {
//     nums.push(0);
//     nums.splice(i, 1);
//   }
// }
// console.log(nums);

// let s = "Let's take LeetCode contest";

// let arr = s.split(" ");
// console.log(arr);
// arr=arr.map((i) => i.split("").reverse().join("")).join(" ");
// console.log(arr);

// let arr = [];

// for (var i = 0; i < s.length; i++) {
//   arr.push(s[i].split("").reverse().join(""));
// }
// console.log(arr.join(" "));

// let n = 2;

// let arr = [];
// let ar = 0;
// let count = 0;
// for (var i = 0; i <= n; i++) {
//   arr.push(i.toString(2));
//   ar = arr.map((i) => i.split("").filter((i) => i === "1").length);
// }
// console.log(ar);
// let count = i
//     .toString(2)
//     .split("")
//     .filter((i) => i === "1").length;
//   arr.push(count);

// let nums = [1, 2, 3, 4];
// console.log(nums.length !== new Set(nums).size);

// let s = "is2 sentence4 This1 a3";

// let arr = s
//   .split(" ")
//   .sort((a, b) => a[a.length - 1] - b[b.length - 1])
//   .map((i) => i.slice(0, i.length - 1))
//   .join(" ");
// console.log(arr);

// let address = "1.1.1.1";
// address = address.split(".").join("[.]");
// console.log(address);

// let n = 234;

// let mul = 1;
// let sum = 0;
// n = String(n).split("");

// console.log(n);
// for (var i = 0; i < n.length; i++) {
//   mul *= +n[i];
//   sum += +n[i];
// }
// console.log(mul - sum);

// let nums = [13, 25, 83, 77];
// nums = nums.join("").split("");
// console.log(nums);

// let num = 0;
// let num_2 = +String(num).split("").reverse().join("");
// let num_3 = +String(num_2).split("").reverse().join("");
// console.log(num_3);
// if (num === num_3) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let celsius = 36.5;

// let kelvin = celsius + 273.15;
// let fahrenheit = celsius * 1.8 + 32.0;

// console.log([kelvin, fahrenheit]);

// let nums = [8, 19, 4, 2, 15, 3],
//   original = 2;

// if (!nums.includes(original)) {
//   console.log(original);
// } else {
//   let sum = original * 2;

//   while (nums.includes(sum)) {
//     sum = sum * 2;
//   }
//   console.log(sum);
// }

// let num = 121;

// let arr = String(num).split("");
// let count = 0;
// for (var i = 0; i < arr.length; i++) {
//   if (num % arr[i] === 0) {
//     count++;
//   }
// }
// console.log(count);

// let operations = ["--X", "X++", "X++"];

// let x = 0;
// let a = operations.reduce((acc, curr) => (curr[1] === "+" ? ++acc : --acc), 0);
// let b = operations.map((i) => {
//   if (i.includes("+")) {
//     x += 1;
//   } else {
//     x -= 1;
//   }
// });
// console.log(x);

// let nums = [0, 2, 1, 5, 3, 4];
// let a = nums.map((i) => nums[i]);
// console.log(a);

// let word = "xyxzxe",
//   ch = "z";

// if (word.includes(ch)) {
//   word = word.split("");

//   let arr = word.slice(0, word.indexOf(ch) + 1).reverse();
//   let arr_2 = word.slice(word.indexOf(ch) + 1, word.length);
//   console.log(arr.concat(arr_2).join(""));
// } else {
//   console.log(word);
// }

// let nums = [4, 1, 2, 1, 2];
// nums = nums.sort();
// console.log(nums);
// for (var i = 0; i < nums.length; i++) {
//   if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) {
//     console.log(nums[i]);
//   }
// }

// let low = 3,
//   high = 7;

// let count = 0;
// for (var i = low; i <= high; i++) {
//   if (i % 2 !== 0) {
//     count++;
//   }
// }
// console.log(count);

// let s = "Hello how are you Contestant",
//   k = 4;

// s = s.split(" ").slice(0, k).join(" ");
// console.log(s);

// let n = 886996;
// n = n.toString().split("");
// console.log(n);
// let sum = 0;
// for (var i = 0; i < n.length; i++) {
//   if (i % 2 !== 0) {
//     sum += -n[i];
//   } else {
//     sum += +n[i];
//   }
// }
// console.log(sum);
