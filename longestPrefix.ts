function longestCommonPrefix(strs){
  let shortestIndex = -1;
  let strLength = 201;
  let counter = 0
  let prefix = ""
  for (let index = 0; index < strs.length; index++) {
    if(strs[index].length < strLength){
      shortestIndex = index;
      strLength = strs[index].length
    }
  }

  for (let i = 0; i < strLength; i++) {
    counter = 0;
    console.log('LETTER: ', strs[shortestIndex][i])
    for (let j = 0; j < strs.length; j++) {
      if(strs[shortestIndex][i] === strs[j][i]){
        console.log(`Others LETTER: ${strs[j][i]}`, strs[shortestIndex][i])
        counter ++
      }
    }
    if(counter == strs.length)
      prefix+=strs[shortestIndex][i]
    else break;
  }









  return prefix;
};

console.log('Prefix: ',longestCommonPrefix(["cir","car"]))