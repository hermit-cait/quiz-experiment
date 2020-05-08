// Declaring variables

const nameElement = document.querySelector('.name-element');
const enterName = document.querySelector('.enter-name');
const nameField = document.querySelector('.firstName');

const countryElement = document.querySelector('.country-element');
const enterCountry = document.querySelector('.enter-country');
const countryField = document.querySelector('.country');

const colourElement = document.querySelector('.colour-element');
const selectColour = document.querySelector('.colour');

const wordElement = document.querySelector('.word-element');
const enterWord = document.querySelector('.enter-word');
const wordField = document.querySelector('.word');

const feelingElement = document.querySelector('.feeling-element');
const selectFeeling = document.querySelector('.feeling');

const enjoyElement = document.querySelector('.enjoy-element');
const selectEnjoy = document.querySelector('.enjoy');

const meme = document.querySelector('.meme');

// Hiding all elements except for the first question

countryElement.style.display = 'none';
colourElement.style.display = 'none';
wordElement.style.display = 'none';
feelingElement.style.display = 'none';
enjoyElement.style.display = 'none';
//nameElement.style.display = 'none';
meme.style.display = 'none';

// Functions which control the case formatting of input values

const capitalise = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

const lowerise = (word) => {
  return word.toLowerCase();
}

nameField.focus();

// Handling treatment of NAME input when clicked and also when Enter key is pressed

enterName.addEventListener('click', nameTimer);

nameField.addEventListener("keypress", function(enterName) {
  if (enterName.keyCode === 13) {
    document.getElementById("enter-name").click();
  }
});

// Timer which sets a delay on the output based on the NAME data provided

function nameTimer() {
  nameElement.style.display = 'none';
  setTimeout(respondName, 1000);
  setTimeout(displayCountry, 2000);
}

// Function which generates a response based on the NAME data provided

function respondName() {
  let nameResponse = document.createElement('p');
  nameResponse.textContent = `It's a pleasure to meet you,
  ${capitalise(firstName.value)}. Welcome to my little app experiment.`;
  nameElement.after(nameResponse);
  }

function displayCountry() {
  countryElement.style.display = 'block';
  countryField.focus();
}

// Handling treatment of COUNTRY input when clicked and also when Enter key is pressed

enterCountry.addEventListener('click', countryTimer);

countryField.addEventListener("keypress", function(enterCountry) {
  if (enterCountry.keyCode === 13) {
    document.getElementById("enter-country").click();
  }
});

// Timer which sets a delay on the output based on the COUNTRY data provided

function countryTimer() {
  countryElement.style.display = 'none';
  setTimeout(respondCountry, 1000);
  setTimeout(displayColour, 2000);
}

// Function which generates a response based on the COUNTRY data provided

function respondCountry() {
  let countryResponse = document.createElement('p');
  countryResponse.textContent = `Ah! I've always wanted to visit ${capitalise(country.value)}. It's a very beautiful country.`;
  countryElement.after(countryResponse);
}

function displayColour() {
  colourElement.style.display = 'block';
  selectColour.focus();
}

// Handling treatment of COLOUR input

selectColour.addEventListener('input', colourTimer);

// Timer which sets a delay on the output based on the COLOUR data provided

function colourTimer() {
  colourElement.style.display = 'none';
  setTimeout(colourChange, 1000);
  setTimeout(reactColour, 2000);
  setTimeout(displayWord, 3000);
}

// Function which changes the background colour based on the COLOUR data provided

function colourChange() {
  if (colour.value === "blue") {
    document.body.style.backgroundColor = "#9fd3fb";
  }
  else if (colour.value === "green") {
    document.body.style.backgroundColor = "#72c34f";
  }
  else if (colour.value === "orange") {
    document.body.style.backgroundColor = "#ff9347";
  }
  else if (colour.value === "pink") {
    document.body.style.backgroundColor = "#fb9fb4";
  }
  else {
    document.body.style.backgroundColor = "#ff4b4b";
  }
}

// Function which generates a response based on the COLOUR data provided

function reactColour() {
  let colourText = document.createElement('p');
  colourText.textContent = `${capitalise(colour.value)}, you say? There you go.`;
  wordElement.before(colourText);
  colourElement.style.display = 'none';
};

function displayWord() {
  wordElement.style.display = 'block';
  wordField.focus();
}

// Handling treatment of WORD input when clicked and also when Enter key is pressed

enterWord.addEventListener('click', wordTimer);

wordField.addEventListener("keypress", function(enterWord) {
  if (enterWord.keyCode === 13) {
    document.getElementById("enter-word").click();
  }
});

// Timer which sets a delay on the output based on the WORD data provided

function wordTimer() {
  wordElement.style.display = 'none';
  setTimeout(respondWord, 1000);
  setTimeout(displayFeeling, 2000);
}

// Function which generates a response based on the WORD data provided

function respondWord() {
  let wordResponse = document.createElement('p');
  let capitalWord = capitalise(word.value);
  let lowerWord = lowerise(word.value);
  wordResponse.textContent = `${capitalWord}... Hmmm, that does have a nice
  ring to it, now that I think about it. ${capitalWord}, ${lowerWord},
  ${lowerWord}. I like that.`;
  feelingElement.before(wordResponse);
}

function displayFeeling() {
  feelingElement.style.display = 'block';
  selectFeeling.focus();
}

// Handling treatment of FEELING input

selectFeeling.addEventListener('input', feelingTimer);

// Timer which sets a delay on the output based on the FEELING data provided

function feelingTimer() {
  feelingElement.style.display = 'none';
  setTimeout(respondFeeling, 1000);
  setTimeout(displayEnjoy, 2000);
}

// Function which generates a response based on the FEELING data provided

function respondFeeling() {
  let feelingResponse = document.createElement('p');
  function howYouFeel() {
    if (feeling.value === 'happy') {
      let happy = `You being happy makes me happy! Spread the love!`;
      return happy;
    }
    else if (feeling.value === 'sad') {
      let sad = `I'm sorry to hear that, ${capitalise(firstName.value)}. I truly hope you
      feel better soon.`;
      return sad;
    }
    else if (feeling.value === 'bored') {
      let bored = `That sucks. Maybe you could watch a movie or go for a
      swim. For what it's worth: here's a funny meme for you.`;
      meme.style.display = 'block';
      return bored;
    } else {
      let tired = `Perhaps you should have a nap, don't you think? Sleep is
      very important.`;
      return tired;
    }
  }
  let howYouFeelResponse = howYouFeel();
  feelingResponse.textContent = howYouFeelResponse;
  meme.before(feelingResponse);
  enjoyElement.style.display = 'block';
  feelingElement.style.display = 'none';
  selectEnjoy.focus();
}

function displayEnjoy() {
  enjoyElement.style.display = 'block';
  selectEnjoy.focus();
}

// Handling treatment of ENJOYMENT input

selectEnjoy.addEventListener('input', enjoyTimer);

// Timer which sets a delay on the output based on the ENJOYMENT data provided

function enjoyTimer() {
  enjoyElement.style.display = 'none';
  setTimeout(respondEnjoy, 1000);
}

// Function which generates a response based on the ENJOYMENT data provided

function respondEnjoy() {
  let enjoyResponse = document.createElement('p');
    function enjoyment() {
    if (enjoy.value === 'yes') {
      let yes = `That's wonderful. I'm very glad to hear that. Thank you for the positive feedback.`;
      return yes;
    } else {
      let no = `Well fuck you too.`;
      return no;
    };
  }
  let yesOrNo = enjoyment();
  enjoyResponse.textContent = yesOrNo;
  enjoyElement.after(enjoyResponse);
};
