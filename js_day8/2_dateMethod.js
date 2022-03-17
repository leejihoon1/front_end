//new Date()로 실행한 결과값 형식은 toString() 생략된 문자열입니다.
//현재시간 : 운영체제에 설정된 시간.
console.log(new Date())     
//Thu Mar 17 2022 10:30:42 GMT+0900, 요일 월 일 년도 시:분:초 GMT(그리니치 천문대) + 또는 - 시간
//날짜 지정 : 년도,월,일(단, 월 0~11입니다.
console.log(new Date(2002,05,01)) //Sat Jun 01 2002 00:00:00 GMT+0900 (대한민국 표준시) -> 6월
//날짜 시간 지정 : 년도,월,일,시,분,초
console.log(new Date(2022,02,16,9,30,25))   //Wed Mar 16 2022 09:30:25 GMT+0900 (3월)
//getTime 메소드 : 1970년 1월1일 기준으로 지나온 시간을 ms 단위로 계산하여 리턴.
console.log(new Date().getTime())
//세계표준시
console.log(new Date().toUTCString()) //Thu, 17 Mar 2022 01:42:16 GMT
//세계 표쥰시 : 출력형식이 다릅니다.
console.log(new Date().toISOString()) // 2022-03-17T01:43:48.561Z
//운영체제에 설정된 국가에 맞는 형식
console.log(new Date().toLocaleString()) //2022. 3. 17. 오전 10:44:50
//get 메소드
const today = new Date();
console.log(today.getFullYear()); //2022년
console.log(today.getMonth());      //2월 (3월아므로 값은 2) 
console.log(today.getDate());       //17일
console.log(today.getHours());  //getMinute(분), getSeconds(초) 메소드도 있습니다. //10시
console.log(today.getDay());    // 요일결과 4 (목요일) 0(일)~6(토) 
//몇년 전or후, 몇달 전or후, 몇일 전or후, 몇시간 전or후.. : set메소드
today.setFullYear(today.getFullYear()+2); //현재 today에서 2년 후
console.log(today);
today.setFullYear(today.getFullYear()-2); //현재 today에서 2년 전
console.log(today);

//오늘 날짜에서 15일 이후
today.setDate(today.getDate()+15);
console.log(today);

// 출생일에서 3000일 기념일
let mybirth = new Date(1989,04,03) //내 생일 : 1989년 5월 3일
console.log('나의 생일 : ' + mybirth.toLocaleString());
mybirth.setDate(mybirth.getDate()+3000);
console.log('탄생 3000일 기념일 : ' + mybirth.toLocaleString());

//실기문제 : 오늘 날짜를 년도 4자리, 월 2자리, 일 2자리
const today2 = new Date();
const year = today2.getFullYear();
const month = today2.getMonth()+1;
const date_ = today2.getDate();
console.log(year.toString() + month.toString().padStart(2,0) + date_.toString().padStart(2,0));

const month2 = (today2.getMonth()+1).toString().padStart(2,0);
const date2 = (today2.getDate().toString().padStart(2,0));
//필요한 값으로 배열을 만들고 join메소드로 연결시켜 문자열을 생성합니다. (연결기호는 없으므로 '')
console.log([year,month2,date2].join(''));
console.log([year,month2,date2].join('-'));
//기억하기 : 배열 -> 문자열로 join , 문자열 -> 배열 split

console.log(new Date('2022-03-03'))
console.log(new Date('2022-03-06')-new Date('2022-03-03')) // 결과는 타임스탬프(Timestamp)
let diff =new Date('2022-03-06')-new Date('2022-03-03')
const oneday_timestamp =  1*24*60*60*1000; //1일 = 24시간 *60분*60초*1000밀리초
console.log(oneday_timestamp)
console.log(diff/oneday_timestamp)  //두 날짜의 간격을 '일'로 구합니다.


