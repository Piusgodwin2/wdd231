import { meals } from "../chamber/data/food.mjs";

// MAIN CONTAINER
const container = document.querySelector("#menu-container");

// PRICE GROUP RULES
const pricegroup = {
    "Everyday Meals": meal => meal.price == 3000 || meal.price == 4000,
    "Frieds, Sides, Chicken": meal => meal.price == 3500 || meal.price == 2000,
    "Top Meals": meal => meal.price >= 6000,
    "Beverages": meal => meal.price == 500 || meal.price == 1500
};

// DISPLAY MEALS
function displayMealsByGroup(meals, pricegroup, container) {
    Object.entries(pricegroup).forEach(([groupName, condition]) => {

        const groupMeals = meals.filter(condition);
        if (groupMeals.length === 0) return;

        const groupWrap = document.createElement("div");
        groupWrap.className = "group-section";

        const header = document.createElement("h3");
        header.textContent = groupName;
        groupWrap.appendChild(header);

        const row = document.createElement("div");
        row.className = "group-cards";

        groupMeals.forEach(meal => {
            const card = document.createElement("div");
            card.className = "daily";

            card.innerHTML = `
                <img src="Img/${meal.photo}" alt="${meal.name}">
                <h3 class="meal-name">${meal.name}</h3>
                <p>${meal.description}</p>
                <h3 class="meal-price">₦${meal.price}</h3>
                <button class="add-btn" data-id="${meal.id}">ORDER</button>
            `;

            row.appendChild(card);
        });

        groupWrap.appendChild(row);
        container.appendChild(groupWrap);
    });
}

displayMealsByGroup(meals, pricegroup, container);
