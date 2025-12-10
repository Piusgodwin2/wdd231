// import the meal data from the food.mjs module
import {meals} from '../chamber/data/food.mjs';
console.log(meals);

//Function to display meals  3k and 4k price respectively
function filterprice(price){
    const display = price.filter(meal => meal.price == 3000 || meal.price ==4000);
    return display;
};

// write a function to display the 3k and 4k meals
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
displayMenu(filterprice(meals));// end of displayMenu for 3k and 4k meals


/* function to filter meals between 1500 and 2000 naira
function filterprice2(price){
    const low = price.filter(meal => meal.price ==2000 || meal.price ==3500);
    return low;
};
// function to display the 3500 and 2k meals
const meal = document.querySelector('#menu');
function displaylow(data) {
    data.forEach(meal =>{

         //create a div for each meal

        const low = document.createElement('div');
        low.classList.add('low');

        
        low.innerHTML = `
            <img src = "Img/${meal.photo}" alt="${meal.name}">
            <h3>${meal.name}</h3>
            <p>${meal.description}</p>
            <h3>₦${meal.price}</h3>
            <button class="add-btn">ORDER</button>
            `;
        // append the element created in the daily to the html container
        meal.appendChild(low);

    });
};
// call the function to display the meals filtered by price
displaylow(filterprice2(meals));// end of displaylow for 2k and 3500 meals*/