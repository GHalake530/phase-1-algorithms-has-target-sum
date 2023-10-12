function hasTargetSum(array, target) {
  const encounteredNumbers = {};

  for (let i = 0; i < array.length; i++) {
    const difference = target - array[i];
    if (encounteredNumbers[difference]) {
      return true;
    }
    encounteredNumbers[array[i]] = true;
  }

  return false;
}
// Test cases
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10));  
console.log(hasTargetSum([22, 19, 4, 6, 30], 25));     
console.log(hasTargetSum([1, 2, 5], 4));               
console.log(hasTargetSum([1, 2, 3, 4, 5], 9));         
console.log(hasTargetSum([-1, -2, 4, 6, 7], 5));        
console.log(hasTargetSum([1, 2, 3, 4], 8));   

// Explanation:
// The algorithm efficiently finds whether there is a pair of numbers in the array that sums to the target.
// It uses a hash table to keep track of encountered numbers, allowing for constant-time lookups.
// The time complexity of this algorithm is O(n) because it iterates through the array once, and the space complexity is O(n) to store the encountered numbers in the hash table.

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
