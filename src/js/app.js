let img        = document.querySelector('img'),
    input      = document.querySelector('input'),
    skipButton = document.querySelector('.skipButton'),
    svgLight    = '⚡';
var score = 0,
    skip  = 2, 
    random;
var name;

let imgs = [{
  src: 'img/bhl.png',
  names: ['Bernard Henri Lévy', 'bhl', 'Bernard-Henri Lévy'],
  category : 'Politique'
},
{
  src: 'img/mimimathy.png',
  names: ['Mimi Mathy'],
  category: 'Cinéma (français)'
},
{
  src: 'img/sarkozy.png',
  names: ['Nicolas Sarkozy', 'Sarkozy'],
  category: 'Politique'
},
{
  src: 'img/marinelepen.png',
  names: ['marine le pen', 'le pen'],
  category: 'Politique'
},
{
  src: 'img/melenchon.png',
  names: ['Jean Luc Melenchon', 'melenchon', 'jean-luc melenchon'],
  category: 'Politique'
},
{
  src: 'img/macron.png',
  names: ['Emmanuel Macron', 'macron'],
  category: 'Politique'
},
{
  src: 'img/bigard.jpg',
  names: ['Bigard', 'jean-marie bigard', 'jean marie bigard'],
  category: 'humour'
},
{
  src: 'img/booba.jpg',
  names: ['booba'],
  category: 'rap (français)'
},
{
  src: 'img/brucewillis.jpg',
  names: ['bruce willis'],
  category: 'cinéma (us)'
},
{
  src: 'img/diams.jpg',
  names: ['diam\'s', 'diams'],
  category: 'rap (français)'
},
{
  src: 'img/kaaris.jpg',
  names: ['kaaris'],
  category: 'rap (français)'
},
{
  src: 'img/mbappe.jpg',
  names: ['M\'bappé', 'mbappe', 'kylian mbappe'],
  category: 'sport'
},
{
  src: 'img/nicolascage.jpg',
  names: ['nicolas cage'],
  category: 'cinéma (us)'
},
{
  src: 'img/omarsy.jpg',
  names: ['omar sy'],
  category: 'cinéma (français)'
},
{
  src: 'img/passepartout.jpg',
  names: ['passe partout', 'passe-partout'],
  category: 'télévision (français)'
},
{
  src: 'img/patricksebastien.jpg',
  names: ['patrick sebastien'],
  category: 'télévision (français)'
},
{
  src: 'img/ramimalek.jpg',
  names: ['rami malek'],
  category: 'cinéma (us)'
},
{
  src: 'img/trump.jpg',
  names: ['donald trump', 'trump'],
  category: 'politique'
},
{
  src: 'img/zidane.jpg',
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
    skipCharacter();
  } 
})

function init() {
  randomize();
  skipButton.innerHTML = svgLight + " Passer " + skip + "/2";
}

function skipCharacter() {
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