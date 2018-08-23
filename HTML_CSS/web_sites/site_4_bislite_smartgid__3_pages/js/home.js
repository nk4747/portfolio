//HAMBURGER

var ham = document.getElementById('ham');
var nav = document.getElementById('nav');

ham.onclick = function(){


   
    nav.classList.toggle("show");

};


//SLIDER

var slideIndex = 1;
  showSlides(slideIndex);


  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.querySelectorAll('.sliderGalery > img');
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

//LATEST WORKS MODAl

(function(){

  var span1 = document.querySelectorAll('.latestworksImgCol1Modlal1 > span')[0]; 
  var modal1  = document.getElementById('modal1');
  var btn1 = document.getElementById("btn1");

  var span2 = document.querySelectorAll('.latestworksImgCol1Modlal2  > span')[0]; 
  var modal2  = document.getElementById('modal2');
  var btn2 = document.getElementById("btn2");

  var span3 = document.querySelectorAll('.latestworksImgCol1Modlal3 > span')[0]; 
  var modal3  = document.getElementById('modal3');
  var btn3 = document.getElementById("btn3");

  var span4 = document.querySelectorAll('.latestworksImgCol1Modlal4 > span')[0]; 
  var modal4  = document.getElementById('modal4');
  var btn4 = document.getElementById("btn4");


  

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


    btn4.onclick = function() {

      modal4.style.display = "block";

    }
    span4.onclick = function() {

      modal4.style.display = "none";
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


      else if (event.target == modal4) {

        modal4.style.display = "none";
      }


    }

}());