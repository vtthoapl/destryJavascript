function Products() {
  this.products = [];
  this.getProducts = async function (onSuccess) {
    try {
      const res = await axios.get(
        'https://nike-sever-vtcoder.glitch.me/product'
      );
      this.products = res.data;
      onSuccess(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  /* for details */
  this.getProductsbyId = async function (id, onSuccess) {
    try {
      const res = await axios.get(
        'https://nike-sever-vtcoder.glitch.me/product/' + id
      );
      this.products = res.data;
      onSuccess(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  /* for cart  */
  this.renderQualityCart = function() {
    const data = this.getCartFromLocal()
    return data? data.length : 0
  }
}

