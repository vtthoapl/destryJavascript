const getById = (id) => document.getElementById(id);
const carts = new Cart();
const logout = () => {
  const userList = getById('user-list');
  if (confirm('Do you want to sign out?') === false) return;
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  userList.innerHTML = `
    <li><a class="user-a" href="/views/login.html">Login</a></li>
    <li><a class="user-a" href="/views/register.html?">Register</a></li>
    `;
  alert('You signed out sucessfully!');
};
/* Homepage after login */
(() => {
  const userLocal = JSON.parse(localStorage.getItem('user'));
  const userList = getById('user-list');
  if (!userLocal) return;
  const content = `
    <li><a class="user-a" href="/views/cart.html">Your Account</a></li>
    <li><a class="user-a" onclick="logout()">Logout <i class="fa-solid fa-right-from-bracket"></i></a></li>
    `;
  userList.innerHTML = content;
})();
/* Search section start*/
const toggleActiveClassSearchModal = () => {
  getById('modalSearch').classList.toggle('active');
};
/* active search btn */
getById('search-icon').addEventListener('click', toggleActiveClassSearchModal);

/* close search btn */
getById('closeModalSearch').addEventListener(
  'click',
  toggleActiveClassSearchModal
);

getById('searchInput').addEventListener('keyup', () => {
  const inputValue = getById('searchInput').value;
  let content = '';
  //loc sp dung filter. tolowercase()
  const filterProducts = products.products.filter((item) => {
    if (!inputValue) return;
    return item.name.toLowerCase().includes(inputValue.toLowerCase());
  });
  filterProducts?.map((item) => {
    content += `
    <a href="/views/detail.html?id=${item._id}" class="card-search">
    <img src="${item.img}" />
    <h6>${item.name}</h6>
    <p>${(item.price * 0.000039).toFixed(2).toLocaleString()} €</p>
    </a>
    `;
  });
  if (inputValue && filterProducts.length === 0) {
    getById('searchResult').innerHTML = 'Product is not founded';
  }
  getById('searchResult').innerHTML = content;
});
/* Search section end */
/*Hamburger section start*/
const toggleActiveHamburger = () => {
  getById('hamburger-content').classList.toggle('active');
};
getById('hamburger-section').addEventListener('click', toggleActiveHamburger);
getById('close-hamburger').addEventListener('click', toggleActiveHamburger);

////? adding quantity into cart to for screeshow
(() => {
  const numCart = getById('numCart');
  numCart.innerHTML = carts.getQuantityCart();
})();
