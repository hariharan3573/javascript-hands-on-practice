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

// let a = 5;
// let b = 10;
// let temp=0;

// temp=a;
// a=b;
// b=temp

// console.log(a,b)

//32.Swap Two Numbers Without Temporary Variable

// let x = -3;
// let y = 7;

// x=x+y;
// y=x-y;
// x=x-y;

//32.1.Reverse an array using swapping (no reverse())

// let arr = [0, -1, -2, -3]

// for(i=0;i<arr.length;i++){
//   for(j=0;j<arr.length;j++){
//     if(i<j){
//       temp=arr[i];
//       arr[i]=arr[j];
//       arr[j]=temp
//     }
//   }
// }

// console.log(arr)

// console.log(x,y)

//33.Check if number is positive, negative, or zero.

// let num = "10";

// if(num<0){
//     console.log("it's negative")
// }else if(num>0){
//     console.log("it's positive")
// }else{
//     console.log("it's zero")
// }

//34.Reverse a number

// let nums=[1,2,3,4];

//console.log(nums.reverse())

// for(i=0;i<nums.length;i++){
//     for(j=i+1;j<nums.length;j++){
//         if(nums[i]<=nums[j]){
//             temp=nums[i];
//             nums[i]=nums[j];
//             nums[j]=temp
//         }
//     }
// }

// console.log(nums)

// for(i=0;i<nums.length;i++){
//     for(j=i+1;j<nums.length;j++){
//         if(nums[i]<=nums[j]){
//             nums[i]=nums[i]+nums[j];
//             nums[j]=nums[i]-nums[j];
//             nums[i]=nums[i]-nums[j];
//         }
//     }
// }

// console.log(nums)

//35.Find sum of digits

// let nums=1234;

// let n=nums;
// let sum=0
// while(n>0){
//     let digits=n%10
//     sum+=digits
//     n=Math.floor(n/10)
    
// }

// console.log(sum)

//36.create a promise

// let promise=new Promise((resolve,reject)=>{
//     let succuess=false;
//     if(succuess){
//         resolve("good")
//     }else{
//         reject("bad")
//     }
// })

// promise
// .then((result)=>console.log(result))
// .catch((error)=>console.log(error))

//37.print all names

// let employees = [
//   { name: "Arun", salary: 20000 },
//   { name: "Bala", salary: 25000 },
//   { name: "Kumar", salary: 30000 }
// ];

// for(let employee of employees){
//     console.log(employee.name)
// }

//38.Find Specific Data

// let students = [
//   { name: "Arun", age: 21 },
//   { name: "Vijay", age: 22 },
//   { name: "Kumar", age: 23 }
// ];

// for(i=0;i<students.length;i++){
//     if(students[i].name=="Vijay"){
//         console.log(students[i].age)
//     }
// }

//38.Sum Property Values

//let employees = [
//   { name: "Arun", salary: 20000 },
//   { name: "Bala", salary: 25000 },
//   { name: "Kumar", salary: 30000 }
// ];

// let sum=0;
// // for(let employee of employees){
// //     sum+=employee.salary
// // }

// // console.log(sum)

// for(i=0;i<employees.length;i++){
//     sum+=employees[i].salary
// }

// console.log(sum)

//39.Currying

// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }

// console.log(sum(1)(2)(3))

//40.Example Of Polymorphism

// class payment{
//     pay(amount){
//         console.log("you payed form cash",amount)
//     }
// }

// class upi extends payment {
//     pay(amount){
//         console.log("you payed from upi",amount)
//     }
// }

// let p = new payment()
// p.pay(400)

//41.example for ploymorsphim Notification Service

// class notification{
//     email(message){
//         console.log("you receive the message in email",message)
//     }
// }

// class smsnotification extends notification{
//     sms(message){
//         console.log("you recieved the message in email",message)
//     }
// }

// let m=new smsnotification()
// m.sms("hello")

//42.shallow copy

// let obj1={
//     name:"hariharan",
//     age:21,
//     address:{
//         city:"salem"
//     }
// }

// let obj2={...obj1}

// obj1.address.city="coimbatore";

// console.log(obj1)

//43.deep copy

// let obj1={
//     name:"hariharan",
//     age:21,
//     address:{
//         city:"salem"
//     }
// }

