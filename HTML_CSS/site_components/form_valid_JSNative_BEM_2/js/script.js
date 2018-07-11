

var form = document.querySelector('.form');

var validateBtn = form.querySelector('.formInputButton__btn');

var name = form.querySelector('.formInputName__input');

var fields = form.querySelectorAll('input, textarea');

var password = document.getElementById('userpassword');

var passwordRepeat = document.getElementById('userpasswordpereat');

var usermail = document.getElementById('email');


 

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
      console.log('Поле не может быть пустым', fields[i]);
      var error = generateError('Поле не может быть пустым!');
      form[i].parentElement.insertBefore(error, fields[i]);
    } 
  }
};



var checkEmail = function() {

if(reg.test(usermail.value) == false) {

      console.log('Введиде корректный Email');
      var error = generateError('Введиде корректный Email!');
      usermail.parentElement.insertBefore(error, usermail);
  
}

};


var checkPasswordMatch = function () {
  if (password.value !== passwordRepeat.value) {
    console.log('Пароли не совпадают!');
    var error = generateError('Пароли не совпадают!');
    password.parentElement.insertBefore(error, password);
  }
};


  
  

form.addEventListener('submit', function (event) {
  event.preventDefault();

  removeValidation();
  checkEmail();
  checkFieldsPresence();
  checkPasswordMatch();

});
