(function () {

var names = ["Yaakov", "john", "jen", "jason", "Paul", "Frank", "Larry", "Paula", "Laura", "jim"];
for (var i = 0; i < names.length; i++){
 var firstLetter = names[i].toLowerCase().charAt(0);

  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();