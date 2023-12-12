const url = 'https://striveschool-api.herokuapp.com/books';

const container = document.getElementById('accordion');
/*
apiResult.forEach((result, idx) => {
  // Create card element
  const card = document.createElement('div');
  card.classList = 'card-body';

  // Construct card content
  const content = `
    <div class="card">
    <div class="card-header" id="heading-${idx}">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapse-${idx}" aria-expanded="true" aria-controls="collapse-${idx}">

                </button>
      </h5>
    </div>

    <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#accordion">
      <div class="card-body">

        <h5>${result.title}</h5>
        <p>${result.description}</p>
        <p>${result.output}</p>
        ...
      </div>
    </div>
  </div>
  `;

  // Append newyly created card element to the container
  container.innerHTML += content;
});*/

fetch(url)
  .then(response => response.json()
  .then(data => populateHomePage(data)))

function populateHomePage(data){
    data.forEach(book => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.style.width = '18rem';
        card.style.margin = '10px';
        card.style.display = 'inline-block';

        let img = document.createElement('img');
        img.src = book.img;
        img.classList.add('card-img-top');
        img.alt = '...';

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        let cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.innerText = book.title;
        let cardText =  document.createElement('p');
        cardText.classList.add('card-text');
        cardText.innerText = book.category + " " + book.price + " " +"euro";  

        let cardLink = document.createElement('a');
        cardLink.classList.add('btn');
        cardLink.classList.add('btn-primary');
        cardLink.innerText = 'Compra';
        cardLink.addEventListener("click", carrello);

        let cardLink2 = document.createElement('a');
        cardLink2.classList.add('btn');
        cardLink2.classList.add('btn-danger');
        cardLink2.innerText = 'Scarta';
        cardLink2.addEventListener("click", scartaCard);
 /*       cardLink2.scartaCard();         */  

        let cardPrice =  document.createElement('p');   
        cardPrice.classList.add('cardPrice');
  /*      cardPrice.innerText = book.price;   */

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardPrice);
        cardBody.appendChild(cardText);
         
        cardBody.appendChild(cardLink);
        cardBody.appendChild(cardLink2);
         

        card.appendChild(img);
        card.appendChild(cardBody);
        

        document.querySelector('#root').appendChild(card);
    })

    let dropdown  = document.createElement('div');
    dropdown.classList.add('btn');
    dropdown.classList.add('btn-secondary');
    dropdown.classList.add('dropdown-toggle');
    dropdown.innerText = 'Carrello';
    let list  = document.createElement('ul');
    list.classList.add('dropdown-menu');
    let listElement  = document.createElement('li');
    listElement.classList.add('dropdown-item');

    document.querySelector('#shopping-cart').appendChild(dropdown);
   



}


function scartaCard() {
  this.parentElement.parentElement.style.display = "none";
}

function carrello(){
  var storedTitles = JSON.parse(localStorage.getItem("card-title") || "[]");
  var title = {
    "card-title": this.parentElement.getElementsByClassName("card-title")[0].innerText
  };

  storedTitles.push(title)
  localStorage.setItem("card-title", JSON.stringify(storedTitles));

  for (var i = 0; i < localStorage.length; i++){
    ( localStorage.getItem(localStorage.key(i)));
}
}


