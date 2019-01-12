(function(){

  var SB, HED, HEN, HEDD, HEND, THED, THEN, THEDD, THEND, THE, PORCENTAJE, AUX_TRANS, SP, DEDUCCION, COMISION, RN, TRN, NETO;

  var calculo = function(){
    PORCENTAJE = (0.08);
    AUX_TRANS = (88211);

         //En esta parte se sacan los valores de los input para almacenarlos en las variables establecidas
    SB = parseInt(document.getElementById("SB").value);
    HED = parseInt(document.getElementById("HED").value);
    HEN = parseInt(document.getElementById("HEN").value);
    HEDD = parseInt(document.getElementById("HEDD").value);
    HEND = parseInt(document.getElementById("HEND").value);

         //En ésta parte se realizan las operaciones para saber el valor total de cada una de las horas extras
    THED = Math.round((SB*1.25*HED)/240);
    THEN = Math.round((SB*1.75*HEN)/240);
    THEDD = Math.round((SB*2*HEDD)/240);
    THEND = Math.round((SB*2.5*HEND)/240);

    THE = Math.round(THED + THEN + THEDD + THEND);

         //se comprueba que el valor de THE sea mayor que dos salarios minimos
      if (SB > 1562484){

       COMISION = parseInt(prompt("Ingrese su comision \n • Si no tiene comision digite 0. \n • Si tiene comision, especifique el valor"));
       RN = parseInt(prompt("Ingrese su recargo nocturno \n • Si no tiene recargo nocturno digite 0. \n • Si tiene recargo nocturno, especifique las horas en numeros"));
       TRN = Math.round((SB*1.35*RN)/240);
       var elementoLi, contenidoLi;
       elementoLi = document.createElement("li");
       contenidoLi = document.createTextNode("Su recargo nocturno es de: " + TRN + " Pesos");
       elementoLi.appendChild(contenidoLi);
       document.getElementById("lista").appendChild(elementoLi);
       THE = Math.round(THED + THEN + THEDD + THEND + TRN);
       DEDUCCION = Math.round(SB + THE + COMISION) * (PORCENTAJE);
       elementoLi = document.createElement("li");
       contenidoLi = document.createTextNode("Su deduccion es de: " + DEDUCCION + " Pesos");
       elementoLi.appendChild(contenidoLi);
       document.getElementById("lista").appendChild(elementoLi);
       NETO = Math.round(SB + THE + COMISION - DEDUCCION);

      } else {

       SP = Math.round(SB+THE) * (PORCENTAJE);
       NETO = Math.round(SB+THE+AUX_TRANS-SP);

      };

    };

    var crearLista = function(){
      var textos = ["Su total de HED es: " + THED +  " Pesos",
      "Su total de HEN es: " + THEN + " Pesos",
      "Su total de HEDD es: " + THEDD + " Pesos",
      "Su total de HEND es: " + THEND + " Pesos",
      "Su total de THE es: " + THE + " Pesos",
      "Su total neto a pagar es de: " + NETO + " Pesos"];
      for (var i = 0; i <= 5; i++) {
        var elemento = document.createElement("li"),
        contenido = document.createTextNode(textos[i]);
        elemento.appendChild(contenido);
        document.getElementById("lista").appendChild(elemento);
      }
      boton.removeEventListener("click" , crearLista);
    };

    var nuevoBoton = function(){
      var nb, boton2, contenido;
      nb = document.createElement("button");
      contenido = document.createTextNode("Borrar");
      nb.appendChild(contenido);
      nb.setAttribute("id" , "clear");
      nb.setAttribute("class" , "boton2");
      document.getElementById("contenedor_resumen").appendChild(nb);
      boton.removeEventListener("click" , nuevoBoton);
      boton2 = document.getElementById("clear");
      boton2.addEventListener("click" , borrar);
      boton2.addEventListener("click" , cambioDeClases2);
    };

    var borrar = function(){
      document.getElementById("SB").value = "";
      document.getElementById("HED").value = "";
      document.getElementById("HEN").value = "";
      document.getElementById("HEDD").value = "";
      document.getElementById("HEND").value = "";
      var lista, hijo, foco, elementoDiv, ul, padre, referencia;
        lista = document.getElementById("contenedor_resumen");
        hijo = document.getElementsByTagName("ul")[0];
        lista.removeChild(hijo);
        elementoDiv = document.getElementById("contenedor_resumen");
        hijo = document.getElementById("clear");
        elementoDiv.removeChild(hijo);
        boton.addEventListener("click" , crearLista);
        boton.addEventListener("click" , nuevoBoton);
        foco = document.getElementById("SB").focus();
        ul = document.createElement("ul");
        ul.setAttribute("id" , "lista");
        ul.setAttribute("class" , "lista");
        padre = document.getElementById("contenedor_resumen");
        referencia = document.getElementById("referencia");
        padre.insertBefore(ul , referencia);
    };

    var cambioDeClases = function(){
      var elemento1, elemento2;
      elemento1 = document.getElementById("contenedor_resumen").className = "resumen_text"
      elemento2 = document.getElementById("referencia").className = "Poculto";
    };

    var cambioDeClases2 = function(){
      elemento1 = document.getElementById("contenedor_resumen").className = "contenedor_resumen";
      elemento2 = document.getElementById("referencia").className = "Pvisible";
    };

  var boton = document.getElementById("boton");
  boton.addEventListener("click" , calculo);
  boton.addEventListener("click" , crearLista);
  boton.addEventListener("click" , nuevoBoton);
  boton.addEventListener("click" , cambioDeClases);

}())
