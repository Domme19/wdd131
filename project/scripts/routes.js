// ==========================================
// VeloHub Local - Routes Page Script (routes.js)
// ==========================================

// 1. Hamburger Navigation Toggle
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');
document.getElementById("currentyear").textContent = new Date().getFullYear();

if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
}

// 2. Data Objects & Arrays
const routesData = [
    {
        id: 1,
        name: "Pine Creek Gravel Loop",
        category: "gravel",
        distance: "28.5 miles",
        elevation: "1,200 ft",
        difficulty: "Beginner",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
        description: "A scenic rolling gravel route winding through pine forests with low traffic and smooth packed dirt."
    },
    {
        id: 2,
        name: "Summit Ridge Road Climb",
        category: "road",
        distance: "45.0 miles",
        elevation: "3,400 ft",
        difficulty: "Advanced",
        image: "https://plus.unsplash.com/premium_photo-1666874682139-98517d5b1a85?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        description: "Challenging asphalt ascent featuring hairpin turns and panoramic valley views at the peak."
    },
    {
        id: 3,
        name: "Canyon Singletrack Trail",
        category: "mtb",
        distance: "14.2 miles",
        elevation: "1,850 ft",
        difficulty: "Intermediate",
        image: "https://images.unsplash.com/photo-1660149109580-9219e03c4c8e?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        description: "Technical mountain bike trail with switchbacks, rock gardens, and fast flowing descents."
    }
];

const eventsData = [
    {
        title: "Saturday Morning Coffee Loop",
        date: "October 18, 2026 - 8:00 AM",
        location: "Central Park Cafe",
        description: "A relaxed 25-mile social road ride ending with complimentary coffee and pastries."
    },
    {
        title: "Sunset Gravel Grinder",
        date: "October 22, 2026 - 5:30 PM",
        location: "North Trailhead Parking",
        description: "Evening group ride tackling the Pine Creek loop just in time for sunset."
    }
];

// 3. Render Routes with Category Filter & Template Literals
function renderRoutes(filter = 'all') {
    const routeGrid = document.getElementById('route-grid');
    if (!routeGrid) return;

    const filteredRoutes = filter === 'all' 
        ? routesData 
        : routesData.filter(route => route.category === filter);

    routeGrid.innerHTML = filteredRoutes.map(route => `
        <div class="card">
            <img src="${route.image}" alt="${route.name}" loading="lazy">
            <div class="card-body">
                <h3>${route.name}</h3>
                <p>${route.description}</p>
                <div class="telemetry-stat" style="font-size: 0.9rem; color: var(--text-light); margin-bottom: 1rem;">
                    Distance: ${route.distance} | Elev: ${route.elevation} | Difficulty: ${route.difficulty}
                </div>
                <button class="btn favorite-btn" data-id="${route.id}" style="padding: 0.5rem 1rem; font-size: 0.9rem;">
                    Save as Favorite Route
                </button>
            </div>
        </div>
    `).join('');

    // Attach event listeners for LocalStorage functionality
    document.querySelectorAll('.favorite-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const routeId = parseInt(e.target.getAttribute('data-id'));
            const selectedRoute = routesData.find(r => r.id === routeId);
            if (selectedRoute) {
                localStorage.setItem('favoriteRoute', JSON.stringify(selectedRoute));
                alert(`Successfully saved "${selectedRoute.name}" to your favorite route preferences!`);
            }
        });
    });
}

// 4. Render Calendar Events Function
function renderEvents() {
    const eventGrid = document.getElementById('event-grid');
    if (!eventGrid) return;

    eventGrid.innerHTML = eventsData.map(event => `
        <div class="card">
            <div class="card-body">
                <h3>${event.title}</h3>
                <p style="font-weight: 600; color: var(--secondary);">${event.date}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p>${event.description}</p>
            </div>
        </div>
    `).join('');
}

// 5. Category Filter Buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const filterValue = e.target.getAttribute('data-filter');
        renderRoutes(filterValue);
    });
});

// 6. Form Submission & Conditional Validation
const rsvpForm = document.getElementById('rsvp-form');
if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('rider-name').value;
        const ride = document.getElementById('ride-select').value;
        const feedback = document.getElementById('form-feedback');

        if (name && ride) {
            feedback.textContent = `Thank you, ${name}! Your RSVP for "${ride}" has been successfully submitted.`;
            feedback.style.color = "var(--secondary)";
            rsvpForm.reset();
        } else {
            feedback.textContent = "Please complete all required fields.";
            feedback.style.color = "#DC2626";
        }
    });
}

// 7. Initialize Page
document.addEventListener('DOMContentLoaded', () => {
    renderRoutes('all');
    renderEvents();
});