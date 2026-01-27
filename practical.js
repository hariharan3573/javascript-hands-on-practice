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

const names = ["hari", "arun", "meera", "karthik", "divya"];

let array=names.map((name)=>{
    return name.toUpperCase()
})

console.log(array)

