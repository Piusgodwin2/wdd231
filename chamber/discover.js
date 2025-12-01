
import {place} from '../data/place.mjs';
const cardcontainer = document.getElementById('card-container');

//loop through place data and create cards
place.forEach(city => {
    const card = document.createElement('div');
    card.classList.add('place-card');
});

// fill the cards with html content. this builds the card and inserts values.
card.innerHTML = `
  <h2>${place.name}</h2>
  <figure>
    <img src="${place.photo}" alt="${place.name}">
  </figure>
  <address>${place.address}</address>
  <p>${place.description}</p>
  <button>Learn More</button>
`;
// apend the card to the container
cardcontainer.appendChild(card);

