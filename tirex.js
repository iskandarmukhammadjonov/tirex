// JavaScript to populate featured shops section
const featuredShopsData = [
  {
    "id": 1,
    "name": "Paddle Palace",
    "image": "https://via.placeholder.com/400x400?text=Paddle+Palace",
    "description": "Shop for all your table tennis needs at Paddle Palace. We offer a wide selection of paddles, tables, balls, and other accessories."
  },
  {
    "id": 2,
    "name": "Megaspin",
    "image": "https://via.placeholder.com/400x400?text=Megaspin",
    "description": "Megaspin is your one-stop shop for table tennis equipment. We carry a variety of brands and products to meet your needs and budget."
  },
  {
    "id": 3,
    "name": "Butterfly",
    "image": "https://via.placeholder.com/400x400?text=Butterfly",
    "description": "For over 60 years, Butterfly has been the world leader in table tennis equipment. Shop our selection of paddles, tables, and more."
  }
];

const shopListElement = document.querySelector('.shop-list');

featuredShopsData.forEach(shop => {
  const shopCardElement = document.createElement('div');
  shopCardElement.classList.add('shop-card');
  shopCardElement.innerHTML = `
    <img src="${shop.image}" alt="${shop.name}">
    <h3>${shop.name}</h3>
    <p>${shop.description}</p>
  `;
  shopListElement.appendChild(shopCardElement);
});

// JavaScript to populate blog posts section
const blogPostsData = [
  {
    "id": 1,
    "title": "The Best Table Tennis Tables for Your Home",
    "image": "https://via.placeholder.com/400x200?text=Table+Tennis+Tables",
    "excerpt": "Looking to buy a table tennis table for your home? Check out our roundup of the best tables on the market.",
    "date": "2022-01-01"
  },
  {
    "id": 2,
    "title": "How to Improve Your Table Tennis Footwork",
    "image": "https://via.placeholder.com/400x200?text=Table+Tennis+Footwork",
    "excerpt": "Footwork is essential in table tennis. Learn some tips and exercises to improve your footwork and up your game.",
    "date": "2022-02-01"
  },
  {
    "id": 3,
    "title": "The Best Table Tennis Rackets for Beginners",
    "image": "https://via.placeholder.com/400x200?text=Table+Tennis+Rackets",
    "excerpt": "Choosing the right racket is key for beginners. We've put together a list of the best rackets for beginners to help you get started.",
    "date": "2022-03-01"
  }
];

const postListElement = document.querySelector('.post-list');

blogPostsData.forEach(post => {
  const postCardElement = document.createElement('div');
})
 
