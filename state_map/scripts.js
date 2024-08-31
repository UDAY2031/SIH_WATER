document.addEventListener('DOMContentLoaded', () => {
    const paths = document.querySelectorAll('path');
    const tooltip = document.getElementById('tooltip');

    paths.forEach(path => {
        path.addEventListener('mouseover', (e) => {
            const state = e.target.id;
            const districts = e.target.getAttribute('data-districts');
            const dams = e.target.getAttribute('data-dams');

            tooltip.innerHTML = `<strong>${state}</strong><br>Districts: ${districts}<br>Dams: ${dams}`;
            tooltip.style.display = 'block';

            // Position the tooltip near the mouse cursor
            const rect = e.target.getBoundingClientRect();
            tooltip.style.top = `${rect.top + window.scrollY}px`;
            tooltip.style.left = `${rect.left + window.scrollX + e.target.getBBox().width / 2}px`;
        });

        path.addEventListener('mouseout', () => {
            tooltip.style.display = 'none';
        });
    });
});
