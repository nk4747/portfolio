//MAP

function initMap() {
        var uluru = {lat: 53.463143, lng: -113.453132};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }




//FORM


var form = document.querySelector('.contactForm');
var validateBtn = form.querySelector('.contactForm__btn1');
var name = form.querySelector('.contactForm__input1');
var fields = form.querySelectorAll('input, textarea');
var usermail =  form.querySelector('.contactForm__input2');



var reg =  /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$/;


var generateError = function (text) {
  var error = document.createElement('div');
  error.className = 'error';
  error.innerHTML = text;
  return error;
};

var removeValidation = function () {
  var errors = form.querySelectorAll('.error');

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove();
  }
};


var checkFieldsPresence = function () {
  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log('Field cannot be empty', fields[i]);
      var error = generateError('Field cannot be empty!');
      form[i].parentElement.insertBefore(error, fields[i]);
    } 
  }
};



var checkEmail = function() {

if(reg.test(usermail.value) == false) {

      console.log('Enter a valid email address');
      var error = generateError('Enter a valid email address');
      usermail.parentElement.insertBefore(error, usermail);
  
}

};


validateBtn.onclick = function(event){

  event.preventDefault();
   removeValidation();
   checkEmail();
  checkFieldsPresence();

}; 

// form.addEventListener('submit', function (event) {
//   event.preventDefault();
//   removeValidation();
//   checkEmail();
//   checkFieldsPresence();

// });


//el