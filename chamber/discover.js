// display the current year
document.getElementById('year').textContent = new Date().getFullYear();

// display the last modified date
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

// Mobile menu toggle
const toggleBtn = document.getElementById('menu-toggle');
const navmenu = document.getElementById('nav-menu');

toggleBtn.addEventListener('click', () => {
    navmenu.classList.toggle('open');
});

import {places} from './data/place.mjs';
console.log(places);

const container = document.querySelector("#container");

function displayPlaces(data) {
    data.forEach(place => {

        // loop through the data and create a div where all the information will appear.
        const card = document.createElement('div');
        card.classList.add('card');

        // Photo
        const photo = document.createElement('img');
        photo.src = `images/${place.photo_url}`;
        photo.alt = place.title;

        // Title
        const title = document.createElement('h2');
        title.textContent = place.title;

        // Address
        const address = document.createElement('address');
        address.textContent = place.address;

        // Description
        const desc = document.createElement('p');
        desc.textContent = place.description;

        // Button
        const btn = document.createElement('button');
        btn.textContent = "See More";

        // Append elements INTO the card
        card.appendChild(photo);
        card.appendChild(title);
        card.appendChild(address);
        card.appendChild(desc);
        card.appendChild(btn);

        // Append the card INTO the container
        container.appendChild(card);
    });
}

displayPlaces(places);

const messageBox = document.querySelector("#visit-message");

// Get last visit from localStorage
let lastVisit = localStorage.getItem("lastVisit");

// Get the current timestamp
let now = Date.now();

if (!lastVisit) {
    // First visit
    messageBox.textContent = "Welcome! Let us know if you have any questions.";
} else {
    // Calculate days difference
    let difference = now - Number(lastVisit);
    let daysPassed = Math.floor(difference / (1000 * 60 * 60 * 24));

    if (daysPassed < 1) {
        messageBox.textContent = "Back so soon! Awesome!";
    } else if (daysPassed === 1) {
        messageBox.textContent = "You last visited 1 day ago.";
    } else {
        messageBox.textContent = `You last visited ${daysPassed} days ago.`;
    }
}

// Save the current visit time
localStorage.setItem("lastVisit", now);
