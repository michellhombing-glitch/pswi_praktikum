1. DevTools : 
- Bahasa dokumen              html mempunyai lang=id                               Lulus
- Judul halaman               title tampil pada tab browser                        Lulus
- Hierarki                    heading h1, h2, dan h3 berurutan logis               Lulus
- Landmark                    header, nav, main, aside, footer ditemukan           Lulus
- Navigasi                    Tautan menuju id yang tersedia                       Lulus


2. Validasi : 
- sebelum : Error End tag section seen, but there were open elements.
From line 32, column 6; to line 32, column 15, </section>
- sesudah : Error Unclosed element article.
From line 28, column 9; to line 28, column 17,  <article>


3. Eksperimen : 
1 Hapus tag penutup article, muat ulang, dan periksa DOM.
2 Ubah salah satu id section sehingga tautan navigasi tidak menemukan tujuan.
3 Tambahkan h4 langsung setelah h2 tanpa h3, lalu evaluasi hierarkinya.
4 Letakkan main di dalam header, jalankan validator, kemudian perbaiki.

Gejala                       Bukti                       Penyebab            Perbaikan               Hasil
tautan tidak bergerak        URL memuat #kegiatan        id berbeda          Samakan href dan id     Berhasil
