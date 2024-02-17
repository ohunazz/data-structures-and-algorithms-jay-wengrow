function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

let myArray = [1, 2, 3, 4, 5];
let targetElement = 3;
let result = linearSearch(myArray, targetElement);
