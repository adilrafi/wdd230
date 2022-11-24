const requestURL = 'https://adilrafi.github.io/wdd230/directory/scripts/new.json';
const cards = document.querySelector('.cards');

async function getCompanies(){
    const response = await fetch(requestURL);
    const data = await response.json();
    data.companies.forEach(company => {displayCompanies(company)});
  }
  
  
  function displayCompanies(company) {
  
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let address1 = document.createElement('p');
    let address2 = document.createElement('p');
    let website = document.createElement('a');
    let phone = document.createElement('p');
    let portrait = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the company name and phone number
    h2.textContent = `${company.companyName}`;
  
  
    address1.textContent= `${company.address1}`;
    address2.textContent=`${company.address2}`;
    phone.textContent=`${company.phone}`;
    website.textContent= `${company.url}`;
    website.setAttribute('href', company.url);

    
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', company.logo);
    portrait.setAttribute('alt', `pic of logo: ${company.logo}`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(portrait);
    card.appendChild(h2);
    card.appendChild(address1);
    card.appendChild(address2);
    card.appendChild(phone);
    card.appendChild(website);

   
  
  
    // Add/append the existing HTML div with the cards class with the section(card)
    //document.querySelector('div.cards').appendChild(card);
  cards.appendChild(card);
  
  }
  getCompanies();
  
  