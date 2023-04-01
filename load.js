//-----------------1----------------------

// fetch("books.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
//-----------------2----------------------
// let booksBlock = document.querySelector("#books");
// fetch("books.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     insertBooks(data);
//   });
// function insertBooks(books) {
//   let str = `<div class="wrap">`;
//   for (let i = 0; i < books.length; i++) {
//     str += `<div class="bookWrap">`;
//     str += `<h2>${books[i].title}</h2>`;
//     str += `<p>${books[i].author}</p>`;
//     str += `</div>`;
//   }
//   str += `</div>`;
//   booksBlock.innerHTML = str;
// }

//-----------------3----------------------
async function loadBooks() {
  let url = "books.json";
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
}
loadBooks();
