
let beachSlideIndex = 0;
let cultureSlideIndex = 0;

// Open Modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";

    // Reset slides: Show the first slide only
    const slides = modal.querySelectorAll(".slide");
    slides.forEach((slide, index) => {
        slide.classList.remove("active");
        if (index === 0) {
            slide.classList.add("active");
        }
    });

    // Set the current slide index in the modal
    modal.setAttribute("data-current-slide", "0");
}

// Close Modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Move Slide for Adventure Tour
function moveSlide(type, direction) {
    let slideIndex;
    let modal;

    if (type === 'adventure') {
        slideIndex = adventureSlideIndex;
        modal = document.getElementById('adventureModal');
    } else if (type === 'beach') {
        slideIndex = beachSlideIndex;
        modal = document.getElementById('beachModal');
    } else if (type === 'culture') {
        slideIndex = cultureSlideIndex;
        modal = document.getElementById('cultureModal');
    }

    const slides = modal.querySelectorAll('.slide');
    slides[slideIndex].classList.remove('active');

    slideIndex = (slideIndex + direction + slides.length) % slides.length;
    slides[slideIndex].classList.add('active');

    if (type === 'adventure') {
        adventureSlideIndex = slideIndex;
    } else if (type === 'beach') {
        beachSlideIndex = slideIndex;
    } else if (type === 'culture') {
        cultureSlideIndex = slideIndex;
    }
}

// Close Modal when clicking outside
window.onclick = function (event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};








// Default slide index
let adventureSlideIndex = 0;

// Function to open the modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "block";

  // Reset the slides
  const slides = modal.querySelectorAll(".slide");
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
    if (index === 0) {
      slide.classList.add("active"); // Show the first slide by default
    }
  });

  // Initialize slide index
  adventureSlideIndex = 0;
}

// Function to close the modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
}

// Function to move slides
function moveSlide(type, direction) {
  let slideIndex;
  let modal;

  if (type === "adventure") {
    slideIndex = adventureSlideIndex;
    modal = document.getElementById("adventureModal");
  }

  const slides = modal.querySelectorAll(".slide");
  slides[slideIndex].classList.remove("active");

  // Update the slide index with wrap-around logic
  slideIndex = (slideIndex + direction + slides.length) % slides.length;

  slides[slideIndex].classList.add("active");

  if (type === "adventure") {
    adventureSlideIndex = slideIndex;
  }
}

// Close the modal when clicking outside
window.onclick = function (event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};
















// Common functionality for all modals
let currentSlide = { adventure: 0, beach: 0, cultural: 0 };

function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
  updateSlide(modalId, 0);
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

function moveSlide(type, direction) {
  const modal = document.getElementById(type + "Modal");
  const slides = modal.querySelectorAll(".slide");
  const maxIndex = slides.length - 1;

  currentSlide[type] = (currentSlide[type] + direction + slides.length) % slides.length;
  updateSlide(type + "Modal", currentSlide[type]);
}

function updateSlide(modalId, index) {
  const modal = document.getElementById(modalId);
  const slides = modal.querySelectorAll(".slide");

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}
















// JavaScript to handle modals and slides
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
  }
  
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }
  
  function moveSlide(modalId, direction) {
    const modal = document.getElementById(modalId);
    const slides = modal.querySelectorAll(".slide");
    let activeSlide = Array.from(slides).findIndex((slide) => slide.classList.contains("active"));
  
    slides[activeSlide].classList.remove("active");
    activeSlide = (activeSlide + direction + slides.length) % slides.length;
    slides[activeSlide].classList.add("active");
  }
  




















  // Function to Open a Modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
  }
  
  // Function to Close a Modal
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }
  
  // Function to Show a Tab
  function showTab(tabId) {
    // Hide all tabs
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
  
    // Remove active state from all buttons
    const buttons = document.querySelectorAll(".tab-button");
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
  
    // Show the selected tab and set active state on its button
    document.getElementById(tabId).classList.add("active");
    document.querySelector(`button[onclick="showTab('${tabId}')"]`).classList.add("active");
  }
  




  // Open Modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
  }
  
  // Close Modal
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }
  
  // Show Tab Content
  function showTab(tabId) {
    // Hide all tabs
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach((tab) => tab.classList.remove("active"));
  
    // Remove active state from buttons
    const buttons = document.querySelectorAll(".tab-button");
    buttons.forEach((button) => button.classList.remove("active"));
  
    // Show the selected tab
    document.getElementById(tabId).classList.add("active");
  
    // Highlight the corresponding button
    const activeButton = document.querySelector(`.tab-button[onclick="showTab('${tabId}')"]`);
    activeButton.classList.add("active");
  }
  



  // Data for each activity
