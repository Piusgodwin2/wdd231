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


// Grid and list view toggle
const members = document.getElementsByClassName('members-card');
const gridBtn = document.getElementById('gridbtn');
const listBtn = document.getElementById('listbtn');

// GRID VIEW
gridBtn.addEventListener('click', () => {
    for (let card of members) { // members is like an array,You must loop through it:
        card.classList.remove('list-view');
        card.classList.add('grid-view');
    }

    gridBtn.classList.add('active');
    listBtn.classList.remove('active');
});

// LIST VIEW
listBtn.addEventListener('click', () => {
    for (let card of members) {
        card.classList.remove('grid-view');
        card.classList.add('list-view');
    }

    listBtn.classList.add('active');
    gridBtn.classList.remove('active');
});
