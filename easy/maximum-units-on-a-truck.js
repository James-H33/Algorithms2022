/*
    Time: O((n log n) * n)
    Space: O(1)
    Note: Sort and loop through boxTypes and then iteratate for each type while adding the units.
    URL: https://leetcode.com/problems/maximum-units-on-a-truck/
 */
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => {
    let valA = a[1];
    let valB = b[1];

    return valB - valA;
  });

  let numOfUnits = 0;
  let numberOfBoxes = 0;

  for (let [boxes, units] of boxTypes) {
    while (boxes > 0 && numberOfBoxes < truckSize) {
      numOfUnits += units;
      numberOfBoxes++;
      boxes--;
    }
  }

  return numOfUnits;
};

/*
    Time: O(n log n)
    Space: O(1)
    Note: Sort and loop through boxTypes, then multiple units based on either the number of boxes possible based on the remaining trucksize.
    URL: https://leetcode.com/problems/maximum-units-on-a-truck/
 */
 var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => {
      let valA = a[1];
      let valB = b[1];
      
      return valB - valA;
    });  
    
    let numOfUnits = 0;
    
    for (let [ boxes, units ] of boxTypes) {
      let n = Math.min(truckSize, boxes);
      numOfUnits += (n * units);
      truckSize -= n;
      
      if (truckSize === 0) {
        break;
      }
    }
    
    return numOfUnits;
  };
