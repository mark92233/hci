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
    card.style.display = !selectedCollege || college.includes(selectedCollege) ? 'block' : 'none';
  });
}

function toggleHeart(button) {
  button.classList.toggle('saved');
}

function clickAction(type, username) {
  alert(`You clicked to ${type} @${username}!`);
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
        <button class="heart-btn" onclick="toggleHeart(this)">&#9825;</button>
        <div class="card-header">
          <img src="images/pro.png" alt="User" class="user-img">
          <span class="username">student${i}</span>
          <span class="tag">Entry-Level</span>
          <span class="tag">Full-Time</span>
        </div>
        <img src="product-placeholder.jpg" alt="Post" class="post-img">
        <div class="card-body">
          <h3>${type} Title ${i}</h3>
          <p>(${randomCollege}) - A description of ${type.toLowerCase()} ${i}.</p>
          <button onclick="clickAction('${type === 'Product' ? 'Buy' : 'Contact'}', 'student${i}')">
            ${type === 'Product' ? 'Buy Now' : 'Contact'}
          </button>
        </div>
      </div>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  generateCards('find-job', 10, 'Job');
  generateCards('look-client', 10, 'Service');
  generateCards('marketplace', 10, 'Product');
});
