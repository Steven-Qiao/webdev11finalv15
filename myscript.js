let mainDiv;	  

let elemCountryList = document.createElement("ol");


if ('serviceWorker' in navigator) 
{
	navigator.serviceWorker.register('/sw.js');
}

window.onload = function() 
{
	mainDiv = document.getElementById("main");
}

function emptySearchError() 
{
	document.getElementById("main").innerHTML = "";
		
	document.getElementById("hintmsg").innerHTML = "Sorry, it is virtually impossible to extract information from our database without an input";
}

function fetchData() 
{
	
	
	document.getElementById("main").innerHTML = "";
	
	var search = document.getElementById("search").value;
	
	let searchURL = 'https://restcountries.eu/rest/v2/name/' + search;
	
	if (search.length > 0 && searchURL != null) 
	{
	
		fetch('https://restcountries.eu/rest/v2/name/' + search)
		//.catch(error => console.log("There is an issue"))
		.then(response => response.json())
		.then(data => updatePage(data))
		
		document.getElementById("hintmsg").innerHTML = "Please scroll down to view the results displayed below";
		
		
	} else {
		emptySearchError();
	}
	
	
	
	
}//fetchData

function fetchLanguage() 
{
	var internationalLangs = {
		"Afar": "AA",
		"Abkhazian": "AB",
		"Avestan": "ae",
		"Afrikaans": "af",
		"Akan": "ak",
		"Amharic": "am",
		"Aragonese": "an",
		"Arabic": "ar",
		"Assamese": "as",
		"Avaric": "av",
		"Aymara": "ay",
		"Azerbaijani": "az",
		"Bashkir": "ba",
		"Belarusian": "be",
		"Bulgarian": "bg",
		"Bihari languages": "bh",
		"Bambara": "bm",
		"Bengali": "bn", 
		"Tibetan": "bo", 	
		"Breton": "br", 	
		"Bosnian": "bs", 	
		"Catalan; Valencian": "ca", 	
		"Chechen": "ce", 	
		"Chamorro": "ch", 
		"Corsican": "co", 	
		"Cree": "cr", 	
		"Czech": "cs", 	
		"Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic": "cu", 	
		"Chuvash": "cv", 	
		"Welsh": "cy", 	
		"Danish": "da", 	
		"German": "de", 	
		"Divehi; Dhivehi; Maldivian": "dv", 	
		"Dzongkha": "dz", 	
		"Ewe": "ee", 	
		"Greek, Modern (1453-)": "el", 	
		"English": "en", 	
		"Esperanto": "eo", 	
		"Spanish; Castilian": "es", 	
		"Estonian": "et", 	
		"Basque": "eu", 	
		"Persian": "fa", 	
		"Fulah": "ff", 
		"Finnish": "fi", 	
		"Fijian": "fj", 
		"Faroese": "fo", 	
		"French": "fr", 	
		"Western Frisian": "fy", 	
		"Irish": "ga", 	
		"Gaelic; Scottish Gaelic": "gd", 	
		"Galician": "gl", 	
		"Guarani": "gn", 	
		"Gujarati": "gu", 
		"Manx": "gv", 	
		"Hausa": "ha", 	
		"Hebrew": "he", 	
		"Hindi": "hi", 	
		"Hiri Motu": "ho", 
		"Croatian": "hr", 	
		
		"Haitian; Haitian Creole": "ht", 	
		"Hungarian": "hu", 
		"Armenian": "hy",	
		"Herero": "hz",	
		"Interlingua (International Auxiliary Language Association)": "ia",	
		"Indonesian": "id",	
		"Interlingue; Occidental": "ie", 	
		"Igbo": "ig", 	
		"Sichuan Yi; Nuosu": "ii",	
		"Inupiaq": "ik",	
		"Ido": "io",	
		"Icelandic": "is",	
		"Italian": "it", 	
		"Inuktitut": "iu",	
		"Japanese": "ja",	
		"Javanese": "jv",	
		"Georgian": "ka",	
		"Kongo": "kg",	
		"Kikuyu; Gikuyu": "ki", 	
		"Kuanyama; Kwanyama": "kj",	
		"Kazakh": "kk",	
		"Kalaallisut; Greenlandic": "kl",	
		"Central Khmer": "km",	
		"Kannada": "kn",	
		"Korean": "ko", 	
		"Kanuri": "kr",
		"Kashmiri": "ks",	
		"Kurdish": "ku",	
		"Komi": "kv",	
		"Cornish": "kw",	
		"Kirghiz; Kyrgyz": "ky", 	
		"Latin": "la", 
		"Luxembourgish; Letzeburgesch": "lb", 	
		"Ganda": "lg", 	
		"Limburgan; Limburger; Limburgish": "li",	
		"Lingala": "ln",	
		"Lao": "lo", 	
		"Lithuanian": "lt",	
		"Luba-Katanga": "lu",	
		"Latvian": "lv",	
		"Malagasy": "mg",	
		"Marshallese": "mh",	
		"Maori": "mi", 	
		"Macedonian": "mk",	
		"Malayalam": "ml",	
		"Mongolian": "mn",
		"Marathi": "mr",	
		"Malay": "ms",	
		"Maltese": "mt",	
		"Burmese": "my",	
		"Nauru": "na",	
		"Bokmål, Norwegian; Norwegian Bokmål": "nb",	
		"Ndebele, North; North Ndebele": "nd",	
		"Nepali": "ne",	
		"Ndonga": "ng", 	
		"Dutch; Flemish": "nl",
		"Norwegian Nynorsk; Nynorsk, Norwegian": "nn",	
		"Norwegian": "no",	
		"Ndebele, South; South Ndebele": "nr",	
		"Navajo; Navaho": "nv",	
		"Chichewa; Chewa; Nyanja": "ny", 
		"Occitan (post 1500)": "oc",	
		"Ojibwa": "oj",
		"Oromo": "om",	
		"Oriya": "or",	
		"Ossetian; Ossetic": "os",
		"Panjabi; Punjabi": "pa", 	
		"Pali": "pi",	
		"Polish": "pl",	
		"Pushto; Pashto": "ps",	
		"Portuguese": "pt",	
		"Quechua": "qu",	
		"Romansh": "rm",	
		"Rundi": "rn",	
		"Romanian; Moldavian; Moldovan": "ro",	
		"Russian": "ru",	
		"Kinyarwanda": "rw",	
		"Sanskrit": "sa",	
		"Sardinian": "sc", 
		"Sindhi": "sd",	
		"Northern Sami": "se",	
		"Sango": "sg",	
		"Sinhala; Sinhalese": "si",
		"Slovak": "sk",
		"Slovenian": "sl", 	
		"Samoan": "sm",
		"Shona": "sn",	
		"Somali": "so",
		"Albanian": "sq",	
		"Serbian": "sr",	
		"Swati": "ss	", 
		"Sotho, Southern": "st",	
		"Sundanese": "su",	
		"Swedish": "sv",	
		"Swahili": "sw",	
		"Tamil": "ta",	
		"Telugu": "te", 	
		"Tajik": "tg",	
		"Thai": "th",	
		"Tigrinya": "ti",	
		"Turkmen": "tk",	
		"Tagalog": "tl",	
		"Tswana": "tn", 	
		"Tonga (Tonga Islands)": "to",	
		"Turkish": "tr",	
		"Tsonga": "ts",
		"Tatar": "tt",	
		"Twi": "tw",	
		"Tahitian": "ty", 	
		"Uighur; Uyghur": "ug",
		"Ukrainian": "uk",	
		"Urdu": "ur",	
		"Uzbek": "uz",	
		"Venda": "ve",	
		"Vietnamese": "vi", 	
		"Volapük": "vo",	
		"Walloon": "wa",	
		"Wolof": "wo",	
		"Xhosa": "xh",	
		"Yiddish": "yi",	
		"Yoruba": "yo", 	
		"Zhuang; Chuang": "za",
		"Chinese": "zh",	
		"Zulu": "zu"	
	
	
	};	
	//var search1 = document.getElementById("search1").value;
	var langInput = document.getElementById("search1").value;
	
	if (langInput.length > 0 ) 
	{
		
		fetch('https://restcountries.eu/rest/v2/lang/' + internationalLangs[langInput])
		.then(response => response.json())
		.then(data => languageCountries(data)
		);
		
		document.getElementById("hintmsg").innerHTML = "Please scroll down to view the results displayed below";
		
		
		
	} else {
		emptySearchError();
	}
	
	
} //fetchLanguage


