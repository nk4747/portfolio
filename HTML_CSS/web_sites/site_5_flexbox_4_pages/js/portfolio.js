//MODAL IMG

(function(){

  var span1 = document.querySelectorAll('.projectsGalleryModlaEl1 > span')[0]; 
  var modal1  = document.getElementById('modal1');
  var btn1 = document.getElementById("btn1");

  var span2 = document.querySelectorAll('.projectsGalleryModlaEl2  > span')[0]; 
  var modal2  = document.getElementById('modal2');
  var btn2 = document.getElementById("btn2");

  var span3 = document.querySelectorAll('.projectsGalleryModlaEl3  > span')[0]; 
  var modal3  = document.getElementById('modal3');
  var btn3 = document.getElementById("btn3");

  var span4 = document.querySelectorAll('.projectsGalleryModlaEl4  > span')[0]; 
  var modal4  = document.getElementById('modal4');
  var btn4 = document.getElementById("btn4");

  var span5 = document.querySelectorAll('.projectsGalleryModlaEl5  > span')[0]; 
  var modal5  = document.getElementById('modal5');
  var btn5 = document.getElementById("btn5");

  var span6 = document.querySelectorAll('.projectsGalleryModlaEl6  > span')[0]; 
  var modal6  = document.getElementById('modal6');
  var btn6 = document.getElementById("btn6");

  var span7 = document.querySelectorAll('.projectsGalleryModlaEl7 > span')[0]; 
  var modal7  = document.getElementById('modal7');
  var btn7 = document.getElementById("btn7");

  var span8 = document.querySelectorAll('.projectsGalleryModlaEl8 > span')[0]; 
  var modal8  = document.getElementById('modal8');
  var btn8 = document.getElementById("btn8");

  var span9 = document.querySelectorAll('.projectsGalleryModlaEl9 > span')[0]; 
  var modal9  = document.getElementById('modal9');
  var btn9 = document.getElementById("btn9");

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


    btn5.onclick = function() {

      modal5.style.display = "block";

    }
    span5.onclick = function() {

      modal5.style.display = "none";
    }

    btn6.onclick = function() {

      modal6.style.display = "block";

    }
    span6.onclick = function() {

      modal6.style.display = "none";
    }

    btn7.onclick = function() {

      modal7.style.display = "block";

    }
    span7.onclick = function() {

      modal7.style.display = "none";
    }

    btn8.onclick = function() {

      modal8.style.display = "block";

    }
    span8.onclick = function() {

      modal8.style.display = "none";
    }

    btn9.onclick = function() {

      modal9.style.display = "block";

    }
    span9.onclick = function() {

      modal9.style.display = "none";
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

      else if (event.target == modal5) {

        modal5.style.display = "none";
      }

       else if (event.target == modal6) {

        modal6.style.display = "none";
      }
       else if (event.target == modal7) {

        modal7.style.display = "none";
      }

       else if (event.target == modal8) {

        modal8.style.display = "none";
      }

      else if (event.target == modal9) {

        modal9.style.display = "none";
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



