function findShortestString(arr) {
  // type your code here

  let arrayOfLengths = arr.map(string => string.length)

  let shortest = Math.min(...arrayOfLengths)

  let shortestIndex = arrayOfLengths.indexOf(shortest)

  return arr[shortestIndex]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("Expecting: 'this'");
  console.log("=>", findShortestString(['hopefully', 'this', 'works', 'properly']));

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("Expecting: 'my'");
  console.log("=>", findShortestString(['my', 'fingers', 'are', 'crossed']));

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
  // map through array of strings, returning length of string
  // find minimum element in array of lengths and get index
  // return element in string array at that index

// And a written explanation of your solution
  // we create a new array that stores the lengths of all the strings, in order
  // we find the smallest number in that array of lengths and grab its index
  // then return the string at that index in the original array
