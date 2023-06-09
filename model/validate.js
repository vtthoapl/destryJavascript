const getId = (id) => document.getElementById(id);
function RegisterValidate() {
  this.name = function (value, err) {
    const error = getId(err);
    if (!value) {
      error.innerHTML = 'Name is required!';
      return;
    } else if (value.length > 20) {
      error.innerHTML = 'Name can not be over 20 letters ';
      return;
    } else {
      error.innerHTML = '';
      return true;
    }
  };
  this.email = function (value, err) {
    let regex_email = /\S+@\S+\.\S+/;
    const error = getId(err);
    if (!value) {
      error.innerHTML = 'Email is required!';
      return;
    } else if (regex_email.test(value) == false) {
      error.innerHTML = 'Please type the correct email form';
      return;
    } else {
      error.innerHTML = '';
      return true;
    }
  };
  this.pass = function (value, err) {
    let regex_number = /^[0-9]*$/;
    const error = getId(err);
    if (!value) {
      error.innerHTML = 'Pass is required!';
      return;
    } else if (regex_number.test(value) == false) {
      error.innerHTML = 'Password must contain only number';
      return;
    } else if (value.length < 8){
      error.innerHTML = "Password's length has to be at least 8 numbers"
    }else {
      error.innerHTML = '';
      return true;
    }
  };
  this.age = function (value, err) {
    let regex_number = /^[0-9]*$/;
    const error = getId(err);
    if (!value) {
      error.innerHTML = 'Age is required!';
      return;
    } else if (value < 15) {
      error.innerHTML = 'You should be at least 15 years old!';
      return;
    } else if (regex_number.test(value) == false) {
      error.innerHTML = 'This field should contain only number!';
      return;
    } else {
      error.innerHTML = '';
      return true;
    }
  };
}

/* 
this.va_number = function (value, err) {
    var regex_number = /^[0-9]*$/;
    if ((value = '')) {
      getId(err).innerHTML = 'StudentNumber cant be empty';
      return false;
    } else if (regex_number.test(value) == false) {
      getId(err).innerHTML = 'Student number have to be number';
      return false;
    } else {
      getId(err).innerHTML = '';
      return true;
    }
  };
*/
