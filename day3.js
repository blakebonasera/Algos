// Insertion sort

function insertionSort(array){
    for (let i=1; i< array.length; i++){
        let x = i;
        while( x>0 && array[x]<array[x-1]){
            swap(x, x-1, array);
            x-=1;
        }
    }
    return array;
}

// function swap(i,x,array){
//     const temp = array[x];
//     array[x]=array[i];
//     array[i]= temp;
// }

// console.log(insertionSort([-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8]));

//Selection Sort

function selectionSort(array){
    let start = 0;
    while (start < array.length -1) {
        let small = start;
        for (let i=start+1; i < array.length; i++){
            if(array[small]> array[i]) small=i;
        }
        swap(start,small,array);
        start++;
    }
    return array;
}

function swap(i,j,array){
    const temp = array[j];
    array[j]=array[i];
    array[i]=temp;
}

console.log(selectionSort([8, 5, 2, 9, 5, 6, 3]))