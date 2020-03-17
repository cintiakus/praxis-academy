// Blocking: 1,... 2
alert(1);
var value = localStorage.getItem('foo');
alert(2);

// Non-blocking: 1, 3,... 2
alert(1);
fetch('example.com').then(() => alert(2));
alert(3);