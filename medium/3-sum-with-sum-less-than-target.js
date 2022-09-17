const triplet_with_smaller_sum = function (arr, target) {
  let count = 0;

  arr.sort((a, b) => a - b);

  for (let i = arr.length - 1; i > 0; i--) {
    if (i < arr.length - 1 && arr[i] === arr[i + 1]) {
      continue;
    }

    find(i);
  }

  function find(index) {
    let val = arr[index];
    let left = 0;
    let right = index - 1;

    while (left < right) {
      let sum = val + arr[left] + arr[right];

      console.log(val, arr[left], arr[right], "=", sum);

      if (sum < target) {
        count++;
      }

      right--;
    }
  }

  return count;
};