// let obj2=JSON.parse(JSON.stringify(obj1))

// obj2.address.city="coimbatore"

// console.log(obj2)

//44.HOF
//Rule no:1
// function name(){
//     console.log("hello")
// }

// function hof(callback){
//     console.log("hariharan")
//     callback()
// }

// hof(name)
//Rule no:2
// function example(){
//     return function(a,b){
//         console.log(a+b)
//     }
// }

// let e=example()

// e(2,4)

//45.create server in HTTP

// const http=require('http')

// let server=http.createServer((req,res)=>{
//     if(req.url=="/" && req.method=="GET"){
//         console.log("hariharan")
//         res.setHeader("content-type","application/json")
//         res.end(JSON.stringify({name:"hariharan"}))
//     }
// })
// server.listen(5000,()=>{
//     console.log("server is running on http://localhost:5000")
// })

//46.find the prime Number

// let arr=[34,2,1,78,4,3]


// let isprime=true

// let prime=[]
// for(i=0;i<arr.length;i++){
//   let isprime=true
//   if(arr[i]<=1){
//     isprime=false
//   }
//   for(j=2;j<arr[i];j++){
//     if(arr[i]%j==0){
//       isprime=false
//     }
//   }
//   if(isprime){
//     prime.push(arr[i])
//   }
// }
  
  
// console.log(prime)

//47.find the palindrome number

// let a=122;

// //console.log(a.split("").reverse().join(""))

// let num=a;
// let b=[]
// while(num>0){
//   let n=num%10
//   b.push(n)
//   num=Math.floor(num/10)
// }

// console.log(b.join(""))

//48.	Create object and print it

// const obj={name:"hariharan",age:21}

//49.Access object properties

// console.log(obj.name)

//50.Add new property

//obj.city="salem"

//51.Encapsulation
// Create a class Person

// Requirements:

// private variable #name

// constructor to initialize name

// getter to read the name

// setter to update the name


// class Person{
//   #name="narahiraH"
  
//   get read(){
//     return this.#name;
//   }
  
//   set write(name){
//     this.#name=name
//   }
// }

  

// let obj=new Person()

// console.log(obj.read)

// obj.write="hariharan"

// console.log(obj.read)


//52.Another prime number
// let arr=[4,7,2,1,89,65,89,34];

// let num=[]
// for(i=0;i<arr.length;i++){
//   let isprime=true
//   if(arr[i]<=2){
//     isprime=false
//   }else{
//     for(j=2;j<arr[i];j++){
//       if(arr[i]%j==0){
//         isprime=false
//         break;
//       }
//     }
//   }
//   if(isprime){
//     num.push(arr[i])
//   }
// }

// console.log(num)


// 53.Remove all key-value pairs where value is even number
// let obj = { a: 1, b: 4, c: 7, d: 10 };

// let obj1={}
// for(let value in obj){
//   if(obj[value]%2!==0){
//     obj1[value]=obj[value]
//   }
// }

// console.log(obj1)


//54.Delete the last inserted property from an object
// let obj = { a: 10, b: 20, c: 30, d: 40 };

// let keys=Object.keys(obj).pop()

// delete obj[keys]

// console.log(obj)

// 55.//Convert this object into array of key-value pairs

// let obj = { name: "Hari", age: 22 };
// let arr=[]

// for(let keys in obj){
//   arr.push([keys,obj[keys]])
// }

// console.log(arr)

//56.Find the key with highest value

// let obj = { a: 10, b: 25, c: 5 };

// let max=-Infinity;
// let keys="";
// for(let value in obj){
//   if(obj[value]>max){
//     max=obj[value];
//     keys=value
//   }
// }

// console.log(max,keys)

//57.Find second highest marks

// let students = [
//   { name: "A", marks: 60 },
//   { name: "B", marks: 85 },
//   { name: "C", marks: 75 }
// ]

// let max=-Infinity;
// let min=-Infinity;

// for(let student of students){
//   if(student.marks>max){
//     min=max;
//     max=student.marks
//   }else if(student.marks>min && student.marks<max){
//     min=student.marks
//   }
// }

// console.log(max)

//58.To remove the second last element from an array.

// let arr=[10, 20, 30, 40, 50]

// let arr1=arr.filter((value,index)=>{
//    return index!==arr.length-2
// })

// console.log(arr1)