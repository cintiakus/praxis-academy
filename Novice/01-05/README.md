## Minggu 01
## Hari ke:5
## Oleh: Cintia Kus Herawati 
## Tanggal:06 Maret 2020
## Ringkasan Materi:

**Struktur Data di JavaScript**
**1. Obyek dan Array**

**-Objek adalah kumpulan dari properti, dan properti adalah sepasang hubungan antara nama (atau key) dan value. Nilai properti bisa berupa fungsi, Dalam hal ini properti itu disebut method. Di JavaScript, objek adalah entitas yang mandiri dengan properti dan tipe. **

**-Array, di sisi lain, biasanya mengandung jumlah yang bervariasi dari nilai-nilai yang identik secara konseptual dan menggunakan angka (mulai dari 0) sebagai nama properti mereka. Ada beberapa properti bernama dalam array, seperti length dan sejumlah method.**

**-String is iterable**

**-Calling an iterator explicitly**

**-Iterables and array-likes**

**-Array.from**

**-Iterables**
**Iterable Objek adalah generalisasi dari array. Itu adalah konsep yang memungkinkan kita untuk membuat objek apa pun dapat digunakan dalam loop for..of.
**Objek yang dapat digunakan dalam for..of disebut iterable.**
**Secara teknis, iterables harus mengimplementasikan metode yang bernama Symbol.iterator.**
**Metode Symbol.iterator dipanggil secara otomatis oleh for..of, tetapi kita juga dapat melakukannya secara langsung.
Iterables bawaan seperti string atau array, juga mengimplementasikan Symbol.iterator.**
**Objek yang memiliki properti dan panjang yang diindeks disebut array-like. Objek seperti itu mungkin juga memiliki properti dan metode lain, tetapi tidak memiliki metode array bawaan.Jika kita melihat di dalam spesifikasi - kita akan melihat bahwa sebagian besar metode built-in mengasumsikan bahwa mereka bekerja dengan iterables atau array-suka bukannya array "nyata", karena itu lebih abstrak.Array.from (obj [, mapFn, thisArg]) membuat Array nyata dari objek iterable atau seperti array, dan kita kemudian dapat menggunakan metode array di atasnya. Argumen opsional mapFn dan thisArg memungkinkan kita untuk menerapkan fungsi ke setiap item.**


