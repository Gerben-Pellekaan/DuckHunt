/*	Gerben Pellekaan
	Student Software Developer
	B2W2O1 - Duck Hunt	*/

var richtingen 	= ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
var duck 		= document.getElementById("duck");
var container	= document.getElementById("container");
var duckTop 	= 0;
var duckLeft 	= 0;
var speed 		= 75;
var interval 	= setInterval (moveDuck, 500);

var hitCount 	= 0;
var missCount 	= 0;


positionDuck(duck); 

container.onclick=score;
duck.onclick=score;


function moveDuck() {

	var random = richtingen [Math.floor(Math.random()*richtingen.length)];
	console.log(random);

	switch (random) {
		case "N":
			var moveN = parseInt (duck.style.top, 10)-speed;
			duck.style.top = moveN + 'px';
			break;

		case "NE":
			var moveN = parseInt (duck.style.top, 10)-speed;
			duck.style.top = moveN + 'px';
			var moveE = parseInt (duck.style.left, 10)+speed;
			duck.style.left = moveE + 'px';
			break;

		case "E":
			var moveE = parseInt (duck.style.left, 10)+speed;
			duck.style.left = moveE + 'px';
			break;

		case "SE":
			var moveS = parseInt (duck.style.top, 10)+speed;
			duck.style.top = moveS + 'px';
			var moveE = parseInt (duck.style.left, 10)+speed;
			duck.style.left = moveE + 'px';
			break;

		case "S":
			var moveS = parseInt (duck.style.top, 10)+speed;
			duck.style.top = moveS + 'px';
			break;

		case "SW":
			var moveS = parseInt (duck.style.top, 10)+speed;
			duck.style.top = moveS + 'px';
			var moveW = parseInt (duck.style.left, 10)-speed;
			duck.style.left = moveW + 'px';
			break;

		case "W":
			var moveW = parseInt (duck.style.left, 10)-speed;
			duck.style.left = moveW + 'px';
			break;

		case "NW":
			var moveN = parseInt (duck.style.top, 10)-speed;
			duck.style.top = moveN + 'px';
			var moveW = parseInt (duck.style.left, 10)-speed;
			duck.style.left = moveW + 'px';
			break;
	}
}

function positionDuck (object){
	duckLeft = (document.documentElement.clientWidth - object.offsetWidth) / 2.7;
	duckTop = (document.documentElement.clientHeight - object.offsetHeight) / 2;

	duck.style.position = 'relative';
	duck.style.top = duckTop + 'px';
	duck.style.left = duckLeft + 'px';
}

// Zorg ervoor dat de count apart omhoog gaat als je op de eend klikt.
// Zorg ervoor dat als je wint of verliest de andere count niet meer omhoog kan gaan.

function score (){
	if (hitCount+missCount == 20){
		alert('HIT: '+ hitCount + '\nMISS: '+ missCount)
		clearInterval(interval);
	}
	else{
		if (event.target.id == 'duck'){
			hitCount+=1;
			document.getElementById('hit-count').innerHTML= 'HIT: ' +hitCount;
			event.stopPropagation();
		}
		else{
			missCount+=1;
			document.getElementById('miss-count').innerHTML= 'MISS: ' +missCount;
		}
	}
}
