function getVariable(varName) {
  try {
    return eval(varName); //попробуем получить значение переменной и вернуть его
  } catch (error) {
    if (error instanceof ReferenceError) {
      //если исключение экземпляр класса ReferenceError
      alert("Ошибка: переменная " + varName + " не определена"); //то напишем, что переменная не определена
    } else {
      // если нет, то пропускаем исключение
      throw error;
    }
  }
}
let something = 10; //определяем переменную
getVariable("something"); // и передаем ее имя (все будет норм)
getVariable("nothing"); //передаем имя неопределенной переменной, получим сообщение, что переменная не определена
