function showSection(sectionId) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.style.display = section.id === sectionId ? 'block' : 'none';
  });
}

function searchContent() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.card-grid .card');

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(query) ? 'block' : 'none';
  });
}

function filterByCollege() {
  const selectedCollege = document.getElementById('collegeFilter').value.toLowerCase();
  const cards = document.querySelectorAll('.card-grid .card');

  cards.forEach(card => {
    const college = card.getAttribute('data-college') || '';
    if (!selectedCollege || college.includes(selectedCollege)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function generateCards(sectionId, count, type) {
  const colleges = [
    'computing studies', 'liberal arts', 'engineering', 'architecture',
    'public administration', 'teacher education', 'home economics',
    'nursing', 'law', 'criminal justice', 'medicine',
    'asian islamic studies', 'social work', 'sports science', 'science and mathematics'
  ];
  const container = document.querySelector(`#${sectionId} .card-grid`);
  container.innerHTML = '';

  for (let i = 1; i <= count; i++) {
    const randomCollege = colleges[Math.floor(Math.random() * colleges.length)];
    container.innerHTML += `
      <div class="card" data-college="${randomCollege}">
        <div class="card-header">
          <img src="profile-placeholder.jpg" alt="User" class="user-img">
          <span class="username">@student${i}</span>
        </div>
        <img src="product-placeholder.jpg" alt="Post Image" class="post-img">
        <div class="card-body">
          <h3>${type} Title ${i}</h3>
          <p>(${randomCollege}) - This is a description of ${type.toLowerCase()} ${i}.</p>
          <button>${type === 'Product' ? 'Buy Now' : 'Contact'}</button>
        </div>
      </div>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  generateCards('find-job', 50, 'Job');
  generateCards('look-client', 50, 'Service');
  generateCards('marketplace', 60, 'Product');
});
