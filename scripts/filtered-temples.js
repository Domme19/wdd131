// set up time and on the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;


const hamburgerButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav-links');
const title = document.querySelector('#header-title')
// const mainNavigation = document.querySelector('.main-header')

hamburgerButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamburgerButton.classList.toggle('open');
	title.classList.toggle('hidden')
	mainNavigation.classList.toggle('open')
});


// data to load onto the page
const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},


	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},



	{
		templeName: "Brisbane Australia",
		location: "Brisbane, Australia",
		dedicated: "2003, June, 15",
		area: 10700,
		imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/brisbane-australia-temple/brisbane-australia-temple-62132-main.jpg"
	},


	{
		templeName: "Durban South Africa",
		location: "Durban, South Africa",
		dedicated: "2020, February, 16",
		area: 19860,
		imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-7936-main.jpg"
	},


	{
		templeName: "Edmonton Alberta",
		location: "Edmonton, Alberta",
		dedicated: "1999, December, 12",
		area: 10700,
		imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/edmonton-alberta-temple/edmonton-alberta-temple-51155-main.jpg"
	},
	// Add more temple objects here...
];


// function to extract year from the data
function getYearFromDate(dateStr){
	return parseInt(dateStr.split(", ")[0].trim())
}



// AT LOADING TIME, CREATE TEMPLE
createTempleCard(temples);

// filter list of temples
// constant
const OLD_YEAR = 1900
const NEW_YEAR = 2000
const LARGER_TEMPLE_NUMBER = 90000
const SMALL_TEMPLE_NUMBER = 10000

// documents created
const oldTemplesLink = document.querySelector("#old-temples");
const newTemplesLink = document.querySelector("#new-temples");
const bigTemplesLink = document.querySelector("#big-temples");
const smallTemplesLink = document.querySelector("#small-temples");

// // event listeners
oldTemplesLink.addEventListener("click", () =>{
	let oldTemplesData = temples.filter(temple => getYearFromDate(temple.dedicated) < OLD_YEAR);
	createTempleCard(oldTemplesData)
})

newTemplesLink.addEventListener("click", () =>{
	let newTemplesData = temples.filter(temple => getYearFromDate(temple.dedicated) >  NEW_YEAR);
	createTempleCard(newTemplesData)
})



smallTemplesLink.addEventListener("click", () =>{
	let smallTemplesData = temples.filter(temple => temple.area  <  SMALL_TEMPLE_NUMBER);
	createTempleCard(smallTemplesData)
})

bigTemplesLink.addEventListener("click", () =>{
	let bigTemplesData = temples.filter(temple => temple.area >  LARGER_TEMPLE_NUMBER);
	createTempleCard(bigTemplesData)
})


// create temple card function
function createTempleCard(filteredTemples) {
	// clearing the old one before adding the new one
	const container = document.querySelector(".gallery-grid");
	container.innerHTML = "";
	// filter now
	filteredTemples.forEach(temple => {
		// creating html elements
		let card = document.createElement("section")
		let name = document.createElement("h3")
		let location = document.createElement("p")
		let dedication = document.createElement("p")
		let area = document.createElement("p")
		let img = document.createElement("img")

		// second step
		name.textContent = temple.templeName;
		location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
		dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
		area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
		// setting attributes
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `${temple.templeName} Temple`);
		img.setAttribute("loading", "lazy");

		// building card
		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.appendChild(img);

		// add card to css 
		card.classList.add("temple-card");
		document.querySelector(".gallery-grid").appendChild(card);
	});

}




