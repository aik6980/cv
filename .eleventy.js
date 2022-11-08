module.exports = function(eleventyConfig) {
	
	eleventyConfig.addPassthroughCopy("src/resume.css");
	
	return {
		pathPrefix: "/resume/",
		
		dir : {
			input : "src",
			includes : "_includes"
		}
	}
}