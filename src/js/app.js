let img = document.querySelector('img');
let path = './img/';
var score = 0;

let imgs = [{
  src: 'bhl.png',
  name: 'Bernard-Henri Lévy'
},
{
  src: 'mimimathy.png',
  name: 'Mimi Mathy'
},
{
  src: 'sarkozy.png',
  name: 'Nicolas Sarkozy'
}
];

document.querySelector('button').addEventListener('click', function() {
  randomize();
})

function randomize() {
  var max = imgs.length;
  var random = Math.floor(Math.random() * Math.floor(max));
  img.setAttribute("src", path + imgs[random].src);
  document.querySelector('p').innerHTML = imgs[random].name;
}