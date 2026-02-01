document.addEventListener('DOMContentLoaded', () => {

    // Modal Logic
    const locBadge = document.querySelector('.edit-badge');
    const modal = document.getElementById('loc-modal');
    const saveBtn = document.querySelector('.btn-save');

    if (locBadge && modal) {
        locBadge.addEventListener('click', () => {
            modal.classList.remove('hidden');
        });

        saveBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
            // Mockup: Change location name
            const input = modal.querySelector('.inp-field');
            if (input.value) {
                document.getElementById('current-location').textContent = input.value;
            }
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.add('hidden');
        });
    }

    // Mobile Active State Logic (Simple)
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-item, .b-item');

    navItems.forEach(item => {
        if (item.getAttribute('href') === currentPath) {
            item.classList.add('active');
        } else {
            // Remove active from others if needed, but styling handles .active class presence
        }
    });

    console.log("AstroCast V2 Ready");
});

// Red Mode Toggle Logic
const redToggle = document.getElementById('red-mode-toggle');
if(redToggle) {
    // Check localStorage
    if(localStorage.getItem('redMode') === 'true') {
        document.body.classList.add('red-mode');
    }

    redToggle.addEventListener('click', () => {
        document.body.classList.toggle('red-mode');
        const isRed = document.body.classList.contains('red-mode');
        localStorage.setItem('redMode', isRed);
    });
}

// Location Editing (Industrial Fix)
const locModal = document.getElementById('location-modal');
const latInput = document.getElementById('lat-input');
const lonInput = document.getElementById('lon-input');

// Initialize event listeners for all pencil icons
document.querySelectorAll('.fa-pencil').forEach(icon => {
    icon.style.pointerEvents = 'auto'; // Ensure clickable
    icon.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent card clicks
        console.log('Opening location modal');
        if(locModal) locModal.style.display = 'flex';
    });
});

window.closeLocationModal = function() {
    if(locModal) locModal.style.display = 'none';
}

window.saveLocation = function() {
    const newLat = latInput.value;
    const newLon = lonInput.value;

    // Update all coordinate displays
    // Targeting the span with the coordinates (second in the flex column)
    const locationContainers = document.querySelectorAll('.card-head div[style*="flex-direction: column"]');
    locationContainers.forEach(container => {
        const coordSpan = container.querySelectorAll('span')[1];
        if(coordSpan) coordSpan.innerText = `${newLat}N, ${newLon}E`;
    });

    closeLocationModal();
}

// Close modal if clicking outside
window.onclick = function(event) {
    if (event.target == locModal) {
        closeLocationModal();
    }
}

// Location Edit V2 (Sidebar)
const editBtn = document.getElementById('edit-loc-btn');
if(editBtn) {
    editBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if(locModal) locModal.style.display = 'flex';
    });
}

// Override save to update Sidebar
window.saveLocation = function() {
    const newLat = latInput.value;
    const newLon = lonInput.value;

    document.getElementById('sidebar-loc-coords').innerText = `${newLat}N, ${newLon}E`;
    // We assume city name doesn't change from coords for this demo, or we could add an input for it.

    closeLocationModal();
}
