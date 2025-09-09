// Be sure to record yourself in the video explaining your code
// and the concepts you used to solve this problem.

// Challenge: Check if Sorted
// Write a function that returns true if the array is sorted in ascending order, false otherwise.

function checkIfSorted(arr) {
  //input arr
  if(!arr.length)return true;
  const sorted = arr.slice().sort((a,b)=> a-b).join();//create a var to hold sorted array join?
  console.log(sorted);
  console.log(arr.join());
  return arr.join()=== sorted;//compare the input arr against sorted 
  //check if sorted
  //output bool
}

function checkIfSorted1(arr) {
  //input arr
  if(arr.length === 0)return true;
  let test = arr[0];
  for(let i = 1; i< arr.length; i++){
    if(test > arr[i]) return false;
    else test = arr[i];

  }
  return true;
}
// --- Starter Test Cases ---
console.log(checkIfSorted1([1, 2, 3, 4])); // true
console.log(checkIfSorted1([1, 3, 2, 4])); // false
console.log(checkIfSorted1([]));
// --- Your Turn ---
// Add at least 2 more test cases and explain them out loud in your recording.

console.log(checkIfSorted([100, 24, 33, 47])); 
console.log(checkIfSorted([25,50,75,100]));