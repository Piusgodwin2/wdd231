
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
