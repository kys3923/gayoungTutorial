let receivedDataA = 1
let receivedDataB = '2'


const function1 = (a, b) => {
  // 1. a랑 b를 숫자로 변환시켜야함 dataType only
  let convertedA = Number(a)
  let convertedB = Number(b)

  // 2. a랑 b가 계산이 가능한 숫자인지 물어봐야함 validation // '1' '12z'
  let askOne = isNaN(convertedA)
  if(askOne) {
    return 'inputed A is not a number'
  }

  let askTwo = isNaN(convertedB)
  if(askTwo) {
    return 'inputed B is not a number'
  }

  let calculatedNumber = (convertedA * convertedB) + convertedA
  console.log( calculatedNumber, '계산')
  
  // 3. 비교산술
  if (convertedA > convertedB) {
    return 'a is bigger than b'
  }

  if (convertedA < convertedB) {
    return 'a is smaller than b'
  }

  return 'a is equal to b'
  // 4. 결과값 return
}

let result = function1(receivedDataA, receivedDataB)

console.log(result)

let sampleArry = [1, 2, 3, 4, '5', 6, 7, 8]

// let firstNum = isNaN(b) // 이게 숫자가 아닌가요? 예 -> 숫자가 아님 아니오 -> 숫자임 (데이터타잎은 구분하지 않음)

// let stringToNum = '1'
// let numToString = 2

// let convertedNum = Number(stringToNum)
// let convertedString = numToString.toString()

// console.log(convertedNum, '숫자냐?')

// string -> Number Number('1') 
// validation

// 비교문 if 아니면 turnary operation

// = (1+1=2)
// == (1+'1'= '11')
// ===
// != ==
// !== ===
// >
// <
// >=
// <=