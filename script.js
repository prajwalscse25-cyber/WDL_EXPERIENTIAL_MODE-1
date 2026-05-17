<script>
async function loadApiUpdates() {
const container = document.getElementById('api-updates');
const apiUrl = 'https://api.github.com/repos/prajwalscse25-
cyber/WDL_EXPERIENTIAL_MODE-1';
container.innerHTML = '<div class="api-card">Loading live
updates...</div>';
try {
const response = await fetch(apiUrl);
if (!response.ok) throw new Error('Network response was not ok:
' + response.status);
const repo = await response.json();
container.innerHTML = '';
const stats = [
{ title: 'Repository', body: repo.full_name },
{ title: 'Description', body: repo.description || 'No
description available' },
{ title: 'Stars', body: repo.stargazers_count },
{ title: 'Forks', body: repo.forks_count },
{ title: 'Open Issues', body: repo.open_issues_count },
{ title: 'Updated At', body: new
Date(repo.updated_at).toLocaleString() }
];
stats.forEach(function(stat) {
const card = document.createElement('div');
card.className = 'api-card';
card.innerHTML = `<h3>${stat.title}</h3><p>${stat.body}</p>`;
container.appendChild(card);
});
const repoLink = document.createElement('div');
repoLink.className = 'api-card';
repoLink.innerHTML = `<h3>View on GitHub</h3><p><a
href="${repo.html_url}" target="_blank">${repo.html_url}</a></p>`;
container.appendChild(repoLink);
} catch (error) {
container.innerHTML = '<div class="api-card">Unable to load
updates. Please try again later.</div>';
console.error('API load error:', error);
}
}
loadApiUpdates();
// ...existing form, nav, ticket, and back-to-top code...
</script>