const activities = {
    hiking: {
      title: "Hiking at Le Morne Brabant",
      description: "Experience the thrill of hiking the iconic Le Morne Brabant mountain, with breathtaking views of the ocean and lush greenery.",
      image: "images/hiking.jpg",
    },
    ziplining: {
      title: "Zip-Lining Through the Forest",
      description: "Soar through the trees on a thrilling zip-line adventure and get a bird's eye view of Mauritius' stunning forests.",
      image: "images/ziplining.jpg",
    },
    quadbiking: {
      title: "Quad Biking Adventure",
      description: "Ride across rugged terrain and discover hidden gems on a guided quad biking tour.",
      image: "images/quadbiking.jpg",
    },
    paragliding: {
      title: "Paragliding Above the Island",
      description: "Take to the skies and enjoy breathtaking aerial views of Mauritius' stunning landscapes.",
      image: "images/paragliding.jpg",
    },
    canyoning: {
      title: "Canyoning Adventures",
      description: "Descend waterfalls, jump into natural pools, and explore canyons like never before.",
      image: "images/canyoning.jpg",
    },
    rockclimbing: {
      title: "Rock Climbing Challenges",
      description: "Test your skills on rock climbing adventures suitable for all experience levels.",
      image: "images/rockclimbing.jpg",
    },
  };
  
  // Show Tab Content
  function showTab(activityId) {
    // Get the activity data
    const activity = activities[activityId];
  
    // Update the tab content dynamically
    const tabContent = document.querySelector(".tab-content");
    tabContent.innerHTML = `
      <h3>${activity.title}</h3>
      <p>${activity.description}</p>
      <img src="${activity.image}" alt="${activity.title}">
    `;
  
    // Remove active state from all buttons
    const buttons = document.querySelectorAll(".tab-button");
    buttons.forEach((button) => button.classList.remove("active"));
  
    // Add active state to the clicked button
    const activeButton = document.querySelector(`.tab-button[onclick="showTab('${activityId}')"]`);
    activeButton.classList.add("active");
  }
  










































































  document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const tourDate = document.getElementById("tour-date").value;
    const tourPackage = document.getElementById("tour-package").value;

    const services = Array.from(document.querySelectorAll("input[name='services']:checked"))
        .map(service => service.value)
        .join(", ");

    const message = document.getElementById("message").value;

    // Display a success message
    const formMessage = document.getElementById("form-message");
    formMessage.textContent = `Thank you, ${name}! Your booking for the ${tourPackage} on ${tourDate} has been received. 
    Additional services: ${services || "None"}. 
    Special requests: ${message || "None"}. 
    We will contact you shortly at ${email}.`;
    
    // Clear form fields
    document.getElementById("bookingForm").reset();
});






















// Handle form submission
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Show the thank-you popup
  document.getElementById("thankYouPopup").style.display = "block";

  // Reset the form
  document.getElementById("bookingForm").reset();
});

// Close the popup
function closePopup() {
  document.getElementById("thankYouPopup").style.display = "none";
}

// Redirect to the home section
function redirectToHome() {
  closePopup();
  window.location.href = "#"; // Adjust the anchor to your "home" section's ID
}




// Show Thank You Popup
function showThankYouPopup() {
  const thankYouModal = document.getElementById("thankYouModal");
  thankYouModal.style.display = "flex";
}

// Close Thank You Popup
function closeThankYouPopup() {
  const thankYouModal = document.getElementById("thankYouModal");
  thankYouModal.style.display = "none";
}

// Redirect to Home Section
function redirectToHome() {
  closeThankYouPopup(); // Close the popup
  window.location.href = "#home"; // Redirect to home section
}

// Handle Form Submission
document.getElementById("bookingForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from reloading the page
  showThankYouPopup(); // Show the popup
});






















// Handle Form Submission
document.getElementById("bookingForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Hide the form
  document.getElementById("bookingForm").style.display = "none";

  // Show the thank-you message
  document.getElementById("thankYouMessage").style.display = "block";
});




















// Handle Form Submission
document.getElementById("bookingForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  const form = document.getElementById("bookingForm");
  const thankYouMessage = document.getElementById("thankYouMessage");

  // Hide the form and show the thank-you message
  form.style.display = "none";
  thankYouMessage.style.display = "block";
});

