/**
 * Hash Table
 *   - key-value pairs (like arrays) but keys are unordered
 *   - collisions can be handled through separate chaining and linear probing methods
 * 
 * Complexity Analysis
 *   - Insertion:  O(1)
 *   - Deletion:   O(1)
 *   - Access:     O(1)
 */

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  /**
   * Generate index in keyMap
   * @param {*} key value to hash
   * @returns {Number} index in keyMap
   */
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length , 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;

      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  /**
   * Store new element in Hash Table
   * @param {String} key key by which element will be accessed
   * @param {*} value value to store and make accessible by given key
   */
  set(key, value) {
    let index = this._hash(key);
    
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
  }

  /**
   * Look up value stored in Hash Table for given key
   * @param {String} key key to look up value in Hash Table by
   */
  get(key) {
    let index = this._hash(key);

    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        let currentTuple = this.keyMap[index][i];

        if (currentTuple[0] === key) {
          return currentTuple[1];
        }
      }
    }

    return;
  }

  /**
   * Get all keys stored in Hash Table
   * @returns {Array} Collection of keys stored in Hash Table
   */
  keys() {
    let keys = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      let currentBucket = this.keyMap[i];
      
      if (currentBucket) { // only loop over if bucket exists
        for (let j = 0; j < currentBucket.length; j++) {
          if (!keys.includes(currentBucket[j[0]])) {
            keys.push(currentBucket[j][0]);
          }
        }
      }
    }

    return keys;
  }

  /**
   * Get all values stored in Hash Table
   * @returns {Array} Collection of values stored in Hash Table
   */
  values() {
        let values = [];

        for (let i = 0; i < this.keyMap.length; i++) {
          let currentBucket = this.keyMap[i];

          if (currentBucket) { // only loop over if bucket exists
            for (let j = 0; j < currentBucket.length; j++) {
              if (!values.includes(currentBucket[j[1]])) {
                values.push(currentBucket[j][1]);
              }
            }
          }
        }

        return values;
  }
}

let ht = new HashTable(10);
ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('plum', '#DDA0DD');
ht.set('are we done?', 'yes');
console.log(ht.get('maroon'));
console.log(ht.get('yellow'));
console.log(ht.get('oliveas'));
console.log(ht.get('plum'));
console.log(ht.get('are we done?'));
console.log(ht.keys());
console.log(ht.values());