function fetchRandomCountry() 
{
	
	fetch('https://restcountries.eu/rest/v2/all')
	.then(response => response.json())
	.then(data => randomCountry(data)
);

	document.getElementById("hintmsg").innerHTML ="Please scroll down to view the results displayed below";
		
} //fetchRandomCountry

function fetchCapital() 
{
	
	document.getElementById("main").innerHTML = "";
	
	var search2 = document.getElementById("search2").value;
	
	if (search2.length > 0) 
	{
	
		fetch('https://restcountries.eu/rest/v2/capital/' + search2)
		.then(response => response.json())
		.then(data => countryCapital(data)
	);
	
	document.getElementById("hintmsg").innerHTML = "Please scroll down to view the results displayed below";
	
	} else {
		emptySearchError();
	}
	
} //fetchCapital

function fetchCode() 
{
	document.getElementById("main").innerHTML = "";
	
	var search3 = document.getElementById("searchcountrycodes").value;
	
	if (search3.length > 0) 
	{
	
		fetch('https://restcountries.eu/rest/v2/alpha/' + search3)
		.then(response => response.json())
		.then(data => countryByCode(data)
		);
		
		document.getElementById("hintmsg").innerHTML = "Please scroll down to view the results displayed below";
	
	} else {
		emptySearchError();
	}
	
}//fetchCode

