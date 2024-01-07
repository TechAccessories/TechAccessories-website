module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./css');
    eleventyConfig.addPassthroughCopy('./images');
    eleventyConfig.addPassthroughCopy('./js');
    eleventyConfig.addPassthroughCopy('./header/header.css');
    eleventyConfig.addPassthroughCopy('./footer/footer.css');
    eleventyConfig.addPassthroughCopy('./admin');
    
}
