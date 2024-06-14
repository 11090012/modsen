let arr = [1, 1, "22"];
function returnElement(arr) {
  if (arr[0] === arr[1]) {
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i] !== arr[i + 1]) {
        return arr[i + 1];
      }
    }
  } else {
    if (arr[0] !== arr[2]) {
      return arr[0];
    } else {
      return arr[1];
    }
  }
}

console.log(returnElement(arr));
