function tellFortune(jobTitle, geoLocation, partner, numKids){
    var future = 'Anda akan menjadi' + jobTitle + ' di ' + geoLocation + ' dan menikah dengan '+ partner + ' ' +
     ' dengan ' + numKids+ ' anak.';
    console.log(future);
}

tellFortune(' Developer', 'spain', 'Shaq', 3);
tellFortune(' Pemain sepak bola', 'Japan', 'Ryan Gosling', 3);
tellFortune(' Presiden', 'Russia', 'The Oatmeal', 1);