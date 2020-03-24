// Sending a request with credentials included

// //Contoh 1 -->credentials: 'include'
// fetch('https://jsonplaceholder.typicode.com/users', {
//   credentials: 'include'
// });

// //Contoh 2 -->credentials: 'same-origin'
// The calling script is on the origin 'https://jsonplaceholder.typicode.com/users'

// fetch('https://jsonplaceholder.typicode.com/users', {
//   credentials: 'same-origin'
// });

// //Contoh 3 -->credentials: 'omit'.
fetch('https://jsonplaceholder.typicode.com/users', {
  credentials: 'omit'
})
