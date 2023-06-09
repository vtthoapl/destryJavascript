const user = new User();
(() => {
  const token = JSON.parse(localStorage.getItem('token'));
  if (!token) return;
  window.location.replace('/');
})();
const handleLogin = () => {
  const submitBtn = document.getElementById('submitBtn');
  event.preventDefault();
  const inputs = document.querySelectorAll('.form-control');
  const [email, password] = inputs;
  const data = {
    email: email.value,
    password: password.value,
  };
  // to avoid login too many time, using disbled 
  const active = () => {
    submitBtn.removeAttribute('disabled');
  };
  const cancel = () => {
    submitBtn.setAttribute('disabled', true);
  };
  // console.log(formlogin)
  user.login(data, cancel, active);
};

