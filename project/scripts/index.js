// ==========================================
// VeloHub Local - Home Page Script (index.js)
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

// 2. LocalStorage Display & Dynamic Time Greeting
function updateHomePreferences() {
    const displayElement = document.getElementById('saved-preference-display');
    const greetingElement = document.getElementById('dynamic-greeting');
    
    // Retrieve saved route object from LocalStorage
    const savedRoute = localStorage.getItem('favoriteRoute');
    if (displayElement && savedRoute) {
        const routeObj = JSON.parse(savedRoute);
        displayElement.textContent = `Your Favorite Route: ${routeObj.name} (${routeObj.distance}, ${routeObj.difficulty})`;
    }

    // Time-based greeting generator
    if (greetingElement) {
        const currentHour = new Date().getHours();
        let timeGreeting = "Welcome back, cyclist!";
        
        if (currentHour < 12) {
            timeGreeting = "Good morning! Ready for an early spin?";
        } else if (currentHour < 18) {
            timeGreeting = "Good afternoon! Ready for a trail ride?";
        } else {
            timeGreeting = "Good evening! Prep your lights for a night ride!";
        }
        
        greetingElement.textContent = timeGreeting;
    }
}

// 3. Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
    updateHomePreferences();
});