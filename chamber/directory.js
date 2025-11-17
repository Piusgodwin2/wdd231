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
const members = document.getElementsById('MembersContainer');
const gridBtn = document.getElementById('gridbtn');
const listBtn = document.getElementById('listbtn');

/* GRID VIEW
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

//*/

const fetchmembers = async () => {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        MembersContainer.innerHTML = '<p>Sorry, we are unable to load members at this time.</p>';
        console.error(error);
    }
}

// Function to display members
displayMembers = (members) => {
    MembersContainer.innerHTML = ''; // Clear existing content
    members.forEach(
        member => {
            const card = document.createElement('div');
            card.classList.add('members-card');
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
        }
    )
}