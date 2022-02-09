/*
    Time: O(n)
    Space: O(1)
    Note: Simple interation, updating the search index for each matching value.
*/
function isValidSubsequence(array, sequence) {
  let index = 0;

  for (let i = 0; i < array.length; i++) {
    const curr = array[i];

    if (curr === sequence[index]) {
      index++;
    }
  }

  return index === sequence.length;
}
