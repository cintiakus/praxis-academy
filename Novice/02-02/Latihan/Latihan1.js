function Gunung(nama, lokasi, status) {
    this.nama = nama,
    this.lokasi = lokasi,
    this.status = status,
    this.getName = function () {
        return "Nama :"+ this.nama + "," + "Lokasi :"+this.lokasi+ ","+"Status: "+ this.status;
        
    }
}

let gunung = new Gunung("Slamet", "Jawa Tengah", "Aktif");
let gunung1 = new Gunung("Merapi", "Yogyakarta", "Aktif");

console.log(gunung.getName());