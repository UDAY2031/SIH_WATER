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
const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep', 'Delhi', 'Puducherry'
];

function filterStates() {
    const input = document.getElementById('search-bar');
    const filter = input.value.toLowerCase();
    const dropdownMenu = document.getElementById('dropdown-menu');
    const stateList = document.getElementById('state-list');

    // Clear previous results
    stateList.innerHTML = '';

    if (filter) {
        // Filter states that start with the entered text
        const filteredStates = states
            .filter(state => state.toLowerCase().startsWith(filter))
            .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

        filteredStates.forEach(state => {
            const li = document.createElement('li');
            li.textContent = state;
            li.onclick = () => {
                selectState(state);
            };
            stateList.appendChild(li);
        });

        dropdownMenu.style.display = filteredStates.length > 0 ? 'block' : 'none';
    } else {
        dropdownMenu.style.display = 'none';
    }
}

function selectState(state) {
    const input = document.getElementById('search-bar');
    input.value = state;
    document.getElementById('dropdown-menu').style.display = 'none';
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        const highlightedItem = document.querySelector('#state-list li:hover');
        if (highlightedItem) {
            selectState(highlightedItem.textContent);
        }
    }
}

// Hide dropdown if clicked outside
document.addEventListener('click', (event) => {
    if (!document.getElementById('search-container').contains(event.target)) {
        document.getElementById('dropdown-menu').style.display = 'none';
    }
});

document.getElementById('search-bar').addEventListener('keyup', filterStates);
document.getElementById('search-bar').addEventListener('keydown', handleKeyDown);
