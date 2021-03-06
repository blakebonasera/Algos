function productSum(array, multiplier = 1) {
    let sum = 0;
    for ( const elemenet of array) {
        if(Array.isArray(element)) {
            sum += productSum(elemenet, multiplier + 1);
        } else {
            sum += element;
        }
    }
    return sum * multiplier;
}