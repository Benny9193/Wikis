// Wiki Hub JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('wiki-search');
    const categories = document.querySelectorAll('.wiki-category');

    // Search functionality
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase().trim();

        categories.forEach(category => {
            const wikiCards = category.querySelectorAll('.wiki-card');
            let hasVisibleCards = false;

            wikiCards.forEach(card => {
                const title = card.querySelector('.wiki-title').textContent.toLowerCase();
                const description = card.querySelector('.wiki-description').textContent.toLowerCase();
                const tags = (card.dataset.tags || '').toLowerCase();
                const categoryName = (category.dataset.category || '').toLowerCase();

                const matches = query === '' ||
                               title.includes(query) ||
                               description.includes(query) ||
                               tags.includes(query) ||
                               categoryName.includes(query);

                card.classList.toggle('hidden', !matches);

                if (matches && !card.classList.contains('wiki-card-placeholder')) {
                    hasVisibleCards = true;
                }
            });

            // Show category if it has visible cards or if search is empty
            // Always show categories with only placeholder cards when searching
            const hasOnlyPlaceholder = category.querySelectorAll('.wiki-card:not(.wiki-card-placeholder)').length === 0;
            category.classList.toggle('hidden', !hasVisibleCards && query !== '' && !hasOnlyPlaceholder);
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
