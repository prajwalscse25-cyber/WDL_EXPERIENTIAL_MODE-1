document.addEventListener("DOMContentLoaded", function() {
  const apiContainer = document.getElementById('api-updates');
  const form = document.querySelector('.registration-form');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a');
  const ticketCards = document.querySelectorAll('.ticket-card');

  async function loadApiUpdates() {
    if (!apiContainer) return;

    const apiUrl = 'https://api.github.com/repos/prajwalscse25-cyber/WDL_EXPERIENTIAL_MODE-1';
    apiContainer.innerHTML = '<div class="api-card">Loading live updates...</div>';

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error('Network response was not ok: ' + response.status);

      const repo = await response.json();
      apiContainer.innerHTML = '';

      const stats = [
        { title: 'Repository', body: repo.full_name },
        { title: 'Description', body: repo.description || 'No description available' },
        { title: 'Stars', body: repo.stargazers_count },
        { title: 'Forks', body: repo.forks_count },
        { title: 'Open Issues', body: repo.open_issues_count },
        { title: 'Updated At', body: new Date(repo.updated_at).toLocaleString() }
      ];

      stats.forEach(function(stat) {
        const card = document.createElement('div');
        card.className = 'api-card';
        card.innerHTML = `<h3>${stat.title}</h3><p>${stat.body}</p>`;
        apiContainer.appendChild(card);
      });

      const repoLink = document.createElement('div');
      repoLink.className = 'api-card';
      repoLink.innerHTML = `<h3>View on GitHub</h3><p><a href="${repo.html_url}" target="_blank">${repo.html_url}</a></p>`;
      apiContainer.appendChild(repoLink);
    } catch (error) {
      apiContainer.innerHTML = '<div class="api-card">Unable to load updates. Please try again later.</div>';
      console.error('API load error:', error);
    }
  }

  function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const ticket = document.getElementById('ticket').value;

    if (name === '' || email === '' || phone === '' || ticket === '') {
      alert('Please fill all required fields!');
      return;
    }

    alert('Registration Successful! Welcome to TechFront 2024, ' + name + '!');
    form.reset();
  }

  function updateActiveNav() {
    let current = '';

    sections.forEach(function(section) {
      const sectionTop = section.offsetTop - 80;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function(link) {
      link.style.backgroundColor = '';
      if (link.getAttribute('href') === '#' + current) {
        link.style.backgroundColor = '#1a73e8';
      }
    });
  }

  function setupTicketClicks() {
    ticketCards.forEach(function(card) {
      card.addEventListener('click', function() {
        ticketCards.forEach(function(c) {
          c.style.border = '1px solid #cbd5e1';
        });

        this.style.border = '2px solid #1a73e8';
        const ticketName = this.querySelector('h3').innerText;
        alert(ticketName + ' selected! Please fill the registration form below.');
      });
    });
  }

  function setupBackToTop() {
    const btn = document.createElement('button');
    btn.innerText = '↑ Top';
    btn.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      padding: 10px 16px;
      background-color: #1a73e8;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 0.9rem;
      display: none;
      z-index: 999;
    `;
    document.body.appendChild(btn);

    window.addEventListener('scroll', function() {
      btn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    btn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (form) {
    form.addEventListener('submit', validateForm);
  }

  window.addEventListener('scroll', updateActiveNav);
  setupTicketClicks();
  setupBackToTop();
  loadApiUpdates();
});
