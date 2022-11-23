const requestURL = 'https://adilrafi.github.io/wdd230/directory/scripts/data.json'

fetch(requestURL)
  .then(function (response) {
    return response.json()
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets']
    prophets.forEach(element => {
        let card = document.createElement('section')
        let h2 = document.createElement('h2')
        let span1 = document.createElement('span')
        let span2 = document.createElement('span')
        let image = document.createElement('img')
        let website = document.createElement('a')

        h2.textContent = element.name
        
        image.setAttribute('src', element.imageurl)
        website.setAttribute('href', company.url);

        card.appendChild(h2)
        card.appendChild(span1)
        card.appendChild(span2)
        card.appendChild(image)
        card.appendChild(website)

        document.querySelector('div.cards').appendChild(card)
    });
  })