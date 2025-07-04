 // ===============================
  // Hamburger toggle
  // ===============================
  const hamburger = document.getElementById("hamburger");
  const kiri = document.querySelector(".navbar-kiri");
  const kanan = document.querySelector(".navbar-kanan");

  if (hamburger && kiri && kanan) {
    hamburger.addEventListener("click", () => {
      kiri.classList.toggle("show");
      kanan.classList.toggle("show");
    });
  }

  // ===============================
  // Scroll animasi 
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
  if (elements.length > 0) {
    elements.forEach(el => observer.observe(el));
  }


 // ===============================
  // deskripsi menu  
  // ===============================
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    tab.classList.add('active');
    const target = tab.getAttribute('data-tab');
    document.getElementById(target).classList.add('active');
  });
});


 // ===============================
  // modal tumbnil
  // ===============================
const thumbnails = document.querySelectorAll('.thumbnail img');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeImageModal = imageModal.querySelector('.close-btn');

thumbnails.forEach(img => {
  img.addEventListener('click', () => {
    modalImage.src = img.src;
    imageModal.style.display = 'flex';
  });
});

closeImageModal.addEventListener('click', () => {
  imageModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === imageModal) {
    imageModal.style.display = 'none';
  }
});


 // ===============================
  // tgl otomatis form
  // ===============================
 const dateInput = document.getElementById('visit-date');
const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, '0'); // Bulan 1-12
const dd = String(today.getDate()).padStart(2, '0');

const todayStr = `${yyyy}-${mm}-${dd}`;
dateInput.value = todayStr;

 