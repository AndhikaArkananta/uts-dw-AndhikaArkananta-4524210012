const fieldNama = document.querySelector('#nama_mhs');
const fieldNpm = document.querySelector('#npm_mhs');
const fieldFakultas = document.querySelector('#fakultas');

const previewNama = document.querySelector('#preview-Nama');
const previewNpm = document.querySelector('#preview-Npm');
const previewFakultas = document.querySelector('#preview-Fakultas');

function tampilkanTeks(target, value, defaultTxt) {
  target.textContent = value.trim() ? value : defaultTxt;
}

fieldNama.addEventListener('input', (e) => {
  tampilkanTeks(previewNama, e.target.value, 'Nama Mahasiswa');
});

fieldNpm.addEventListener('input', (e) => {
  tampilkanTeks(previewNpm, e.target.value, 'NPM Mahasiswa');
});

fieldFakultas.addEventListener('input', (e) => {
  tampilkanTeks(previewFakultas, e.target.value, 'Fakultas Mahasiswa');
});
