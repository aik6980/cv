module.exports = function(eleventyConfig) {
	
	eleventyConfig.addPassthroughCopy("src/resume.css");
	
	return {
		dir : {
			input : "src",
			includes : "_includes"
		}
	}
}