const cardWrapper = document.getElementById("card");
const url = "https://striveschool-api.herokuapp.com/api/product/"
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzFiOTBkOGEyMDAwMThhNDhhMmIiLCJpYXQiOjE3MDE5NTM5NzgsImV4cCI6MTcwMzE2MzU3OH0.pagOha8hs4KB71g486JYTJNVeSEj2FycNOpiHLdSD_4"
const headers = {
    "Authorization": token,
    "Accept": "application/json",
    "Content-Type": "application/json"
}

async function getProduct(id) {
    const finalUrl = url + id
    const response = await fetch(finalUrl, {
        headers: headers
    })
    return response.json()   
}

async function editingProduct(id) {
    cardWrapper.innerHTML = "";
    const data = await getProduct(id)
    
    cardWrapper.innerHTML += `
    <div class="col-md-4">
        <img src="${data.imageUrl}" class="img-fluid rounded-start" id="inputImageUrl">
    </div>
    <div class="col-md-8">
        <div class="card-body" >
            <h5 class="card-title" id="inputName">${data.name}</h5>
            <p class="card-text" id="inputPrice">${data.price}</p>
            <p class="card-text" id="inputBrand">${data.brand}</p>
            <p class="card-text" id="inputDescription">${data.description}</p>
        </div>
    </div>`;
}

window.onload = () => {
    const id = new URLSearchParams(location.search).get("id")
    if(id !== null){
        editingProduct(id)
    }
   
}

