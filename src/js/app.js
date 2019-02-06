let img = document.querySelector('img');
var score = 0;
var name;

var bhl = require('/img/bhl.png');
var mimi = require('/img/mimimathy.png');
var sarko = require('/img/sarkozy.png');

let imgs = [{
  src: bhl,
  name: 'Bernard-Henri Lévy',
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
      greenBorder();
      setTimeout(function(){resetBorder()}, 800);
      updateScore();
      this.value = '';
      randomize();
    } else {
      redBorder();
      setTimeout(function(){resetBorder()}, 800);
      this.setCustomValidity("Invalid field.");
    }
  }
})

function updateScore() {
  score++;
  document.querySelector('h1').innerHTML = 'Score: ' + score;
}

function redBorder() {
  document.querySelector('input').style.borderColor = "#e74c3c";
  document.querySelector('input').classList.add('invalid');
}

function greenBorder() {
  document.querySelector('input').style.borderColor = "#2ecc71";
}

function resetBorder() {
  document.querySelector('input').style.borderColor = "#34495e";
  document.querySelector('input').className = "";
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