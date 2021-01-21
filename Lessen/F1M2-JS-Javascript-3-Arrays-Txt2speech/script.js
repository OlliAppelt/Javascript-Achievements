    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        /* hier komt jouw code */
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let index = randomizer(arrayLength);
        let woord1 = onderwerp[index];
        let woord2 = werkwoord[index];
        let woord3 = restwoord[index];
        let woord4 = extrawoord[index];
        let woord5 = extrawoord2[index];

        let outputString = woord1 + " " + woord2 + " " + woord3 + " " + woord4  + " " + woord5;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["Olli", "Anna", "Kilian"];
    const werkwoord = ["wants", "needs", "likes"];
    const restwoord = ["coffee", "beer", "music"];
    const extrawoord = ["with", "around", "behind"]
    const extrawoord2 = ["friends", "family", "some people"]
    let plaatjes = ["https://rammwiki.net/w/images/7/72/Essentials.jpg", "https://vignette.wikia.nocookie.net/rock-metal/images/d/d4/Rammstein%2C_LiebeFurAlleLuxe.jpg/revision/latest/top-crop/width/300/height/300?cb=20180816061405&path-prefix=nl", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkD_kHxH_AoY3JnzJiUsUvCOdUgHRNNQO8eQ&usqp=CAU", "https://cdn.apocanow.it/beatgogo/uploads/al/10195.jpg"]
    let arrayLength = onderwerp.length;
