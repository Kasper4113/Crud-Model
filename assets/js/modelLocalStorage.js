// #region Model --------------------------------------------------------

// placeholder ønsker
const standardWishlist = [
  { wish: "kikkert --placeholder--" },
  { wish: "robotarm --placeholder--" }
];

// her har jeg lavet et nyt array, da jeg gerne vil beholde placeholders, men vil ikke have noget hardcoded i min localStorage
let wishlist = [];

// Her henter jeg min wishlist fra local storage.
function hentFraLocalStorage() {
  const gemtData = localStorage.getItem("wishlist");
  if (gemtData) {
    wishlist = JSON.parse(gemtData);
  } else {
    wishlist = standardWishlist;
  }
}

// Gemmer wishlist i localStorage som JSON-tekst.
function gemILocalStorage() {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

// Her henter jeg alle mine wishes, som er gemt i arrayet wishlist.
function hentAlle() {
  return wishlist;
}

// her tilføjer jeg et nyt ønske til arrayet wishlist og bruger push til at pushe den til nyt ønske.
function tilfojOnske(wish) {
  const nytOnske = { wish: wish };
  wishlist.push(nytOnske);
  gemILocalStorage();
  return "ok";
}

// Tjekker om et ønske allerede findes. 
// Trim gør bare at hvis du har fx et mellemrum før eller efter dit ønske, tæller det ikke med.
function findesOnske(wish) {
  const normalized = wish.trim().toLowerCase();
  // toLowerCase gør så "ko" og "Ko" vil tælle som det samme ønske, så den læser altid min string i lower case (små bugstaver)
  return wishlist.some(function (item) {
    return item.wish.trim().toLowerCase() === normalized;
  });
}

// Her finder jeg et ønske i arrayet wishlist, ved at bruge index som parameter.
function findOnske(index) {
  if (wishlist[index] === undefined) {
    return null;
  }
  return wishlist[index];
}

// Her opdaterer jeg et ønske i arrayet wishlist, ved at bruge index som parameter og dataObjekt som det nye ønske.
function opdaterOnske(index, dataObjekt) {
  if (wishlist[index] === undefined) {
    return "fejl";
  }
  wishlist[index] = dataObjekt;
  gemILocalStorage();
  return "ok";
}

// Her sletter jeg et ønske i arrayet wishlist, ved at bruge index som parameter.
function sletOnske(index) {
  if (wishlist[index] === undefined) {
    return "fejl";
  }
  wishlist.splice(index, 1); // her bruger jeg splice til at fjerne et ønske fra arrayet wishlist, ved at bruge index som parameter.
  gemILocalStorage();
  return "ok";
}

// Henter wishlist fra localStorage (eller standard), inden vi bruger den.
hentFraLocalStorage();

// #endregion Model --------------------------------------------------------