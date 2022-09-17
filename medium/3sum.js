const search_triplets = function (nums) {
  if (nums.length < 3) {
    return [];
  }
  
  nums.sort((a, b) => a - b);
  
  let output = [];
    
  for (let i = 0; i < nums.length; i++) {     
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    
    find(i);    
  }
  
  return output;
  
  function find(index) {
    let val = nums[index];
    let left = index + 1;
    let right = nums.length - 1;
    
    while (left < right) {
      let sum = val + nums[left] + nums[right];
      
      if (sum === 0) {
        output.push([val, nums[left], nums[right]]);
        
        left++;
        
        while (left < right && nums[left] === nums[left - 1]) {
           left++;
        }
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
};
