 // mobile toggle menu
 const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// import the meals data
import {meals} from './chamber/data/food.mjs';
console.log(meals);

 // filter meals under 3000 naira
   function filterprice(price) {
        const display = price.filter(meal => meal.price <= 3000);
        // shuffle and select 4 random meals
        // using the fisher-yates shuffle algorithm
        for (let i = display.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [display[i], display[j]] = [display[j], display[i]];
        }
        const selectedMeals = display.slice(0, 4);
        return selectedMeals;
   };

// write a function to display the meals
const container = document.querySelector("#card-container");
 function displayMeals(data) {
    data.forEach(meal => {

        // create a div for each meal
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
        <img src= "Img/${meal.photo}" alt="${meal.name}">
        <h3>${meal.name}</h3>
        <p>${meal.description}</p>
        <h3>₦${meal.price}</h3>
        <button class="add-btn">Add to Cart</button>
        `;
       
        // append the element created in the card to the html container
        container.appendChild(card);

    });
 }
 // call the function to display the meals and shuffle
 displayMeals(filterprice(meals));
