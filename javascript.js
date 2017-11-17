//Functions

var numQuotes = 1; 
var mixedNum = 5;

function setNumQuotesTo1() {
    numQuotes = 1;
}


function setNumQuotesTo2() {
    numQuotes = 2;
}

function setNumQuotesTo3() {
    numQuotes = 3;
}

function setNumQuotesTo4() {
    numQuotes = 4;
}

function setNumQuotesTo5() {
    numQuotes = 5;
}


function genQuote() {
  var randNumStart = 0;
  var randNumMiddle = 0;
  var randNumEnd = 0;
  var currElementID = "";
  for (i = 0; i < mixedNum; i++) {
    if (i < numQuotes) {
      document.getElementById('quote'+ (i + 1)).style.display="block";
	  currElementID = "quote" + (i + 1); 
	  randNumStart = Math.floor(Math.random() * 14) +1;
	  randNumMiddle = Math.floor(Math.random() * 14) +1;
	  randNumEnd = Math.floor(Math.random() * 14) +1;
	  document.getElementById('quote'+ (i + 1)).innerHTML = start[randNumStart] + middle[randNumMiddle] + end[randNumEnd];
  }
    else {
      document.getElementById('quote'+ (i + 1)).style.display="none";
	}}
}

function genOne() {
  var randNumStart = 0;
  var randNumMiddle = 0;
  var randNumEnd = 0;
  var randNumWhen =  0;
  var currElementID = "";
  for (i = 0; i < mixedNum; i++) {
    if (i < numQuotes) {
      document.getElementById('quote'+ (i + 1)).style.display="block";
    currElementID = "quote" + (i + 1); 
    randNumStart = Math.floor(Math.random() * 14) +1;
    randNumMiddle = Math.floor(Math.random() * 14) +1;
    randNumEnd = Math.floor(Math.random() * 14) +1;
    randNumWhen =  Math.floor(Math.random() * 14) +1;
    document.getElementById('quote'+ (i + 1)).innerHTML = start[randNumStart] + middle[randNumMiddle] + end[randNumEnd] + when[randNumWhen];
}
    else {
      document.getElementById('quote'+ (i + 1)).style.display="none";
  }}
}

function genTwo() {
  var randNumStart = 0;
  var randNumMiddle = 0;
  var randNumEnd = 0;
  var randNumWhere =  0;
  var currElementID = "";
  for (i = 0; i < mixedNum; i++) {
    if (i < numQuotes) {
      document.getElementById('quote'+ (i + 1)).style.display="block";
    currElementID = "quote" + (i + 1); 
    randNumStart = Math.floor(Math.random() * 14) +1;
    randNumMiddle = Math.floor(Math.random() * 14) +1;
    randNumEnd = Math.floor(Math.random() * 14) +1;
    randNumWhere =  Math.floor(Math.random() * 14) +1;
    document.getElementById('quote'+ (i + 1)).innerHTML = start[randNumStart] + middle[randNumMiddle] + end[randNumEnd] + where[randNumWhere];
}
    else {
      document.getElementById('quote'+ (i + 1)).style.display="none";
  }} 
}

function genAll() {
  var randNumStart = 0;
  var randNumMiddle = 0;
  var randNumEnd = 0;
  var randNumWhere =  0;
  var randNumWhen =  0;
  var currElementID = "";
  for (i = 0; i < mixedNum; i++) {
    if (i < numQuotes) {
      document.getElementById('quote'+ (i + 1)).style.display="block";
    currElementID = "quote" + (i + 1); 
    randNumStart = Math.floor(Math.random() * 14) +1;
    randNumMiddle = Math.floor(Math.random() * 14) +1;
    randNumEnd = Math.floor(Math.random() * 14) +1;
    randNumWhen =  Math.floor(Math.random() * 14) +1;
    randNumWhere =  Math.floor(Math.random() * 14) +1;
    document.getElementById('quote'+ (i + 1)).innerHTML = start[randNumStart] + middle[randNumMiddle] + end[randNumEnd] + when[randNumWhen] + where[randNumWhen];
  } 
    else {
      document.getElementById('quote'+ (i + 1)).style.display="none";
  }} 
}

