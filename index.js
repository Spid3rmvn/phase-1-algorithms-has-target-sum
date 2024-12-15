function hasTargetSum(array, target) {
  // Create a set to store the numbers we've seen so far
  const seen = new Set();
  // Iterate through the array of numbers
  for (const num of array) {
    // Calculate the difference between the target and the current number
    const diff = target - num;
    // Check if the difference is in the set of seen numbers
    if (seen.has(diff)) {
      // If it is, return true
      return true;
    }
    // If not, add the current number to the set of seen numbers
    seen.add(num);
  }
  // If we've iterated through the entire array and haven't found a pair, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/
// Time complexity: O(n), where n is the length of the input array

/* 
  Add your pseudocode here
*/
// 1. Create an empty set to store the numbers we've seen so far
// 2. Iterate through the array of numbers
// 3. For each number, calculate the difference between the target and the current number
// 4. Check if the difference is in the set of seen numbers
// 5. If it is, return true
// 6. If not, add the current number to the set of seen numbers
// 7. If we've iterated through the entire array and haven't found a pair, return false

/*
  Add written explanation of your solution here
*/
// This function uses a set to keep track of the numbers we've seen so far. We iterate through the array of numbers, and for each number, we calculate the difference between the target and the current number. We then check if this difference is in the set of seen numbers. If it is, we return true, because we've found a pair of numbers that add up to the target. If not, we add the current number to the set of seen numbers and continue iterating. If we've iterated through the entire array and haven't found a pair, we return false.

// You can run `node index.js` to view these console logs
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