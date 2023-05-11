module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/robots.txt')
  eleventyConfig.addPassthroughCopy('./src/ueber-uns.pdf')

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'js'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  }
}
