require('dotenv').config()
const EleventyFetch = require("@11ty/eleventy-fetch")

async function getTopStories(){
const category ='technology'
const url = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${process.env.NYT_API_KEY}`

const response = EleventyFetch(url, {
    duration: "1d", // save for 1 day
    type: "json"    // we’ll parse JSON for you
  });
  const articles = await response
  return articles.results
}


module.exports = getTopStories;