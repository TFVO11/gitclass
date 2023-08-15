let age = 25;

console.log(age === 25); //t
console.log(age === '25'); //f
console.log(age == '25'); //t

let score = 100;

// if (score === 100) {
//     console.log("축하합니다. a")
// } else if(score === 80){
//     console.log('아쉽네여 b')
// } else {
//     console.log('분발여')
// }

//0: 바지 1: 상의 2: 빤쓰
//Number < string ===> byte ===> indexing 그래서 숫자형으로 알고리즘을 처리하면 
//검색이 용이하다.
//속도가 빠르다. 라는 장점이 있다.

switch (score) {
    case 100:
        console.log("축하합니다. a")
        break;

    case 80:
        console.log('아쉽네여 b')
        break;

    case 60:
        console.log('분발여')
        break;
}