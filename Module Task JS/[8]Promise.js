const promise = new Promise((resolve, reject) => {
  // первый промис вернет 5 через 1 секунду
  setTimeout(() => {
    const num = 5;
    resolve(num);
  }, 1000);
});

promise
  .then((result) => {
    console.log("Первый промис:", result); //выведем результат выполнения первого промиса
    return new Promise((resolve, reject) => {
      //метод then вернет второй промис, который вернет результат первого промиса в квадрате
      setTimeout(() => {
        const num = result * result;
        resolve(num);
      }, 3000);
    });
  })
  .then((result) => {
    console.log("Второй промис:", result);
    return new Promise((resolve, reject) => {
      //третий промис
      setTimeout(() => {
        const num = result * result;
        resolve(num);
      }, 3000);
    });
  })
  .then((result) => {
    console.log("Третий промис:", result); //результат третьего промиса
  })
  .catch((error) => {
    console.error("Ошибка:", error); //обработаем ошибку
  });
