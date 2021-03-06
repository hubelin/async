const getPuzzle = wordCount => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Unable to fetch puzzle');
      }
    })
    .then(data => {
      return data.puzzle;
    });
};

const getCountry = async countryCode => {
  const response = await fetch(`http://restcountries.eu/rest/v2/all`);

  if (response.status === 200) {
    const data = await response.json();
    return data.find(country => country.alpha2Code === countryCode);
  } else {
    throw new Error('Unable to fetch data');
  }
};

// const getCountryOld = countryCode => {
//   return fetch(`http://restcountries.eu/rest/v2/all`)
//     .then(response => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error('Unable to fetch data');
//       }
//     })
//     .then(data => data.find(country => country.alpha2Code === countryCode));
// };

//converted getCountryFunction

// const getCountry = (countryCode) => new Promise((resolve, reject) => {
//     const countryRequest = new XMLHttpRequest()

//     countryRequest.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             const country = data.find((country) => country.alpha2Code === countryCode)
//             resolve(country)
//         } else if (e.target.readyStatet === 4) {
//             reject('Unable to fetch data')
//         }
//     })

//     countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
//     countryRequest.send()
// })
