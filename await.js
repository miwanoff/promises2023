async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("готово!"), 1000)
    });
  
    let result = await promise; // чекатиме, поки проміс не виконається (*)
  
    alert(result); // "готово!"
  }
  
  f();