//Integrating GOOGLE TRANSLATE API
var googleTranslate = require('google-translate')("AIzaSyAmL_0KKXcnDJKTosRC_3hD5t-GWfiVzAU");

var input = "Hello World!";
var sourceLang = "en";
var targetLang = "zh-CN";
var callback = function(err, translation){console.log(translation);};

googleTranslate.translate(input, sourceLang, targetLang, callback)
{
	/* The Translate API uses an API key for authentication. This sample looks for the key in an environment variable.
	const translate = Translate({key: process.env.TRANSLATE_API_KEY});
	*/
	
	// Translates the text into the target language. "input" can be a string for translating a single piece of text, \
	// or an array of strings for translating multiple texts.
	googleTranslate.translate(input, sourceLang, targetLang, (err, translation) => {
		if (err) {
			callback(err);
			return;
		}

    console.log('Text: %j', input);
    console.log('Translation: %j', translation);
    callback();
  });
}


/*
var doctorInfo = "";
var patientInfo = "";
var queryString = 

*/