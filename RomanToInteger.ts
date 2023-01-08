const mmap = new Map([
  ["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000]
]);


function romanToInt(s) {
  let accu = 0
  let skip = false
  let temp = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i]) {
      switch (s[i]) {
        case "I":
          if (i < s.length - 1 && (s[i + 1] === "V" || s[i + 1] === "X")) {
            temp = mmap.get(s[i + 1]) - mmap.get(s[i]);
            console.log(`${s[i]}${s[i + 1]} - ${temp} `)
            console.log('----------------------')
            accu += (mmap.get(s[i + 1]) - mmap.get(s[i]))
            i += 1;
            break;
          }
        case "X":
          if (i < s.length - 1 && (s[i + 1] === "L" || s[i + 1] === "C")) {
            temp = mmap.get(s[i + 1]) - mmap.get(s[i]);
            console.log(`${s[i]}${s[i + 1]} - ${temp} `)
            console.log('----------------------')
            accu += (mmap.get(s[i + 1]) - mmap.get(s[i]))
            i += 1;
            break;
          }
        case "C":
          if (i < s.length - 1 && (s[i + 1] === "D" || s[i + 1] === "M")) {
            temp = mmap.get(s[i + 1]) - mmap.get(s[i]);
            console.log(`${s[i]}${s[i + 1]} - ${temp} `)
            console.log('----------------------')
            accu += (mmap.get(s[i + 1]) - mmap.get(s[i]))
            i += 1;
            break;
          }
        default: {
          console.log(`${s[i]} - ${mmap.get(s[i])} `)
          console.log('----------------------')
          accu += mmap.get(s[i]);
          break;
        }

      }
    }
  }
  console.log(accu)
  return accu;
}

romanToInt("LVIII")