var text = ('Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.');
var dinosaur = ('triceratops');
var dinosaurUpperCased = dinosaur.toUpperCase();
var textProper = text.replace('Velociraptor', dinosaurUpperCased);
var halfOftheSentence = textProper.length / 2;
var firstHalf = textProper.substr(0, halfOftheSentence);

console.log(firstHalf);
