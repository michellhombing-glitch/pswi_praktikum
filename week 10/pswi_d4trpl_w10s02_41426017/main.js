
//text dan elemen baru (4)
const daftar = document.querySelector("#daftar");
const li = document.createElement("li");
li.textContent = "<b>Rina</b>";
daftar.append(li);

//state dan render
let peserta = [{ id: 1, nama: "Rina" }, { id: 2, nama: "Budi" }];
function render() {
 daftar.replaceChildren();
 for (const p of peserta) {
 const li = document.createElement("li");
 li.textContent = p.nama; daftar.append(li);
 }
}
render();

const pesan = document.querySelector("#pesan");
pesan.textContent = peserta.length ? "": "Belum ada peserta";

//keadaan kosong
