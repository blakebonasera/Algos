//palindrom check
// O(n^2)
const string = "abcba";
function isPalindrome(string){
    let reversedString = '';
    for (let i= string.length -1; i>=0; i--){
        reversedString += string[i];
    }
    return string === reversedString;
}
console.log(isPalindrome(string));
// O(n)
function isPalindrome1(string){
    const reversedChars = [];
    for (let i=string.length-1;i>=0;i--){
        reversedChars.push(string[i]);
    }
    return string === reversedChars.join('');
}
console.log(isPalindrome1(string))
// O(n) time | O(1) space
function isPalindrome2(string){
    let lI = 0;
    let rI = string.length-1;
    while(lI<rI){
        if(string[lI] !== string[rI]) return false;
        lI++;
        rI--;
    }
    return true;
}
console.log(isPalindrome2(string))

//Bubble Sort
// O(n^2)
const array =[66,255,25,6,1];
function bubbleSort(array){
    let isSorted = false;
    let counter = 0;
    while(!isSorted){
        isSorted=true;
        for( let i=0; i < array.length-1-counter; i++){
            if(array[i]>array[i+1]){
                swap(i, i+1, array);
                isSorted=false;
            }
        }
        counter++;
    }
    return array;
}

function swap(i, j, array){
    const temp = array[j];
    array[j]=array[i];
    array[i]=temp;
}
console.log(bubbleSort(array));
