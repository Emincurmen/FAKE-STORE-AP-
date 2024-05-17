const detailContainer = document.querySelector('.container-detail');

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

fetch(`https://fakestoreapi.com/products/${productId}`)
  .then(response => response.json())
  .then(user => {
        detailContainer.innerHTML += `<div class="product-detail">
        <h2 class="title">${user.title}</h2>
        <img src="${user.image}" alt="" class="card-img">
        <p class="description">${user.description}</p>
        <h3 class="price">${user.price}</h3>
        <p class="rate">${user.rating.rate}</p>
    </div>`
    
  })
  .catch(error => {
    console.error('Ürün detayları yüklenirken hata oluştu:', error);
  });