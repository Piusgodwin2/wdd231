

  // Mobile menu toggle
const toggleBtn = document.getElementById('menu-toggle');
const navmenu = document.getElementById('nav-menu');

toggleBtn.addEventListener('click', () => {
    navmenu.classList.toggle('open');
});

  // HERO SLIDESHOW SCRIPT
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function changeSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  // Change slide every 5 seconds
  setInterval(changeSlide, 5000);

  // select html elements in the document
  const des = document.querySelector('#desc');
  const tem = document.querySelector('#temp');
  const list = document.querySelector('#forecast-list');

  // create required variables
  const apikey = "30012e5ff4aa06c545d3c3a063669d20"
  const city = "Uyo"

  // create url to fetch data from api
  const url = `//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`

  // fectch data from api function
  async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();
// display your results fro mthe weather api
function displayResults(data){
  des.innerHTML = data.weather[0].description
  tem.innerHTML = `${data.main.temp}&deg;F`
  const iconCode = data.weather[0].icon;
  document.getElementById("icon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

// -------- 3-DAY FORECAST --------
async function getForecast() {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=metric`;

  const res = await fetch(url);
  const data = await res.json();

  // Filter forecast for the next 3 days at 12:00 midday
  const middayForecasts = data.list.filter(item =>
      item.dt_txt.includes("12:00:00") // It looks at every forecast item and keeps only the ones that say "12:00:00" in the date text.
  ).slice(0, 3); // It takes only the first 3 days. So now we have 3 items, one for each day at 12:00 noon

                
  const list = document.getElementById("Forecast-list");
  list.innerHTML = "";

  middayForecasts.forEach(forecast => {
    const date = new Date(forecast.dt * 1000).toDateString();
    const temp = forecast.main.temp;

    const li = document.createElement("li");
    li.textContent = `${date}: ${temp}°C`;
    list.appendChild(li);
  });
}

// Run functions
apiFetch();
getForecast();

// == Company sportlight ==

const spotlightcontainer = document.getElementById('spotlight-container');

// Fetch spotlight members from JSON
const fetchsportlight = async () => {
  try {
    const response = await fetch('data/members.json');
    const spotlight = await response.json();

    // Filter for spotlight members (Gold and Silver)
    const qualified = spotlight.filter(member => member.membership === 2 || member.membership === 3);

    // Shuffle and select 3 random spotlight members
    // using the fisher yates shuffle algorithm
    for (let i = qualified.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [qualified[i], qualified[j]] = [qualified[j], qualified[i]];
    }
    // select first 3 members after shuffle
    const selectedSpotlight = qualified.slice(0, 3);

    displayspotlight(selectedSpotlight);

  } catch (error) {
    spotlightcontainer.innerHTML = '<p>Sorry, we are unable to load spotlight members at this time.</p>';
    console.error(error);
  }
};

// Display spotlight members
const displayspotlight = (selectedSpotlight) =>{
  spotlightcontainer.innerHTML = ''; // Clear existing content

  selectedSpotlight.forEach(member =>{
    const card = document.createElement('div');

    card.classList.add('spotlight-card');

    // member info
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h2>${member.name}</h2>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
      <p><strong>Membership Level:</strong> ${membershipLabel(member.membership)}</p>
      <p>${member.description}</p>
    `;

    spotlightcontainer.appendChild(card);
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
const getCards = () => document.querySelectorAll('.spotlight-card');


// Initial fetch of spotlight members
fetchsportlight();








