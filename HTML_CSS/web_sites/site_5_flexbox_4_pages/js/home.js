//SLIDER

var slideIndex = 1;
  showSlides(slideIndex);


  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.querySelectorAll('.sliderGalery > div');
    var dots = document.querySelectorAll(" .sliderRadio > span");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  } 

//MODALS

(function(){

  var span1 = document.querySelectorAll('.ourportfolioModlalEl1 > span')[0]; 
  var modal1  = document.getElementById('modal1');
  var btn1 = document.getElementById("btn1");

  var span2 = document.querySelectorAll('.ourportfolioModlalEl2  > span')[0]; 
  var modal2  = document.getElementById('modal2');
  var btn2 = document.getElementById("btn2");

  var span3 = document.querySelectorAll('.ourportfolioModlalEl3 > span')[0]; 
  var modal3  = document.getElementById('modal3');
  var btn3 = document.getElementById("btn3");

  

    btn1.onclick = function() {

      modal1.style.display = "block";

    }
    span1.onclick = function() {

      modal1.style.display = "none";
    }


    btn2.onclick = function() {

      modal2.style.display = "block";

    }
    span2.onclick = function() {

      modal2.style.display = "none";
    }


    btn3.onclick = function() {

      modal3.style.display = "block";

    }
    span3.onclick = function() {

      modal3.style.display = "none";
    }


    

    window.onclick = function(event) {

      if (event.target == modal1) {

        modal1.style.display = "none";
      }

      else if (event.target == modal2) {

        modal2.style.display = "none";
      }

      else if (event.target == modal3) {

        modal3.style.display = "none";
      }

    }

}());


//TESTIMONIALS

var p1 = document.querySelector('.testiTeam__p1');
var el1 = document.querySelector('.testiTeamEl1__img1');
var p2 = document.querySelector('.testiTeam__p2');
var el2 = document.querySelector('.testiTeamEl2__img1');
var p3 = document.querySelector('.testiTeam__p3');
var el3 = document.querySelector('.testiTeamEl3__img1');

el1.onmouseover = function(){

  p1.style.display = 'block';
}


el1.onmouseleave = function(){

  p1.style.display = 'none';
}


el2.onmouseover = function(){

  p2.style.display = 'block';
}


el2.onmouseleave = function(){

  p2.style.display = 'none';
}

el3.onmouseover = function(){

  p3.style.display = 'block';
}


el3.onmouseleave = function(){

  p3.style.display = 'none';
}