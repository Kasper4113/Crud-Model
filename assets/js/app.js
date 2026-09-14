// #region Model Code

const url = 'https://dummyjson.com/products';

async function fetchData() {
    let myData = [];

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Fejlbesked " + response.status);
        }

        const json = await response.json();
        console.log(json);

        // DummyJSON products returnerer et objekt med et "products"-array i sig
        myData = json.products;

    } catch (error) {
        console.error("Fejl: noget gik galt i fetchData:", error.message);
        myData = [{ 
            thumbnail: "assets/img/errordog.jpg", 
            title: "Kunne ikke hente produkter" 
        }];

    } finally {
        console.log("finally her som løber uanset success eller fejl.");
    }

    return myData;
}

// #endregion


// #region Controller

// ------HER HENTER JEG DATA------
// her kalder jeg loadProducts, som henter data fra DummyJSON og render galleriet.
async function loadProducts() {
    const myData = await fetchData();
    renderGallery(myData);
}

// #endregion


// #region View Code

// her er min view kode hvor jeg genere elementerne hvor mit data fra api'et bliver vist i galleriet.
const gallery = document.createElement('section');
gallery.classList.add('gallery');
document.body.appendChild(gallery);

const reloadButton = document.createElement('button');
reloadButton.textContent = 'Hent produkter igen';
reloadButton.addEventListener('click', loadProducts);
document.body.appendChild(reloadButton);

// her er min renderGallery funktion som render galleriet med data fra DummyJSON.
function renderGallery(dataArray) {
    gallery.innerHTML = ''; // ryd galleriet før nyt indhold sættes ind

    dataArray.forEach(item => {
        const card = createCard(item);
        gallery.appendChild(card);
    });
}

// her er min createCard funktion som generere et kort for hvert produkt i galleriet.
function createCard(item) {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = item.thumbnail;
    img.alt = item.title;
    card.appendChild(img);

    const headline = document.createElement('h2');
    headline.textContent = item.title;
    card.appendChild(headline);

    if (item.price !== undefined) {
        const price = document.createElement('p');
        price.textContent = `$${item.price}`;
        card.appendChild(price);
    }

    return card;
}

// #endregion


// Start op ved side-load
loadProducts();