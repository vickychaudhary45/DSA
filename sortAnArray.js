// try one to sort an array with 2 elements

class sortAnArray {
  sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      //   console.log(arr[i]);
      //   console.log(arr)
      if (arr[i] < arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
      //   console.log(arr);
    }
    return arr;
  }
}

// console.log(new sortAnArray().sortArray([8, 17, 5, 9, 2, 4]));

// sort an array and bring largest number to index 1.

class sortAnArray2 {
  //   let temp;
  sortArray(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
        arr[i] = arr[0];
        arr[0] = max;
      }
      // console.log(arr);
    }
    console.log(arr);
    return max;
  }
}

// console.log(new sortAnArray2().sortArray([-3, 90, 11, 7, -12]));

class sortAnArray3 {
  //   let temp;
  sortArray(arr) {
    // let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      console.log(i);
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
      console.log(arr);
    }
    // console.log(arr);
    return arr;
  }
}

console.log(new sortAnArray3().sortArray([9, 7, 3, 4, 5, 2]));
