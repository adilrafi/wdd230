//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
async function spotLights() {
    try {
      let requestURL = 'https://adilrafi.github.io/wdd230/final/scripts/spotlight.json';
      const response = await fetch(requestURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call 
  
        const companies = data['companies'];
        randomCompany = random(companies);
        console.log(randomCompany);
        
        spotLight1(companies[randomCompany]);
  
        randomCompany2 = random(companies);
        console.log(randomCompany2);
  
        spotLight2(companies[randomCompany2]);
  
        randomCompany3 = random(companies);
        console.log(randomCompany3);
  
        spotLight3(companies[randomCompany3]);
  
      } else {
        throw Error(await response.text());
      };
  
    
  
      function random(companies) {
        let level = 3;
         while (level > 2) {
         var randomCompany = Math.floor(Math.random() *9);
         var randomComp = companies[randomCompany];
         level = randomComp.chamberMemberType;
         }
         return randomCompany;
       }
  
      function spotLight1(companies) {
         // Create elements to add to the document
         let card = document.createElement('section');
         let h2 = document.createElement('h2');
         let website = document.createElement('a')
         let portrait = document.createElement('img');
       
         // Change the textContent property of the h3 element
         h2.textContent = `${companies.companyName}`;
         website.textContent = `${companies.url}`;
         website.setAttribute('href', companies.url);
  
         // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. 
         portrait.setAttribute('src', companies.logo);
         portrait.setAttribute('alt', `${companies.name} logo`);
         portrait.setAttribute('loading', 'lazy');
       
         // Add/append the section(card) with the h2 element
         card.appendChild(portrait);
         card.appendChild(h2);
         card.appendChild(website);
  
  
          // append to doc
          document.querySelector('#spotlight1').appendChild(card);
      }
      function spotLight2(companies) {
             // Create elements to add to the document
             let card = document.createElement('section');
             let h2 = document.createElement('h2');
             let website = document.createElement('a')
             let portrait = document.createElement('img');
           
             // Change the textContent property of the h3 element
             h2.textContent = `${companies.companyName}`;
             website.textContent = `${companies.url}`;
             website.setAttribute('href', companies.url);
     
             // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. 
             portrait.setAttribute('src', companies.logo);
             portrait.setAttribute('alt', `${companies.name} logo`);
             portrait.setAttribute('loading', 'lazy');
           
             // Add/append the section(card) with the h2 element
             card.appendChild(portrait);
             card.appendChild(h2);
             card.appendChild(website);
  
  
         // append to doc
         document.querySelector('#spotlight2').appendChild(card);
     }
     function spotLight3(companies) {
           // Create elements to add to the document
           let card = document.createElement('section');
           let h2 = document.createElement('h2');
           let website = document.createElement('a')
           let portrait = document.createElement('img');
         
           // Change the textContent property of the h3 element
           h2.textContent = `${companies.companyName}`;
           website.textContent = `${companies.url}`;
           website.setAttribute('href', companies.url);
   
           // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. 
           portrait.setAttribute('src', companies.logo);
           portrait.setAttribute('alt', `${companies.name} logo`);
           portrait.setAttribute('loading', 'lazy');
         
           // Add/append the section(card) with the h2 element
           card.appendChild(portrait);
           card.appendChild(h2);
           card.appendChild(website);
  
  
       // append to doc
       document.querySelector('#spotlight3').appendChild(card);
   }
    } catch (error) {
      console.log(error);
    }
  };
  spotLights();