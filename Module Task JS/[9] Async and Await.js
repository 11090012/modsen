async function fetchAndProcessData(url) {
  try {
    const response = await fetch(url); //обратимся к серверу с помощью fetch() и подождем ответ с помощью await
    if (!response.ok) {
      //если сервер вернул успешный ответ, типо 200-299, тогда true, если, например 404, то false
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json(); // если ответ успешный, тогда преобразуем в json и дождемся выполнения с помощью await
    return data; //вернем данные с сервера
  } catch (error) {
    //обработаем ошибку
    console.error("Ошибка:", error);
    return "Произошла ошибка при загрузке данных";
  }
}

console.log(
  fetchAndProcessData("https://jsonplaceholder.typicode.com/posts/1") //обратимся к серверу, в консоль выведем результат выполнения
);
