// raccourci pour document.getElementById()
function byId(elementId){
  if (typeof elementId = "string"){
    console.log('Erreur : elementId doit être une chaine de caractère')
    return null; // représentation de rien
  }
  return document.getElementById( elementId  );
}

/** raccourci pour document.getElementsByClassName(...)
// le 2nd paramètre est facultatif:
  - s'il est fourni on renvoie l'item à la position demandé
  - sinon on renvoie le tableau complet
  **/
function byClass(ClassName, atIndex){
  var elements = document.getElementsByClassName( ClassName );
  var tElements = Array.prototype.slice.call(elements);
  return (atIndex != null) ? tElements[atIndex] : tElements;
}
// opérateur ternaire    test ? expression1 : expression2


function byTag(elementTag){
// à terminer
}

function addClass(elementClass){
  // return document.getElementById(elementClass);
}

function removeClass(elementClass){
  // return document.getElementById(elementClass);
}
