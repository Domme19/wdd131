document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;


// 2. Handle the Review Counter
// Retrieve the current count from localStorage, default to 0 if it doesn't exist
let numReviews = Number(window.localStorage.getItem("reviewCount-ls")) || 0;


// Increment the count
numReviews++;

// Store the updated count back into localStorage
window.localStorage.setItem("reviewCount-ls", numReviews);

// Display the count on the page
const displayElement = document.querySelector("#reviewDisplay");
if (displayElement) {
    displayElement.textContent = numReviews;
}
