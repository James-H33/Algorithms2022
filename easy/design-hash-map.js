/*
    Time: O(1)
    Space O(n)
    URL: https://leetcode.com/problems/design-hashmap/
*/
var MyHashMap = function() {
    this.map = {};
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
  this.map[key] = value;  
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
  if (key.toString() in this.map) {
    return this.map[key]    
  }
    
  return -1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
  if (key in this.map) {
    delete this.map[key];
  }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */