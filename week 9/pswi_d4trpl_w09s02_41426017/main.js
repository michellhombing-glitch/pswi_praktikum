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

//menghubungkan file main.js ke index.html
console.log("Praktikum PSWI Minggu 9 Sesi 2");

//konversi tipe data
const teks = "2";
console.log(teks + 1);
console.log(Number(teks) + 1);

//uji coba koversi data
console.log(typeof teks);
console.log(typeof Number(teks));

//uji coba konversi data
console.log(Number("3")); //typeof NaN
console.log(Number.isFinite(Number("3"))); //Number"3"


//aturan jumlah tiket
const jumlah = Number("3");
if (!Number.isInteger(jumlah) || jumlah < 1 || jumlah > 5) {
    console.log("Jumlah tidak valid");
} else {
    console.log(jumlah * 10000);
}


//loop koleksi
const judul = ["HTML", "CSS", "Audit"];
for (const item of judul) console.log(item);
