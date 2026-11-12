Nama    : Michell P C Sihombing
NIM     : 41426017
Prodi   : DIV Teknologi Rekayasa Perangkat Lunak

STARTER DOM
- menguji selektor salah lalu baca null, menguji dengan salah mengetik nama ID menjadi #daftar-salah untuk melihat respon program.
program mendeteksi null karena elemen pada ID tersebut tidak ada di dalam dokumen html.
- sebelum pengujian hasil tampil di web yaitu <b>Rina<b>.

TEXT DAN ELEMEN BARU
- mwnggunakan document.querySelector() untuk mencari elemen HTML seperti tag h1 dan elemen list (#daftar)
- saat mencoba memasukkan teks menggunakan li.textContent = "<b>Rina</b>";, tag <b> ikut tercetak da bukan membuat hutuf menjadi tebal. textContent membuat semua input menjadi text murni aman dari manipulasi HTML.
- const li = document.createElement("li"); baris memerintahkan membuat elemen baru dari jenis <li> di dalam memori. elemen ini belum muncul di layar karena belum dimasukkan ke dalam dokumen utama.
- li.textContent = "<b>Rina</b>"; = baris mengisi elemen <li> yang baru dengan teks  "<b>Rina</b>".
- daftar.append(li); = baris mengambil elemen <li> yang tadi

STATE DAN RENDER
- pada code pertama variabel menampung sebuah array yang berisi objek data peserta, yaitu "Rina" dan "Budi"
- function render() = membuat sebuah fungsi render() berdasarkan data terbaru yang ada di dalam variabel peserta.
- daftar.replaceChildren(); = membersihkan isi elemen daftar (<ul>) sebelum elemen baru dimasukkan.
- for (const p of peserta) = melakukan perulangan (looping) untuk mengecek satu persatu data peserta di dalam array peserta. setiap satu data di simpan sementara ke dalam variabel p.
- const li = document.createElement("li"); = diminta untuk membuat elemen baru <li> 
- li.textContent = p.nama; = mengisi tag elemen <li> yang baru dibuat dengan mengambil properti nama.
- daftar.append(li); = menempelkan elemen <li> yang sudah berisi nama peserta ke dalam wadah daftar utama (<ul>).
- render(); = menjalankan fungsi render() pertama kali saat halaman dibuat, supaya data awal array peserta mencul.
