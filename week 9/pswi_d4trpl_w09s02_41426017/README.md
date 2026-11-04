Nama      : Michell P C Sihombing
NIM       : 41426017
Prodi     : DIV Teknologi Rekayasa Perangkat Lunak



1. MENGHUBUNGKAN MAIN.JS KE INDEX.HTML :
saya mebghubung kan main.js di HTML dengan code <script src="main.js" defer></script>

2. KONVERSI DATA :
mengkonversi data eskperimen string dan number, mengamati typeof juga uji Number("abc"); dan uji mandiri string kosong. hasil yang di berikan yaitu 
- "2" angka 2 disimpan sebagai teks string
- teks + 1 = menggabungkan teks "2" dan angka 1 hasilnya "21" mengapa tidak 3? karena dari kedua angka tersebut mempunyai tipe data yang berbeda, "2" string dan 1 integer.
- Number(teks) + 1 = mengubah teks menjadi angka, lalu menjumpahkannya menjadi 3, 2 + 1 = 3
- Number("abc") = menghasilkan NaN (Not a Number) karena teks tidak dapat di konversi menjadi angka.
- Number.isFinite(), memeriksa apakah nilai merupakan angka yang valid dan terbatas.
- uji mandiri teks kosong, menghasilkan angka 1 pada devtools console, karena teks kosong dikonversikan menjadi angka 0, lalu 0 + 1 = 1 

3. ATURAN JUMLAH TIKET
tujuannya adalah menerima jumlah tiket antara 1 sampai 5 dan menghitung total harga tiket sebesar Rp10.000 pertiket. 
- Number("3) = mengubah teks menjadi angka
- Number.isInteger(jumlah) = memeriksa apakah jumlah bil bulat
- || = jika salah satu kondisi benar maka seluruh kondisi benar dan tidak menjalankan else. jika false maka menjalankan else
- else = dijalankan jika jumlah tiket tidak valid
- jumlah * 10.000 = menghitung total harga tiket
pada uji coba 0, 6, 1.5, dan "abc" maka hasilnya "jumlah tidak valid" pada uji coba 1, 3, dan 5 maka hasilnya 10.000, 30.000, dan 50.000.

4. LOOP KOLEKSI
- ["HTML", "CSS", "Audit"]; = Array yang menyimpan 3 judul
- for = perulangan
- const item = variabel yang menampung setiap elemen array
- of judul = mengambil elemen dari array judul satu per satu
- console.log(item) = menampilkan elemen yang sedang diproses
pada uji coba normal menampilkan 3 baris keluaran judul HTML, CSS, dan Audit pada console. uji coba judul kosong akan menghasilkan keluaran yang kosong, dan menambah item menjadi 4 maka hasil keluaran di console menjadi 4 yaitu HTML, CSS, Audit, dam JavaScript.

5. AI chatGPT 
- membantu memahami konsep javascript dan menjelaskan code praktikum.
- menjelaskan variabel, konversi data, conditional, dan loop