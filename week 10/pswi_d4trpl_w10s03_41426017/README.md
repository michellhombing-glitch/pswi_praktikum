Nama    : Michell P C Sihombing
NIM     : 41426017
Prodi   : DIV Teknologi Rekayasa Perangkat Lunak

TAMBAH PESERTA
- menguji klik dan tombol enter, jika mengklik dan menekan tombol enter maka nama yang mau dimasukkan akan muncul di list
- menguji input kosong dan spasi saja, jika dilakukan pengujian tersebut maka akan keluar tulisan "Nama harus diisi"
- menguji reload, setelah menambahkan data nama, uji reload pada web, maka state memori akan kembali ke kondisi awal  karena pada tahap ini data yang dimasukkan belum permanen.

TOMBOL HAPUS SAAT RENDER 
- setelah memasukkan code pada looping, maka tombol hapus akan muncul di sebelah nama yang akan di input. setiap input nama ke dalam akanmemunculkan tombol hapus dimana tombol hapus akan memasang atribut data-id yang berisi id dari peserta tersebut (btn.dataset.id = String(p.id);) ini memastikan bahwa setiap tanda pengenal terikat dengan data peserta.

DELEGATION DAN PENGUJIAN
- daftar.addEventListener("click", event => ): Memasang satu event listener pada elemen kontainer daftar (<ul>) untuk mendengarkan setiap klik yang terjadi di dalam area daftar secara efisien.
- const btn = event.target.closest("button[data-id]");: Memastikan bahwa elemen yang diklik benar-benar merupakan tombol hapus dan mengambil atribut ID-nya.
- if (!btn || !daftar.contains(btn)) return;: Mengabaikan klik jika area yang ditekan bukan bagian dari tombol hapus yang valid di dalam daftar.
- peserta = peserta.filter(p => p.id !== Number(btn.dataset.id));: Menyaring data peserta di memori untuk membuang data yang ID-nya sama dengan tombol yang diklik.
- render();: Memperbarui tampilan di layar (DOM) agar baris peserta yang dihapus langsung hilang secara real-time.

pengujian terakhir :
- uji hapus item awal dan akhir = data terhapus dengan akurat tanpa mengganggu urutan data yang tengah.
- uji tambah lalu hapus item baru = tombol merespon dengan benar dan menghapus data baru tersebut dengan baik.
- uji interaksi nama dengan karakter khusus/mirip markup = ketika nama diinput dengan karakter khusus, tampilan nama tetap masuk dan tombol hapus tetap berfungsi dengan baik.
- uji reload halaman = ketika  beberapa nama diinput akan dilakukan reload/ refresh pada halaman browser, hasilnya data di memori akan kembali kosong karena belum terhubung ke pernyimpanan permanen.
