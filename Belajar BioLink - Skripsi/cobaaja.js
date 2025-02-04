document.addEventListener("DOMContentLoaded", () => {
    const actionLink = document.querySelectorAll(".link-card .link-action");
    console.log("actionLink:", actionLink); // Debugging: pastikan elemen ditemukan

    actionLink.forEach((action) => {
        action.addEventListener("click", (e) => {
            e.preventDefault();
            const url = action.parentElement.getAttribute("href");
            console.log("URL yang disalin:", url); // Debugging: cek URL

            navigator.clipboard.writeText(url);

            // Tampilkan notifikasi
            document.getElementById("toast").innerHTML = `
                <div class="toast-container">
                    <p>✅ Link <strong>${action.parentElement.innerText}</strong> berhasil disalin!</p>
                </div>
            `;

            // Hapus notifikasi setelah animasi selesai
            setTimeout(() => {
                document.querySelector("#toast .toast-container").classList.add("toast-gone");
            }, 300);

            setTimeout(() => {
                document.querySelector("#toast .toast-container").remove();
            }, 2000);
        });
    });

    // Animasi hover pada ikon
    document.querySelectorAll(".link-action i").forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
            icon.classList.remove("ph");
            icon.classList.add("ph-fill");
        });
        icon.addEventListener("mouseleave", () => {
            icon.classList.remove("ph-fill");
            icon.classList.add("ph");
        });
    });

    // Animasi hover ikon sosial media
    document.querySelectorAll(".sosmed i").forEach((sosmed) => {
        sosmed.addEventListener("mouseenter", () => {
            sosmed.classList.remove("ph");
            sosmed.classList.add("ph-fill");
        });
        sosmed.addEventListener("mouseleave", () => {
            sosmed.classList.remove("ph-fill");
            sosmed.classList.add("ph");
        });
    });

    // Animasi bergerak saat scroll
    document.addEventListener("scroll", () => {
        document.querySelector(".bg-text-animation").style.transform = `translateX(${window.scrollY / 5}px)`;
    });
});
