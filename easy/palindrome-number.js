/*
    Time: O(n)
    Space: O(n)
    Note: Simple reveresed interation to create a comparison string, then just compare.
*/
var isPalindrome = function (x) {
  const n = x.toString();
  let reversed = "";

  for (let i = n.length - 1; i >= 0; i--) {
    reversed += n[i];
  }

  return reversed === n;
};