function genJohn() {
  var randNumJohn = Math.floor(Math.random() * 9) +1;	
  document.getElementById('normal').innerHTML = john[randNumJohn];
}
 
function genFrida() {
  var randNumFrida = Math.floor(Math.random() * 9) +1;	
  document.getElementById('normal').innerHTML = frida[randNumFrida];
}

function closeWindow() {window.close();}


	//Variables and quote arrays

var start = ["The old man", "The crazy dog", "The pretty lady", "The tiny artist", "The huge puppet", 
"The weird copy of Mickey Mouse", "The crying husband", "The screaming child", "The giant cartoon", "The hairy human", 
"The black shadow", "The cute kitty", "The crazy old lady", "The popular teenager", "The cute singer",];

var middle = [" walks ", " believes in ", " will try to knit ", " flies over ", " would like to tickle ", 
" can bake ", " claps euphorically about ", " times carefully the speed of ", " knows the truth about ", " wants to eat ",
" smiles at ", " sang loudly for ", " hugged for hours a ", " looked carefully at ", " ran around with ",];

var end = ["a dirty knife", "a beautiful kitty", "a small tree", "a helpless whale", "a gigantic dog", 
"a gassy little boy", "a strange cientist", "a neverending snake", "a mysterious 100 year old man", "a crazy penguin",
"a pocket-size bird", "a famous woman", "a very big ant", "a weird-looking cucumber", "an apple-tasting dessert",];

var where = [" in a creepy house in Singapore", " in a warm forest in Tokyo", " in a tall building in Ankara", " in a puddle in Istanbul", " in a party in Yangon", 
" in a rocky mountain in Kinshasha", " in Disney in Paris", " in a water park in Alexandria", " in a beach in Vargas", " in the North Pole",
" in a pizza restaurant in Antwerpen", " in a desserted parking-lot in New York ", " in a freezer in Barcelona", " in a dry river in Venezia", " in the empty streets of Madrid",]

var when = [" in the XVIII century", " during WW2", " in the 50s", " in 1997", " in the Olympics of 1992", 
" in New Year's Eve", " during a wedding", " on your birthday", " during birth", " during the apocalypsis",
" in the 1600s", " during colonialism ", " during a riot", " during a proposal", " during a funeral",]

var john = ["'My thoughts are stars I cannot fathom into constellations.'", "'You don't get to choose if you get hurt in this world...but you do have some say in who hurts you. I like my choices.'", "'The only way out of the labyrinth of suffering is to forgive.'", "'Thomas Edison's last words were -It's very beautiful over there-. I don't know where there is, but I believe it's somewhere, and I hope it's beautiful.'", "'I was drizzle and she was a hurricane.'", 
"'What is the point of being alive if you don't at least try to do something remarkable?'", "'Grief does not change you. It reveals you.'", "'It is so hard to leave—until you leave. And then it is the easiest goddamned thing in the world.'", "'I'm not saying that everything is survivable. Just that everything except the last thing is'", "'The town was paper, but the memories were not.'",];

var frida = ["'At the end of the day, we can endure much more than we think we can.'", "'Feet, what do I need them for; if I have wings to fly.'", "'Nothing is absolute. Everything changes, everything moves, everything revolves, everything flies and goes away.'", "'I think that little by little I'll be able to solve my problems and survive.'", "'I paint my own reality.'", 
"'There is nothing more precious than laughter'", "'I am that clumsy human, always loving'", "'I am my own muse. I am the subject I know best. The subject I want to better.'", "'Your word travels the entirety of space and reaches my cells which are my stars.'", "' There have been two great accidents in my life. One was the trolley, and the other was Diego. Diego was by far the worst.'",];

	


