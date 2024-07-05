document.addEventListener('DOMContentLoaded', function() {
    const newsList = document.getElementById('news-list');
    const tickerContent = document.querySelector('.ticker-content');
    
    const allNews = [
        { id: 1, title: 'Penemuan Baru: Teknologi Quantum Revolusioner', category: 'teknologi', summary: 'Peneliti Indonesia berhasil mengembangkan teknologi quantum yang dapat mengubah masa depan komputasi dan komunikasi global.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...', author: 'John Doe', date: '5 Juli 2024' },
        { id: 2, title: 'Ekonomi Indonesia Tumbuh 5.5% di Q2 2024', category: 'bisnis', summary: 'Bank Indonesia melaporkan pertumbuhan ekonomi yang menggembirakan di tengah tantangan global.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', author: 'Jane Smith', date: '4 Juli 2024' },
        { id: 3, title: 'Pameran Seni Rupa Internasional Dibuka di Jakarta', category: 'budaya', summary: 'Ratusan seniman dari seluruh dunia memamerkan karya mereka dalam pameran bergengsi.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', author: 'Ahmad Fahri', date: '3 Juli 2024' },
        { id: 4, title: 'Tim Sepakbola Nasional Melaju ke Semifinal Piala Asia', category: 'olahraga', summary: 'Kemenangan dramatis atas Korea Selatan membawa Indonesia ke babak semifinal untuk pertama kalinya.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', author: 'Siti Nurhaliza', date: '2 Juli 2024' },
        { id: 5, title: 'Penemuan Spesies Baru di Hutan Kalimantan', category: 'sains', summary: 'Para ilmuwan mengumumkan penemuan spesies katak yang belum pernah teridentifikasi sebelumnya.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', author: 'Dr. Budi Santoso', date: '1 Juli 2024' },
        { id: 6, title: 'Kebijakan Baru Pemerintah tentang Energi Terbarukan', category: 'politik', summary: 'Pemerintah mengumumkan insentif besar untuk pengembangan energi terbarukan.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', author: 'Rina Putri', date: '30 Juni 2024' },
        { id: 7, title: 'Startup Fintech Lokal Raih Pendanaan 100 Juta Dolar', category: 'bisnis', summary: 'Perusahaan teknologi finansial asal Bandung berhasil menarik investor global.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', author: 'Dimas Prayogo', date: '29 Juni 2024' },
        { id: 8, title: 'Film Indonesia Raih Penghargaan di Festival Cannes', category: 'budaya', summary: 'Film karya sutradara muda Indonesia mendapat standing ovation di festival bergengsi.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', author: 'Lestari Dewi', date: '28 Juni 2024' },
        { id: 9, title: 'Terobosan Baru dalam Pengobatan Kanker', category: 'kesehatan', summary: 'Tim peneliti gabungan berhasil mengembangkan metode inovatif untuk terapi kanker.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', author: 'Dr. Ratna Sari', date: '27 Juni 2024' },
        { id: 10, title: 'Ekspedisi Ilmiah ke Dasar Palung Jawa', category: 'sains', summary: 'Tim peneliti melakukan eksplorasi bawah laut terdalam di perairan Indonesia.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', author: 'Prof. Hadi Widjaja', date: '26 Juni 2024' },
        { id: 11, title: 'Inflasi Turun ke Level Terendah dalam 5 Tahun', category: 'ekonomi', summary: 'Bank Indonesia melaporkan penurunan inflasi yang signifikan, menandakan stabilitas ekonomi.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', author: 'Fajar Ramadhan', date: '25 Juni 2024' },
        { id: 12, title: 'Peluncuran Satelit Komunikasi Baru Indonesia', category: 'teknologi', summary: 'Satelit terbaru akan meningkatkan konektivitas di seluruh kepulauan.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', author: 'Indra Kusuma', date: '24 Juni 2024' },
        { id: 13, title: 'Atlet Muda Indonesia Pecahkan Rekor Dunia Lari 100m', category: 'olahraga', summary: 'Sprinter berusia 19 tahun mencatatkan waktu fenomenal di kejuaraan internasional.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', author: 'Bima Sakti', date: '23 Juni 2024' },
        { id: 14, title: 'Konser Musik Klasik di Candi Borobudur', category: 'budaya', summary: 'Orchestra internasional akan menggelar konser spektakuler di monument bersejarah.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', author: 'Maya Anggraini', date: '22 Juni 2024' },
        { id: 15, title: 'Penemuan Arkeologi Baru di Situs Majapahit', category: 'sejarah', summary: 'Ekskavasi terbaru mengungkap artefak yang dapat mengubah pemahaman sejarah.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', author: 'Dr. Agus Sulistyo', date: '21 Juni 2024' },
        { id: 16, title: 'Kebijakan Pendidikan Baru: Kurikulum Berbasis AI', category: 'pendidikan', summary: 'Kementerian Pendidikan mengintegrasikan kecerdasan buatan dalam kurikulum nasional.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', author: 'Prof. Sari Mulyani', date: '20 Juni 2024' },
        { id: 17, title: 'Pameran Teknologi Pertanian di Jakarta', category: 'teknologi', summary: 'Inovasi terbaru dalam agritech dipamerkan untuk mendorong produktivitas pertanian.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', author: 'Rudi Hartono', date: '19 Juni 2024' },
        { id: 18, title: 'Peningkatan Drastis Kualitas Udara di Kota-kota Besar', category: 'lingkungan', summary: 'Kebijakan ramah lingkungan berhasil menurunkan tingkat polusi udara secara signifikan.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', author: 'Dewi Lestari', date: '18 Juni 2024' },
        { id: 19, title: 'Turnamen E-Sports Terbesar di Asia Tenggara', category: 'olahraga', summary: 'Jakarta menjadi tuan rumah kompetisi game online dengan hadiah terbesar dalam sejarah.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', author: 'Eko Prasetyo', date: '17 Juni 2024' },
        { id: 20, title: 'Restorasi Terumbu Karang di Raja Ampat Sukses Besar', category: 'lingkungan', summary: 'Proyek konservasi laut berhasil mengembalikan kesehatan ekosistem terumbu karang.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', author: 'Dr. Nadia Hutagalung', date: '16 Juni 2024' },
    ];
    function populateSideNews() {
        if (newsList) {
            allNews.slice(1, 5).forEach(news => {
                const article = document.createElement('article');
                article.innerHTML = `
                    <h4>${news.title}</h4>
                    <p>${news.summary}</p>
                    <a href="article.html?id=${news.id}" class="read-more">Baca selengkapnya</a>
                `;
                newsList.appendChild(article);
            });
        }
    }

    function populateNewsTicker() {
        if (tickerContent) {
            let tickerHTML = '';
            allNews.forEach(news => {
                tickerHTML += `<span class="ticker-item">${news.title} | </span>`;
            });
            tickerContent.innerHTML = tickerHTML + tickerHTML; // Duplicate content for seamless loop
        }
    }

    function loadCategory() {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('cat');
        const categoryTitle = document.querySelector('#category-title span');
        const categoryArticles = document.getElementById('category-articles');

        if (categoryTitle && categoryArticles) {
            categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            
            const filteredNews = allNews.filter(news => news.category.toLowerCase() === category.toLowerCase());
            
            filteredNews.forEach(news => {
                const article = document.createElement('article');
                article.innerHTML = `
                    <h3>${news.title}</h3>
                    <p>${news.summary}</p>
                    <a href="article.html?id=${news.id}" class="read-more">Baca selengkapnya</a>
                `;
                categoryArticles.appendChild(article);
            });
        }
    }
    function loadRelatedArticles(currentArticle) {
        const relatedArticles = allNews.filter(news => 
            news.category === currentArticle.category && news.id !== currentArticle.id
        ).slice(0, 3);  // Get up to 3 related articles
    
        let relatedHTML = '<div class="related-articles"><h3>Artikel Terkait</h3>';
        relatedArticles.forEach(article => {
            relatedHTML += `
                <article>
                    <h4>${article.title}</h4>
                    <p>${article.summary}</p>
                    <a href="article.html?id=${article.id}" class="read-more">Baca selengkapnya</a>
                </article>
            `;
        });
        relatedHTML += '</div>';
    
        return relatedHTML;
    }
    
    function loadArticle() {
        const urlParams = new URLSearchParams(window.location.search);
        const articleId = urlParams.get('id');
        const fullArticle = document.getElementById('full-article');
    
        if (fullArticle) {
            const article = allNews.find(news => news.id === parseInt(articleId));
            if (article) {
                fullArticle.innerHTML = `
                    <h2>${article.title}</h2>
                    <div class="meta">
                        <span>Oleh: ${article.author}</span> | 
                        <span>Tanggal: ${article.date}</span> | 
                        <span>Kategori: ${article.category}</span>
                    </div>
                    <img src="placeholder.jpg" alt="${article.title}">
                    <div class="content">${article.content}</div>
                    ${loadRelatedArticles(article)}
                `;
            } else {
                fullArticle.innerHTML = '<p>Artikel tidak ditemukan.</p>';
            }
        }
    }
    
    function createPagination(totalItems, itemsPerPage, currentPage) {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        let paginationHTML = '<div class="pagination">';
        
        for (let i = 1; i <= totalPages; i++) {
            paginationHTML += `<a href="#" class="page-link ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</a>`;
        }
        
        paginationHTML += '</div>';
        return paginationHTML;
    }
    
    function loadCategory() {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('cat');
        const page = parseInt(urlParams.get('page')) || 1;
        const itemsPerPage = 5;
        const categoryTitle = document.querySelector('#category-title span');
        const categoryArticles = document.getElementById('category-articles');
    
        if (categoryTitle && categoryArticles) {
            categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            
            const filteredNews = allNews.filter(news => news.category.toLowerCase() === category.toLowerCase());
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const pageNews = filteredNews.slice(startIndex, endIndex);
            
            categoryArticles.innerHTML = '';  // Clear previous content
            pageNews.forEach(news => {
                const article = document.createElement('article');
                article.innerHTML = `
                    <h3>${news.title}</h3>
                    <p>${news.summary}</p>
                    <a href="article.html?id=${news.id}" class="read-more">Baca selengkapnya</a>
                `;
                categoryArticles.appendChild(article);
            });
    
            // Add pagination
            categoryArticles.insertAdjacentHTML('afterend', createPagination(filteredNews.length, itemsPerPage, page));
    
            // Add event listeners to pagination links
            document.querySelectorAll('.page-link').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const newPage = parseInt(e.target.dataset.page);
                    window.location.href = `category.html?cat=${category}&page=${newPage}`;
                });
            });
        }
    }

    // Call functions based on the current page
    if (window.location.pathname.includes('category.html')) {
        loadCategory();
    } else if (window.location.pathname.includes('article.html')) {
        loadArticle();
    } else {
        populateSideNews();
        populateNewsTicker();
    }
});