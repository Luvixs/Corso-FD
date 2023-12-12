const url = "https://api.pexels.com/v1/search?query="

const headers = {"Authorization": "UmcYet2O8LxlFAuAKiafDkk4FtSzqJVbpR9irhbPhSpYC9E5QTUtPz4n"}

//fetch url + ggg, headers

//response in  json 

//per ogni foto card bootstrap

function getImg(query){
    fetch(url + query, {
        headers: headers
    })
    .then(
    (response)=>
     response.json()
    )
    .then ((data) => {
       createCards(data.photos)
    })
    
}

function createCards(photos){
    let row = document.getElementById("imgCards")
    row.innerHTML = ''
    photos.forEach(element => {
        let newCol = ` <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img src=${element.src.small} style="width:100%";>
        
          <div class="card-body">
            <h5 class="card-title">Lorem Ipsum</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  View
                </button>
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  Edit
                </button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div> ` 
      row.innerHTML += newCol
    });
}

function searchImg(){
    const query= document.getElementById("search").value 
    getImg(query)
}