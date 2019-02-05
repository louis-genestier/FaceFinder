let img = document.querySelector('img');
var score = 0;
var name;

var bhl = require('/img/bhl.png');
var mimi = require('/img/mimimathy.png');
var sarko = require('/img/sarkozy.png');

let imgs = [{
  src: bhl,
  name: ['Bernard-Henri Lévy', ]
},
{
  src: mimi,
  name: 'Mimi Mathy'
},
{
  src: sarko,
  name: 'Nicolas Sarkozy'
}
];

randomize();

document.querySelector('input').addEventListener('keydown', function(e) {
  if(e.keyCode == 13) {
    if (!this.value.localeCompare(name, undefined, {sensitivity: 'base'})) {
      this.setCustomValidity('');
      updateScore();
      this.value = '';
      randomize();
    } else {
      this.setCustomValidity("Invalid field.");
    }
  }
})

function updateScore() {
  score++;
  document.querySelector('h2').innerHTML = 'Score: ' + score;
}

function randomize() {
  var max = imgs.length;
  var random = Math.floor(Math.random() * Math.floor(max));
  if (name == imgs[random].name) {
    randomize();
  } else {
    img.setAttribute("src", imgs[random].src);
    name = imgs[random].name;
  } 
}