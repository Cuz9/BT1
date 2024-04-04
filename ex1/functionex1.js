function product(productName, productPrice, productQuantity, productColor) {
    this.productName = productName;
    this.productPrice = productPrice;
    this.productQuantity = productQuantity;
    this.productColor = productColor;
}

let productList = [];
let selectedIndex = null;

function displayProductList() {
    let data = ""
    data += "<table>"
    data += "<tr><td colspan='5'><b>Sản Phẩm</b></th><th><span>" + productList.length + " Sản Phẩm</span></th></tr>"
    data += "<tr><td>Tên Sản Phẩm</td><td>Giá Sản Phẩm</td><td>Số Lượng</td><td>Màu Sắc</td><td colspan='2'>Chức năng</td></tr>"
    for (let i = 0; i < productList.length; i++) {
        data += "<tr>";
        data += "<td>" + productList[i].productName + "</td>";
        data += "<td>" + productList[i].productPrice + "</td>";
        data += "<td>" + productList[i].productQuantity + "</td>";
        data += "<td>" + productList[i].productColor + "</td>";
        data += "<td><button onclick='editProduct(" + i + ")'>Edit</button></td>";
        data += "<td><button onclick='deleteProduct(" + i + ")'>Delete</button></td>";
        data += "</tr>";
    }
    data += "</table>"
    document.getElementById("product-list").innerHTML = data
}

function addProduct() {
    let productNameInput = document.getElementById("new-product-name");
    let productPriceInput = document.getElementById("new-product-price");
    let productQuantityInput = document.getElementById("new-product-quantity");
    let productColorInput = document.getElementById("new-product-color");

    let productName = productNameInput.value.trim();
    let productPrice = parseFloat(productPriceInput.value);
    let productQuantity = parseInt(productQuantityInput.value);
    let productColor = productColorInput.value.trim();

    if (productName !== "" && !isNaN(productPrice) && !isNaN(productQuantity) && productColor !== "") {
        let newProduct = new product(productName, productPrice, productQuantity, productColor);
        productList.push(newProduct);
        displayProductList();
        productNameInput.value = "";
        productPriceInput.value = "";
        productQuantityInput.value = "";
        productColorInput.value = "";
    } else {
        alert("Vui lòng điền đầy đủ thông tin sản phẩm.");
    }
}

function editProduct(index) {
    let editDiv = document.getElementById("edit-product-div");
    editDiv.style.display = "block";
    selectedIndex = index;
    document.getElementById("edit-product-name").value = productList[index].productName;
    document.getElementById("edit-product-price").value = productList[index].productPrice;
    document.getElementById("edit-product-quantity").value = productList[index].productQuantity;
    document.getElementById("edit-product-color").value = productList[index].productColor;
}

function saveEdit() {
    let newName = document.getElementById("edit-product-name").value;
    let newPrice = document.getElementById("edit-product-price").value;
    let newQuantity = document.getElementById("edit-product-quantity").value;
    let newColor = document.getElementById("edit-product-color").value;

    if (newName.trim() !== "" && newPrice.trim() !== "" && newQuantity.trim() !== "" && newColor.trim() !== "") {
        productList[selectedIndex].productName = newName;
        productList[selectedIndex].productPrice = newPrice;
        productList[selectedIndex].productQuantity = newQuantity;
        productList[selectedIndex].productColor = newColor;
        displayProductList();
        document.getElementById("edit-product-div").style.display = "none";
    } else {
        alert("Vui lòng nhập đầy đủ thông tin sản phẩm.");
    }
}


function deleteProduct(index) {
    if (confirm("Bạn có chắc chắn muốn xoá sản phẩm này không?")) {
        productList.splice(index, 1);
        displayProductList();
    }
}


displayProductList();