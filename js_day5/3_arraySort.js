const fruits  = ['Banana','Orange','Apple','Mango'];

fruits.sort();              //1. 배열 값을을 오름차순 정렬하여 변경한다. - 알파벳 순서
console.log(fruits);
fruits.reverse();           //2. 내림차순 정렬(역순)
console.log(fruits)
const points = [40,100,1,5,25,10];
points.sort();              //3. 정수값 배열 - 사전식 알파벳순서??? -> sort에 콜백함수로 정렬 방법(값의 크기) 전달
console.log(points)
points.sort(function(a,b){  //4.sort 메소드에 callback 함수사용
    return a-b;     // a>b 일때는 양수, a<b 일떄는 음수, a==b일때는 0 리턴 -> 이 결과로 정렬.
})
console.log(points)         //위의 콜백함수를 적용하여 정렬한 결과   // [1, 5, 10, 25, 40, 100]
points.reverse();           // 5.points.sort 에서 한번 적용된 콜백함수 정렬기준이 계속 적용
//값이 큰 순서에서 작은 순서로 해보세요
// points.sort(function(a,b){
//     return b-a;    
// })
// console.log(points) 
points.reverse(function(a,b){ // points 배열을 처음 정렬한다면 역순은 이렇게합니다.
    return a-b;      // a>b 일때는 양수, a<b 일떄는 음수, a==b일때는 0 리턴 -> 어떤 값이 더 큰지 알아내려면 뺼셈을 합니다.
})
console.log(points)

//배열에서 최대값, 최소값 찾기 Math.max.apply(~~),  Math.min.apply(~~)

//객체 배열 정렬 - 자바스크립트에서 객체 리터럴은 { }기호로 표시
//  {type : 'BMW', year:2010}는 객체, 객체를 미리 클래스로 정의하지 않고 사용할 떄 정의(프로토 타입)
const cars = [{type:'Volve',year:2016},{type:'Ssab',year:2001},{type:'BMW',year:2010}]     //객체를 3개 참조하는 배열
cars.sort(function(a,b){ //a,b는 객체타입 변수
    return a.year-b.year
});
//남은 미션 : type 프로퍼티로 정렬하기.
console.log(cars[0])
console.log(cars[1])
console.log(cars[2])

