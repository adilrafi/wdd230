/*toggle menu function*/
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
  }
  
  const x = document.getElementById('hamburgerBtn')
  x.onclick = toggleMenu;
  
  
  /* DATE TIME FUNCTIONS*/
  /* current date and time on the top of the page */
  let dateTime = new Date();
  const fullDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeStyle: 'short' }).format(dateTime);
  document.getElementById("dateTime").innerHTML = fullDate;
  /* current year used for copyright */
  const date = new Date();
  let year = date.getFullYear();
  document.querySelector('#year').innerHTML = year;

/*last modified date: used for footer*/
Time = document.lastModified;
document.querySelector("#modify").innerHTML = document.lastModified;

/* lazy load*/
async function ifImage() {
  let images = document.querySelectorAll('[data-src]');

  function preloadImage(img) {
    const src = img.getAttribute('data-src');
    if (!src) {
      return;
    }
    img.src = src;
    img.classList.add('clear');
  }

  let imgOptions = {
    threshold: 0,
    rootMargin: '0px 0px -500px 0px'
  };

  const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onLoad = () => { image.removeAttribute('data-src'); };
  }

  const imgObserver = new IntersectionObserver((items, imgObserver) => {
    items.forEach(item => {
      if (!item.isIntersecting) {
        return;
      } else {
        preloadImage(item.target);
        imgObserver.unobserve(item.target);
      }
    }, imgOptions);
  });

  images.forEach(image => {
    imgObserver.observe(image);
  });

}

let submitBtn = document.querySelector('.submitBtn');

async function displayCart() {
  try {
    let drinkHistory = document.querySelector("#drink-history")

    let drinks = localStorage.getItem("cart");
    let p = document.createElement("p")
    p.textContent = drinks
    drinkHistory.appendChild(p);

  } catch (error) {
    console.log(`displayCart ${error}`)
  };
};
displayCart();

async function drinkCart(basket) {
  try {
      localStorage.clear()
      let order = [];
      // initialize display elements
      const cartItems = document.querySelector("#drink-history");
      
      // get the stored value in localStorage
      let drink = window.localStorage.getItem("cart");

      // determine what is in the cart
      

      // increment the number of visits.
      order.push(basket);
      // store the new number of visits value
      localStorage.setItem("cart", order);
  } catch (error) {
    
    console.log(error);
  };
};


let arrName = [];
let arrFat = [];
let arrCarb = [];
let arrProtien = [];
let arrCalories = [];
let arrSuagr = [];

async function getFruit() {
  try {
    let jsonFruitFile = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

    const response = await fetch(jsonFruitFile);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      const fruit = data[x];
      console.log(fruit);
      
      for (let i = 0; i < data.length; i++) {
        displayFruits(data[i]);
      }
      
    } else {
      throw Error(await response.text());
    };
    

    function displayFruits(fruitDrink) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let nutritions = document.createElement('div');
      let carbohydrates = document.createElement('p');
      let protein = document.createElement('p');
      let fat = document.createElement('p');
      let calories = document.createElement('p');
      let sugar = document.createElement('p');
      let checkbox = document.createElement('input');
      

      checkbox.setAttribute('type', 'button');
      checkbox.setAttribute('class', 'cart');
      checkbox.setAttribute('id', `${fruitDrink.name}`)

      // fruitDrink info
      //checkbox.innerHTML = (`<input type="checkbox" name="audience" value="#">`)
      h2.textContent = (`${fruitDrink.name}`);
      carbohydrates.textContent = (`Carbohydrates: ${fruitDrink.nutritions.carbohydrates}`);
      protein.textContent = (`Protein: ${fruitDrink.nutritions.protein}`);
      fat.textContent = (`Fat: ${fruitDrink.nutritions.fat}`);
      calories.textContent = (`Calories: ${fruitDrink.nutritions.calories}`);
      sugar.textContent = (`Sugar: ${fruitDrink.nutritions.sugar}`)
      
      // append to card
      card.appendChild(checkbox);
      card.appendChild(h2);
      // card.appendChild(nutritions);
      nutritions.appendChild(carbohydrates);
      nutritions.appendChild(protein);
      nutritions.appendChild(fat);
      nutritions.appendChild(calories);
      nutritions.appendChild(sugar);

      // append to doc
      document.querySelector('.cards').appendChild(card);

      let cart = document.querySelector(`#${fruitDrink.name}`);

      cart.addEventListener('click', addToCart);
      let basket = document.createElement('div');
      

      function addToCart() {
        card.removeChild(checkbox)
        arrName.push(fruitDrink.name)
        console.log(arrName);
        let fname = document.querySelector("#fname");

        console.log(fname)

        document.querySelector('#shopping-cart').appendChild(basket);
        
        let calcCarbohydrates = (`${fruitDrink.nutritions.carbohydrates}`)
        let calcProtein = (`${fruitDrink.nutritions.protein}`)
        arrFat.push(`${fruitDrink.nutritions.fat}`)
        let calcCalories = (`${fruitDrink.nutritions.calories}`)
        let calcSugar = (`${fruitDrink.nutritions.sugar}`)

        
        
        basket.appendChild(h2);
        basket.appendChild(nutritions);
        nutritions.appendChild(carbohydrates);
        nutritions.appendChild(protein);
        nutritions.appendChild(fat);
        nutritions.appendChild(calories);
        nutritions.appendChild(sugar);
        submitBtn.addEventListener("click", drinkCart(arrName));
      
      };
      
      
      
      


    };
  } catch (error) {
    console.log(error);
  };
};
getFruit();