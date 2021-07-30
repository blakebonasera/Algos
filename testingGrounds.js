// reviewing algos from Coding Dojo 
const array = [3,14,1,3,2];


function bubbleSort(array){
    // The key part of this sort is that we run it until it's actually
    // sorted. In order to be able to tell that, we need some variable,
    // either numerical or boolean, to keep track. We'll use a boolean in 
    // this instance
    


    // As mentioned previously, we're going to run our little swap session
    // until things are actually sorted, so:
    do {
        // Now, we're going to go into each loop with the assumption that
        // the array is sorted, and change it back to false if we make a swap.
        let sorted = true;
         // Now, we want to start at the 0 index, and "bubble up" to the end

        // NOTE: this for loop stops one BEFORE the last element, since we'll
        // comparing each index to the NEXT index. This will prevent errors
        for(let i = 0; i <=array.length - 1; i++){
             // Let's check to see if the number at index i is greater than the
            // number at the next index
            if(array[i] >= array[i+1]){
                  // If it is, we need to swap sorted back to false
                sorted = false;
                // and swap the elements
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
            }
        }
        
    } while(sorted=false)
       // If we've broken out of the while loop, then it means the array has been sorted!
    return array;
}

console.log(bubbleSort(array));

// boolean check
// do {
// thing you want
// }
// while(condition)