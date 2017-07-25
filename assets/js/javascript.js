function agregarFrutas(){
  var entradaFruta= document.getElementById("entradaFruta").value;/*inicializo mi variable entradaFruta
  tomando como input el contenido del input del HTML llamandolo por su id*/
  if(typeof entradaFruta ==="string"){
    var lista= document.getElementById("lista");//el llamado a la lista del HTML lo meto, la asigno en una variable lista, ahora lista en JS es igual a la lista de HTML
    var node= document.createElement("li")//creo un nodo que tenga el caracter de elemento de lista ordenada con el metodo .createElement
    var textNode= document.createTextNode(entradaFruta);// creo el texto que se le pondrá a ese nodo con el metodo .createTextNode y le digo que ese texto lo agarre de la variable entradaFruta(que es el input que da el usuario en el HTML)

    node.appendChild(textNode);//al nodo le adjunjto el textopara el nodo, con el metodo .appendChild

    lista.appendChild(node);//a la lista le adjunto el nodo que ya viene con todo y texto
  };

}
