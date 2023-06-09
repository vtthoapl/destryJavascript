const getId = (id) => document.getElementById(id);
const products = new Products();
const renderAPIproduct = getId('render');
const id = new URL(window.location.href).searchParams.get('id'); // sai 1 lan thoi, nen gan vao day, ko can tao function.  cai Id nay thi nguoi dung co the modify Id neu muon
let cartData = [];
let sizeToChoose = '';
let chooseSize = (size) => {
  sizeToChoose = size;
  const sizeBtn = document.getElementsByClassName('btn-size');
  //sai 2 cai chi la de luyen tap
  for (const btn of sizeBtn) {
    btn.classList.remove('active');
  }
  for (const key in sizeBtn) {
    if (sizeBtn[key].innerHTML === size) {
      sizeBtn[key].classList.add('active');
    }
  }
};
const cancelSizeToChoose = () => {
  sizeBtn = document.getElementsByClassName('btn-size');
  sizeToChoose = '';
  for (const btn of sizeBtn) {
    btn.classList.remove('active');
  }
};

const addToCart = (value) => {
  const data = JSON.parse(atob(value));
  const { /* quantity, -default value */ name, price, size, img, color } = data;
  const listCartUser = [];
  const getCartFromLocal = JSON.parse(localStorage.getItem('cart'));
  cartData = {
    quantity: 1, //default value
    name,
    price,
    size: sizeToChoose,
    img,
    color,
  };
  listCartUser.push(cartData);
  if (!sizeToChoose) {
    alert('Please choose the size');
    return;
  }
  //? check local storage is empty then create cart
  if (!getCartFromLocal) {
    localStorage.setItem('cart', JSON.stringify(listCartUser));
    cancelSizeToChoose();
    numCart.innerHTML = carts.getQuantityCart();
    return;
  }

  //? check localstorage has the same item, then quantity++
  for (let i in getCartFromLocal) {
    if (
      getCartFromLocal[i].name === cartData.name &&
      getCartFromLocal[i].size === cartData.size
    ) {
      getCartFromLocal[i].quantity++;
      localStorage.setItem('cart', JSON.stringify(getCartFromLocal));
      cancelSizeToChoose();
      return;
    }
  }
  //?if cart from local not has the same name & size then push cart data to getCartFromLocal & set him to localStorage
  getCartFromLocal.push(cartData);
  localStorage.setItem('cart', JSON.stringify(getCartFromLocal));
  cancelSizeToChoose();
  numCart.innerHTML = carts.getQuantityCart();
};
products.getProductsbyId(id, (data) => {
  const convertData = btoa(JSON.stringify(data));
  const img = getId('info-img');
  const infoDetail = getId('info-detail');
  /* sizeList = data.sizes */
  let sizeListContent = '';
  data.sizes.map((size) => {
    sizeListContent += `
    <button class="btn btn-size" onclick="chooseSize('${size.size}')">${size.size}</button>
    `;
  });
  img.innerHTML = `<img src=${data.img} alt="#">`;
  infoDetail.innerHTML = `
 <h2>${data.name}</h2>
 <h6 id="info-type">${data.gender}</h6>
 <p>
 <span class="new text-danger">${((data.price - data.price * 0.2) * 0.000039)
   .toFixed(2)
   .toLocaleString()} €</span>
 <span class="old text-decoration-line-through fw-lighter">${(
   data.price * 0.000039
 )
   .toFixed(2)
   .toLocaleString()}</span> 
 </p
 <p>Instore ${data.status}</p>    
 <h6 id="info-type">${data.typeProduct}</h6> 
 <div>${sizeListContent}</div> 
 <p>${data.message}</p> 
 <p>${data.description}</p>
 <div id="btns">
    <button onclick="addToCart('${convertData}')" class="btn btn-size">Add to cart</button>
  </div>
    `;
});
/*  <button onclick="addToWishlish()" class="btn btn-light">Add to Wishlist</button> */

//render products to the screen
(getProductFromAPI = () => {
  products.getProducts((data) => {
   /*  loading.classList.add('disable');  */
    let detailsAPIProducts = '';
    data
      .splice(Math.floor(Math.random() * (data.length - 6)), 6)
      .map((item, index) => {
        detailsAPIProducts += `
      <div class="card">
        <a class="card-img" href="/views/detail.html?id=${item._id}">
          <img src="${item.img}" class="card-img-top" alt="#">
        </a>             
        <div class="card-body">       
          <a href="/views/detail.html?id=${item._id}" alt="#">${item.name}
          </a> <br>
            <span class="new text-danger">${(item.price * 0.000039)
              .toFixed(2)
              .toLocaleString()} €
            </span> 
          <br>               
          <a class="shopHereLink" href="/views/detail.html?id=${item._id}">SHOP HERE</a>              
        </div>
    </div>         
      `;
      });
    renderAPIproduct.innerHTML = detailsAPIProducts;
  });
})();
