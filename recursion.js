
const factorial = (number) => {
  if (number === 1) {
    return 1
  }
  return number * factorial(number - 1)
}
// console.log(factorial(8))

const logger = (test) => {
  if(test < 1)
    return;
  else {
    console.log(test, ' ')
    logger(test - 1); // statement 2
    console.log(test, ' ')
    return;
  }
}
// logger(5)

const fibo = (num) => {
  if(num <= 1){
    return num
  }
  return (fibo(num-1) + fibo(num-2))
}
// console.log(fibo(9))


function print(n) 
{ 
    if (n < 0) 
      return; 
    
    print(n - 1); 
    console.log(" " + n); 
    
    // The last executed statement 
      // is recursive call 
} 
// print(4)


//-------------------------------------------------------
const recursiveCollector = (chars, length) => {
  if (length === 0) {
   return 
  }
  return 
}

const allPossibleStrings = (chars, length) => {
  
}
// console.log(allPossibleStrings(['a','b'], 3))
//-------------------------------------------------------

