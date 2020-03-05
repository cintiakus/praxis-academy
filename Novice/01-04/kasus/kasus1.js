var re = /([A-Z0-9])([ \/\.])/;
function testInfo(plateInput) {
  var OK = re.exec(plateInput.value);
  if (!OK) {
    alert(plateInput.value + ' Bukan nomor plat kendaraan dengan kode area!'); 
  } else {
    alert(' Trimakasih, nomor plat kendaraan Anda ' + plateInput.value);}
}