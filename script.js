// Event listener untuk tombol ke halaman berbeda
document.getElementById('gotoPageButton')?.addEventListener('click', function() {
    window.location.href = 'page.html';
});

// Event listener untuk tombol kembali ke halaman utama
document.getElementById('gotoMainButton')?.addEventListener('click', function() {
    window.location.href = 'index.html';
});

// Event listener untuk kotak informasi
document.querySelectorAll('.info-box').forEach(function(box) {
    box.addEventListener('click', function() {
        document.getElementById('popup').style.display = 'flex';
        let text = '';
        if (this.id === 'aboutBox') {
            text = 'Nama saya Samuel Pane, seorang individu yang antusias dan berdedikasi dengan latar belakang kariyawan proyek lapangan. Saya memiliki minat yang besar untuk merancangan suatu proyek, yang telah membantu saya dalam mengembangkan keterampilan dan pengetahuan di bidang tersebut. Sejak kecil, saya selalu tertarik dengan arsitektur, meski sekarang saya mengarahkan untuk mengejar pendidikan dan karir.';
        } else if (this.id === 'educationBox') {
            text = 'Saat ini, saya sedang menempuh pendidikan sarjana di Universitas Dian Nusantara dengan jurusan Teknik Informatika. sifat sosialisasi yang menunjukkan dedikasi saya terhadap pendidikan. Saya bertekad untuk menyelesaikan studi saya dengan hasil yang memuaskan dan siap untuk menerapkan pengetahuan yang telah saya peroleh di dunia profesional.';
        } else if (this.id === 'workBox') {
            text = 'Meskipun masih menempuh pendidikan, saya telah memiliki pengalaman kerja di PT.LIA PIJER ENERGI sebagai kariyawan lapangan. Di sini, saya bertanggung jawab atas keberlasungan proyek, yang memungkinkan saya untuk mengaplikasikan pengetahuan akademis dan mengembangkan keterampilan praktis. Pengalaman ini tidak hanya memperkaya kompetensi saya di bidang inprasruktur, tetapi juga memperluas wawasan saya mengenai dinamika industri.';
        }
        document.getElementById('popupText').innerText = text;
    });
});

// Event listener untuk tombol tutup popup
document.getElementById('closePopup')?.addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

// Animasi elemen portofolio muncul satu persatu
document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.5}s`; // Delay animasi setiap elemen
    });

    // Animasi elemen di halaman utama
    document.getElementById('gotoPageButton').style.animationDelay = '0s';
    document.querySelectorAll('.small-photos img').forEach((img, index) => {
        img.style.animationDelay = `${index * 0.5}s`; // Delay animasi setiap gambar kecil
    });
    document.querySelectorAll('.info-box').forEach((box, index) => {
        box.style.animationDelay = `${index * 0.5}s`; // Delay animasi setiap kotak informasi
    });
});
