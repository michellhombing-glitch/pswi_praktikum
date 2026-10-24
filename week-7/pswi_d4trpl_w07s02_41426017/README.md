Nama    : Michell P C Sihombing
NIM     : 41426017
Prodi   : DIV TRPL

1. validator index.html sukses
2. validator kegiatan.html sukses
3. validator dafter.html sukses

4. uji 320px
hasilnya : menampilkan navbar gambar dengan sesuai, dan 4 kotak terlihat jelas, teks tidak keluar dari kotak tersebut. dan jika diperkecil ukuran layar maka akan menyesuaikan sendiri.

5. uji 1200px
hasilnya :  menampilkan navbar gambar dengan sesuai, dan 4 kotak terlihat jelas 2 kolom, teks tidak keluar dari kotak tersebut. dan jika diperkecil ukuran layar maka akan menyesuaikan sendiri.

6. uji zoom 200%
hasilnya : tampilan  tetap bagus dan rapi, gambar tetap terlihat dan kotak menyesuaikan ukuran layar jika di perbesar dan di perkecil, jika lyar di perkecil makan kotak akan ke bawah sehingga kotak dan teks tidak keluar dari layar.

7.  <header class="site-header">
    <!-- Judul website -->
    <h1>WELCOME!!</h1>
    <!-- Navbar dengan gambar sebagai latar belakang -->
    <nav class="navbar" aria-label="Navigasi utama">
        <a href="index.html">Beranda</a>
        <a href="kegiatan.html">Kegiatan</a>
        <a href="daftar.html">Daftar</a>
    </nav>
</header>
Kode <header class="site-header"> digunakan untuk membuat bagian atas website. <h1>WELCOME!!</h1> berfungsi menampilkan judul utama. <nav class="navbar"> digunakan untuk membuat menu navigasi, sedangkan aria-label="Navigasi utama" membantu pembaca layar mengenali menu tersebut. Kode <a href="index.html">, <a href="kegiatan.html">, dan <a href="daftar.html"> berfungsi membuat tautan untuk berpindah ke halaman Beranda, Kegiatan, dan Daftar. Sementara itu, class="site-header" dan class="navbar" digunakan sebagai penanda untuk mengatur tampilan melalui CSS.
- fungsinya : untuk membuat bagian atas website (header) yang berisi judul “WELCOME!!” dan menu navigasi. Menu Beranda, Kegiatan, dan Daftar digunakan untuk memudahkan pengunjung berpindah halaman. Atribut class digunakan untuk mengatur tampilan melalui CSS, sedangkan href menentukan halaman yang dibuka ketika menu diklik.

8. /* Membuat navbar menggunakan gambar lakecomo.jpg */
.navbar {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;

    /* Menggunakan gambar sebagai background navbar */
    background-image:
        linear-gradient(
            rgba(0, 0, 0, 0.45),
            rgba(0, 0, 0, 0.45)
        ),
        url("lakecomo.jpg");

    /* Membuat gambar memenuhi area navbar */
    background-size: cover;

    /* Memusatkan gambar */
    background-position: center;

    /* Mencegah gambar berulang */
    background-repeat: no-repeat;

    /* Memberi ruang di dalam navbar */
    padding: 25px 15px;

    /* Membuat sudut navbar melengkung */
    border-radius: 10px;
}
Kode .navbar digunakan untuk mengatur tampilan menu navigasi agar lebih rapi dan menarik. display: flex menyusun menu secara fleksibel, align-items: center memusatkan isi secara vertikal, flex-wrap: wrap memungkinkan menu turun ke baris berikutnya jika ruang tidak cukup, dan gap: 10px memberi jarak antaritem. background-image menambahkan gambar lakecomo.jpg dengan lapisan hitam transparan agar tulisan lebih mudah dibaca. background-size: cover membuat gambar memenuhi area navbar, background-position: center memusatkan gambar, dan background-repeat: no-repeat mencegah gambar berulang. Terakhir, padding: 25px 15px memberi ruang di dalam navbar, sedangkan border-radius: 10px membuat sudut navbar melengkung.
- fungsi : Fungsi kode .navbar adalah mengatur tampilan menu navigasi, mulai dari posisi dan jarak menu, gambar latar belakang, lapisan gelap agar tulisan terlihat jelas, hingga jarak dalam dan sudut navbar yang melengkung.