// O(n) - time | O(n) - space

function twoNumSum(arr, target){
  let results = [];
  let hash = {};
  for(let i = 0; i < arr.length; i++){
    let diff = target - arr[i] 
    if(diff in hash){
      results.push(diff, arr[i])
    } else {
      hash[arr[i]] = diff;
    }
  }
  return results;
}
twoNumSum([3,5,-4,8,11,1,-1,6], 10) // [-1,10]