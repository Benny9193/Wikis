// Wiki Hub JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('wiki-search');
    const wikiGrid = document.getElementById('wiki-grid');
    const wikiCards = wikiGrid.querySelectorAll('.wiki-card');

    // Search functionality
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase().trim();

        wikiCards.forEach(card => {
            const title = card.querySelector('.wiki-title').textContent.toLowerCase();
            const description = card.querySelector('.wiki-description').textContent.toLowerCase();
            const tags = (card.dataset.tags || '').toLowerCase();

            const matches = title.includes(query) ||
                           description.includes(query) ||
                           tags.includes(query);

            card.classList.toggle('hidden', !matches);
        });
    });

    // Keyboard shortcut: Focus search on '/'
    document.addEventListener('keydown', function(e) {
        if (e.key === '/' && document.activeElement !== searchInput) {
            e.preventDefault();
            searchInput.focus();
        }
        // Clear search on Escape
        if (e.key === 'Escape' && document.activeElement === searchInput) {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
            searchInput.blur();
        }
    });
});
