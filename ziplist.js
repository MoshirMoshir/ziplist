// Function to zip lists without using Underscore
function zipList(list1, list2) {
  const result = [];
  const length = Math.max(list1.length, list2.length);
  for (let i = 0; i < length; i++) {
    if (list1[i] !== undefined) {
      result.push(list1[i]);
    }
    if (list2[i] !== undefined) {
      result.push(list2[i]);
    }
  }
  return result;
}

// Function to zip lists using Underscore
function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

// Example usage
const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];
console.log("Zip list without Underscore:", zipList(list1, list2));
console.log("Zip list with Underscore:", zipListTheSimpleWay(list1, list2));
