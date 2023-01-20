var reverseList = function (head) {
  let temp = [];

  const reverser = (arr,temp, index) => {
    if (index === 0) {
      temp = [...temp , arr[index]]
      // temp.push(arr[index])
      return temp;
    }
    // temp.push(arr[index])
    temp = [...temp, arr[index]]
    return reverser(arr, temp, index - 1)
  }

  return reverser(head,temp, head.length - 1)
};

console.log(reverseList([1,2,3]))