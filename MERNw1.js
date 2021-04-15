// // Bubble Sort 
// function bubbleSort(array){
    
//         for(let i =0; i < array.length -1;i++){
//         for( let j=0;j<array.length;j++){
//             if(array[j]>array[j+1]){
//                 let temp = array[j];
//                 array[j]=array[j+1];
//                 array[j+1]= temp;
//             }
//         }
//     }
//     return array;
//     }
// console.log(bubbleSort([387,45,32,66,5]))


//Two Number Sum
// O(n^2)
// var array=[3, 5, -4, 8, 11, 1, -1, 6];
// var targetSum=10;
// function twoNumberSum(array, targetSum){
//     for (let i =0; i < array.length -1; i++){
//         const firstNum = array[i];
//         for (let j=i+1; j < array.length; j++){
//             const secondNum = array[j];
//             if(firstNum + secondNum === targetSum){
//                 return [firstNum,secondNum];
//             }
//         }
//     }
//     return [];
// }
// console.log(twoNumberSum(array,targetSum))

var array=[3, 5, -4, 8, 11, 1, -1, 6];
var targetSum=10;
// O(n) time because of hash table 
function twoNumberSum(array, target){
    const nums = {}; // Hash table
    for(const num of array){
        const potentialMatch = targetSum - num;
        if(potentialMatch in nums){
            return [potentialMatch, num];
        } else{
            nums[num] = true;
        }
    }
    return [];
}
console.log(twoNumberSum(array,targetSum))