// display the current year
document.getElementById('year').textContent = new Date().getFullYear();

// display the last modified date
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

// Mobile menu toggle
const toggleBtn= Document.getElementById('menu-toggle');
const navmenu = document.getElementById('nav-menu');

toggleBtn.addEventlistener('click', () => {
    navmenu.classList.toggle('show');
});

// Grid and list view toggle
const members = document.getElementsByClassName('members-card');
const gridBtn = document.getElementById('gridbtn');
const listBtn = document.getElementById('listbtn');

gridBtn.addEventListener('click', () => {
    members.classList.add('grid-view');
    members.classList.remove('list-view');
});

listBtn.addEventListener('click', () => {
    members.classList.add('list-view');
    members.classList.remove('grid-view');
});