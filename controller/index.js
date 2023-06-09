const getId = (id) => document.getElementById(id);
const newArrivals = getId('pills-new');
const bestSeller = getId('pills-best');
const saleOff = getId('pills-sale');
const newDeal = getId('pills-newDeal');
const bestDeal = getId('pills-bestDeal');
const saleDeal = getId('pills-saleDeal');
const loading = getId('loading');

const products = new Products();

(getProductsFromApi = () => {
  products.getProducts((data) => {
    let contentNew = '';
    let contentBest = '';
    let contentSale = '';
    let contentNewDeal = '';
    let contentBestDeal = '';
    let contentSaleDeal = '';
    //for loading part
    loading.classList.add('disable');
    /* ----------- rendering products end----------*/
    data
      .splice(Math.floor(Math.random() * (data.length - 24)), 8)
      .map((item, index) => {
        contentNew += `
            <div data-aos="fade-up" data-aos-delay="${
              100 * index
            }" class="card">
              <a class="card-img" href="/views/detail.html?id=${item._id}">
                <img src="${item.img}" class="card-img-top" alt="#">
              </a>             
              <div class="card-body">
                <h5 class="card-title">
                <a href="/views/detail.html?id=${item._id}" alt="#">${item.name}
                <a> 
                </h5>
                  <span class="new text-danger">${(item.price * 0.000039)
                    .toFixed(2)
                    .toLocaleString()} €</span> <br>               
                <a class="shopHereLink" href="/views/detail.html?id=${
                  item._id
                }">SHOP HERE
                </a>              
              </div>
          </div>         
      `;
      });
    data
      .splice(Math.floor(Math.random() * (data.length - -16)), 8)
      .map((item, index) => {
        contentBest += `
            <div data-aos="fade-up" data-aos-delay="${
              100 * index
            }" class="card">
            <a class="card-img" href="/views/detail.html?id=${item._id}">
            <img src="${item.img}" class="card-img-top" alt="#">
              </a>              
              <div class="card-body">
                <h5 class="card-title">
                <a href="/views/detail.html?id=${item._id}">${item.name}
                </a> 
                </h5>
                <span class="new text-danger">${(item.price * 0.000039)
                  .toFixed(2)
                  .toLocaleString()} € 
                </span><br>               
                <a class="shopHereLink" href="/views/detail.html?id=${
                  item._id
                }">SHOP HERE
                </a>             
              </div>
          </div>         
      `;
      });
    data.splice(0, 8).map((item, index) => {
      contentSale += `
            <div data-aos="fade-up" data-aos-delay="${
              100 * index
            }" class="card">
            <a class="card-img" href="/views/detail.html?id=${item._id}">
              <img src="${item.img}"class="card-img-top" alt="#">
              </a>              
              <div class="card-body">
                <h5 class="card-title">
                <a href="/views/detail.html?id=${item._id}">
                ${item.name}
                </a>
                </h5>
                <span class="price">
                  <span class="new text-danger">${(
                    (item.price - item.price * 0.2) *
                    0.000039
                  )
                    .toFixed(2)
                    .toLocaleString()} €</span>
                  <span class="old text-decoration-line-through fw-lighter">${(
                    item.price * 0.000039
                  )
                    .toFixed(2)
                    .toLocaleString()}
                  </span>
                </span><br>              
                <a class="shopHereLink" href="/views/detail.html?id=${
                  item._id
                }">SHOP HERE
                </a>              
              </div>
          </div>         
      `;
    });
    /* ----------- rendering products end----------*/

    /* -----------rendering daily deal------------- */
    data
      .splice(Math.floor(Math.random() * (data.length - 26)), 2)
      .map((item, index) => {
        contentNewDeal += `
      <div data-aos="fade-up" data-aos-delay="${100 * index}" class="card" >
        <a href="/views/detail.html?id=${
          item._id
        }" class="card-link-img" alt="#">
            <img class="card-img" src="${item.img}" alt="#">
        </a>  
        <div class="card-body">
            <p class="card-title">TRENDING THIS WEEK</p>
            <p>${item.typeProduct.toUpperCase()}</p> 
            <a href="/views/detail.html?id=${
              item._id
            }" class="text-decoration-none text-dark">${item.name}</a>
            <p class="card-text">            
            <span class="price">
            <span class="new text-danger">${(
              (item.price - item.price * 0.1) *
              0.000039
            )
              .toFixed(2)
              .toLocaleString()}€ </span>
            <span class="old text-decoration-line-through fw-lighter">${(
              item.price * 0.000039
            )
              .toFixed(2)
              .toLocaleString()}</span>
            </span>
            </p>           
            <a class="shopHereLink" href="/views/detail.html?id=${
              item._id
            }">SHOP HERE</a>          
        </div>
      </div>
      `;
      });
    data
      .splice(Math.floor(Math.random() * (data.length - 28)), 2)
      .map((item, index) => {
        contentBestDeal += `
      <div data-aos="fade-up" data-aos-delay="${100 * index}" class="card" >
          <a href="/views/detail.html?id=${
            item._id
          }" class="card-link-img" alt="#">
          <img class="card-img" src="${item.img}" alt="#">
         </a>      
        <div class="card-body">
            <p class="card-title">UP TO 70%</p>
            <p>${item.typeProduct.toUpperCase()}</p>
            <a href="/views/detail.html?id=${
              item._id
            }" class="text-decoration-none text-dark">${item.name}</a>
            <p class="card-text">            
              <span class="price">
                <span class="new text-danger">${(
                  (item.price - item.price * 0.5) *
                  0.000039
                )
                  .toFixed(2)
                  .toLocaleString()} € </span>
                <span class="old text-decoration-line-through fw-lighter">${(
                  item.price * 0.000039
                )
                  .toFixed(2)
                  .toLocaleString()}</span>
              </span>
            </p>     
              <a class="shopHereLink" href="/views/detail.html?id=${
                item._id
              }">SHOP HERE
                </a>             
          </div>
        </div>
      `;
      });
    data
      .splice(Math.floor(Math.random() * (data.length - 30)), 2)
      .map((item, index) => {
        contentSaleDeal += `
      <div data-aos="fade-up" data-aos-delay="${
        100 * index
      }"  class="card" >    
       <a href="/views/detail.html?id=${
         item._id
       }" class="card-link-img" alt="#">
          <img class="card-img" src="${item.img}" alt="#">
        </a>     
          <div class="card-body">
            <p class="card-title">HURRY UP! ONLY FEW LEFT</p>
            <p>${item.typeProduct.toUpperCase()}</p>
            <a href="/views/detail.html?id=${
              item._id
            }" class="text-decoration-none text-dark">${item.name}</a>
            <p class="card-text">            
              <span class="price">
                <span class="new text-danger">${(
                  (item.price - item.price * 0.2) *
                  0.000039
                )
                  .toFixed(2)
                  .toLocaleString()} € </span>
                <span class="old text-decoration-line-through fw-lighter">${(
                  item.price * 0.000039
                )
                  .toFixed(2)
                  .toLocaleString()}</span>
              </span>
            </p>
              <a class="shopHereLink" href="/views/detail.html?id=${
                item._id
              }">SHOP HERE
                </a>             
          </div>
        </div>
      `;
        //rendering daily deal end
      });
    newArrivals.innerHTML = contentNew;
    bestSeller.innerHTML = contentBest;
    saleOff.innerHTML = contentSale;
    newDeal.innerHTML = contentNewDeal;
    bestDeal.innerHTML = contentBestDeal;
    saleDeal.innerHTML = contentSaleDeal;
  });
})();
