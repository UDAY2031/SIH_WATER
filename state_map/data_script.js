document.addEventListener('DOMContentLoaded', () => {
    const stateName = new URLSearchParams(window.location.search).get('state');
    document.getElementById('state-name').innerText = `Reservoir Data for ${stateName}`;

    const reservoirsData = {
        "Karnataka": [
            { name: "Almatti Reservoir", district: "Bagalkote", FRL: 519.6, liveCap: 3.105, currentStorage: 1.4137204611 },
            { name: "Bhadra Reservoir", district: "Chikkamagaluru", FRL: 657.76, liveCap: 1.785, currentStorage: 0.9176517241 },
            { name: "Gerusoppa Reservoir", district: "Uttara Kannada", FRL: 55, liveCap: 0.13, currentStorage: 0.0985379598 },
            { name: "GhatPrabha/Hidkal Reservoir", district: "Belagavi", FRL: 662.95, liveCap: 1.391, currentStorage: 0.7116322478 },
            { name: "Harangi Reservoir", district: "Kodagu", FRL: 871.42, liveCap: 0.22, currentStorage: 0.1058899112 },
            { name: "Hemavathy Reservoir", district: "Hassan", FRL: 890.63, liveCap: 0.927, currentStorage: 0.4361637386 },
            { name: "Kabini Reservoir", district: "Mysuru", FRL: 696.66, liveCap: 0.444, currentStorage: 0.1967438938 },
            { name: "Krishnaraja Sagar", district: "Mysuru", FRL: 752.5, liveCap: 1.163, currentStorage: 0.4093521239 },
            { name: "Linganamakki Reservoir", district: "Shivamogga", FRL: 554.43, liveCap: 4.294, currentStorage: 1.594885786 },
            { name: "Malaprabha Reservoir", district: "Belagavi", FRL: 633.83, liveCap: 0.972, currentStorage: 0.3533537069 },
            { name: "Mani Dam", district: "Shivamogga", FRL: 594.36, liveCap: 0.884, currentStorage: 0.2458354375 },
            { name: "Narayanapura Reservoir", district: "Vijayapura", FRL: 492.25, liveCap: 0.863, currentStorage: 0.3713602305 },
            { name: "Supa Reservoir", district: "Uttara Kannada", FRL: 564, liveCap: 4.12, currentStorage: 1.9135604013 },
            { name: "Tattihalla", district: "Uttara Kannada", FRL: 468.3, liveCap: 0.249, currentStorage: 0.0228378397 },
            { name: "Tungabhadra Reservoir", district: "Koppal", FRL: 497.74, liveCap: 3.276, currentStorage: 0.9029044729 },
            { name: "Vanivilasa Sagar", district: "Chitradurga", FRL: 652.28, liveCap: 0.802, currentStorage: 0.6735430409 }
        ]
        // Add more states and their respective reservoirs if needed...
    };

    const reservoirs = reservoirsData[stateName] || [];
    const reservoirsContainer = document.getElementById('reservoirs');

    reservoirs.forEach(reservoir => {
        const usagePercent = (reservoir.currentStorage / reservoir.liveCap) * 100;
        const progressColor = usagePercent > 50 ? 'green' : (usagePercent > 25 ? 'yellow' : 'red');

        const reservoirDiv = document.createElement('div');
        reservoirDiv.classList.add('reservoir');

        reservoirDiv.innerHTML = `
            <h3>${reservoir.name} (${reservoir.district})</h3>
            <p>Full Reservoir Level (FRL): ${reservoir.FRL} m</p>
            <p>Live Capacity at FRL: ${reservoir.liveCap} billion cubic meters</p>
            <p>Current Live Storage: ${reservoir.currentStorage} billion cubic meters</p>
            <div class="progress-bar" style="background-color: ${progressColor}; width: ${usagePercent}%;">
                ${usagePercent.toFixed(2)}%
            </div>
        `;

        reservoirsContainer.appendChild(reservoirDiv);
    });
});
