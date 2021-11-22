//Problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Tesla, Mercedes
console.log(randomCar)
console.log(otherRandomCar)

// Problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Reference error due to superceeding the "name" variable. 
console.log(name);
console.log(otherName);

// //Problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet',
    password: 'horcurx'
}
const password = '12345';
const { password: hashedPassword } = person;  
//the output is 12345 and underfined. If we introduce password variable into the person object. Then it will print 12345 and the password from object.
console.log(password);
console.log(hashedPassword);


//Problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//False(2!=5) and True(2==2)
console.log(first == second);
console.log(first == third);


// Problem 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Output is "value", then the array for the secondKey variable, 3rd console.log is 1 (index of 0), and last output is 5 (second item of the array).
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
