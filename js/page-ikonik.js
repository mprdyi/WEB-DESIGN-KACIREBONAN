
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
  // komentar rating
  // ===============================
  let selectedRating = 0;
  
  const stars = document.querySelectorAll(".star-rating span");
  stars.forEach(star => {
    star.addEventListener("click", () => {
      selectedRating = parseInt(star.getAttribute("data-star"));
      stars.forEach(s => {
        s.classList.toggle("active", parseInt(s.getAttribute("data-star")) <= selectedRating);
      });
    });
  });

  document.getElementById("reviewForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const comment = document.getElementById("commentText").value;

    if (selectedRating === 0) {
      alert("Silakan pilih rating terlebih dahulu.");
      return;
    }

    const newReview = document.createElement("div");
    newReview.className = "review-item";
    newReview.innerHTML = `
      <div class="review-user">
       
        <div class="user-info">
          <strong>Anonymous</strong>
          <span style="font-size:14px">${selectedRating} ⭐</span>
        </div>
        <span class="review-time">Baru saja</span>
      </div>
      <div class="review-content">
        <p>${comment}</p>
      </div>
    `;

    document.getElementById("userReviews").prepend(newReview);

    this.reset();
    selectedRating = 0;
    stars.forEach(s => s.classList.remove("active"));
  });