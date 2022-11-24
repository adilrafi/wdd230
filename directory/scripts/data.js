const requestURL = 'https://evasimonbyui.github.io/wdd230/lesson4/json/data.json'

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

        h2.textContent = element.name
        
        span2.textContent = 'Place of birth: ' + element.birthplace
        image.setAttribute('src', element.imageurl)

        card.appendChild(h2)
        card.appendChild(span1)
        card.appendChild(span2)
        card.appendChild(image)

        document.querySelector('div.cards').appendChild(card)
    });
  })