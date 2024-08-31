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

            const rect = e.target.getBoundingClientRect();
            tooltip.style.top = `${rect.top + window.scrollY}px`;
            tooltip.style.left = `${rect.left + window.scrollX}px`;
        });

        path.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });

        path.addEventListener('mousemove', (e) => {
            tooltip.style.top = `${e.pageY + 10}px`;
            tooltip.style.left = `${e.pageX + 10}px`;
        });

        // Handle state click to open the new data page
        path.addEventListener('click', (e) => {
            const state = e.target.id;
            window.location.href = `data_page.html?state=${encodeURIComponent(state)}`;
        });
    });
});
