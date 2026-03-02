// REGULAR FUNCTION

// 1.Write a regular function that takes two numbers and returns their sum.
// function sum(a,b){
//     return a+b
// }
// console.log(sum(120,1))

// 2.Create a regular function that prints “Hello World” when called.
// function hello(){
//     return "heloo world"
// }
// console.log(hello())

// 3.Write a regular function that checks if a number is even or odd.
// function check(nums){
//     for(i=0;i<nums.length;i++){
//         if(nums[i]%2==0){
//         console.log("it's a even")
//     }else{
//         console.log("it's a odd")
//     }
//     }
    
// }
// check([23,45,7,12])

// FUNCTION EXPRESSION

// // 4. Create a function expression that multiplies two numbers.
// // let a=function(a,b){
// //     return a*b
// // }
// // console.log(a(10,2))

//ARROW FUNCTION

// 5.Create an arrow function that checks whether a number is greater than 10.
// let a=(nums)=>{
//     for(i=0;i<nums.length;i++){
//         if(nums[i]>10){
//             console.log(nums[i],"it's a greater then the 10")
//         }
//     }
// }

// console.log(a([34,45,67,2]))

// ANONYMOUS FUNCTION

// 6.Use an anonymous function inside setTimeout to print “Time up”.
// setTimeout(function(){
//     console.log("the time is dead")
// })

// 7.Convert all numbers in an array to their squares.

// let nums=[1, 2, 3, 4, 5, 6, 7, 8, 9];

// let array=nums.map((num)=>{
//     return num*num
// });

// console.log(array)

// // 8.Convert all numbers in an array to strings.

// // const nums = [10, 25, 0, -7, 3.5, 100];

// // let string=nums.map((num)=>{
// //     return num.toString()
// // })

// console.log(string)

// 9.Add 10 to every number in an array.

// let nums=[5, 12, 0, 23, 8, 41];

// let array=nums.map((num)=>{
//     return num+=10
// })

// console.log(array)


// 10.Convert all names in an array to uppercase.

// const names = ["hari", "arun", "meera", "karthik", "divya"];

// let array=names.map((name)=>{
//     return name.toUpperCase()
// })

// console.log(array)

// 11.Extract the length of each string in an array.

// const words = ["apple", "banana", "kiwi", "mango", "pineapple"];

// let array=words.map((word)=>{
//     return word.length
// })

// console.log(array)

// 12.Given an array of objects, return an array of only user names.

// const users = [
//   {
//     id: 1,
//     name: "Hari",
//     email: "hari@gmail.com",
//     role: "admin",
//     isActive: true
//   },
//   {
//     id: 2,
//     name: "Meera",
//     email: "meera@gmail.com",
//     role: "user",
//     isActive: true
//   },
//   {
//     id: 3,
//     name: "Arun",
//     email: "arun@gmail.com",
//     role: "user",
//     isActive: false
//   },
//   {
//     id: 4,
//     name: "Divya",
//     email: "divya@gmail.com",
//     role: "manager",
//     isActive: true
//   }
// ];

// let num=users.map((user)=>{
//     return user.name
// })

// console.log(num)

// 13.Given an array of numbers, return an array where each number is doubled if even, tripled if odd.

// let nums=[1, 2, 3, 4, 5]

// let array=nums.map((num)=>{
//     if(num%2==0){
//         return num*2
//     }else{
//         return num*3
//     }
// })
// console.log(array)

// 14.Given an array of numbers, use forEach to print each number.

// const nums = [10, 25, 7, 40, 18];

// nums.forEach((nums)=>{
//     console.log(nums)
// })

// 15.Given an array of integers, use forEach to print only even numbers.

// const nums = [3, 12, 7, 20, 15, 8, 11];

// nums.forEach((num)=>{
//     if(num%2==0){
//         console.log(num)
//     }
// })


// 16.Find the sum of all numbers in an array

// let nums=[1, 2, 3, 4, 5];

// let array=nums.reduce((acc,cur)=>{
//     return acc+cur
// },0)

// console.log(array)


// 17.Find the total length of all strings

// let str=["hi", "hello", "bye"]

// // let array=str.reduce((acc,cur)=>{
// //     if(cur){
// //         acc++
// //     }
// //     return acc
// // },0)

