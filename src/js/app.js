let img = document.querySelector('img');
var score = 0;
var name;

var bhl         = require('/img/bhl.png'),
    mimi        = require('/img/mimimathy.png'),
    sarko       = require('/img/sarkozy.png'),
    marinelepen = require('/img/marinelepen.png'),
    melenchon   = require('/img/melenchon.png'),
    macron      = require('/img/macron.png'),
    bigard      = require('/img/bigard.jpg'),
    booba       = require('/img/booba.jpg'),
    brucewillis = require('/img/brucewillis.jpg'),
    diams       = require('/img/diams.jpg'),
    kaaris      = require('/img/kaaris.jpg'),
    mbappe      = require('/img/mbappe.jpg'),
    cage        = require('/img/nicolascage.jpg'),
    sy          = require('/img/omarsy.jpg'),
    passe       = require('/img/passepartout.jpg'),
    sebastien   = require('/img/patricksebastien.jpg'),
    ramimalek   = require('/img/ramimalek.jpg'),
    trump       = require('/img/trump.jpg'),
    zidane      = require('/img/zidane.jpg');

let imgs = [{
  src: bhl,
  name: 'Bernard Henri Lévy',
},
{
  src: mimi,
  name: 'Mimi Mathy'
},
{
  src: sarko,
  name: 'Nicolas Sarkozy'
},
{
  src: marinelepen,
  name: 'marine le pen'
},
{
  src: melenchon,
  name: 'Jean Luc Melenchon'
},
{
  src: macron,
  name: 'Emmanuel Macron'
},
{
  src: bigard,
  name: 'Bigard'
},
{
  src: booba,
  name: 'booba'
},
{
  src: brucewillis,
  name: 'bruce willis'
},
{
  src: diams,
  name: 'diam\'s'
},
{
  src: kaaris,
  name: 'kaaris'
},
{
  src: mbappe,
  name: 'M\'bappé'
},
{
  src: cage,
  name: 'nicolas cage'
},
{
  src: sy,
  name: 'omar sy'
},
{
  src: passe,
  name: 'passe partout'
},
{
  src: sebastien,
  name: 'patrick sebastien'
},
{
  src: ramimalek,
  name: 'rami malek'
},
{
  src: trump,
  name: 'donald trump'
},
{
  src: zidane,
  name: 'zinedine zidane'
},

];

randomize();

document.querySelector('input').addEventListener('keydown', function(e) {
  if(e.keyCode == 13) {
    if (!this.value.localeCompare(name, undefined, {sensitivity: 'base'})) {
      this.setCustomValidity('');
      greenBorder();
      setTimeout(function(){resetBorder()}, 700);
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
  document.querySelector('input').classList.remove('invalid');
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