let result1 = ''

const resetResult = () => {
  result1 = ''
}

const validate = (string) => {
  if(Number.isInteger(Number(string))) {
    return true 
  } else {
    return false
  }
}

const translate1 = (string) => {
  if(result1 !== '' && !validate(string)) {
    return
  }

  let inputtedNum = parseInt(string)

  while (inputtedNum > 0) {
    if (inputtedNum >= 4000) {
      result1 += "MV";
      inputtedNum -= 4000
    }
    else if (inputtedNum >= 1000) {
      result1 += "M";
      inputtedNum -= 1000
    }
    else if (inputtedNum >= 900) {
      result1 += "CM";
      inputtedNum -= 900
    }
    else if (inputtedNum >= 500) {
      result1 += "D";
      inputtedNum -= 500
    }
    else if (inputtedNum >= 400) {
      result1 += "CD";
      inputtedNum -= 400
    }
    else if (inputtedNum >= 100) {
      result1 += "C";
      inputtedNum -= 100
    }
    else if (inputtedNum >= 90) {
      result1 += "XC";
      inputtedNum -= 90
    }
    else if (inputtedNum >= 50) {
      result1 += "L";
      inputtedNum -= 50
    }
    else if (inputtedNum >= 40) {
      result1 += "XL";
      inputtedNum -= 40
    }
    else if (inputtedNum >= 10) {
      result1 += "X";
      inputtedNum -= 10
    }
    else if (inputtedNum >= 9) {
      result1 += "IX";
      inputtedNum -= 9
    }
    else if (inputtedNum >= 5) {
      result1 += "V";
      inputtedNum -= 5
    }
    else if (inputtedNum >= 4) {
      result1 += "IV";
      inputtedNum -= 4
    }
    else if (inputtedNum >= 1) {
      result1 += "I";
      inputtedNum -= 1
    }

  }

  console.log(result1, 'result1')

  resetResult()
}

let result2 = ''

let library = {
  MV: 4000,
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
  I: 1,
}

const translate2 = (input) => {
  if (result2 !== '') {
    return 
  }

  let inputtedNum = parseInt(input)

  for (let key in library) {
    while ( inputtedNum >= library[key]) {
      result2 += key
      inputtedNum -= library[key]
    }
  }
  console.log(result2, 'result2')
  return result2
}


// translate2('34')

let 구매정보 = {
  산물건갯수: 36,
  이름: '김영상',
  사는곳: '미국',
  구매총액: 466,
  fulfilled: false
}

const test3 = (input) => {

  let inputtedNum = input
  let result = 10
  let subtractingNumber = 1

  // 1. result = result - subtracktingNumber 
  // 2. inputtedNum = inputtedNum - 1
  
  // while (inputtedNum > 0) {
  //   result -= subtractingNumber
  //   inputtedNum -= 1
  // }

  // console.log(result)

  let i = 0

  while (i < 10) {
    let text = 'the number is ' + i
    console.log(text)
    i++ // i = i + 1 
  }
}

// translate2(3212)

// console.log(구매정보.구매총액)

//   삼천 이백 십 삼

//validate 소수점은 막아야함 음수도 막아야함 

const sample = (vara) => {
  
  let result = vara + 1

  console.log(result)

}

sample('1')