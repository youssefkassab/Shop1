var add = document.getElementById("add");
var productName = document.getElementById("product-name");
var price = document.getElementById("price");
var img = document.getElementById("image");
var description = document.getElementById("description");
var data = [];

add.onclick = (event) => {
  event.preventDefault(); // Prevent form submission

  var lastId = 0;
  var oldProductData = JSON.parse(localStorage.getItem("productData"));
  if (oldProductData !== null) {
    lastId = oldProductData[oldProductData.length - 1].id;
  }

  var product = {
    id: lastId + 1,
    name: productName.value,
    description: description.value,
    price: price.value,
    img: img.files[0],
  };

  Swal.fire({
    icon: 'success',
    title: 'Good job!',
    text: 'The product has been added successfully!',
  });

  console.log(product);
  data.push(product);
  localStorage.setItem("productData", JSON.stringify(data));
};