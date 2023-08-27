 let sentences = document.getElementById("sentences").getElementsByTagName('h3')[0];
 let words = document.getElementById("words").getElementsByTagName('h3')[0];
 let characters = document.getElementById("characters").getElementsByTagName('h3')[0];
 

 function countSentences() {
    let text = document.getElementById("text").value;
    const re = /[.!?]/;
    const numOfSentences = text.split(re).filter(sentence => sentence !== '');
    sentences.innerHTML = numOfSentences.length - 1;
  };

  function countWords() {
     let text = document.getElementById("text").value;
     const arr = text.split(' ');
     let countOfWords =  arr.filter(word => word !== '').length;
     words.innerHTML = countOfWords;
    
  };

  function countCharacters() {
    let text = document.getElementById("text").value;
    // use / /g to remove all spaces from the string
    let countOfCharacters = text.trim().replace(/ /g, "").length;
    characters.innerHTML = countOfCharacters;

  };

 function getRandomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  
    document.body.style.background = bgColor;
    }

   
 