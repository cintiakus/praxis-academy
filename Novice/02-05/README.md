## Minggu 02
## Hari ke:5
## Oleh: Cintia Kus Herawati 
## Tanggal:16 Maret 2020
## Ringkasan Materi:

## Modules di JavaScript

**mekanisme untuk dapat memecah program JavaScript menjadi modul-modul terpisah yang dapat diimpor saat diperlukan saja. Node.js telah memiliki kemampuan ini untuk waktu yang lama, dan ada sejumlah perpustakaan JavaScript dan framework yang memungkinkan kita menggunakan modul (misalnya sistem modul CommonJS, AMD dan lainnya seperti RequireJS, dan yang terbaru Webpack dan Babel.**

**Support Browser--> Penggunaan modul JavaScript secara native bergantung pada statement import dan export**

**Ada lima langkah yang dilakukan untuk mengembalikan modul yang diperlukan:**

1. Menyelesaikan specifier yang disediakan modul ke jalur absolut atau artefak, yang dipahami NodeJS.
2. Memuat menentukan jenis file.
3. Pembungkus memberi file di private scope
4. Mengevaluasi kode yang dimuat oleh runtime JavaScript.
5. Fungsi wrapper cache objek ekspor untuk selanjutnya membutuhkan panggilan yang akan mendapatkan objek yang sama persis dikembalikan jika akan menyelesaikan ke file yang sama.

**Modules-->Modul JS (juga dikenal sebagai "modul ES" atau "modul ECMAScript") adalah fitur baru utama, atau lebih tepatnya kumpulan fitur baru. Anda mungkin pernah menggunakan sistem modul JavaScript pengguna sebelumnya. Mungkin Anda menggunakan CommonJS seperti di Node.js, atau mungkin AMD, atau mungkin yang lain. Semua sistem modul ini memiliki satu kesamaan: mereka memungkinkan Anda untuk mengimpor dan mengekspor barang.**
**JavaScript sekarang memiliki sintaks terstandarisasi untuk hal itu. Dalam sebuah modul, Anda dapat menggunakan kata kunci ekspor untuk mengekspor apa saja. Anda dapat mengekspor const, a function, or any other variable yang mengikat atau deklarasi.**
**Fitur modul lainnya**

1. Dynamic import()-->Hanya menggunakan impor statis. Dengan impor statis, seluruh grafik modul Anda perlu diunduh dan dieksekusi sebelum kode utama Anda dapat berjalan. Terkadang, Anda tidak ingin memuat modul di muka, tetapi hanya sesuai permintaan, hanya saat Anda membutuhkannya - saat pengguna mengklik tautan atau tombol, misalnya. Ini meningkatkan kinerja waktu muat awal.

2. import.meta-->Fitur terkait modul baru lainnya adalah import.meta, yang memberi Anda metadata tentang modul saat ini. Metadata persis yang Anda dapatkan tidak ditentukan sebagai bagian dari ECMAScript; itu tergantung pada lingkungan host. Di browser, Anda mungkin mendapatkan metadata berbeda dari pada di Node.js, misalnya.

Macam-macam module :
 -AMD - salah satu sistem modul yang paling kuno, awalnya diimplementasikan oleh perpustakaan memerlukan.js
 -CommonJS - sistem modul yang dibuat untuk server Node.js.
 -UMD - satu lagi sistem modul, disarankan sebagai yang universal, kompatibel dengan AMD dan CommonJS.
 

 






