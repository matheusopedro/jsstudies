// promise chaining test
'use strict'
const { default: axios } = require("axios");

// Chain promises with requests
var baseUrl = process.env.NYT_API_BASE_URL;
const apiKey = process.env.NYT_API_KEY;
console.log(`${baseUrl}, ${apiKey}`);
var movie = 'lord of the rings'
// var movie = 'lebowski'

function getMovieReview(movieName) {
  return new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/reviews/search.json`, {
      params: {
        query: movie,
        'api-key': apiKey,
      }
    }).then((movieReviews) => {
      resolve(movieReviews.data);
    }).catch((error) => {
      reject(error);
    });
  })
}

function getCriticInfo(criticName) {
  return new Promise((resolve, reject) => {
    console.log(criticName);
    axios.get(`${baseUrl}/critics/${criticName}.json`, {
      params: {
        'api-key': apiKey,
      }
    }).then((critic) => {
      resolve(critic.data);
    }).catch((error) => {
      reject(error);
    })
  })
}

function filterCriticsArray(criticsResults) {
  var critics = []
  for (const critic of criticsResults) {
    if (critic.num_results >= 1) {
      for (const result of critic.results) {
        critics.push(result);
      }
    }
  }
  critics = Array.from(new Set(critics.map(JSON.stringify))).map(JSON.parse);
  return JSON.stringify(critics);
}

getMovieReview(movie).then((reviews) => {
  console.log(`\n ${JSON.stringify(reviews)}`)
  return Promise.all(reviews.results.map((result) => getCriticInfo(result.byline)))
}).then((critics) => {
  console.log('\n', filterCriticsArray(critics));
});