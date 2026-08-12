// #region Controller --------------------------------------

function renderList(appId) {
    const myListContainer = document.getElementById(appId);
    myListContainer.innerHTML = ""; // rydder listen, så den ikke dublerer

    const wishArray = hentAlle();

    wishArray.forEach(function (wishObjekt, index) {
        // Her laver jeg en div, som skal indeholde ét wish og én slet knap, og tilføjer den til myListContainer.
        const myWishRow = document.createElement("div");
        myWishRow.className = "wishRow";

        // Her laver jeg en paragraf, som skal vise ønsket og tilføjer den til myWishRow.
        const myWishParagraph = document.createElement("p");
        myWishParagraph.innerText = wishObjekt.wish;
        myWishParagraph.className = "wishText";

        // Her laver jeg en slet knap, som skal slette ønsket, når der klikkes på den og tilføjer den til myWishRow.
        const mySletButton = document.createElement("button");
        mySletButton.innerText = "Houdini Lortet";
        mySletButton.className = "deleteBtn";


        // Her tilføjer jeg en event listener til mySletButton, som kalder removeCallback med index og appId som argumenter, når der klikkes på knappen.
        mySletButton.addEventListener("click", () => removeCallback(index, appId))
        

        // Her appender jeg myWishParagraph, mySletButton og myWishRow til myListContainer, så de vises på siden.
        myWishRow.appendChild(myWishParagraph);
        myWishRow.appendChild(mySletButton);
        myListContainer.appendChild(myWishRow);
    });
}

renderstatic("app");


// Her kalder jeg removeCallback, som sletter ønsket og opdaterer listen.
function removeCallback(index, appId) {
    sletOnske(index);
    renderList(appId);
}


// #endregion Controller --------------------------------------