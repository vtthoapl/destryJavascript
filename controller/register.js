const user = new User();
const registerVal = new RegisterValidate();

const handleRegister = () => {
  event.preventDefault();
  //Dom element
  const registerName = getId('register-name').value;
  const registerEmail = getId('register-email').value;
  const registerPass = getId('register-pass').value;
  const registerAge = getId('register-age').value;
  //if all validates are true, then register success
  const vaName = registerVal.name(registerName, 'err-name');
  const vaEmail = registerVal.email(registerEmail, 'err-email');
  const vaPass = registerVal.pass(registerPass, 'err-pass');
  const vaAge = registerVal.age(registerAge, 'err-age');
  if (vaName == true && vaEmail == true && vaPass == true && vaAge == true) {
    const inputs = document.querySelectorAll('.form-control');
    //?backend API: so sanh theo key, khong can theo thu tu
    const [name, email, password, age] = inputs;
    const data = {
      name: name.value,
      email: email.value,
      password: password.value,
      age: age.value,
      userType: 'user', //bat buoc gan type user, mac dinh
    };
    user.register(data);
    alert('You registered successfully. Please login to continue')
  }
};
