function User() {
  this.login = async function (data, cancel, active) {
    cancel()
    try {
      const res = await axios.post(
        'https://nike-sever-vtcoder.glitch.me/users/login',
        data
      );
      localStorage.setItem('token', JSON.stringify(res.data.token));
      localStorage.setItem('user', JSON.stringify(res.data.user));
      window.location.replace('/index.html');
    } catch (error) {
      //! catching error should contain console.log incase 
      console.log(error);
      alert('Login finally, please check password or email!')
      active()
    }
  };
  this.register = async function (data) {
    try {
      await axios.post(
        'https://nike-sever-vtcoder.glitch.me/users/create',
        data
      );
      window.location.replace('/views/login.html'); // or: window.location.push(('/views/login.html'))
    } catch (error) {
      console.log(error);
    }
  };
}
