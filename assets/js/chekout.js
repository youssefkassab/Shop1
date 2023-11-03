var cartData = [];
var cart = document.getElementById("cart-1");
cartData = JSON.parse(localStorage.getItem("cartData")) || [];

for (var i = 0; i < cartData.length; i++) {
  cart.innerHTML += `<li class="list-group-item">
  <div class="row">
    <div class="col-md-4">
      <img src="assets/images/${cartData[i].image}" class="img" alt="Product 1">
    </div>
    <div class="col-md-8">
      <h4>${cartData[i].prodectName}</h4>
      <p>${cartData[i].description}</p>
      <p>Price: $ ${cartData[i].price}</p>
      <input type="number" class="form-control p-0" min="1" id="quantity${cartData[i].id}" placeholder="Quantity">
      <div class="d-flex mt-3">
        <button class="btn btn-primary me-2" onclick="Checkout(${cartData[i].id})">Add to Checkout</button>
        <button class="btn btn-danger" onclick="delet(${cartData[i].id})">Remove from cart</button>
      </div>
    </div>
  </div>
</li>`;
  console.log(cartData[i].id);
}
console.log(cartData)
var cartData_checout = cartData
var cart_product;
var quantity;
var product_id;
var product_name;
var product_description;
var product_price;
var product_img;
var product_id;
var tbody = document.getElementById("tbody");
var checkoutData = [];

function Checkout(id) {
  console.log("Checkout - ID:", id);
  console.log("cartData:", cartData);

  var product = cartData_checout.find((product) => {
    return product.id.toString() === id.toString();
  });

  console.log("Product:", product);

  if (product) {
    console.log("Product found in cartData");
    product_id = product.id.toString();
    quantity = document.getElementById(`quantity${product_id}`).value;
    product_name = product.prodectName;
    product_description = product.description;
    product_price = product.price;
    product_img = product.image;

    if (quantity !== "") {
      cart_product = {
        id: product_id,
        prodectName: product_name,
        description: product_description,
        price: product_price,
        img: product_img,
        p_quantity: quantity,
        total: product_price * quantity,
      };

      checkoutData = JSON.parse(localStorage.getItem("checkoutData")) || [];
      checkoutData.push(cart_product);
      localStorage.setItem("checkoutData", JSON.stringify(checkoutData));
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please choose the quantity",
        footer: '<a href="./index.html">try again</a>',
      });
    }
  } else {
    console.log("Product not found in cartData");
  }

  tbody.innerHTML = "";

  for (var i = 0; i < checkoutData.length; i++) {
    tbody.innerHTML += `
      <tr>
        <td><img src="assets/images/${checkoutData[i].img}" width="50" height="50" alt=""></td>
        <td>${checkoutData[i].prodectName}</td>
        <td>${checkoutData[i].p_quantity}</td>
        <td>$ ${checkoutData[i].price}</td>
        <td>$ ${checkoutData[i].total}</td>
        <td><i class="fa-solid fa-square-xmark" onclick="checkout_delet(${checkoutData[i].id})" style="color: #ff0000;"></i></td>
      </tr>`;
  }
}

const checkout_view = () => {
  checkoutData = JSON.parse(localStorage.getItem("checkoutData")) || [];
  for (var i = 0; i < checkoutData.length; i++) {
    tbody.innerHTML += `
      <tr>
        <td><img src="assets/images/${checkoutData[i].img}" width="50" height="50" alt=""></td>
        <td>${checkoutData[i].prodectName}</td>
        <td>${checkoutData[i].p_quantity}</td>
        <td>$ ${checkoutData[i].price}</td>
        <td>$ ${checkoutData[i].total}</td>
        <td><i class="fa-solid fa-square-xmark" onclick="checkout_delet(${checkoutData[i].id})" style="color: #ff0000;"></i></td>
      </tr>`;
  }
};

function checkout_delet(id) {
  var index = checkoutData.findIndex((product) => {
    return product.id === id.toString();
  });

  if (index !== -1) {
    checkoutData.splice(index, 1);
  } else {
    console.log("Product notfound in checkoutData");
  }

  tbody.innerHTML = "";

  for (var i = 0; i < checkoutData.length; i++) {
    tbody.innerHTML += `
      <tr>
        <td><img src="assets/images/${checkoutData[i].img}" width="50" height="50" alt=""></td>
        <td>${checkoutData[i].prodectName}</td>
        <td>${checkoutData[i].p_quantity}</td>
        <td>$ ${checkoutData[i].price}</td>
        <td>$ ${checkoutData[i].total}</td>
        <td><i class="fa-solid fa-square-xmark" onclick="checkout_delet(${checkoutData[i].id})" style="color: #ff0000;"></i></td>
      </tr>`;
  }
}

function delet(id) {
  var index = cartData.findIndex((product) => {
    return product.id === id.toString();
  });

  if (index !== -1) {
    cartData.splice(index, 1);
    localStorage.setItem("cartData", JSON.stringify(cartData));
    cart.innerHTML = "";

    for (var i = 0; i < cartData.length; i++) {
      cart.innerHTML += `<li class="list-group-item">
    <div class="row">
      <div class="col-md-4">
        <img src="assets/images/${cartData[i].image}" class="img" alt="Product 1">
      </div>
      <div class="col-md-8">
        <h4>${cartData[i].prodectName}</h4>
        <p>${cartData[i].description}</p>
        <p>Price: $ ${cartData[i].price}</p>
        <input type="number" class="form-control p-0" min="1" id="quantity${cartData[i].id}" placeholder="Quantity">
        <div class="d-flex mt-3">
          <button class="btn btn-primary me-2" onclick="Checkout(${cartData[i].id})">Add to Checkout</button>
          <button class="btn btn-danger" onclick="delet(${cartData[i].id})">Remove from cart</button>
        </div>
      </div>
    </div>
  </li>`;
      console.log(cartData[i].img);
    }
  } else {
    console.log("Product not found in cartData");
  }
}

checkout_view();