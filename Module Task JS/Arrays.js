let arr = [3, 4, 7, 3, 4, 2.96];

function findMin(arr) {
  for (let i = 0; i < arr.length; i++) {
    let counter = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        counter++;
      }
    }
    if (counter == 0) {
      return arr[i];
    }
  }
}

console.log(findMin(arr));
