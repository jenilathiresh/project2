// Get all page sections
const pages = document.querySelectorAll('.page');

// Function to display the correct page based on hash
function showPage(pageId) {
  pages.forEach(page => {
    if (page.id === pageId) {
      page.classList.remove('hidden');
    } else {
      page.classList.add('hidden');
    }
  });
}

// Handle hash changes (e.g., #home, #about, #contact)
function handleHashChange() {
  const hash = window.location.hash.substring(1) || 'home';
  showPage(hash);
}

// Listen for hash changes and load events
window.addEventListener('hashchange', handleHashChange);
window.addEventListener('load', handleHashChange);
