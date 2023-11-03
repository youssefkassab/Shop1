var prodect = document.getElementById("prodect_page");

var productData = JSON.parse(localStorage.getItem("productData"));

for (var i = 0; i < productData.length; i++) {
  prodect.innerHTML += ` <div class="col-md-4" style="width: 18rem;">
  <div class="card">
    <img src="assets/images/${productData[i].img}" class="card-img-top" alt="Product 2">
    <div class="card-body">
      <h5 class="card-title">${productData[i].name}</h5>
      <p class="card-text">${productData[i].description}</p>
      <p>Price: ${productData[i].price}</p>
      <button class="btn btn-primary" onclick="AddToCart(${productData[i].id})" id="add_to_cart${i}">Add to Cart</button>
    </div>
  </div>
</div>`;
}
