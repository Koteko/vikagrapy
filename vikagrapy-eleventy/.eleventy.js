module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "src",       // Dein Quellordner
      output: "_site",    // Build-Ausgabeordner
      includes: "_includes" // wo deine Layouts drin sind (relativ zu input)
    },
    // Optional: Aktiviere BrowserSync root als _site
    // passt eigentlich automatisch, ist aber so:
    passthroughFileCopy: true
  };
};

