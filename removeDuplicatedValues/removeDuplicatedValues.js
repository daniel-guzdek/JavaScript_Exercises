function removeDuplicatedValues(arr) {
  let nonDuplicatedArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(nonDuplicatedArr.indexOf(arr[i]) === -1) {
      nonDuplicatedArr.push(arr[i])
    }
  }
  console.log(nonDuplicatedArr)
}

// II way (using 'Set()')
let nums = [1, 6, 7, 4, 5, 4, 6];
nums = [...new Set(nums)];

removeDuplicatedValues([34, 12, 345, 6, 90, 75, 7, 12, 90]);