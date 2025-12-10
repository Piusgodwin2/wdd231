// import the meal data from the food.mjs module
import {meals} from '../chamber/data/food.mjs';
console.log(meals);

const container = document.querySelector('#menu-container');

// PRICE GROUP RULES
const pricegroup = {
    "Everyday Meals": meal => meal.price == 3000 || meal.price == 4000,
    "Frieds, Sides, Chicken": meal => meal.price == 3500 || meal.price == 2000,
    "Top Meals": meal => meal.price >= 6000,
    "Beverages": meal => meal.price == 500 || meal.price == 1500
};

// FUNCTION TO DISPLAY MEALS GROUPED BY PRICE
function displayMealsByGroup(meals, pricegroup, container) {

    Object.entries(pricegroup).forEach(([groupName, conditionFn]) => {

        // Get meals for this group
        const groupMeals = meals.filter(conditionFn);

        if (groupMeals.length === 0) return;

        // Create wrapper for each group
        const groupWrapper = document.createElement("div");
        groupWrapper.className = "group-section";

        // Group heading
        const header = document.createElement("h3");
        header.textContent = groupName;
        groupWrapper.appendChild(header);

        // Flex row for cards
        const cardRow = document.createElement("div");
        cardRow.className = "group-cards";

        // Create each card
        groupMeals.forEach(meal => {
            const card = document.createElement("div");
            card.className = "daily";

            card.innerHTML = `
                <img src="Img/${meal.photo}" alt="${meal.name}">
                <h3>${meal.name}</h3>
                <p>${meal.description}</p>
                <h3>₦${meal.price}</h3>
                <button class="add-btn">ORDER</button>
            `;

            cardRow.appendChild(card);
        });

        // Add row of cards to the group wrapper
        groupWrapper.appendChild(cardRow);

        // Add entire group block to main container
        container.appendChild(groupWrapper);
    });
}

// CALL FUNCTION
displayMealsByGroup(meals, pricegroup, container);


