
let exit = false
let count = 0
const prompt = require('prompt-sync') ({sigint: true});

while (!exit){
    console.log(` 

    Select the operation 

    + --> sum 
    - --> subtraction 
    * --> multiplication 
    / --> division 

    `)

    const operation = prompt('Please select a operation: ')
    let num = prompt ('Please enter the number for the operation: ')
    num = Number(num)
   

    if (operation === '+') {
        count += num
        console.log(count)
        
    } else if (operation === '-') {
        count -= num
        console.log(count)
    } else if (operation === '*') {
        count *= num
        console.log(count)
    } else if (operation === '/'){
        count /= num
        console.log(count)
    } else {
        console.log('No valid operation selected...!')
        continue
    }


    let exit1 = prompt('If you want to continue making operation please type yes or enter if want to exit type no: ')

    if (exit1 === 'no'){
        console.log('Thank you for use my Calculator ')
        exit = true;
    }


    






}

