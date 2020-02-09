let products = ['Sony Xperia', 'Samsung Galaxy', 'Nokia 6', 'Xiaomi Redmi Note 4', 'Apple iPhone 6S', 'Xiaomi Mi 5s Plus', 'Apple iPhone 8 Plus', 'Fujitsu F-04E', 'Oppo A71'];

function getLocalStorageListProducts() {
    products = JSON.parse(sessionStorage.products);
};

function setLocalStorageListProducts() {
    sessionStorage.products = JSON.stringify(products);
}

function drawTable() {
    getLocalStorageListProducts();
    let str = "";
    for (let i=0;i<products.length;i++){
        str = str +  "<tr>";
        str = str + "<td>" + products[i] + "</td>";
        str = str + "<td>" + "<button onclick='editProduct("+i+")'>Edit</button>" + "</td>";
        str = str + "<td>" + "<button onclick='deleteProduct("+i+")'>Delete</button>" + "</td>";
        str = str + "</tr>";
    }
    document.getElementById('content').innerHTML = str;
}

function editProduct(i) {
    let a = prompt("Enter a new name: ");
    products[i] = a;
    drawTable();
}

function deleteProduct(i) {
    let a = confirm("Do you want to delete " +products[i]+ " ?");
    if(a){
        products.splice(i,1);
    }
    setLocalStorageListProducts();
    drawTable();
    document.getElementById('product-number').innerText = products.length.toString() + " products";
}

function addProduct() {
    let newValue = document.getElementById("add").value;
    products.push(newValue);
    setLocalStorageListProducts();
    drawTable();
    document.getElementById('product-number').innerText = products.length.toString() + " products";
}

function open() {
    drawTable();
    document.getElementById('product-number').innerText = products.length.toString() + " products";
}
