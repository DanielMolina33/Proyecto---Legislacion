var calc = function() {

 var SB, HED, HEN, HEDD, HEND, THED, THEN, THEDD, THEND, THE, PORCENTAJE, AUX_TRANS, SP, DEDUCCION, COMISION, RN, TRN, NETO;

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
    document.getElementById("v6").value = ("Su recargo nocturno es de: " + TRN + " Pesos");
    THE = Math.round(THED + THEN + THEDD + THEND + TRN);
    DEDUCCION = Math.round(SB + THE + COMISION) * (PORCENTAJE);
    document.getElementById("v7").value = ("Su deduccion es de:" + DEDUCCION + " Pesos");
    NETO = Math.round(SB + THE + COMISION - DEDUCCION);

   } else {

    SP = Math.round(SB+THE) * (PORCENTAJE);
    NETO = Math.round(SB+THE+AUX_TRANS-SP);

   };

      //Se envian los valores de las operaciones THEN, THEN, THEDD, THEND Y THE a las cajas de texto HTML para mostrar los resultados
   document.getElementById("v1").value = ("Su total de HED es: " + THED + " Pesos");
   document.getElementById("v2").value = ("Su total de HEN es: " + THEN + " Pesos");
   document.getElementById("v3").value = ("Su total de HEDD es: " + THEDD + " Pesos");
   document.getElementById("v4").value = ("Su total de HEND es: " + THEND + " Pesos");
   document.getElementById("v5").value = ("Su total de THE es: " + THE + " Pesos");
   document.getElementById("v8").value = ("Su total neto a pagar es de: " + NETO + " Pesos");

  return;
};
