let img        = document.querySelector('img'),
    input      = document.querySelector('input'),
    skipButton = document.querySelector('.skipButton'),
    svgLight    = '⚡';
var score = 0,
    skip  = 2, 
    random;
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
  names: ['Bernard Henri Lévy', 'bhl', 'Bernard-Henri Lévy'],
  category : 'Politique'
},
{
  src: mimi,
  names: ['Mimi Mathy'],
  category: 'Cinéma (français)'
},
{
  src: sarko,
  names: ['Nicolas Sarkozy', 'Sarkozy'],
  category: 'Politique'
},
{
  src: marinelepen,
  names: ['marine le pen', 'le pen'],
  category: 'Politique'
},
{
  src: melenchon,
  names: ['Jean Luc Melenchon', 'melenchon', 'jean-luc melenchon'],
  category: 'Politique'
},
{
  src: macron,
  names: ['Emmanuel Macron', 'macron'],
  category: 'Politique'
},
{
  src: bigard,
  names: ['Bigard', 'jean-marie bigard', 'jean marie bigard'],
  category: 'humour'
},
{
  src: booba,
  names: ['booba'],
  category: 'rap (français)'
},
{
  src: brucewillis,
  names: ['bruce willis'],
  category: 'cinéma (us)'
},
{
  src: diams,
  names: ['diam\'s', 'diams'],
  category: 'rap (français)'
},
{
  src: kaaris,
  names: ['kaaris'],
  category: 'rap (français)'
},
{
  src: mbappe,
  names: ['M\'bappé', 'mbappe', 'kylian mbappe'],
  category: 'sport'
},
{
  src: cage,
  names: ['nicolas cage'],
  category: 'cinéma (us)'
},
{
  src: sy,
  names: ['omar sy'],
  category: 'cinéma (français)'
},
{
  src: passe,
  names: ['passe partout', 'passe-partout'],
  category: 'télévision (français)'
},
{
  src: sebastien,
  names: ['patrick sebastien'],
  category: 'télévision (français)'
},
{
  src: ramimalek,
  names: ['rami malek'],
  category: 'cinéma (us)'
},
{
  src: trump,
  names: ['donald trump', 'trump'],
  category: 'politique'
},
{
  src: zidane,
  names: ['zinedine zidane', 'zidane'],
  category: 'sport'
},

];

init();

input.addEventListener('keydown', function(e) {
  if(e.keyCode == 13) {
    var found = false;
    imgs[random].names.forEach(name => {
      if(this.value.localeCompare(name, undefined, {sensitivity: 'base'}) === 0) {
        validAnswer();
        found = true;
      }
    })
    if(!found) {
      invalidAnswer();
    }
  }
})

skipButton.addEventListener('click', function() {
  if(skip > 0) {
    skip--;
    randomize();
    skipButton.innerHTML = svgLight + " Passer " + skip + "/2";
    if(skip == 0) {
      skipButton.style.border = "0";
      skipButton.style.background = "#34495e";
      skipButton.style.color = "#ecf0f1";
      skipButton.style.cursor = "not-allowed";
    }
  } 
})

function init() {
  randomize();
  skipButton.innerHTML = svgLight + " Passer " + skip + "/2";
}

function skip() {
  skip--;
  randomize();
}

function invalidAnswer() {
  redBorder();
  setTimeout(function(){resetBorder()}, 800);
}

function validAnswer() {
  greenBorder();
  setTimeout(function(){resetBorder()}, 700);
  updateScore();
  input.value = '';
  randomize();
}

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
  random = Math.floor(Math.random() * Math.floor(max));
  if(name == imgs[random].names[0]) {
    randomize();
  } else {
    img.setAttribute("src", imgs[random].src);
    name = imgs[random].names[0];
    document.querySelector('.category').innerHTML = imgs[random].category;
  }
}