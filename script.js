let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    header.classList.add('active');
}



var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 2 seconds
}

 // Array of image URLs
 const imageUrls = [
    "https://res.cloudinary.com/dshrsnzyb/image/upload/v1715811204/nalanda%20image/n91bp8fm0usrqc08ztd7.jpg",
    "https://res.cloudinary.com/dshrsnzyb/image/upload/v1715811258/nalanda%20image/jp4gmnawrcdm8ycnjwdd.jpg",
    "https://res.cloudinary.com/dshrsnzyb/image/upload/v1715811241/nalanda%20image/vopfzi6qjuwqkvjpgyjz.jpg",
    "https://res.cloudinary.com/dshrsnzyb/image/upload/v1715811238/nalanda%20image/u0bj448bqzjn6bjc6d1c.jpg",
    "https://res.cloudinary.com/dshrsnzyb/image/upload/v1715811233/nalanda%20image/tsjq6kcnlj53ltgwsyqh.jpg",
    "https://res.cloudinary.com/dshrsnzyb/image/upload/v1715811225/nalanda%20image/b5lwdtlo7uhf6xor7jcc.jpg",
    "https://res.cloudinary.com/dshrsnzyb/image/upload/v1715811222/nalanda%20image/c33f8ib9vuvpifu14feo.jpg",
    "https://res.cloudinary.com/dshrsnzyb/image/upload/v1715811204/nalanda%20image/n91bp8fm0usrqc08ztd7.jpg",
    "https://res.cloudinary.com/dshrsnzyb/image/upload/v1715811201/nalanda%20image/ptnxpupprk2yavry3nih.jpg",
    "https://res.cloudinary.com/dshrsnzyb/image/upload/v1715811200/nalanda%20image/kjqrvxdjzcyuxklhjjoc.jpg",
    "https://res.cloudinary.com/dshrsnzyb/image/upload/v1715811200/nalanda%20image/j44f4km5gkprmcgyteqq.jpg",
    "https://res.cloudinary.com/dshrsnzyb/image/upload/v1715811200/nalanda%20image/j44f4km5gkprmcgyteqq.jpg",
    "https://res.cloudinary.com/dshrsnzyb/image/upload/v1715811190/nalanda%20image/t47vbze2xw8ckaain1ac.jpg",
    "https://res.cloudinary.com/dshrsnzyb/image/upload/v1715811189/nalanda%20image/svw32aeda9a2rlr1hamt.jpg",
    "https://res.cloudinary.com/dshrsnzyb/image/upload/v1715811181/nalanda%20image/zwkrlfvnsflz3y6j2srf.jpg",
    "https://res.cloudinary.com/dshrsnzyb/image/upload/v1715811180/nalanda%20image/obsa4ted3dsfhkbocxrn.jpg",
    "https://res.cloudinary.com/dshrsnzyb/image/upload/v1715811162/nalanda%20image/spgjavpslrva3ghdfug9.jpg",
    "https://res.cloudinary.com/dshrsnzyb/image/upload/v1715811160/nalanda%20image/ctspe7fs7gjtfvp6eo4d.jpg",
    "https://res.cloudinary.com/dshrsnzyb/image/upload/v1715811156/nalanda%20image/j0rfp7thqvoididddcxg.jpg",
    "https://res.cloudinary.com/dshrsnzyb/image/upload/v1715811138/nalanda%20image/gszcwjczbjiqy8zikpy3.jpg"
  ];

  // Get the carousel inner container
  const carouselInner = document.getElementById('carousel-inner');

  // Function to create a carousel item
  const createCarouselItem = (src, isActive) => {
    const div = document.createElement('div');
    div.className = `carousel-item${isActive ? ' active' : ''}`;
    const img = document.createElement('img');
    img.src = src;
    img.className = 'd-block w-100';
    img.alt = '...';
    div.appendChild(img);
    return div;
  };

  // Populate the carousel with images
  imageUrls.forEach((url, index) => {
    const isActive = index === 0; // Set the first item as active
    const carouselItem = createCarouselItem(url, isActive);
    carouselInner.appendChild(carouselItem);
  });








  // Select all FAQ questions
const faqQuestions = document.querySelectorAll('.faq-question');

console.log(faqQuestions);//returns nodelist

// Add event listeners to each FAQ question
faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    // Toggle the 'active' class
    question.classList.toggle('active');

    // Find the related answer
    const faqAnswer = question.nextElementSibling;

    // Toggle the answer's max-height
    if (question.classList.contains('active')) {
      faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
    } else {
      faqAnswer.style.maxHeight = 0;
    }
  });
});






// Get the "Book Now" button
let bookNowBtn = document.getElementById("book-now-btn");

// Get the pop-up element
let popup = document.getElementById("booking-popup");

// Get the close button inside the popup
let closeBtn = document.querySelector(".close-btn");

// When the user clicks the "Book Now" button, open the popup
bookNowBtn.onclick = function() {
  popup.style.display = "flex";  // Use flex to center the popup
}

// When the user clicks on the close button (X), close the popup
closeBtn.onclick = function() {
  popup.style.display = "none";
}

// When the user clicks outside the popup content, close the popup
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}


// get all the icons box

// let icons = document.getElementsByClassName("icons");

// console.log(icons);//returns html collection




// Redirect to the service pages

let icons = document.querySelectorAll('.icons');

icons.forEach((icon, index) => {
  icon.addEventListener('click', (event) => {
    event.preventDefault();
    // Redirect to the service page based on the index
    window.location.href = `services/service${index + 1}.html`; 
  });
});


document.getElementById('learn-more-btn').addEventListener('click', function() {
  var moreInfo = document.getElementById('more-info');
  if (moreInfo.classList.contains('hidden')) {
    moreInfo.classList.remove('hidden');
    this.textContent = 'Show Less';
  } else {
    moreInfo.classList.add('hidden');
    this.textContent = 'Learn More';
  }
});
