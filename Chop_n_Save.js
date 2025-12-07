const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu-list");
const dropdown = document.querySelector(".dropdown");

// Click to toggle
btn.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent closing immediately
    menu.classList.toggle("show");
});

// Close when clicking outside
document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        menu.classList.remove("show");
    }
});

// import the meals data
import {meals} from '../chamber/data/food.mjs';
console.log(meals);

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
 // call the function to display the meals
 displayMeals(meals);
