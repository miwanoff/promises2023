let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("Success!"), 1000); // задача выполнена успешно (через 1 секунду)
 // setTimeout(() => reject(new Error("Error!")), 1000); // задача выполнена с ошибкой (через 1 секунду)
});

promise.then(
  function (result) {
    /* обработка успешного выполнения */
    alert(result);
  },
  function (error) {
    /* обработка ошибки */
    alert(error);
  }
);

// promise.catch(() => alert("Ошибка")); 

promise.finally(() => alert("Работа завершена"))
