## Minggu 02
## Hari ke:2
## Oleh: Cintia Kus Herawati 
## Tanggal:03 Maret 2020
## Ringkasan Materi:

## Control flow and error handling
**Pernyataan paling dasar adalah pernyataan blok, yang digunakan untuk mengelompokkan pernyataan.
Pernyataan blok umumnya digunakan dengan pernyataan aliran kontrol(if, for, while).**

**Conditional statements --> Conditional statements yaitu seperangkat perintah yang dijalankan jika kondisi yang ditentukan benar.**

**if...else statement --> Gunakan pernyataan if untuk menjalankan pernyataan jika kondisi logis benar. Gunakan klausa opsional lain untuk menjalankan pernyataan jika kondisinya salah.**

**Dalam kasus beberapa kondisi, hanya kondisi logis pertama yang mengevaluasi true yang akan dieksekusi. Untuk mengeksekusi banyak pernyataan, kelompokkan dalam blok pernyataan({ … }).**

**Best practice -->Secara umum, praktik yang baik untuk selalu menggunakan pernyataan blokir — terutama ketika menyusun pernyataan if.**
**Falsy values,Nilai-nilai berikut ini bernilai false (juga dikenal sebagai nilai Falsy):** 
false
undefined
null
0
NaN
the empty string ("")

**switch statement-->switch statement memungkinkan suatu program untuk mengevaluasi ekspresi dan berupaya mencocokkan nilai ekspresi dengan label kasus. Jika kecocokan ditemukan, program mengeksekusi pernyataan terkait.**

**break statements-->terkait dengan setiap klausa kasus memastikan bahwa program keluar dari sakelar setelah pernyataan yang cocok dijalankan, dan kemudian melanjutkan eksekusi pada sakelar pernyataan berikut. Jika istirahat dihilangkan, program melanjutkan eksekusi di dalam pernyataan switch (dan akan mengevaluasi kasus selanjutnya, dan seterusnya).**

## Exception handling statements ##

**Exception types**

-->throw statement
-->DOMException and DOMError

**throw statement-->Gunakan pernyataan melempar untuk melemparkan pengecualian.**

**try...catch statement-->try...catch statement yang akan dicoba, dan menentukan satu atau beberapa respons jika ada pengecualian. Jika ada pengecualian,try...catch menangkapnya.**

**The catch block**
**-->Blok catch menentukan pengidentifikasi (catchID dalam sintaksis sebelumnya) yang menyimpan nilai yang ditentukan oleh pernyataan throw. Anda dapat menggunakan pengenal ini untuk mendapatkan informasi tentang pengecualian yang dilemparkan.**

**The finally block**
**The finally block berisi pernyataan yang akan dieksekusi setelah blok coba dan tangkap dieksekusi. Selain itu, blok akhirnya dieksekusi sebelum kode yang mengikuti pernyataan try…catch…finally.**

**Utilizing Error objects**
**Bergantung pada jenis kesalahan, Anda mungkin dapat menggunakan properti nama dan pesan untuk mendapatkan pesan yang lebih halus.**
**Properti name menyediakan kelas umum Error (seperti DOMException atau Error), sementara pesan umumnya memberikan pesan yang lebih ringkas daripada yang didapat dengan mengonversi objek kesalahan ke string.**

## Loops and iteration

**Loop menawarkan cara cepat dan mudah untuk melakukan sesuatu berulang kali.**
**for statement --> A for loop berulang sampai kondisi yang ditentukan bernilai false. JavaScript untuk loop mirip dengan Java dan C untuk loop.**

**do...while statement-->Pernyataan/statement do...while terus di ulangi sampai evaluasi kondisi bernilai false/salah.**

**while statement --> Sebuah statement while di eksekusi pernyataan pernyataannya asalkan memenuhi syarat kondisinya yang bernilai true/benar**

**labeled statement-->Sebuah label menyediakan sebuah statement dengan pengenal yang memungkinkan Anda merujuknya di tempat lain dalam program Kamu. Untuk contohnya, Kamu dapat menggunakan label untuk mengidentifikasi pengulangan, lalu gunakan statement break atau continue untuk menunjukkan apakah suatu program harus memutuskan loop atau melanjutkan eksekusinya**

**continue statement-->Statement continue bisa digunakan untuk memulai lagi statement while, do-while, for, atau label.**

**for...in statement-->Statement for...in mengiterasi sebuah variabel spesifik diatas properti enumerable dari sebuah objek. Untuk setiap properti yang berbeda, JavaScript mengeksekusi pernyataan pernyataan yang spesifik**

**for...in statement akan mengembalikan nama properti yang ditentukan pengguna Anda di samping indeks numerik.**

**for...of statement-->The for ... of statement menciptakan loop Iterating pada objek yang dapat di-iterable (termasuk Array, Map, Set, objek argumen dan sebagainya), menggunakan pengait iterasi kustom dengan pernyataan yang akan dieksekusi untuk nilai setiap properti yang berbeda.**








