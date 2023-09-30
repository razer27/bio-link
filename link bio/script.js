/**
 * untuk membuat link bisa di copy
 */
const actionlink = document.querySelectorAll(".link-card .link-action");

actionlink.forEach((action) => {
  action.addEventListener("click", (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(action.parentElement.getAttribute("href"));
    // untuk salin link yg ada di icon

    /**
     * untuk memunculkan toast notification
     */
    document.getElementById("toast").innerHTML = `
        <div class="toast-container ">
            <p>✅ link <strong> ${action.parentElement.innerText} </strong> berhasil disalin!</p>
        </div>
    `;

    /**
     * untuk mehilankan toast notification
     */
    setTimeout(() => {
      document
        .querySelector("#toast .toast-container")
        .classList.add("toast-gone");
    }, 300);

    setTimeout(() => {
      document.querySelector("#toast .toast-container").remove();
    }, 2000);
    // animasi hilany notifikasi
  });
});

/**
 * untuk ganti icon sosmed saat hover
 */

document.querySelectorAll(".sosmed i").forEach((sosmed) => {
  sosmed.addEventListener("mouseenter", () => {
    sosmed.classList.remove("ph");
    sosmed.classList.add("ph-fill");
    // mause masuk
  });
  sosmed.addEventListener("mouseleave", () => {
    sosmed.classList.remove("ph-fill");
    sosmed.classList.add("ph");
    // mause keluar
  });
});

/**
 * animasi text bergerak saat scroll
 */

document.addEventListener("scroll", (e) => {
  console.log("scroll : ", window.scrolY);

  document.querySelector(".bg-text-animation").style.transform = `translateX(${
    window.scrollY / 5
  }px)`;
  // untuk animasi text dari kiri ke kanan diketika di scroll
});
