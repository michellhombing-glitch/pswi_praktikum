Nama      : Michell P C Sihombing
NIM       : 41426017
Prodi     : DIV Teknologi Rekayasa Perangkat Lunak


1. FUNCTION MURNI SEDERHANA
- function = menjalankan tugas tertentu dan dapat digunakan kembali kapan saja tanpa harus menulis ulang.
- function hitungTotal(n, harga) = n dan harga merupakan parameeter, dengan fungsi hitungTotal
- if !Number.isInteger(n) = memeriksa apakah n merupakan bil bulat. ! = tidak. 
- return null; = mengembalikan nilai kosong jika jumlah tidak valid.
- return n * harga = mengembalikan jumlah barang dengan harga satuan untuk  mendapatkan total harga.
- console.log(hitungTotal(2, 10000)); = memanggil jumlah barang 2, dan harga satuan = Rp10.000
- uji normal dan tidak valid = uji normal jika n yang dimasukkan adalah bilangan bulat dan lebih dari 1, tidak valid jika n yang dimasukkan adalah bukan bilangan bulat dan n kurang dari 1.
- console.log = menampilkan hasil ke console agar bisa dilihat


2.  KOLEKSI KEGIATAN
const kegiatan = [
    { id: 1, judul: "HTML", kuota: 20 },
    { id: 2, judul: "CSS", kuota: 0 }
];
- id sebagai nomor identitas kegiatan
- judul sebagai nama kegiatan
- kuota sebagai jumlah peserta yang masih tersedia
const tersedia = kegiatan.filter(k => k.kuota > 0);
- filter() digunakan untuk menyaring data berdasarkan kondisi tertentu, artinya ambil kegiatan yang memiliki kuota lebih dari 0.

pada uji coba kuota 0 maka di console tidak tertampil karena kuota 0 dikarenakan pada code ditentukan const tersedia = kegiatan.filter(k => k.kuota > 0);

const judulKegiatan = kegiatan.map(k => k.judul);
console.log(judulKegiatan);
- map() digunakan untuk  mengambil atau mengubah setiap elemen array menjadi bentuk data baru. 

perbedaan filter() dan map() yaitu kalau filter() menyaring data berdasarkan kondisi, map() mengambil atau mengubah data menjadi array baru.


3. DESTRUCTURING DAN SCOPE
- Destructuring: Mengambil nilai properti dari sebuah object dengan cara yang lebih singkat.
cth : const { judul, kuota } = kegiatan[0];

- Scope: Memahami batas akses sebuah variabel, yaitu di mana variabel bisa digunakan dan di mana variabel tidak bisa digunakan.
- Block scope adalah batas penggunaan variabel yang dibuat menggunakan let atau const di dalam { }.

- kegiatan[0] mengambil object pertama dalam array.
- { judul, kuota } mengambil properti judul dan kuota dari object tersebut.
- console.log(judul, kuota) menampilkan kedua nilai.
- let dan const memiliki block scope. Variabel yang dibuat di dalam block tidak bisa diakses dari luar block.

//experimen scope
- Destructuring: Digunakan untuk mengambil properti judul dan kuota dari object kegiatan pertama.
- Tindakan: Membuat variabel namaKegiatan menggunakan const di dalam block, kemudian mencoba mengaksesnya dari luar block.
- Hasil: Terjadi ReferenceError karena variabel hanya dapat diakses di dalam block tempat variabel tersebut dibuat.
- Perbaikan: Memindahkan pemanggilan variabel ke dalam block agar sesuai dengan aturan scope.


4. MODULE DAN UJI
- export digunakan agar function bisa digunakan oleh file lain di js lain.
- function hitungTotal merupakan function untuk menghitung total harga
- n jumlah barang
- harga merupakan harga satu barang
- return n * harga mengembalikan hasil perkalian jumlah barang dnegan harga.
cth : jika jumlah barang 2 dan harga satu barang Rp10.000, hasilnya Rp20.000

- pada utils.js dipastikan function ditulis menggunakan export :
export function hitungTotal(n, harga) {
    if (!Number.isInteger(n) || n < 1) return null;
    return n * harga;
}
- pada main.js ditulis kan code :
import {hitungTotal} from "./utils.js";
console.log(hitungTotal(2, 10000));
sehingga diambil function dari file lain (utils.js).
