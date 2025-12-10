// import the meal data from the food.mjs module
import {meals} from '../chamber/data/food.mjs';
console.log(meals);

const container = document.querySelector('#menu-container');

//Function to display meals price respectively
const pricegroup = {
    "Everyday Meals": meal => meal.price == 3000 || meal.price ==4000,
    "Frieds, Sides, Chicken": meal => meal.price == 3500 || meal.price == 2000,
    "Top Meals": meal => meal.price >= 6000,
    "Beverages": meal => meal.price == 500 || meal.price == 1500

};

// FUNCTION THAT DISPLAYS EVERYTHING
function displayMealsByGroup(meals, pricegroup, container) {

    // Loop through all groups
    Object.entries(pricegroup).forEach(([groupName, conditionFn]) => {

        // Filter meals for this group
        const groupMeals = meals.filter(conditionFn);

        // Skip empty groups
        if (groupMeals.length === 0) return;

        // Create Group Wrapper
        const groupWrapper = document.createElement("div");
        groupWrapper.className = "group-section";

        // Create Group Header
        const header = document.createElement("h2");
        header.textContent = groupName;
        groupWrapper.appendChild(header);

        // Create Cards for Each Meal
        groupMeals.forEach(meal => {
            const daily = document.createElement("div");
            daily.className = "daily";
              
            daily.innerHTML = `
                <img src = "Img/${meal.photo}" alt="${meal.name}">
                <h3>${meal.name}</h3>
                <p>${meal.description}</p>
                <h3>₦${meal.price}</h3>
                <button class="add-btn">ORDER</button>
                `;
            groupWrapper.appendChild(daily);
        });

        // Append whole group to container
        container.appendChild(groupWrapper);
    });
}

// 👉 CALL THE FUNCTION
displayMealsByGroup(meals, pricegroup, container);
      


/* write a function to display the 3k and 4k meals
const container = document.querySelector('#menu-container');
function displayMenu(menu){
    menu.forEach(meal => {

        //create a div for each meal

        const daily = document.createElement('div');
        daily.classList.add('daily');

        
        daily.innerHTML = `
            <img src = "Img/${meal.photo}" alt="${meal.name}">
            <h3>${meal.name}</h3>
            <p>${meal.description}</p>
            <h3>₦${meal.price}</h3>
            <button class="add-btn">ORDER</button>
            `;
        // append the element created in the daily to the html container
        container.appendChild(daily);

        
    });
};
// call the function to display the meals filtered by price
displayMenu(filterprice(meals));// end of displayMenu for 3k and 4k*/
//create a div for each meal


