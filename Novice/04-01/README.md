## Minggu 4 Hari ke 1

Oleh: Cintia Kus Herawati 

Tanggal: Maret 2020

## Ringkasan Materi:

## Lebih Lanjut Dengan Vue.js (1)

**Render Secara Deklaratif**

Inti dari Vue.js adalah sistem yang mampu membantu kita dalam me render data kedalam DOM secara deklaratif menggunakan sintaks template yang mudah dan jelas:

**Menyusun Komponen**

Sistem komponen juga termasuk salah satu hal penting yang ada di konsep Vue, karena komponen tersebut adalah sebuah abstraksi yang memudahkan kita untuk membangun aplikasi skala besar dengan menyusun komponen menjadi bagian yang lebih kecil, mandiri, dan bisa digunakan kembali. Jika kita pikirkan lebih lanjut, hampir semua tipe aplikasi antarmuka bisa kita abstraksikan menjadi komponen diagram pohon

**Relasi untuk Elemen Kustom**

Komponen pada Vue sangat mirip dengan Elemen Kustom, yang mana adalah bagian dari Spesifikasi Web Components. Hal itu dikarenakan sintaks di komponen Vue sangatlah fleksibel. Sebagai contoh, komponen Vue mengimplementasikan Slot API dan atribut spesial is. Tetapi bagaimanapun, terdapat perbedaan di beberapa sisi:

1. Spesifikasi dari Web Components sudah final, tetapi dia masih belum tersedia / bisa diimplementasikan di setiap peramban secara native. Safari 10.1+, Chrome 54+ dan Firefox 63+ sudah mendukung Web Components secara native. Jika dibandingkan, komponen pada Vue tidak membutuhkan polyfill apapun dan bekerja secara konsisten di semua peramban (IE9 keatas). Ketika dibutuhkan, komponen pada Vue juga bisa di bungkus kedalam native elemen kustom.

2. Komponen pada vue menyediakan fitur penting yang tidak tersedia di elemen kustom murni, terutama pada komponen lintas data, komunikasi event kustom dan integrasi build tool.
