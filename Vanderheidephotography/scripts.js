document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("text");
    const buttonsContainer = document.getElementById("buttons-container");
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");

    // Array of phrases to display
    const phrases = [
        "Welcome to My Website!",
        "Explore My Photography Work",
        "Feel Free to Reach Out",
        "Discover My Creative World",
        "Capture Moments, Create Memories"
    ];

    let currentPhraseIndex = 0; // Tracks the current phrase
    let charIndex = 0; // Tracks the current character in the phrase
    const typingSpeed = 130; // Typing speed in ms per character
    const pauseBetweenPhrases = 2000; // Pause between phrases in ms

    // Function to type a single phrase
    function typePhrase() {
        const phrase = phrases[currentPhraseIndex];

        if (charIndex < phrase.length) {
            textElement.textContent += phrase[charIndex]; // Append next character
            charIndex++;
            setTimeout(typePhrase, typingSpeed);
        } else {
            // After completing the phrase, wait and proceed to the next phrase
            setTimeout(() => {
                charIndex = 0; // Reset character index
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Move to the next phrase
                textElement.textContent = ""; // Clear the current text
                typePhrase(); // Start typing the next phrase
            }, pauseBetweenPhrases);
        }
    }

    // Start typing the first phrase
    typePhrase();

    // Mousemove effect for interactive buttons
    [btn1, btn2].forEach((button) => {
        button.addEventListener("mousemove", (e) => {
            const rect = button.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Calculate 3D transformation angles
            const angleX = ((mouseX - centerX) / centerX) * 15;
            const angleY = ((mouseY - centerY) / centerY) * -15;

            // Apply the transformation
            button.style.transform = `perspective(600px) rotateX(${angleY}deg) rotateY(${angleX}deg) scale(1.1)`;
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)"; // Reset transform on mouse leave
        });
    });

    // Example: Handling contact form visibility
    const contactForm = document.querySelector(".contact-form");
    const openFormButton = document.querySelector("#open-contact-form");
    const closeFormButton = document.querySelector("#close-contact-form");

    // Open the contact form
    if (openFormButton) {
        openFormButton.addEventListener("click", function () {
            contactForm.classList.add("active");
        });
    }

    // Close the contact form
    if (closeFormButton) {
        closeFormButton.addEventListener("click", function () {
            contactForm.classList.remove("active");
        });
    }
});

document.querySelector('.scroll-down-btn').addEventListener('click', function() {
    this.classList.add('active');
    document.querySelector('.More-info').classList.add('active');
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});


// Select the back to top button
const backToTopButton = document.querySelector('.back-to-top-btn');
const scrollDownButton = document.querySelector('.scroll-down-btn');

// Show the "Back to Top" button when the user reaches the bottom of the page
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY + window.innerHeight; // Current position from top to bottom of viewport
    const documentHeight = document.documentElement.scrollHeight; // Total page height

    // If the user is at the bottom of the page (allow for small buffer)
    if (scrollPosition >= documentHeight - 10) { 
        backToTopButton.style.display = 'flex'; // Show the back to top button
    } else {
        backToTopButton.style.display = 'none'; // Hide the back to top button
    }
});

// Scroll to the top when the Back to Top button is clicked
backToTopButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll to the top
    });
});


document.querySelector('.scroll-down-btn').addEventListener('click', function() {
    document.querySelector('.contact-form').classList.add('active');
});

document.querySelector('.scroll-down-btn').addEventListener('click', function() {
    this.classList.add('active');  // Make the scroll-down button "active"
    document.querySelector('.contact-form').classList.add('active'); // Show the contact form
});

document.addEventListener("DOMContentLoaded", function () {
    let currentSection = 1; // Track the current section (1 = top, 2 = more-info, 3 = contact-form)

    const scrollDownButton = document.querySelector('.scroll-down-btn');
    const backToTopButton = document.querySelector('.back-to-top-btn');

    // Event listener for the scroll-down button
    scrollDownButton.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor behavior

        if (currentSection === 1) {
            // Scroll to the More Info section
            const moreInfoSection = document.getElementById('more-info');
            window.scrollTo({
                top: moreInfoSection.offsetTop,
                behavior: 'smooth'
            });
            currentSection = 2; // After scrolling to More Info, update the section
        } else if (currentSection === 2) {
            // Scroll to the Contact Form section
            const contactFormSection = document.getElementById('contact-form');
            window.scrollTo({
                top: contactFormSection.offsetTop,
                behavior: 'smooth'
            });
            currentSection = 3; // After scrolling to Contact Form, update the section

            // Optionally hide the button after reaching the contact form section
            scrollDownButton.style.display = 'none';
        }
    });

   
       
});

// Add this script to your scripts.js file


// Get the scroll-down button and the contact form
const scrollDownContactBtn = document.getElementById("scroll-down-contact") ;
const contactForm = document.getElementById("contact-form");

// Function to handle scroll event
window.onscroll = function() {
    const contactFormTop = contactForm.offsetTop; // Get the top position of the contact form
    const scrollPosition = window.scrollY + window.innerHeight; // Get the current scroll position (viewport bottom)

    // Hide scroll-down button when contact form is reached
    if (scrollPosition >= contactFormTop) {
        scrollDownContactBtn.style.display = 'none'; // Hide the button
    } else {
        scrollDownContactBtn.style.display = 'block'; // Show the button when scrolled above the contact form
    }
};
$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const scrollDownButton = document.getElementById("scroll-down");
    let clickCount = 0;
  
    scrollDownButton.addEventListener("click", (e) => {
      e.preventDefault();
  
      // Determine where to scroll based on the click count
      if (clickCount === 0) {
        document.getElementById("more-info").scrollIntoView({ behavior: "smooth" });
        clickCount++;
      } else if (clickCount === 1) {
        document.getElementById("contact-form").scrollIntoView({ behavior: "smooth" });
        clickCount = 0; // Reset to allow cycling back from the top
      }
    });
  });
  
  // Show the button when the page is scrolled down
window.onscroll = function() {
  var button = document.getElementById("back-to-top");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    button.style.display = "block";  // Show the button
  } else {
    button.style.display = "none";   // Hide the button
  }
};

// Smooth scroll to top when the button is clicked
document.getElementById("back-to-top").addEventListener("click", function(e) {
  e.preventDefault(); // Prevent default action
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Check scroll position and show the button when scrolled down
window.addEventListener('scroll', function () {
    const section103 = document.getElementById('section103');
    if (window.scrollY > 200) { // Show button after scrolling down 200px
        section103.style.display = 'block';
    } else {
        section103.style.display = 'none';
    }
});

// Scroll to top when the button is clicked
document.getElementById('section103').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link behavior
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll to top
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the scroll button (the "back-to-top" button)
    const scrollButton = document.getElementById("section103");

    // Scroll event listener
    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;

        // If the user scrolls past 200px, fade in the button
        if (scrollPosition > 200) {
            scrollButton.style.opacity = 1;  // Make the button visible
        } else {
            scrollButton.style.opacity = 0;  // Fade the button out
        }
    });

    // Scroll to top when the button is clicked
    scrollButton.addEventListener("click", function (e) {
        e.preventDefault();  // Prevent default link behavior
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // Smooth scroll to top
        });
    });
});
