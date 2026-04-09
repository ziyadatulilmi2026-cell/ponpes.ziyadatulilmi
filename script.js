const toggleBtn = document.getElementById("modeToggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
}else{
    document.body.classList.add("light");
}

toggleBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }
});

// ===== LIGHTBOX =====
function openLightbox(element) {
    const imgSrc = element.querySelector("img").src;
    document.getElementById("lightbox-img").src = imgSrc;
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// ===== ANIMASI SCROLL =====
const galleryItems = document.querySelectorAll(".gallery-item");

window.addEventListener("scroll", () => {
    galleryItems.forEach(item => {
        const position = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if(position < screenPosition) {
            item.classList.add("show");
        }
    });
});
