function processData(data) {
  return new Promise((resolve, reject) => {
    if (typeof data !== "number") {
      reject("Error");
    } else if (data % 2 !== 0) {
      setTimeout(() => {
        resolve("Odd");
      }, 1000);
    } else {
      setTimeout(() => {
        resolve("Even");
      }, 2000);
    }
  });
}

// эти функции выведуться в порядке 1 Error -> 2 Even -> 3 Odd
// и хотя функция processData(1) должна завершиться раньше, так как у нее задержка 1 секунда, а у processData(2) 2 секунды
// все равно, так как она запущена раньше, она раньше встала в очередь в Event Loop, поэтому Event Loop вернет ее раньше
console.log(processData("not a number"));
console.log(processData(2));
console.log(processData(1));