function fetchBloc () 
{
	document.getElementById("main").innerHTML = "";
	
	var search4 = document.getElementById("searchbloc").value;
	
	if (search4.length > 0) 
	{
	
		fetch('https://restcountries.eu/rest/v2/regionalbloc/' + search4)
		.then(response => response.json())
		.then(data => countryByBloc(data)
		);
		
		document.getElementById("hintmsg").innerHTML = "Please scroll down to view the results displayed below";
		
	} else {
		emptySearchError();
	}
	
}//fetchBloc

function languageCountries(data) 
{
	
	if (data.status != 404)
	{
		
	//console.log(data);
	
	
	deleteChildren(mainDiv);
	
	updatePage(data);
		
	} else {
		
		document.getElementById("hintmsg").innerHTML = "Sorry, due to the lack of information in our database and/or your spelling mistakes, we cannot extract any information. Please try again";
		
		document.getElementById("main").innerHTML = "";
	}
	
	
	
} //languageCountries

function getRndInteger(min, max) 
{
	
	return Math.floor(Math.random() * (max - min + 1) ) + min;
	
}//getRndInteger

function randomCountry(data) 
{
	
	deleteChildren(mainDiv);
	
	updatePageForRandomCountries(data);
	
	
}//randomCountry

function updatePage(data) 
{
	
	if (data.status != 404)
	{
		
		deleteChildren(mainDiv);
		
		//console.log(data); // prints json in console
		
		mainDiv.appendChild(elemCountryList);
		
		var country; 
		
		for (country in data) 
		{
			createCountryInfo(data[country]);
		} // for
		
	
	deleteChildren(elemCountryList);	
		
	
	let array5 = data;
	let output = "<span id='listheading'><strong>List of Results: </strong></span> <br /><br />";
	
	
	for (let n = 0; n < array5.length; n++)
	{
		//console.log(array5[n].name);
		
		let name1 = array5[n].name 
		
	
		
		output += "<li><a class='listitem'" + "href=" + "#" + name1.replace(/ /g, "_") + ">" + array5[n].name + "</a></li>";
	
	}
	
		//document.getElementById("listitem").href = "#" + countryJSON.name;
	
		elemCountryList.innerHTML = output;
	
		elemCountryList.classList = "langresultlist";
	
		
	} else {
		
		document.getElementById("hintmsg").innerHTML = "Sorry, due to the lack of information in our database and/or your lack of ability to spell, we cannot extract any information. Please try again";
		
		document.getElementById("main").innerHTML = ""
	}
} // updatePage

function updatePageForAlphaCode(data) 
{

	deleteChildren(mainDiv);

	//console.log(data); // prints json in console
	
	createCountryInfo(data);


} // updatePage1

