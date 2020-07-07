function largestSubarraySum(array) {
    // code to write here
    let maxend = 0
    let max = 0
    for(let num of array){
        maxend += num
        if(max < maxend){
            max = maxend
        }
        if(maxend < 0){
            maxend = 0
        }
    }
    return max
  }

   