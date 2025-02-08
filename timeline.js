document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.era-filter');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const era = button.dataset.era;
            filterEvents(era);
        });
    });
});

function filterEvents(era) {
    const events = document.querySelectorAll('.timeline-event');
    events.forEach(event => {
        event.style.display = (era === 'all' || event.dataset.era === era) ? 'block' : 'none';
    });
}