function updatePageForRandomCountries(data) 
{
	
	let randomNumber1 = getRndInteger(0,249);
	let randomNumber2 = getRndInteger(0,249);
	let randomNumber3 = getRndInteger(0,249);

	deleteChildren(mainDiv);

	//console.log(data); // prints json in console
	
	createCountryInfo(data[randomNumber1]);
	createCountryInfo(data[randomNumber2]);
	createCountryInfo(data[randomNumber3]);
	
	

} // updatePage1

function countryCapital(data) 
{
	
	if (data.status != 404) 
	{
		
	deleteChildren(mainDiv);
	
	//console.log(data);
	
	updatePage(data);
		
	} else {
		
		document.getElementById("hintmsg").innerHTML = "Sorry, due to your lack of ability to spell, we cannot extract any information. Please try again";
		
		document.getElementById("main").innerHTML = "";
		
	}
}

function countryByCode(data)
{
	
	deleteChildren(mainDiv);

	updatePageForAlphaCode(data);
	
}

function countryByBloc(data) 
{
	//console.log(data);
	
	updatePage(data);
	
}

function createCountryInfo (countryJSON) 
{
	
	//console.log(countryJSON);
		
	//hintMessage();

	// create divs for all the elements needed
	let elemCountry = document.createElement("div");
	let elemFlag = document.createElement("img");
	let elemName = document.createElement("div");
	let elemPopulation = document.createElement("div");
	let elemCapital = document.createElement("div");
	let elemAlphaCode = document.createElement("div");
	let elemLanguages = document.createElement("div");
	let elemCurrency = document.createElement("div");
	let elemRegion = document.createElement("div");
	let elemTimeZones = document.createElement("div");
	let elemTopLevelDomain = document.createElement("div");
	let elemGini = document.createElement("div");
	let elemCallingCode = document.createElement("div");
	let elemLiveTime = document.createElement("div");
	let elemNativeName = document.createElement("div");
	let elemPageAnchor = document.createElement("div");
	
	
	
	/*	
	let elemLink = document.createElement("a");
	elemLink.href = "https://en.wikipedia.org/wiki/" + countryJSON.name;
	elemLink.target = "_blank";
	elemLink.innerHTML = "More information";
	elemCountry.appendChild(elemLink);
	*/
	
	
	// give all divs a name for CSS
	
	elemCountry.classList = "countrywrapper";
	elemFlag.id = "flag";
	elemName.classList = "countryname"; 
	elemName.id = (countryJSON.name).replace(/ /g, "_");
	elemPopulation.id = "population";
	elemCapital.id = "capital";
	elemAlphaCode.id = "alphacode";
	elemLanguages.id = "languages";
	elemCurrency.id = "currencies";
	elemRegion.id = "region";
	elemTimeZones.id = "timezones";
	elemTopLevelDomain.id = "country domains";
	elemGini.id = "gini";
	elemCallingCode.id = "callingcode";
	
	//elemPageAnchor.id = countryJSON.name;
	
	
	// if statements for data
	
	if (countryJSON.name != undefined && countryJSON.name != "")
	{
		elemName.innerHTML = "<strong>" + countryJSON.name + "</strong><br />";
		
		
	} else {
		elemName.innerHTML = "";
	}
	
	if (countryJSON.flag != undefined && countryJSON.flag != "")
	{
		elemFlag.src = countryJSON.flag;
		elemFlag.alt = "nation flag"
		
	} else {
		elemFlag.style.display = "none";
	}	


	if (countryJSON.nativeName != undefined && countryJSON.name != "")
	{
		elemNativeName.innerHTML += "<strong>Country Native Name</strong>: " + countryJSON.nativeName;
	} else {
		elemNativeName.innerHTML = "";
	}
	
	if (countryJSON.population != undefined && countryJSON.population != "")
	{
		elemPopulation.innerHTML = "<strong>Population</strong>: " + countryJSON.population;
		
	} else {
		elemPopulation.innerHTML = "";
	}
	
	
	if (countryJSON.capital != undefined && countryJSON.capital != "")
	{
		elemCapital.innerHTML = "<strong>Capital City</strong>: " + countryJSON.capital;
		
	} else {
		elemCapital.innerHTML = "";
	}

	
	if (countryJSON.alpha2Code != undefined && countryJSON.alpha3Code != undefined)
	{
		elemAlphaCode.innerHTML = "<strong>Alpha Codes</strong>: " + countryJSON.alpha2Code + ", " + countryJSON.alpha3Code;
		
	} else {
		elemAlphaCode.innerHTML = "";
	}
	
	
	if (countryJSON.languages != undefined && countryJSON.languages != "")
	{
		let array = countryJSON.languages;
		let output = "<strong>Official Language(s)</strong>: <br />";
		
		for (let i = 0; i < array.length; i++) 
		{
			output += array[i].name + ", " + "<br />";
		}
		
		elemLanguages.innerHTML = output;
		
		
	} else {
		elemLanguages.innerHTML = "";
	}
	
	
	if (countryJSON.currencies != undefined && countryJSON.currencies != "")
	{
		let array1 = countryJSON.currencies;
		let output = "<strong>Official Currencies</strong>: ";
		
		for (let j = 0; j < array1.length; j++) 
		{
			output += array1[j].symbol + " ";
			output += array1[j].name + "<br />";
		}
		
		elemCurrency.innerHTML = output;
		
		
	} else {
		elemCurrency.innerHTML = "";
	}	
	
	
	if (countryJSON.region != undefined && countryJSON.subregion != undefined)
	{
		elemRegion.innerHTML = "<strong>Region</strong>: " + countryJSON.region + ", " + countryJSON.subregion;
		
	} else {
		elemRegion.innerHTML = "";
	}
	
	
	if (countryJSON.timezones != undefined && countryJSON.timezones != "")
	{
		let array2 = countryJSON.timezones;
		let output = "<strong>Timezone(s)</strong>: <br />";
		
		let k = 0;
		
		for (k = 0; k < array2.length; k++) 
		{
			output += array2[k] + ", " + "<br />";
		}
		
		elemTimeZones.innerHTML = output;
		
		
	} else {
		elemTimeZones.innerHTML = "";
	}
	
	
	if (countryJSON.topLevelDomain != undefined && countryJSON.topLevelDomain != "")
	{
		let array3 = countryJSON.topLevelDomain;
		let output = "<strong>Top Level Domain(s)</strong>: ";
		
		for (let l = 0; l < array3.length; l++) 
		{
			output += array3[l];
		}
		
		elemTopLevelDomain.innerHTML = output;
		
		
	} else {
		elemTopLevelDomain.innerHTML = "";
	}
	
	if (countryJSON.gini != undefined && countryJSON.gini != "")
	{
		elemGini.innerHTML = "<strong>Gini index</strong>: " + countryJSON.gini;
		
	} else {
		elemGini.innerHTML = "";
	}
	
	if (countryJSON.callingCodes != undefined && countryJSON.callingCodes != "")
	{
		let array4 = countryJSON.callingCodes;
		let output = "<strong>Calling Code(s)</strong>: ";
		
		for (let m = 0; m < array4.length; m++) 
		{
			output += array4[m] + "<br />";
		}
		
		elemCallingCode.innerHTML = output;
		
		
	} else {
		elemCallingCode.innerHTML = "";
	}
	
	// append everything to mainDiv
	
	
	
	mainDiv.appendChild(elemCountry);
	
	
	// append information to each countryDiv
	//elemCountry.appendChild(elemPageAnchor);
	elemCountry.appendChild(elemName);
	elemCountry.appendChild(elemFlag);
	elemCountry.appendChild(elemNativeName);
	elemCountry.appendChild(elemPopulation);
	elemCountry.appendChild(elemCapital);
	elemCountry.appendChild(elemAlphaCode);
	elemCountry.appendChild(elemLanguages);
	elemCountry.appendChild(elemCurrency);
	elemCountry.appendChild(elemRegion);
	elemCountry.appendChild(elemTimeZones);
	elemCountry.appendChild(elemTopLevelDomain);
	elemCountry.appendChild(elemGini);
	elemCountry.appendChild(elemCallingCode);
	elemCountry.appendChild(elemLiveTime);
	
	

} //createCountryInfo


function deleteChildren(e) 
{
	let child = e.lastElementChild;
	while (child) 
	{
		e.removeChild(child);
		child = e.lastElementChild;
	}
} //deleteChildren 


