// task-1: Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 


const  reverseString = str =>
{
    let tempString = "";
    for(let i=str.length-1; i>=0; i--)
    {
        tempString += str[i];
    }
    return tempString;
}

console.log(`Input = hello world \nOutput = ${reverseString("hello world")}`);

//Input: "hello world" Example Output: "dlrow olleh"




//task-2: Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

const sumOfPositiveNumbers = arrayOfNumbers =>
{
    let sum = 0;
    for(let i=0; i<arrayOfNumbers.length; i++)
    {
        if(arrayOfNumbers[i]>0)
        {
            sum += arrayOfNumbers[i];
        }
    }
    return sum;
}

const arrayOfNumbers = [2, -5, 10, -3, 7] ;
console.log(`Input = [2, -5, 10, -3, 7] \nOutput = ${sumOfPositiveNumbers(arrayOfNumbers)}`);

//Input: [2, -5, 10, -3, 7] Output: 19




//task-3 : Write a JavaScript program to find the most frequent element in an array and return it. 
function findMostFrequentElement(arr) 
{
    const counts = {};
    let maxCount = 0;
    let mostAppearedNumber = null;
  
    for (const num of arr) 
    {
      counts[num] = (counts[num] || 0) + 1;
      console.log(counts[num]);
      if (counts[num] > maxCount) 
      {
        maxCount = counts[num];
        mostAppearedNumber = num;
      }
    }
  
    return mostAppearedNumber;
  }
  

  const elements = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  console.log(`Input = [3, 5, 2, 5, 3, 3, 1, 4, 5] \nOutput = ${findMostFrequentElement(elements)}`);
  //Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Output: 3



  
//task-4 : Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.


const findTwoNumbers = (arr, target) =>
{
    const length = arr.length;
  
    for (let left = 0; left < length - 1; left++) 
    {
      for (let right = left + 1; right < length; right++) 
      {
        const sum = arr[left] + arr[right];
  
        if (sum === target) 
        {
          return [left, right];
        } 
        else if (sum > target) 
        {
          break; 
        }
      }
    }
    return null; 
  }
  

  const sortedArray = [1, 3, 6, 8, 11, 15];
  console.log(`Input = [1, 3, 6, 8, 11, 15] \nOutput = ${findTwoNumbers(sortedArray, 9)}`);

  //Input: [1, 3, 6, 8, 11, 15] Output: [0,3]



  //task-5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

  const calculate = (num1, operator, num2) =>
  {
    switch (operator) 
    {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) 
        {
          return "Cannot divide by zero!";
        }
        return num1 / num2;
      default:
        return "Invalid operator!";
    }
  }
  

  console.log(calculate(5, '+', 8)); 
  // Output: 13
  console.log(calculate(10, '-', 2)); 
  // Output: 8
  console.log(calculate(7, '*', 2)); 
  // Output: 14
  console.log(calculate(15, '/', 5)); 
  // Output: 3


  //task-6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.


  const generateRandomPassword = length =>
  {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()-_=+[]{}|;:',.<>?";
  
    const totalChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
    let password = "";
  
    for (let i = 0; i < length; i++) 
    {
      const randomChars = Math.floor(Math.random() * totalChars.length);
      password += totalChars[randomChars];
    }
  
    return password;
  }
  

  const passwordLength = 12;
  console.log(generateRandomPassword(passwordLength));
  //random output will be generated.
  

//task-7 : Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.


const romanToInt = romanNumber =>
{
    const romanNumbers = 
    {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let result = 0;
    let prviousValue = 0;
  
    for (let i = romanNumber.length - 1; i >= 0; i--) 
    {
      const currentSymbol = romanNumber[i];
      const currentValue = romanNumbers[currentSymbol];
  
      if (currentValue < prviousValue) 
      {
        result -= currentValue;
      } 
      else 
      {
        result += currentValue;
      }
  
      prviousValue = currentValue;
    }
  
    return result;
  }
  

  console.log(romanToInt("II"));    
  // Output: 2
  console.log(romanToInt("XXI"));   
  // Output: 21
  console.log(romanToInt("IV"));    
  // Output: 4

  