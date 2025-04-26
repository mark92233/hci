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

function generateCards(sectionId, count, type) {
  const container = document.querySelector(`#${sectionId} .card-grid`);
  container.innerHTML = '';

  for (let i = 1; i <= count; i++) {
    container.innerHTML += `
      <div class="card">
        <div class="card-header">
          <img src="profile-placeholder.jpg" alt="User" class="user-img">
          <span class="username">@student${i}</span>
        </div>
        <img src="product-placeholder.jpg" alt="Post Image" class="post-img">
        <div class="card-body">
          <h3>${type} Title ${i}</h3>
          <p>This is a brief description of ${type.toLowerCase()} ${i}.</p>
          <button>${type === 'Product' ? 'Buy Now' : 'Contact'}</button>
        </div>
      </div>
    `;
  }
}

// Generate cards automatically on page load
document.addEventListener('DOMContentLoaded', () => {
  generateCards('find-job', 50, 'Job');
  generateCards('look-client', 50, 'Service');
  generateCards('marketplace', 60, 'Product');
});
