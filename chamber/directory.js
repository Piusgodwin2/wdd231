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

const MembersContainer = document.getElementById('MembersContainer');
const gridBtn = document.getElementById('gridbtn');
const listBtn = document.getElementById('listbtn');

// Fetch members from JSON
const fetchmembers = async () => {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        MembersContainer.innerHTML = '<p>Sorry, we are unable to load members at this time.</p>';
        console.error(error);
    }
};

// Display members
const displayMembers = (members) => {
    MembersContainer.innerHTML = ''; // Clear existing content

    members.forEach(member => {
        const card = document.createElement('div');

        // FIXED: Correct class syntax
        card.classList.add('members-card', 'grid-view');

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h2>${member.name}</h2>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p><strong>Membership Level:</strong> ${membershipLabel(member.membership)}</p>
            <p>${member.description}</p>
        `;

        MembersContainer.appendChild(card);
    });
};

// membership label
function membershipLabel(level) {
    switch(level) {
        case 1: return 'Member';
        case 2: return 'Silver';
        case 3: return 'Gold';
        default: return 'Member';
    }
}

// helper to get all cards
const getCards = () => document.querySelectorAll('.members-card');

// GRID VIEW
gridBtn.addEventListener('click', () => {
    getCards().forEach(card => {
        card.classList.remove('list-view');
        card.classList.add('grid-view');
    });

    gridBtn.classList.add('active');
    listBtn.classList.remove('active');
});

// LIST VIEW
listBtn.addEventListener('click', () => {
    getCards().forEach(card => {
        card.classList.remove('grid-view');
        card.classList.add('list-view');
    });

    listBtn.classList.add('active');
    gridBtn.classList.remove('active');
});

// Load data
fetchmembers();
