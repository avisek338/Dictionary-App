
var def = document.getElementById('definition');
var pos = document.getElementById('part-of-speech');
var syn = document.getElementById('synonyms');
var aud = document.getElementById('audio');
var batton = document.getElementById('bat');
var inpt = document.getElementById('inp');
var playAudio = document.getElementById('playAudio');
var audioUrl ;
var word ;

  
batton.addEventListener('click', function() {
 word = inp.value;
  dictionary(word);
});  
function dictionary(word){
var url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word;
fetch(url)
.then(function(response){
  return response.json();
})
.then(function(data){
  
     const entry = data[0];
    const definition = entry.meanings[0].definitions[0].definition;
       audioUrl = entry.phonetics[0].audio;
    const synonyms = entry.meanings[0].synonyms[0];
    const partOfspeech = entry.meanings[0].partOfSpeech;
   
     def.innerHTML = definition;
     pos.innerHTML = partOfspeech;  
     syn.innerHTML = synonyms;
     playAudio.addEventListener('click', function() {
     var audio = new Audio(audioUrl);
      audio.play();
    });

  
    console.log(partOfspeech);
    console.log('Definition:', definition);
    console.log('Audio:', audioUrl);
    console.log('Synonyms:', synonyms);
});
}
 



