const fruits=['Banana','Orange','Apple','Mango']
console.log('1.toString')
console.log(fruits.toString())
console.log('2.join')
console.log(fruits.join('*')) // 지정된 문자열 '*'을 이용하여 배열값들을 연결합니다.
let fruit = fruits.pop();       //맨 마지막 값부터 하나씩 추출( 뽑아오기)- 리턴값 있음.
console.log('3.pop')
console.log(fruits)
console.log(fruit)
console.log(fruits.pop())
console.log(fruits)
console.log(fruits.pop())
console.log(fruits.pop())
console.log(fruits.pop())
console.log(fruits)
console.log('4.push')
fruits.push('키위')         // 배열에 맨 마지막 위치에 새로운 값 추가. 리턴값 없음
console.log(fruits)
fruits.push('Orange')
console.log(fruits)
fruits.push('Banana')
fruits.push('Mango')
fruits.push('Apple')
console.log(fruits)
console.log('5. shift(), un shift()는 생략(개인연습)') // pop, push메소드와 방향만 다릅니다.
console.log('6.delete')
delete fruits[1];         // 특정요소값을 지우기 -> undifined 값으로 변경
console.log(fruits)
console.log('delete item :' + fruits[1])
console.log('7.concat')     // 배열합치기
const arr1 = ["Cecilie",'Lone'];
const arr2 = ["Emil","Tobias","Linus"];
const result = arr1.concat(arr2)
console.log(result)
console.log('8.splice')
const fruits2=['Banana','Orange','Apple','Mango'];
fruits2.splice(2,0,"Lemon","Kiwi");      //fruit 배열 인덱스 2번부터 중간에 데이터 넣기 - 중간에 지워지는 데이터 갯수는 0개
console.log(fruits2)                     //(6) ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']
const del = fruits2.splice(4,1,"레몬","키위");
console.log(fruits2)             //??? 두번째 인자 1 -> 중간에 데이터 넣을 때 1개를 삭제했어요.                         
                                 //(7) ['Banana', 'Orange', 'Lemon', 'Kiwi', '레몬', '키위', 'Mango']
console.log(del)        // splice 메소드는 삭제한 데이터를 리턴합니다.
// 특정 데이터들을 삭제하는 용도만으로 활용할 수 있습니다.
fruits2.splice(2,2);
console.log(fruits2)        //(5) ['Banana', 'Orange', '레몬', '키위', 'Mango']
console.log('9.slice')
const fruits3=['Banana','Orange','Lemon','Apple','Mango'];
const citrus = fruits3.slice(1,3);   //fruits3 배열의 인덱스 1번부터 3개까지 잘라내기로 새로운 배열을 리턴한다.
console.log(citrus)
console.log(fruits3.slice(3))          //두번쨰 인자 값이 없을 때는 3번부터 끝까지 잘라내기로 새로운 배열 리턴
