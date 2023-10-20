// Config File
const Card = require('./src/_includes/components/Card.html')

module.exports = function(eleventyConfig) {
    // Takes everything in the folder and passes it to the main folder _site which is a copy of the src folder
    eleventyConfig.addPassthroughCopy("./src/assets/")
    eleventyConfig.addPassthroughCopy("./src/css/")

    // Watches for CSS Changes
    eleventyConfig.addWatchTarget("./src/css/");

    // COMPONENTS 
    // reusable code that can be used anywhere
    eleventyConfig.addShortcode("Card", Card)

    // COLLECTIONS 
    // Essentially creates a collection (An array of data) that returns an array of all files in the folder
    eleventyConfig.addCollection('posts', function(collectionApi){
        // Get All  MD Files in the src/blog/posts folder
        
        return collectionApi.getFilteredByGlob("src/blog/posts/**/*.md")
    })
    
    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: '_site', //Development Site
        },
        //Nunjucks Template
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine:'njk'
    };
}