// Sum Mixed Array

/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number. */

function sumMix(x) {
    let newArray = x.map(num => parseInt(num))
    
    return newArray.reduce((total, currentValue) => total + currentValue)
    
}

