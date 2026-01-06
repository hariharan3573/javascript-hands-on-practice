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

3.Write a regular function that checks if a number is even or odd.
function check(nums){
    for(i=0;i<nums.length;i++){
        if(nums[i]%2==0){
        console.log("it's a even")
    }else{
        console.log("it's a odd")
    }
    }
    
}
check([23,45,7,12])