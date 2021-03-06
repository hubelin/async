const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new Hangman('Car Parts', 2);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

window.addEventListener('keypress', e => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.puzzle;
  guessesEl.textContent = game1.statusMessage;
});

getPuzzle('2')
  .then(puzzle => {
    console.log(puzzle);
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  });

/*
1. Convert getCountry to use fetch and return a promise
2. Make sure getCountry still resolves with country that matches
3. Change getCountry usage to use catch
*/

//Async await challenge - convert getCountry to use async await instead of then to chain together promises
getCountry('CA')
  .then(country => {
    console.log(country.name);
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  });

// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     if (response.status === 200) {
//         return response.json()
//     } else {
//         throw new Error('Unable to fetch the puzzle')
//     }
// }).then((data) => {
//     console.log(data.puzzle)
// }).catch((error) => {
//     console.log(error)
// })
