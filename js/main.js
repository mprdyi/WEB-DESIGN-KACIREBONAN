// ===============================
// Tgl Dinamis
// ===============================
const bulan = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];
const tanggal = new Date();
document.getElementById("tanggal").textContent = `${bulan[tanggal.getMonth()]} ${tanggal.getFullYear()}`;


// ===============================
// Hamburger toggle
// ===============================
const hamburger = document.getElementById("hamburger");
const kiri = document.querySelector(".navbar-kiri");
const kanan = document.querySelector(".navbar-kanan");

hamburger.addEventListener("click", () => {
  kiri.classList.toggle("show");
  kanan.classList.toggle("show");
});


// ===============================
// slider ikonik
// ===============================
const list = document.querySelector('.list-card-tempat');
const container = document.querySelector('.container-card');
const btnKiri = document.querySelector('.scroll-kiri');
const btnKanan = document.querySelector('.scroll-kanan');
const langkahScroll = 320;

let posisi = 0;

function updateScroll() {
  // Total scrollable width
  const maxScroll = list.scrollWidth - container.clientWidth;

  // Batasi posisi maksimal
  if (posisi > maxScroll) posisi = maxScroll;
  if (posisi < 0) posisi = 0;

  list.style.transform = `translateX(-${posisi}px)`;
}

btnKanan.addEventListener('click', () => {
  posisi += langkahScroll;
  updateScroll();
});

btnKiri.addEventListener('click', () => {
  posisi -= langkahScroll;
  updateScroll();
});

// ===============================
// play YT
// ===============================
document.getElementById("youtube-thumbnail").addEventListener("click", function () {
  this.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/bc1aoan-IFY?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
});

// ===============================
// MODAL MAPS
// ===============================
const maps = {
  empal: `<iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d63403.351787161635!2d108.5505039!3d-6.6828651!3m2!1i1024!2i768!4f13.1!2m1!1sempal%20gentong%20terdekat%20cirebon!5e0!3m2!1sid!2sid!4v1751029177217!5m2!1sid!2sid" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  gejrot: `<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31699.09402789457!2d108.54423513412435!3d-6.722572900581062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stahu%20gejrot%20terdekat%20cirebon!5e0!3m2!1sid!2sid!4v1751029400291!5m2!1sid!2sid" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  docang: `<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31699.08841300896!2d108.54423516706215!3d-6.722659000292695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdocang%20terdekat%20cirebon!5e0!3m2!1sid!2sid!4v1751029345434!5m2!1sid!2sid" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  jamblang: `<iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d31699.082798052183!2d108.5442352!3d-6.7227451!3m2!1i1024!2i768!4f13.1!2m1!1snasi%20jamblang%20terdekat%20cirebon!5e0!3m2!1sid!2sid!4v1751029306125!5m2!1sid!2sid" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
};

document.querySelectorAll('.plus-button').forEach(button => {
  button.addEventListener('click', function () {
    const id = this.getAttribute('data-id');
    const title = this.getAttribute('data-title');
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-map').innerHTML = maps[id];
    document.getElementById('modal').style.display = 'flex';
  });
});

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// ===============================
// scroll animasi
// ===============================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
});
const elements = document.querySelectorAll('.reveal'); 
elements.forEach(el => observer.observe(el)); 


// ===============================
// menu budaya lainnya
// ===============================
function showBudaya(sectionId) {
  const allSections = ["section-topeng", "section-wayang", "section-aksara"];
  const allOptions = document.querySelectorAll(".budaya-option");
  const jelajahiButton = document.querySelector(".btn-jelajahi");
  const jelajahiKonten = document.getElementById("jelajahi-budaya-khas");

  // Tampilkan hanya section yang dipilih
  allSections.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = (id === sectionId) ? "block" : "none";
  });

  // Sembunyikan konten jelajahi utama
  if (jelajahiKonten) jelajahiKonten.style.display = "none";

  // Hapus class active dari semua opsi
  allOptions.forEach(opt => opt.classList.remove("active"));

  // Hapus active dari tombol jelajahi
  jelajahiButton.classList.remove("active");

  // Tambahkan class active ke opsi yang diklik
  const selectedOption = {
    "section-topeng": 0,
    "section-wayang": 1,
    "section-aksara": 2
  }[sectionId];

  if (selectedOption !== undefined) {
    allOptions[selectedOption].classList.add("active");
  }
}

function showJelajahi() {
  // Sembunyikan semua section budaya
  ["section-topeng", "section-wayang", "section-aksara"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  });

  // Reset semua pilihan
  document.querySelectorAll(".budaya-option").forEach(opt => opt.classList.remove("active"));

  // Tampilkan kembali bagian jelajahi
  const jelajahi = document.getElementById("jelajahi-budaya-khas");
  if (jelajahi) {
    jelajahi.style.display = "block";
    console.log(" Jelajahi ditampilkan.");
  } else {
    console.log("Tidak ditemukan ID: jelajahi-budaya-khas");
  }

  // Tambahkan class active ke tombol
  document.querySelector(".btn-jelajahi").classList.add("active");
}

