import './style.scss';
import $ from 'jquery';
// import axios from 'axios';

// POISSONS ET ALGUES //

var blowfish = '<img class ="fish" src="blowfish.png" />';
var clown = '<img class ="fish" src="clown-fish.png" />';
var octopus = '<img class ="fish" src="octopus.png" />';
var starfish = '<img class ="fish" src="starfish.png" />';
var anemone = '<img class ="plant1" src="sea-anemone.png" />';
var algae = '<img class ="plant2" src="seaweed.png" />';
var coral = '<img class ="plant3" src="coral.png" />';
var coral2 = '<img class ="plant4" src="coral2.png" />';
var smallfish = '<img class ="smallfish" src="fish.png" />';
var shrimp = '<img class ="shrimp" src="shrimp.png" />';

var blowfish2 = $(blowfish).clone().prependTo('.aquarium');
blowfish2.addClass('blowfish');
blowfish2.css({ right: '150px', top: '150px' });

var clown2 = $(clown).clone().prependTo('.aquarium');
clown2.css({ top: '150px', left: '0' });

var starfish2 = $(starfish).clone().prependTo('.aquarium');
starfish2.css({ right: '550px', bottom: '150px' });

var octopus2 = $(octopus).clone().prependTo('.aquarium');
octopus2.css({ left: '350px', bottom: '5px' });

var smallfish2 = $(smallfish).clone().prependTo('.aquarium');
smallfish2.css({ left: '10px', bottom: '60px' });
var smallfish3 = $(smallfish).clone().prependTo('.aquarium');
smallfish3.css({ left: '20px', bottom: '90px' });
var smallfish4 = $(smallfish).clone().prependTo('.aquarium');
smallfish4.css({ left: '30px', bottom: '80px' });
var smallfish5 = $(smallfish).clone().prependTo('.aquarium');
smallfish5.css({ left: '70px', bottom: '90px' });
var smallfish6 = $(smallfish).clone().prependTo('.aquarium');
smallfish6.css({ left: '90px', bottom: '110px' });
var smallfish7 = $(smallfish).clone().prependTo('.aquarium');
smallfish7.css({ left: '100px', bottom: '110px' });

var smallfishes = [smallfish2, smallfish3, smallfish4, smallfish5, smallfish6, smallfish7];

// AQUARIUM + POISSONS et PLANTES //

var aquarium = $('.aquarium');
$(aquarium).append(algae, anemone, coral, coral2);

var fishes = [starfish, clown, blowfish, octopus];

$('.plant1').css({ position: 'absolute', bottom: '0', right: '50px' });
$('.plant2').css({ position: 'absolute', left: '0', bottom: '0px' });
$('.plant3').css({ position: 'absolute', bottom: '0', left: '700px' });
$('.plant4').css({ position: 'absolute', bottom: '0', left: '500px' });

var algae2 = $(algae).clone().prependTo('.aquarium');
algae2.css({ position: 'absolute', bottom: '0', right: '100px' });

var shrimp2 = $(shrimp).clone().prependTo('.aquarium');
shrimp2.addClass('blowfish');
shrimp2.css({ right: '350px', bottom: '10px' });

var seaplants = [algae, anemone, coral, coral2];

// FONCTIONS (qui marchent pas...)//

for (var i = 1; i < seaplants.length + 1; i++) {
  var c = 10;
  $(`.plant${i}`).css({ position: 'absolute', bottom: '0' });
  $(`.plant${i}`).css('left', `${$(c)}px`);
  c += 10;
}

var bodyWidth = document.body.clientWidth;
var bodyHeight = document.body.clientHeight;
console.log(bodyHeight);
var randPosX = Math.floor((Math.random() * bodyWidth));
var randPosY = Math.floor((Math.random() * bodyHeight));

for (var n = 0; n < fishes.length; n++) {
  $(`.fish${n}`).css('right', `${randPosX}px`);
}

// ANIMATIONS //

var translate = 50;
var onde = 0;
var rotation = 90;
var grow = 0.1;

setInterval(function () {
  translate += 1;
  onde = Math.sin(translate * 0.1);
  clown2.css({ transform: `translateX(${translate}px) translateY(-${101 + 100 * onde}px) ` });
  if (grow < 3) {
    grow += 0.01;
    blowfish2.css({ transform: `translateX(-${translate}px) scale(${grow})` });
  } else {
    blowfish2.css({ transform: `translateX(-${translate}px` });
  }
  octopus2.css({ transform: `translateY(-${translate}px) scale(${1 + 0.1 * onde}` });
  smallfishes.forEach(function (e) {
    e.css({ transform: `scale(${1 + 0.2 * onde}) translateX(${translate}px)` });
  });
}, 50);

/* /// BUG : le scale se fait seulement à l'endroit où était le poisson au départ,
pas quand il bouge sur l'écran ///

setInterval(function () {
  blowfish2.css({ transform: 'scale(3)' });
}, 5000);
*/
setInterval(function () {
  rotation += 45;
  starfish2.css({ transform: `rotate(${rotation}deg)` });
}, 250);

setInterval(function () {
  translate += 1;
  rotation += 45;
  shrimp2.css({ transform: ` translateX(-${translate}px) rotate(${rotation}deg) ` });
}, 90);
