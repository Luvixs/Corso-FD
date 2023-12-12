const TitleWrapper = document.getElementById("title-wrapper");
const ButtonDelete = document.getElementById("buttonDelete");
let globalProducts = [];
const url = "https://striveschool-api.herokuapp.com/api/product/"
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzFiOTBkOGEyMDAwMThhNDhhMmIiLCJpYXQiOjE3MDE5NTM5NzgsImV4cCI6MTcwMzE2MzU3OH0.pagOha8hs4KB71g486JYTJNVeSEj2FycNOpiHLdSD_4"
const headers = {
    "Authorization": token,
    "Accept": "application/json",
    "Content-Type": "application/json"
}


const resetProduct = () =>{
    document.getElementById('inputName').value = ''
    document.getElementById('inputPrice').value = ''
    document.getElementById('inputBrand').value = ''
    document.getElementById('inputDescription').value = ''
    document.getElementById('inputImageUrl').value = ''
}

const saveProduct = () => {
    const id = new URLSearchParams(location.search).get("id")
    const newRecord = {
        "name": document.getElementById('inputName').value,
        "brand": document.getElementById('inputBrand').value,
        "description": document.getElementById('inputDescription').value,
        "price": document.getElementById('inputPrice').value,
        "imageUrl": document.getElementById('inputImageUrl').value,
    }
    
    const finalUrl = id !== null ? url + id : url

    fetch(finalUrl, {
        method: id !== null ? "PUT" : "POST",
        headers: headers,
        body: JSON.stringify(newRecord)
    })
    .then((response) => response.json())

}

function EditOrNewHtml() {
    const id = new URLSearchParams(location.search).get("id")
    TitleWrapper.innerHTML = "";
    
    TitleWrapper.innerHTML += (id !== null ? `Edit` : `New`) + ` Product`;
    ButtonDelete.style.display = id !== null ? '' : 'none';
}

const deleteProduct = () => {
    const id = new URLSearchParams(location.search).get("id")
    if (confirm('Confermi la tua scelta')) {
        const finalUrl = url + id
        fetch(finalUrl, {
            method: "DELETE",
            headers: headers
        })
        .then(() => {
            alert("Prodotto rimosso con successo.");
            const link = window.location.href.split('?')[0].replace("back-office","homepage");
            window.location.href = link;
        })
    }
}


async function getProduct(id) {
    const finalUrl = url + id
    const response = await fetch(finalUrl, {
        headers: headers
    })
    return response.json()   
}

async function editingProduct(id) {
    const data = await getProduct(id)
    document.getElementById('inputName').value = data.name
    document.getElementById('inputPrice').value = data.price
    document.getElementById('inputBrand').value = data.brand
    document.getElementById('inputDescription').value = data.description
    document.getElementById('inputImageUrl').value = data.imageUrl
}

window.onload = () => {
    const id = new URLSearchParams(location.search).get("id")
    if(id !== null){
        editingProduct(id)
    }
    EditOrNewHtml();
}
