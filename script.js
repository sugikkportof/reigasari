// --- 1. Gallery Data & Filter Logic ---
const galleryData = [
    { id: 1, category: "diving", src: "1000266320.jpg", alt: "Sea Turtle" },
    { id: 2, category: "land", src: "1000266318.jpg", alt: "Jeep Sunrise" },
    { id: 3, category: "diving", src: "1000266319.jpg", alt: "Coral & Starfish" },
    { id: 4, category: "land", src: "1000266321.jpg", alt: "Ijen Crater" }
    // Tambahkan URL foto aslinya nanti di sini ya!
];

const galleryGrid = document.getElementById('gallery-grid');

// Render Gallery
function renderGallery() {
    galleryData.forEach(item => {
        const div = document.createElement('div');
        div.className = `gallery-item ${item.category}`;
        // Gunakan placeholder sementara sampai fotomu di-upload ke Vercel/Hosting
        div.innerHTML = `<img src="https://via.placeholder.com/300x400/0B1120/D4AF37?text=${item.alt}" alt="${item.alt}" loading="lazy">`;
        galleryGrid.appendChild(div);
    });
}
renderGallery();

// Filter Gallery
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Hapus kelas active dari semua tombol
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        const items = document.querySelectorAll('.gallery-item');
        
        items.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        });
    });
});

// --- 2. Bilingual Toggle (EN / ID) ---
let currentLang = 'en';
const langToggleBtn = document.getElementById('lang-toggle');
const textElements = document.querySelectorAll('.lang-text');

langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'id' : 'en';
    
    textElements.forEach(el => {
        el.innerText = el.getAttribute(`data-${currentLang}`);
    });
});

// --- 3. WhatsApp Booking Logic ---
function sendWhatsApp() {
    const name = document.getElementById('b-name').value;
    const date = document.getElementById('b-date').value;
    const pkg = document.getElementById('b-package').value;
    const persons = document.getElementById('b-persons').value;

    if(!name || !date || !persons) {
        alert(currentLang === 'en' ? "Please fill all fields!" : "Mohon isi semua data!");
        return;
    }

    const message = `Hello Reiga Sari Travel! I want to book a tour.%0A%0A` +
                    `*Name:* ${name}%0A` +
                    `*Date:* ${date}%0A` +
                    `*Package:* ${pkg}%0A` +
                    `*Persons:* ${persons}`;

    // Nomor WA diset ke +6281252815242
    window.open(`https://wa.me/6281252815242?text=${message}`, '_blank');
}
