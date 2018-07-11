var btn_prev = document.querySelector('#gallery .button-pv .prev');
var btn_next = document.querySelector('#gallery .button-nx .next');



   var images = document.querySelectorAll('#gallery .slider-figure img');

   var i = 0;

btn_prev.onclick = function() {

   images[i].className = '';

   	i = i - 1; 

   	if(i < 0){

   	i = images.length - 1;

   	}

   	images[i].className = 'showed';

   }

btn_next.onclick = function() {

   	images[i].className = '';

   	i = i + 1; 

   	if(i >= images.length){

   		i = 0;

   	}

   images[i].className = 'showed';

   }

document.getElementById('radiosl').onclick = function() {

   images[i].className = '';

      i = 0; 

      images[i].className = 'showed';


}

document.getElementById('radios2').onclick = function() {

   images[i].className = '';

      i = 1; 

      images[i].className = 'showed';


}

document.getElementById('radios3').onclick = function() {

   images[i].className = '';

      i = 2; 

      images[i].className = 'showed';


}

document.getElementById('radios4').onclick = function() {

   images[i].className = '';

      i = 3; 

      images[i].className = 'showed';


}

document.getElementById('radios5').onclick = function() {

   images[i].className = '';

      i = 4; 

      images[i].className = 'showed';


}

document.getElementById('radios6').onclick = function() {

   images[i].className = '';

      i = 5; 

      images[i].className = 'showed';


}