// #region View --------------------------------------

function renderstatic(appId) {
    let myAppcontainer = document.getElementById(appId);

    // Her laver jeg en headline, som skal vise teksten "Ønskeskyen" og tilføjer den til myAppcontainer.
    const myHeadline = document.createElement("h1");
    myHeadline.innerText = "Ønskeskyen";
    myHeadline.id = "myHeadline";
    myAppcontainer.appendChild(myHeadline);

    // Her laver jeg et input felt, som skal bruges til at skrive et ønske i og tilføjer den til myAppcontainer.
    const myInput = document.createElement("input");
    myInput.type = "text";
    myInput.id = "wishInput";
    myInput.placeholder = "Skriv et ønske...";
    myAppcontainer.appendChild(myInput);

    // Her laver jeg en knap, som skal tilføje et ønske, når der klikkes på den og tilføjer den til myAppcontainer.
    const myButton = document.createElement("button");
    myButton.id = "addWishBtn";
    myButton.innerText = "Tilføj Ønske";
    myAppcontainer.appendChild(myButton);

    // Her laver jeg en paragraf, som skal vise teksten "Her er min Ønskeliste" og tilføjer den til myAppcontainer.
    const myParagraph = document.createElement("p");
    myParagraph.id = "wishlistLabel";
    myParagraph.innerText = "Her er min Ønskeliste";
    myAppcontainer.appendChild(myParagraph);

    // Container hvor selve ønskelisten (min wishlist) skal vises.
    const myListContainer = document.createElement("div");
    myListContainer.id = "wishListContainer";
    myAppcontainer.appendChild(myListContainer);

    // Når der klikkes på knappen, tilføjes ønsket.
    myButton.addEventListener("click", function () {
        const value = myInput.value;

        if (value === "") {
            return; // gør ikke noget hvis feltet er tomt.
        }

        console.log(tilfojOnske(value));
        renderList("wishListContainer");

        myInput.value = ""; // her rydder jeg input feltet efter tilføjelsen.
    });

    renderList("wishListContainer"); // her kalder jeg renderList for at vise listen første gang, når siden indlæses.
}


// #endregion View ----------------------------------


