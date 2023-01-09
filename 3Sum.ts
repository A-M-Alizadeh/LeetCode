const threesum = (nums, target) => {
  let sums = [];
  let diff = [];
  let temp3Sum = 0
  let finalIndex = -1
  let sortingArr = []
  let checked = []
  let sortedStr = ''
  let counter = 0

  const sortAndReturnStr = (i,j,k) => {
    sortingArr = [i, j, k]
    sortingArr.sort((a, b) => a - b);
    return sortingArr.toString().split(',').join('')
  }

  for (let i = 0; i < nums.length / 2 ; i++) {
    temp3Sum = 0;
    if (sums.includes(target))break;
    for (let j = i+1; j < nums.length ; j++) {
      for (let k = j+1; k < nums.length; k++) {
        // if (i != j && j != k && i != k) {
          sortedStr = sortAndReturnStr(i,j,k);
          // if (!checked.includes(sortedStr)) {
          //   checked.push(sortedStr)
            temp3Sum = nums[i] + nums[j] + nums[k]
            counter++
            // if (!sums.includes(temp3Sum)){
              sums.push(temp3Sum)
            // }
          // }
        // }
      }
    }
  }

  for (let index = 0; index < sums.length; index++) {
    if (target >= 0 && sums[index] >= 0) {
      diff.push(Math.abs(target - sums[index]))
    }
    else if (target >= 0 && sums[index] <= 0 || target <= 0 && sums[index] >= 0) {
      diff.push(Math.abs(target) + Math.abs(sums[index]))
    }
    else if (target <= 0 && sums[index] <= 0) {
      diff.push(Math.abs(target) - Math.abs(sums[index]))
    }
  }


  temp3Sum = Math.abs(diff[0]);
  finalIndex = 0
  for (let index = 0; index < diff.length; index++) {
    if (Math.abs(diff[index]) < temp3Sum) {
      temp3Sum = Math.abs(diff[index])
      finalIndex = index
    }
  }
  // console.log(counter, sums[finalIndex])
  return sums[finalIndex];
}

const counterer = (nums) => {
  let counter = 0
  for (let i = 0; i < nums.length / 2; i++) {
    for (let j = i+1; j < nums.length; j++) {
      for (let k  = j+1; k < nums.length; k++) {
        console.log(`i:[${i}] j:[${j}] k:[${k}]`)
       counter++ 
      }
    } 
  }
  console.log('ÇOUNTER', counter)
}

// counterer([-1,2,1,-4])

threesum([-43,57,-71,47,3,30,-85,6,60,-59,0,-46,-40,-73,53,68,-82,-54,88,73,20,-89,-22,39,55,-26,95,-87,-57,-86,28,-37,43,-27,-24,-88,-35,82,-3,39,-85,-46,37,45,-24,35,-49,-27,-96,89,87,-62,85,-44,64,78,14,59,-55,-10,0,98,50,-75,11,97,-72,85,-68,-76,44,-12,76,76,8,-75,-64,-57,29,-24,27,-3,-45,-87,48,10,-13,17,94,-85,11,-42,-98,89,97,-66,66,88,-89,90,-68,-62,-21,2,37,-15,-13,-24,-23,3,-58,-9,-71,0,37,-28,22,52,-34,24,-8,-20,29,-98,55,4,36,-3,-9,98,-26,17,82,23,56,54,53,51,-50,0,-15,-50,84,-90,90,72,-46,-96,-56,-76,-32,-8,-69,-32,-41,-56,69,-40,-25,-44,49,-62,36,-55,41,36,-60,90,37,13,87,66,-40,40,-35,-11,31,-45,-62,92,96,8,-4,-50,87,-17,-64,95,-89,68,-51,-40,-85,15,50,-15,0,-67,-55,45,11,-80,-45,-10,-8,90,-23,-41,80,19,29,7], 255)




/*
nums =
[833,736,953,-584,-448,207,128,-445,126,248,871,860,333,-899,463,488,-50,-331,903,575,265,162,-733,648,678,549,579,-172,-897,562,-503,-508,858,259,-347,-162,-505,-694,300,-40,-147,383,-221,-28,-699,36,-229,960,317,-585,879,406,2,409,-393,-934,67,71,-312,787,161,514,865,60,555,843,-725,-966,-352,862,821,803,-835,-635,476,-704,-78,393,212,767,-833,543,923,-993,274,-839,389,447,741,999,-87,599,-349,-515,-553,-14,-421,-294,-204,-713,497,168,337,-345,-948,145,625,901,34,-306,-546,-536,332,-467,-729,229,-170,-915,407,450,159,-385,163,-420,58,869,308,-494,367,-33,205,-823,-869,478,-238,-375,352,113,-741,-970,-990,802,-173,-977,464,-801,-408,-77,694,-58,-796,-599,-918,643,-651,-555,864,-274,534,211,-910,815,-102,24,-461,-146]
target =
-7111
30 / 98 testcases passed
Output
-2949
Expected
-2960
*/