// console.log(array)

// 18.Find the maximum number

// let num=[10, 45, 3, 99, 22]

// let nums=num.reduce((acc,cur)=>{
//     return Math.max(cur,acc)
// },0)

// console.log(nums)


// 19.Count how many numbers are even

// let nums=[1, 2, 3, 4, 5, 6, 8]

// let num=nums.reduce((acc,curr)=>{
//     if(curr%2==0){
//         acc++
//     }
//     return acc
// },0)

// console.log(num)

// 20.Remove duplicate users based on email

// let users = [
//   { name: "Hari", email: "hari@gmail.com" },
//   { name: "Haran", email: "haran@gmail.com" },
//   { name: "Hari", email: "hari@gmail.com" },
//   { name: "Kumar", email: "kumar@gmail.com" },
//   { name: "Haran", email: "haran@gmail.com" }
// ];

// let duplicate=[]

// let check=new Set()

// for(user of users){
//     if(!check.has(user.email)){
//         check.add(user.email)
//         duplicate.push(user)
//     }
// }

// console.log(duplicate)



// Tasks

// 21. Convert ES5 code to ES6:

// ```js
// var add = function(a, b) {
//   return a + b;
// };
// ```

// ➡️ Use **arrow function**

// let num=((a,b)=>{
//     return a+b
// })

// console.log(num(2,3))

//22.Create an object with 3 students and marks.

// let students={
//     student1:{
//         name:"hariharan",marks:"47"
//     },
//     student2:{
//         name:"hari",marks:"68"
//     },
//     student3:{
//         name:"harikaran",marks:"83"
//     }
// }

// //23.Convert the same data into a Map.

// let studentsdetails=new Map()

// studentsdetails.set("student1",{name:"hariharan",marks:47})
// studentsdetails.set("student2",{name:"hari",marks:68})
// studentsdetails.set("student3",{name:"harikaran",marks:83})

//  24.Class & Object

// Create a Student class with:

// * name
// * rollNo
// * marks
//   Method: getGrade()

// class Student{
//     constructor(name,rollno,marks){
//         this.name=name,
//         this.rollno=rollno,
//         this.marks=marks
//     }
//     showdetails(){
//         console.log(this.name)
//         console.log(this.marks)
//         console.log(this.rollno)
//     }

// }

// let student1=new Student("hariharan",21,77)
//     student1.showdetails()

// 25.Create a class:

// 👉 Calculator

// Add method:

// add()

// Add:

// 2 numbers and return result.


// class Calculator{
//     constructor(a,b){
//         this.a=a,
//         this.b=b
//     }

//     add(){
//         console.log(this.a+this.b)
//     }
// }

// let sum=new Calculator(2,5)
// sum.add()

//26.Remove duplicates using filter

// let array=[10,20,10,30,40,30,50,20]

// let duplicate=[]
// let nums=array.filter((a)=>{
//     if(!duplicate.includes(a)){
//         duplicate.push(a)
//     }
// })

// console.log(duplicate)

// 27.find the largest number
// let arr = [45, 12, 89, 32, 5, 99, 23];

// let largest=-Infinity
// for(i=0;i<arr.length;i++){
//     if(arr[i]>=largest){
//         largest=arr[i]
//     }
// }

// console.log(largest)

// 28.find the secondlargest number
// let arr = [45, 12, 89, 32, 5, 99, 23];

// let largest=-Infinity
// let secondlargest=-Infinity
// for(i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         secondlargest=largest
//         largest=arr[i]
//     }else if(arr[i]>secondlargest && arr[i]<largest){
//         secondlargest=arr[i]
//     }
// }

// console.log(secondlargest)

// 29.frequency counter
// let items = ["apple", "banana", "apple", "orange", "banana", "apple"];

// let obj={}

// for(item of items){
//     if(obj[item]){
//         obj[item]+=1
//     }else{
//         obj[item]=1
//     }
// }

// console.log(obj)

//30.Find the datatype of a variable

// console.log(typeof(5))

//31.Swap two numbers using temp variable

let a = 5;
let b = 10;
let temp=0;

temp=a;
a=b;
b=temp

console.log(a,b)

