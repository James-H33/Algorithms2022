/*
  Time: O(n)
  Space: O(n)
  Note: Create tree using stack, then evaluate each branch/leaf.
  URL: https://leetcode.com/problems/design-an-expression-tree-with-evaluate-function/
*/

const operations = {
  "*": (num1, num2) => num1 * num2,
  "/": (num1, num2) => num1 / num2,
  "+": (num1, num2) => num1 + num2,
  "-": (num1, num2) => num1 - num2,
};

var Node = function (val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
};

Node.prototype.evaluate = function () {
  const { val, left, right } = this;

  if (!left || !right) {
    return val;
  }

  const op = operations[val];
  return op(left.evaluate(), right.evaluate());
};

/**
 * This is the TreeBuilder class.
 * You can treat it as the driver code that takes the postinfix input
 * and returns the expression tree represnting it as a Node.
 */

class TreeBuilder {
  /**
   * @param {string[]} s
   * @return {Node}
   */
  buildTree(postfix) {
    let stack = [];
    let i = 0;

    while (i < postfix.length) {
      let o = postfix[i];

      if (o in operations) {
        const right = stack.pop();
        const left = stack.pop();

        stack.push(new Node(o, left, right));
      } else {
        stack.push(new Node(+o));
      }

      i++;
    }

    return stack.pop();
  }
}

/**
 * Your TreeBuilder object will be instantiated and called as such:
 * var obj = new TreeBuilder();
 * var expTree = obj.buildTree(postfix);
 * var ans = expTree.evaluate();
 */
