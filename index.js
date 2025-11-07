 // Dynamically display the current year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Display the last modified date of the document
    document.getElementById('lastModified').textContent =
      "Last Modified: " + document.lastModified;

      // ** Hamburger Menu Toggle **
  const toggleBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
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

const courses = [
  {
    subject: 'CSE',
    number: 110,
    title: 'Introduction to Programming',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course introduces the building blocks of programming languages (variables, decisions, loops, arrays, etc.).',
    technology: ['Python'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 130,
    title: 'Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Introduction to the World Wide Web, web design, and development.',
    technology: ['HTML', 'CSS'],
    completed: true
  },
  {
    subject: 'CSE',
    number: 111,
    title: 'Programming with Functions',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Learn to create, call, debug, and test functions efficiently.',
    technology: ['Python'],
    completed: false
  },
  {
    subject: 'CSE',
    number: 210,
    title: 'Programming with Classes',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Introduction to classes, objects, inheritance, and polymorphism.',
    technology: ['C#'],
    completed: false
  },
  {
    subject: 'WDD',
    number: 131,
    title: 'Dynamic Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Create dynamic websites using JavaScript and responsive techniques.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 231,
    title: 'Frontend Web Development I',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Focus on user experience, accessibility, and API integration.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: false
  }
];

// DOM Elements
const coursesContainer = document.getElementById('coursesContainer');
const totalCredits = document.getElementById('totalCredits');

// Display Courses Function
function displayCourses(courseArray) {
  coursesContainer.innerHTML = '';

  let creditSum = 0;

  courseArray.forEach(course => {
    creditSum += course.credits;

    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add(course.completed ? 'completed' : 'not-completed');

    card.innerHTML = `
      <h3>${course.subject} ${course.number}: ${course.title}</h3>
      <p><strong>Credits:</strong> ${course.credits}</p>
      <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
      <p>${course.description}</p>
      <p><strong>Status:</strong> ${course.completed ? ' Completed' : ' In Progress'}</p>
    `;

    coursesContainer.appendChild(card);
  });

  totalCredits.textContent = creditSum;
}

// Filter Buttons
const buttons = document.querySelectorAll('.filter-btn');

function setActiveButton(activeBtn) {
  buttons.forEach(btn => btn.classList.remove('active'));
  activeBtn.classList.add('active');
}

document.getElementById('allBtn').addEventListener('click', (e) => {
  displayCourses(courses);
  setActiveButton(e.target);
});

document.getElementById('wddBtn').addEventListener('click', (e) => {
  const filtered = courses.filter(c => c.subject === 'WDD');
  displayCourses(filtered);
  setActiveButton(e.target);
});

document.getElementById('cseBtn').addEventListener('click', (e) => {
  const filtered = courses.filter(c => c.subject === 'CSE');
  displayCourses(filtered);
  setActiveButton(e.target);
});

// Footer dynamic year & last modified
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;

// Load all by default
displayCourses(courses);

