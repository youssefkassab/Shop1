var productData = [];
var product ;
var add = document.getElementById("add");
var productName = document.getElementById("product-name");
var price = document.getElementById("price");
var image = document.getElementById("image");
var description = document.getElementById("description");
var data = [];

add.onclick = () => {
  var lastId = 0;
  var oldProductData = JSON.parse(localStorage.getItem("productData"));
  if (oldProductData !== null) {
    lastId = oldProductData[oldProductData.length - 1].id;
  }
  var img_name = image.files[0]

  product = {
    id: lastId + 1,
    name: productName.value,
    description: description.value,
    price: price.value,
    img: img_name.name,
  };
  console.log(product)
  data = oldProductData.concat([product]);
  localStorage.setItem("productData", JSON.stringify(data));
  Swal.fire({
    icon: 'success',
    title: 'Good job!',
    text: 'The product has been added successfully!',
  });
};







const body = document.querySelector('body');
var prodect_name;
var prodect_description;
var prodect_price;
var prodect_img;
var prodect_id;
var cart = document.getElementById("cart-1");
var cart_data = [] ;
var cartData = [];



function AddToCart(id) {
  var index = productData.findIndex((product) => {
    return product.id === id;
  });
  console.log(index)
  console.log(productData);
  prodect_name = productData[index].name;
  prodect_description = productData[index].description;
  prodect_price = productData[index].price;
  prodect_img = productData[index].img;
  prodect_id = productData[index].id;
  console.log(prodect_name)
  var cart_prodect = {
    id: prodect_id ,
    prodectName: prodect_name , 
    description: prodect_description , 
    price : prodect_price , 
    image : prodect_img 
}
 console.log(cart_prodect)
 var cart_data = JSON.parse(localStorage.getItem("cartData")) || [];
 cart_data.push(cart_prodect);
 localStorage.setItem("cartData", JSON.stringify(cart_data));
 console.log(cart_data);
 var cart_num = cart_data.length
 var cart_icon = document.getElementById("cart_icon")
 if (cart_data.length){
   cart_icon.innerText = cart_num
 }
 Swal.fire({
  position: 'top',
  icon: 'success',
  title: 'product added to cart',
  showConfirmButton: false,
  timer: 1500
})}

const shop_open = () => {
  const cart_data_num = localStorage.getItem('cartData');
  if (cart_data_num !== null) {
    const cart_data = JSON.parse(cart_data_num) || [];
    const cart_num = cart_data.length;
    const cart_icon = document.getElementById('cart_icon');
    if (cart_num) {
      cart_icon.innerText = cart_num;
    } else {
      console.log('error');
    }
  }
};
shop_open()