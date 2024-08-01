let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
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