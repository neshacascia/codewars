// Fake Binary
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
    let digitsArray = x.split('').map(num => parseInt(num))
    
    let newArray = []
    digitsArray.map(num => {
        if (num < 5) {
            num = 0
        } else {
            num = 1
        }  
        newArray.push(num) 
    })
    return newArray.join('')
  }

  console.log(fakeBin('45385593107843568'))