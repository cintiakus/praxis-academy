// Uploading multiple files
const formData = new FormData();
const photos = document.querySelector('input[type="file"][multiple]');

formData.append('title', 'My Vegas Vacation');
for (let i = 0; i < photos.files.length; i++) {
  formData.append('photos', photos.files[i]);
}

fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  body: formData,
})
.then((response) => response.json())
.then((result) => {
  console.log('Success:', result);
})
.catch((error) => {
  console.error('Error:', error);
});