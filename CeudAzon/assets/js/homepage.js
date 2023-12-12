const productWrapper = document.getElementById("product-wrapper");
let globalProducts = [];
const url = "https://striveschool-api.herokuapp.com/api/product/"
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzFiOTBkOGEyMDAwMThhNDhhMmIiLCJpYXQiOjE3MDE5NTM5NzgsImV4cCI6MTcwMzE2MzU3OH0.pagOha8hs4KB71g486JYTJNVeSEj2FycNOpiHLdSD_4"
const headers = {
    "Authorization": token,
    "Accept": "application/json",
    "Content-Type": "application/json"
}

const getProducts = () => {
    fetch(url, {
        method: "GET",
        headers: headers
    })
    .then(response => response.json())
    .then(data => {
        populateHomePage(data)
        globalProducts = data;
    })
}

function goToEditProduct(id) {
    let link = window.location.href.replace("homepage","back-office") + "?id="+id;
    window.location.href = link;
}

function goToDetails(id) {
    let link = window.location.href.replace("homepage","details") + "?id="+id;
    window.location.href = link;
}

function populateHomePage(data) {
    productWrapper.innerHTML = "";
    data.forEach(product => {
        productWrapper.innerHTML += `
            <div class="col">
            <div class="card shadow-sm h-100 ">
                <img src="${product.imageUrl}" class="img-fluid card-img-top pt-3" alt="${product.name}">
                <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text badge rounded-pill bg-dark mb-2">${product.brand}</p>
                <p class="card-text badge rounded-pill bg-dark mb-2">${product.description}</p>
                <p class="fs-4">${product.price}€</p>
                <div>
                    <button class="btn btn-warning" onclick="goToEditProduct('${product._id}')">Modifica</button>
                    <button class="btn btn-info" onclick="goToDetails ('${product._id}')">
                        Scopri di più
                    </button>
                </div>
                </div>
            </div>
            </div>`;
    });
}

window.onload = () => {
    getProducts();
}