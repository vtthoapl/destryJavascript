const products = new Products();
const cart = new Cart();
const getId = (id) => document.getElementById(id);
const total = getId('total');
const subTotal = getId('sub-total');
const finalTotal = getId('final-total');
//COUPON APPLY
let coupon = 0; //hoac la de so, hoac la push so vo mang
let discountText = '';
getId('couponSubmit').addEventListener('click', () => {
  const discountInput = getId('discount-input').value;
  switch (discountInput) {
    case 'DESTRY5':
      coupon = 0.05;
      discountText = '5%';
      break;
    case 'DESTRY10':
      coupon = 0.1;
      discountText = '10%';
      break;
    case 'DESTRY15':
      coupon = 0.15;
      discountText = '15%';
      break;
    case 'DESTRY20':
      coupon = 0.2;
      discountText = '20%';
      break;
    default:
      coupon = 0;
      break;
  }
  discount.innerHTML = discountText;
  discount.value = coupon;
  totalMoney();
  return;
});
// TINH TONG TIEN
const totalMoney = () => {
  //get cart data
  const data = cart.getCartFromLocal();
  //dom element
  /* const discount = +getId('discount').innerHTML; //! neu la input thi .value, neu la dom thi la .innerHTML
   */
  const discount = +getId('discount').value;
  const sum = data.reduce((pre, cur) => (pre += cur.quantity * cur.price), 0);
  const totalValue = sum * 0.000039;
  subTotal.innerHTML = totalValue.toFixed(2).toLocaleString() + ' €';
  coupon === 0
    ? (finalTotal.innerHTML = totalValue.toFixed(2).toLocaleString() + ' €')
    : (finalTotal.innerHTML =
        (totalValue - totalValue * discount).toFixed(2).toLocaleString() + '€');
};
//delete item by index
const deleteItemCart = (index) => {
  const data = cart.getCartFromLocal();
  data.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(data));
  getDataFromLocalToScreen();
};
//Minus quantity cart
const minusQuantity = (index) => {
  const data = cart.getCartFromLocal();
  if (+data[index].quantity === 1) {
    if (confirm('Do you want to delete the last item?') === false) return;
    deleteItemCart();
    return;
  }
  data[index].quantity--;
  localStorage.setItem('cart', JSON.stringify(data));
  getDataFromLocalToScreen();
};
//Plus Quantity cart
const plusQuantity = (index) => {
  const data = cart.getCartFromLocal();
  if (+data[index].quantity === 10) return;
  data[index].quantity++;
  localStorage.setItem('cart', JSON.stringify(data));
  getDataFromLocalToScreen();
};
//render cart to the screen
(getDataFromLocalToScreen = () => {
  const data = cart.getCartFromLocal();
  const body = getId('body');
  const cartInfo = getId('cart-info');
  if (!data || data.length === 0) {
    body.innerHTML = `
    <h6> Shopping cart is empty</h6>`;
    return;
  }
  totalMoney();
  let content = '';
  let totalCard = 0;
  data.map((item, index) => {
    content += `
  <tr>
    <td class ="active">${item.name}</td>
    <td scope="row"><img src="${item.img}" alt=""/></td>
    <td class ="active">${(item.price * 0.000039)
      .toFixed(2)
      .toLocaleString()} €</td>
    <td>${item.size}</td>
    <td>
    <div class="chooseQuantity">
    <button onclick="minusQuantity('${index}')" >-</button>
    <p>${item.quantity}</p>
    <button onclick="plusQuantity('${index}')" >+</button>
    </div>
    </td>
    <td id="total">${(item.price * item.quantity * 0.000039)
      .toFixed(2)
      .toLocaleString()} €</td>
    <td id="icons" onclick="deleteItemCart('${index}')"><i class="fa-solid fa-trash active"></i></button></td>
  </tr>
    `;
  });
  cartInfo.innerHTML = content;
})();
//Process to checkout
const checkout = () => {
  const data = cart.getCartFromLocal();
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    alert('Please login to process');
    return;
  }
  cart.createCart(data, () => {
    alert('Congratulations, you successfully bought product');
    localStorage.removeItem('cart');
    getDataFromLocalToScreen();
  });
};
