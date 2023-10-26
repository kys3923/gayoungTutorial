// 노가다방법

let result = ''

const validate = (validateInput) => {

  let 계산가능한숫자 = isNaN(validateInput)

  if (계산가능한숫자) {
    return false
  }

  let 정수 = Number.isInteger(validateInput)

  if (!정수) {
    return false
  }

  if (validateInput >= 0 && validateInput <= 3999) {
    return true
  } else {
    return false
  }
}

const arabicToRoman1 = (input) => {

  let workingNumber = input

  let validatedNumber = validate(input)

  if(!validatedNumber) {
    console.log('계산 가능한 입력이 아닙니다')
    return
  }

  while (workingNumber > 0) {
    if(workingNumber >= 1000) {
      result += 'M'
      workingNumber -= 1000
    } else if (workingNumber >= 900) {
      result += 'CM'
      workingNumber -= 900
    } else if (workingNumber >= 500) {
      result += 'D'
      workingNumber -= 500
    } else if (workingNumber >= 400) {
      result += 'CD'
      workingNumber -= 400
    } else if (workingNumber >= 100) {
      result += 'C'
      workingNumber -= 100
    } else if (workingNumber >= 90) {
      result += 'XC'
      workingNumber -= 90
    } else if (workingNumber >= 50) {
      result += 'L'
      workingNumber -= 50
    } else if (workingNumber >= 40) {
      result += 'XL'
      workingNumber -= 40
    } else if (workingNumber >= 10) {
      result += 'X'
      workingNumber -= 10
    } else if (workingNumber >= 9) {
      result += 'IX'
      workingNumber -= 9
    } else if (workingNumber >= 5) {
      result += 'V'
      workingNumber -= 5
    } else if (workingNumber >= 4) {
      result += 'IV'
      workingNumber -= 4
    } else if (workingNumber >= 1) {
      result += 'I'
      workingNumber -= 1
    }
  }

  console.log(result, 'working')

}

// arabicToRoman1(2122)


// 스마트한 방법

let dictionary = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
}

const arabicToRoman2 = (input) => {

  let workingNumber = input

  let validatedNumber = validate(input)

  if(!validatedNumber) {
    console.log('계산 가능한 입력이 아닙니다')
    return
  }

  for (let key in dictionary) {
    while (workingNumber >= dictionary[key]) {
      result += key
      workingNumber -= dictionary[key]
    }
  }

  console.log(result)
}


arabicToRoman2(111)
// 1. function을 만든다
// 2. function은 사용자가 아라비안숫자를 입력을 한다
// 3. 아라비안숫자가 로마숫자로 될때의 계산방법을 알아봄 시작값은 1000 
// validate : 입력값이 계산가능한 숫자?, 소수점을 막아야함 , 입력범위는 0 < input < 3999
// 312 -> 삼백 십 이 300 + 10 + 2,  CCC (100 + 100 + 100) X (10) II (1 + 1) => CCCXII
// 결과값은 -> 로마숫자로 나와야함