//SESI 02
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

 //tombol hapus saat render
 const btn = document.createElement("button");
btn.type = "button"; btn.textContent = "Hapus";
btn.dataset.id = String(p.id);
li.append(btn);
 }
}
render();

//keadaan kosong
const pesan = document.querySelector("#pesan");
pesan.textContent = peserta.length ? "": "Belum ada peserta";


//SESI 03
//tambah peserta
const form = document.querySelector("#form-peserta");
let berikutnya = 3;
form.addEventListener("submit", event => {
 event.preventDefault();
 const nama = String(new FormData(form).get("nama") ?? "").trim();
 if (!nama) { pesan.textContent = "Nama harus diisi"; return; }
 peserta.push({ id: berikutnya++, nama });
 render(); form.reset();
});

//delegation dan pengujian
daftar.addEventListener("click", event => {
 const btn = event.target.closest("button[data-id]");
 if (!btn || !daftar.contains(btn)) return;
 const id = Number(btn.dataset.id);
 peserta = peserta.filter(p => p.id !== id);
 render();
});