/*
    Time: O(n^2)
    Space: O(n)
    Note: Brute Force.
    URL: https://leetcode.com/problems/search-suggestions-system
*/
var suggestedProducts = function (products, searchWord) {
  products.sort();
  let output = [];
  let searchIndex = 0;

  while (searchIndex < searchWord.length) {
    let arr = [];
    let word = searchWord.substring(0, searchIndex + 1);

    for (let i = 0; i < products.length; i++) {
      let p = products[i];

      if (p.substring(0, searchIndex + 1) === word) {
        arr.push(p);
      }

      if (arr.length === 3 || i === products.length - 1) {
        output.push(arr);
        arr = [];
        break;
      }
    }

    searchIndex++;
  }

  return output;
};
