// LongestBalancedSubstring O(n^3) | time O(n) space

function longestBalancedSubstring(string){
    let maxLength = 0;
    for (let i = 0; i < string.length; i++){
        for (let j = i + 2; j < string.length + 1; j+=2){
            if (isBalanced(string.slice(i,j))){
                const currentLength = j - i;
                maxLength = Math.max(maxLength, currentLength);
            }
        }
    }
    return maxLength;
}

function isBalanced(string) {
    const openParensStack = [];
    for (const char of string) {
        if (char === '('){
            openParensStack.push('(');
        } else if (openParensStack.length > 0){
            openParensStack.pop();
        } else {
            return false;
        }
    }
    return openParensStack.length === 0;
}

// O(n) Time | O(n) Space

function longestBalancedSubstring(string){
    let maxLength = 0, idxStack = [];
    idxStack.push(-1);

    for (let i = 0; i < string.length; i++){
        if (string[i] === "("){
            idxStack.push(i);
        } else {
            idxStack.pop();
            if (idxStack.length === 0){
                idxStack.push(i);
            } else {
                const balancedSubstringStartIdx = idxStack[idxStack.length - 1];
                const currentLength = i - balancedSubstringStartIdx;
                maxLength = Math.max(maxLength, currentLength);
            }
        }
    }
    return maxLength;
}