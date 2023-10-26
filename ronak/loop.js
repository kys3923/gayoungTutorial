// loop => array에서 객체들을 한번씩 돌려보는 실행명령

let sample1 = [
  4, // 0
  3, // 1 == 3
  5, // 2 == 15
  7, // 3 == 105
  9, // 4 == 945
  11,
  '하가영',
  '김영상',
  '와우!',
]

// 원하는 값은 array 숫자들을 모두 곱한값

let firstIndex = sample1[0]
let secondIndex = sample1[1]
let length = sample1.length

let totalNumber = 0

for (let i = 0; i < sample1.length; i++) {
  // validate
  // 1. sample1[i] 이것이 숫자인지 알아야함
  // 3. 1번과 2번이 둘다 숫자이면, 더하고 아니면 ' 코딩'을 더한다

  let firstNumber = sample1[i]

  let validate = isNaN(firstNumber + totalNumber)
  // 결과 = 객체가 숫자면 다음값을 더하고, 객체가 텍스트일때는 ' 코딩' 을 더한다

  if(!validate) {
    totalNumber = totalNumber + sample1[i]
  } else {
    sample1[i] = sample1[i] + ' 코딩'
  }
}

// ES6
let samepleES6 = [
  '하가영',
  '김영상',
  '와우!'
]

let modifiedArry = samepleES6.map((i) => {
  let text = i + ' 코딩'
  samepleES6[i] = text
})

console.log(samepleES6)

const adsfasdafd = (inputtedNumber) => {

}

adsfasdafd('IISDFDSF')

console.log(result)
// console.log(totalNumber, 'total', sample1, '텍스트')

// console.log(sample2)

// let result = 0
// for (let i = 0; i < sample1.length; i++) {
//  result = result + sample1[i]

 console.log(result)
// }

// let result1 = 1
// for (let i = 0; i < sample1.length; i++) {
//  result1 = result1 * sample1[i]

//  console.log(result1)
// }

// let sample2 = [

// ]

// let result2
// for (let i = 0; i < sample2.length; i++) {
//   sample2[i] = sample2[i] + ' 코딩' 
// }

// 1. initial value 첫번째 인덱스 값을 정해야함
// if( i = 0) {
//   result = sample1[0]
//   console.log(result)
// }
// // 2. 두번째 인덱스 부터 계산을 해야함
// if (i > 0) {
//   result * sample1[i]
// }
// 3. (리액트 일때) 인덱스가 총객체수랑 맞으면 결과값을 return 해야함
// if( i = sample1.length -1) {
//   return result
// }