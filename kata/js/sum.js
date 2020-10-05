sumAll = (arr)  => {
    // find the minimum
    let max = Math.max(arr[0], arr[1]);
    // find the maximum
    let min = Math.min(arr[0], arr[1]);
    // find the sum of the array using min as the first num in the array and max as the last number in the array
    let sum = 0;
    for (let i = min; i <= max; i++) {
      sum += i;
    }
    return sum;
  }
  
  console.log(sumAll([1, 4]));
  // 1 + 2+ 3+ 4
  // 10