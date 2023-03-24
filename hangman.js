const CODE_HIT = 0;              // Return code if the letter matches
  const CODE_MISS = -1;            // Return code if the letter does not match
  const CODE_NA = -2;              // Return code if the letter is not available
  
  
  var selectableWords =            // list of objects and their attributes
    [
      { word: "COBOL", hint: "Common Business Oriented Language" },
      { word: "Fortran", hint: "Mathematical programming language" },
      { word: "Knuth", hint: "Father of Computer Science" },
      { word: "Turing", hint: "Machine that has nothing but a stack and a tape" },
      { word: "disease", hint: "JavaScript is a __________." },
      { word: "algorithm", hint: "Detailed and precisely defined set of steps needed to complete a task." },
      { word: "repetition", hint: "________ is also known as looping." },
      { word: "selection", hint: "________ is also known as the if structure." },
      { word: "Linus", hint: "_________ Torvalds." },
      { word: "linker", hint: "Generates an executable file." },
      { word: "interpreter", hint: "Executes the code as it is being read." },
      { word: "BASIC", hint: "Beginners app-purpose symbolic instruction code." },
      { word: "ENIAC", hint: "First electronic general purpose computer." },
      { word: "exclusive", hint: "AB' + A'B is what kind of OR?" },
      { word: "Java", hint: "A programming language that was originally intended to be named Oak." },
      { word: "Python", hint: "Programming language named after a British comedian." },
      { word: "embedded", hint: "Microcontrollers are typically used in the __________ systems." },
      { word: "register", hint: "Fastest storage for temporary results, usually within a CPU." },
      { word: "logarithmic", hint: "If a constant time cannot be achieved, the next most desired time is ________________." },
      { word: "stack", hint: "Operates on LIFO principle." }
    ];
  var imagesList = [
    "Images\\Hangman00.jpg", "Images\\Hangman01.jpg", "Images\\Hangman02.jpg", 
    "Images\\Hangman03.jpg", "Images\\Hangman04.jpg", "Images\\Hangman05.jpg", 
    "Images\\Hangman06.jpg", "Images\\Hangman07.jpg", "Images\\Hangman08.jpg",
    "Images\\Hangman09.jpg"
    ];
  
  document.addEventListener('keydown', function(event){

    keyPressHandler(event);
  })
  
  function keyPressHandler(event){
    var wins = 0;
    var chosenWord = 0;
    document.getElementById("totalWins").innerHTML = wins;
    var currentWordstring;
    //var currentWordchars = [15];
    //the array containing the characters of the random word selected
    var tries = 10;
    //the number of tries left decreases and shows a picture when wrong. This is displayed by using the 
    //remainingguesses class in css to display in the html
    document.getElementById("remainingGuesses").innerHTML = tries;
    var usedLetters = ['k'];
    //the array of the letters guessed represented by key value
    var imageNum = 0;
    //tracker for the image shown
    var chosenLetter;


    if (event.keyCode == 32) {
      //needs to be keyCode as charCode is not supported with Chrome.
      document.getElementById("totalWins").innerHTML = wins;
      //this checks if the event, the key press, is a space(value 32)
      chosenWord = bodyOnLoadHandler();
      currentWordstring = JSON.stringify(selectableWords[chosenWord].word);  
      var currentWordchars = [currentWordstring.length];
      for(var y = 0; y < currentWordstring.length(); y++){
          currentWordchars[y] = currentWordstring.charAt(y);
      }
      //now the current word should be a char array instead of a string
    }

    else if (event.charCode != 32){ //if any other key is pressed
      chosenLetter = String.fromCharCode(event.charCode);
      document.getElementById("guessedLetters").innerHTML = currentWordchars.length;
      //line above is a test to see if the currentWordschar actually has a value
      for(var p = 0; p < currentWordchars.length; p++){
        if(chosenLetter == currentWordchars[p]){
          /* If the letter is in the word, pop that letter form the currentword array.
          When that array is empty, the game is won. 
          */
         currentWordchars.pop(chosenLetter.charAt[0]);//not updating properly
        }

        else{
          tries--;
          imageNum++;
          usedLetters.push(chosenLetter.charAt[0]);//not updating properly
          document.getElementById("guessedLetters").innerHTML = JSON.stringify(usedLetters);
          document.getElementById("HangmanImage").innerHTML = imagesList[imageNum];
        }
    }
      //we need a way to convert the charCode to a char so we can see if it's in a word
    }

      if(currentWordschars.length == 0){
        wins++;
        document.getElementById("currentWord").innerHTML = "Congrats! You wins! Press space to play again.";
      }
      else if(tries == 0){
        document.getElementById("currentWord").innerHTML = "Oops, you lose... Press space to play again.";
      }
  }

  function bodyOnLoadHandler(){
    document.addEventListener('keydown', keyPressHandler);
    //this will load the images
    var chosenWord = Math.floor(Math.random() * 21);
    document.getElementById("currentWord").innerHTML = JSON.stringify(selectableWords[chosenWord].hint);
    //randomly choose a hint and display it. Take the word of that same index and store it elsewhere


    //looks at the array of words and randomly chooses one. That randomly picked word is put in a new array.
    //immediatly after the chosen word is deleted from the word array/list so it is not picked again.
    //when the new array is empty fill it up again

    return(chosenWord);
//must return the random variable found so the other function knows what word we are looking at
  }