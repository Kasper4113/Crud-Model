// #region Model --------------------------------------------------------

let wishlist = [
  { wish: "kikkert --placeholder--" },
  { wish: "robotarm --placeholder--" }
];

// Her henter jeg alle mine wishes, som er gemt i arrayet wishlist.
function hentAlle() {
  return wishlist;
}

// her tilføjer jeg et nyt ønske til arrayet wishlist og bruger push til at pushe den til nyt ønske.
function tilfojOnske(wish) {
  const nytOnske = { wish: wish };
  wishlist.push(nytOnske);
  return "ok";
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
  return "ok";
}

// Her sletter jeg et ønske i arrayet wishlist, ved at bruge index som parameter.
function sletOnske(index) {
  if (wishlist[index] === undefined) {
    return "fejl";
  }
  wishlist.splice(index, 1); // her bruger jeg splice til at fjerne et ønske fra arrayet wishlist, ved at bruge index som parameter.
  return "ok";
}

// Tilføjer ønsker
console.log(tilfojOnske("ufo --placeholder--"));
console.log(tilfojOnske("ny bil --placeholder--"));

console.log("Før sletning:");
console.log([...hentAlle()]);

// Fjerner ønsker 
console.log(sletOnske(2)); // den her fjerner "ufo"
console.log(sletOnske(20));

console.log("Efter Slettede Ønsker:");
console.log([...hentAlle()]);

// #endregion Model --------------------------------------------------------