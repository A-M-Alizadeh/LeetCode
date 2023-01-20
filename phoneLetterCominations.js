// const combination = (digits) => {
//   const alphabets = new Map([
//     ['2', ['a', 'b', 'c']],
//     ['3', ['d', 'e', 'f']],
//     ['4', ['g', 'h', 'i']],
//     ['5', ['j', 'k', 'l']],
//     ['6', ['m', 'n', 'o']],
//     ['7', ['p', 'q', 'r', 's']],
//     ['8', ['t', 'u', 'v']],
//     ['9', ['w', 'x', 'y', 'z']],
//   ])

//   let digArr = [...digits];
//   let count = 0
//   console.log(first)
//   // for (let i = 0; i < digArr.length - 1; i++) {
//   for (let j = 0; j < alphabets.get(digArr[0]).length; j++) {
//     for (let k = 0; k < alphabets.get(digArr[0 + 1]).length; k++) {
//       for (let l = 0; l < alphabets.get(digArr[0 + 2]).length; l++) {
//         for (let m = 0; m < alphabets.get(digArr[0 + 3]).length; m++) {
//           console.log(alphabets.get(digArr[0])[j] + alphabets.get(digArr[1])[j] + alphabets.get(digArr[2])[l] + alphabets.get(digArr[3])[m])
//           count++;
//         }
//       }
//     }
//   }
//   console.log(count)
//   // }

//   return []
// }

// combination('6789')


var letterCombinations = function (digits) {
  if(digits.length === 0){
    return []
  }
  let resultArr = [];
  const alphabets = new Map([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']],
  ])
  const recursioner = (digits, index, result) => {
    if (index === digits.length) {
      resultArr.push(result)
      return
    }
    for (let i = 0; i < alphabets.get(digits[index]).length; i++) {
      recursioner(digits, index + 1, result + alphabets.get(digits[index])[i])
    }
  }

  recursioner(digits, 0, '')
  console.log(resultArr)
  return resultArr
};

letterCombinations('234')