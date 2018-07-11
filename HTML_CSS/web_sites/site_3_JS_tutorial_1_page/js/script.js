

//управление меню

(function(){
  
    item1.onclick = function() {

      var item1 = document.getElementById('item1');
      var sub1 = document.getElementById('sub1');
      sub1.classList.toggle("show");
      sub1.style.position = 'absolute';
    }
  
  


    item2.onclick = function() {

      var item2 = document.getElementById('item2');
      var sub2 = document.getElementById('sub2');
      sub2.classList.toggle("show2");
      sub2.style.position = 'absolute';
    }


}());






// управление слайдером
    
  var slideIndex = 1;
  showSlides(slideIndex);


  function plusSlides(n) {
    showSlides(slideIndex += n);
  }


  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("headerSliderSlides");
    var dots = document.getElementsByClassName("headerSliderRadiobuttons");
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







// управление табами 

(function(){

  var tab;
  var tabContent;

  window.onload = function() {

    tabContent = document.querySelectorAll('.tabsContent > div');
    tab = document.querySelectorAll('.tabsTab > div');
    hideTabsContent(1);

  }

  function hideTabsContent(a) {

    for( var i = a; i<tabContent.length; i++ ){

      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
      tab[i].classList.remove('whiteborder');

    }

  }


  function showTabsContent(b) {

    if(tabContent[b].classList.contains('hide')) {

      hideTabsContent(0);
      tab[b].classList.add('whiteborder');
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }



  document.getElementById('tabs').onclick = function (event) {

    var target = event.target;
    if(target.classList.contains('tab')) {

      for(var i = 0; i < tab.length; i++) {

        if(target == tab[i]) {
          showTabsContent(i);
          break;
        }

      }

    }

  }

  
   
}());



//управление аккордионом

(function(){
    
    var acc = document.querySelectorAll('.accordion > button');
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }


}());

// управление модальными окнами

(function(){

  var span1 = document.querySelectorAll('.modalwindow1ModalContent > span')[0]; 
  var modal1  = document.getElementById('modal1');
  var btn1 = document.getElementById("btn1");

  var span2 = document.querySelectorAll('.modalwindow2ModalContent > span')[0]; 
  var modal2  = document.getElementById('modal2');
  var btn2 = document.getElementById("btn2");



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


    window.onclick = function(event) {

      if (event.target == modal1) {

        modal1.style.display = "none";
      }

      else if (event.target == modal2) {

        modal2.style.display = "none";
      }
    }

}());
  



 calcbtn.onclick = function() {

      var calcbtn = document.getElementById('calcbtn');
      var calc = document.getElementById('calc');
      calc.classList.toggle("showcalc");
    
    }



function plus(){
    
    var num1, num2, result;
    
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    
    result = num1 + num2;
    
    document.getElementById('out').value = result;
}

function minus(){
    
    var num1, num2, result;
    
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    
    result = num1 - num2;
    
    document.getElementById('out').value = result;
}

function multiplication(){
    
    var num1, num2, result;
    
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    
    result = num1 * num2;
    
    document.getElementById('out').value = result;
}

function division(){
    
    var num1, num2, result;
    
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    
    result = num1 / num2;
    
    document.getElementById('out').value = result;
}








