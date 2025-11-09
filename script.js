// Hiển thị section được chọn, ẩn các section khác
function showSection(id) {
    const sections = document.querySelectorAll('section');
    sections.forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// Hiển thị section đầu tiên khi load
showSection('anime');

// Load dữ liệu JSON và tạo gallery
fetch('data.json')
.then(response => response.json())
.then(data => {
    const animeGallery = document.getElementById('animeGallery');
    const charGallery = document.getElementById('charGallery');
    const topAnime = document.getElementById('topAnime');
    const topChars = document.getElementById('topChars');

    // Anime gallery
    data.anime.forEach(a => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<img src="${a.cover}" alt="${a.name}">
                          <h3>${a.name} (${a.year})</h3>
                          <p>Genre: ${a.genre.join(', ')}</p>
                          <p>Rating: ${a.rating}/10</p>
                          <p>${a.review}</p>`;
        animeGallery.appendChild(card);
    });

    // Characters gallery
    data.characters.forEach(c => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<img src="${c.image}" alt="${c.name}">
                          <h3>${c.name}</h3>
                          <p>Anime: ${c.anime}</p>
                          <p>${c.reason}</p>`;
        charGallery.appendChild(card);
    });

    // Top 5 Anime
    topAnime.innerHTML = `<h3>Top 5 Anime</h3><ol>${data.anime.slice(0,5).map(a => `<li>${a.name}</li>`).join('')}</ol>`;
    // Top 5 Characters
    topChars.innerHTML = `<h3>Top 5 Characters</h3><ol>${data.characters.slice(0,5).map(c => `<li>${c.name}</li>`).join('')}</ol>`;
});
