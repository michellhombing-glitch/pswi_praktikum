const greetingButton = document.querySelector('#greeting-button');

if (greetingButton) {
  greetingButton.addEventListener('click', () => {
    alert('Selamat Belajar Pengembangan Situs Web I!');
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      alert("Pendaftaran berhasil!");
    });
  }
});


//mengambil dan menjalankan function dari  utils.js



console.log(hitungTotal(2, 10000)); //arahan dari modul
console.log(hitungTotal(3, 10000)); //normal
console.log(hitungTotal(1.5, 10000)); //null (tidak valid karena bukan bilangan bulat)


//koleksi kegiatan
const kegiatan = [
 { id: 1, judul: "HTML", kuota: 25 },
 { id: 2, judul: "CSS", kuota: 0 }, //tidak tampil di console karena kuota 0
 { id: 3, judul: "JavaScript", kuota: 15 } //menambah kegiatan baru
];
//filter()
const tersedia = kegiatan.filter(k => k.kuota > 0);
console.log(tersedia);
//map()
const judulKegiatan = kegiatan.map(k => k.judul);
console.log(judulKegiatan);


//Destructuring dan scope
const { judul, kuota } = kegiatan[0];
console.log(judul, kuota);

// Eksperimen block scope
{
    const namaKegiatan = "HTML";
    console.log(namaKegiatan);
    console.log(namaKegiatan);
}


//module dan uji
import {hitungTotal} from "./utils.js";
console.log(hitungTotal(2, 10000));
console.log(hitungTotal(3, 10000));
console.log(hitungTotal(1.5, 10000));