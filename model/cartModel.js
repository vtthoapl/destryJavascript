function Cart() {
  this.createCart = async function (data, onSuccess) {
    const token = JSON.parse(localStorage.getItem('token'));
    try {
      await axios.post(
        'https://nike-sever-vtcoder.glitch.me/cart/create',
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      onSuccess();
    } catch (error) {
      console.log(error);
    }
  };
  this.getCartFromLocal = function () {
    return JSON.parse(localStorage.getItem('cart'));
  };
  //? adding quantity into cart to for screeshow
  this.getQuantityCart = function () {
    return this.getCartFromLocal() ? this.getCartFromLocal().length : 0;
  };
}
