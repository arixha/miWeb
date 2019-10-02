

// Variables globales
var colorFondo = 230;
var xTangram = 400;
var amarillo = "#E9C46A";
var naranja = "#F4A261";
var azul = "#264653"
var verde = "#2A9D8F";
var verde2 = "#56BFB2";
var rojo = "#E76F51";
var verdeSuave = "#88D498";

var txHead = 0;
var tyHead = 0;
var rollHead = false;
var dragHead = false;
var offsetXHead = 0;
var offsetYHead = 0;
var headOK = false;

var txEarL = 0;
var tyEarL = 0;
var rollEarL = false;
var dragEarL = false;
var offsetXEarL = 0;
var offsetYEarL = 0;
var EarLOK = false;

var txEarR = 0;
var tyEarR = 0;
var rollEarR = false;
var dragEarR = false;
var offsetXEarR = 0;
var offsetYEarR = 0;
var EarROK = false;


function setup() {
  // Se ajustará al ancho y alto de la pantalla de nuestro navegador
  createCanvas(900, 600);
}


function draw() {
  background(colorFondo);

  //*******************//
  //*** BASE DIBUJO ***//
  //*******************//

  noFill();
  stroke("blanco");
  // Redondeamos los vértices de las formas
  strokeJoin(ROUND);
  strokeWeight(3);
  // Orejas
  triangle(110, 50, 160, 100, 110, 150);
  triangle(210, 50, 160, 100, 210, 150);
  // Cabeza
  quad(160, 100, 210, 150, 160, 200, 110, 150);
  // Cuerpo
  triangle(160, 200, 240, 280, 160, 360);
  triangle(240, 280, 160, 360, 240, 440);
  triangle(160, 360, 160, 440, 240, 440);
  // Cola
  quad(240, 440, 280, 400, 360, 400, 320, 440);



  //***************************//
  //*** BASE DIBUJO TANGRAM ***//
  //***************************//

  // Orejas
  triangle(350 + xTangram, 150, 400 + xTangram, 200, 350 + xTangram, 250);
  triangle(300 + xTangram, 150, 250 + xTangram, 200, 300 + xTangram, 250);
  // Cuerpo
  triangle(160 + xTangram, 200, 240 + xTangram, 280, 160 + xTangram, 360);
  triangle(260 + xTangram, 280, 180 + xTangram, 360, 260 + xTangram, 440);
  triangle(300 + xTangram, 280, 300 + xTangram, 360, 380 + xTangram, 360);
  // Cabeza
  quad(200 + xTangram, 100, 250 + xTangram, 150, 200 + xTangram, 200, 150 + xTangram, 150);
  // Cola
  quad(280 + xTangram, 420, 320 + xTangram, 380, 400 + xTangram, 380, 360 + xTangram, 420);



  //**********************//
  //*** PIEZAS TANGRAM ***//
  //**********************//

  noStroke();
  // Orejas
  fill(rojo);
  triangle(350 + xTangram + txEarL, 150 + tyEarL, 400 + xTangram + txEarL, 200 + tyEarL, 350 + xTangram + txEarL, 250 + tyEarL);
  fill(amarillo);
  triangle(300 + xTangram + txEarR, 150 + tyEarR, 250 + xTangram + txEarR, 200 + tyEarR, 300 + xTangram + txEarR, 250 + tyEarR);
  // Cuerpo
  fill(azul);
  triangle(160 + xTangram, 200, 240 + xTangram, 280, 160 + xTangram, 360);
  fill(verde);
  triangle(260 + xTangram, 280, 180 + xTangram, 360, 260 + xTangram, 440);
  fill(naranja);
  triangle(300 + xTangram, 280, 300 + xTangram, 360, 380 + xTangram, 360);
  // Cabeza
  fill(verde2);
  quad(200 + xTangram + txHead, 100 + tyHead, 250 + xTangram + txHead, 150 + tyHead, 200 + xTangram + txHead, 200 + tyHead, 150 + xTangram + txHead, 150 + tyHead);
  // Cola
  fill(verdeSuave);
  quad(280 + xTangram, 420, 320 + xTangram, 380, 400 + xTangram, 380, 360 + xTangram, 420);


  //*******************************//
  //*** ROLLOVER y CLIC TANGRAM ***//
  //*******************************//

  // Imprimir valores por consola nos ayudará a saber qué valor tenemos en cada momento...
  // console.log(txHead);

  //---- CABEZA ----//

  if (headOK == false) { // Si no hemos colocado la forma en su destino final... 
    if (dist(mouseX, mouseY, 200 + xTangram, 150) < 40) { // Comprobamos que la distancia entre el mouse y el centro de la cabeza sea menor a 40 píxeles, para saber que estamos encima con el ratón
      rollHead = true; // Si se cumple el if ponemos la variable de rollover a true
    } else { // Si no...
      rollHead = false;
    }

    // Si la variable drag es igual a true, es pq a parte de estar encima también hemos clicado en la forma...
    if (dragHead) {
      // Entonces sumamos la posición anterior del mouseX a la actual
      txHead = mouseX + offsetXHead;
      tyHead = mouseY + offsetYHead;
    }

    // Con estos if's detectamos si estamos clicando todavía en la forma y a la vez estamos en su destino final para cambiar el color de fondo a verde (como señal para el usuario de que ha llegado correctamente al destino y puede soltar el clic) 
    if (mouseIsPressed == true) {
      if (dist(txHead, tyHead, -440, 0) < 5) {
        colorFondo = "#C6DABF";
        //console.log("Entro head");
      } else {
        colorFondo = 230;
      }
    }
  }



  //---- OREJA IZQ ----//

  if (EarLOK == false) { // Si no hemos colocado la forma en su destino final... 
    if (dist(mouseX, mouseY, 380 + xTangram, 200) < 30) { // Comprobamos que la distancia entre el mouse y el centro de la cabeza sea menor a 40 píxeles, para saber que estamos encima con el ratón
      rollEarL = true; // Si se cumple el if ponemos la variable de rollover a true
    } else { // Si no...
      rollEarL = false;
    }

    // Si la variable drag es igual a true, es pq a parte de estar encima también hemos clicado en la forma...
    if (dragEarL) {
      // Entonces sumamos la posición anterior del mouseX a la actual
      txEarL = mouseX + offsetXEarL;
      tyEarL = mouseY + offsetYEarL;
    }

    // Con estos if's detectamos si estamos clicando todavía en la forma y a la vez estamos en su destino final para cambiar el color de fondo a verde (como señal para el usuario de que ha llegado correctamente al destino y puede soltar el clic) 
    if (mouseIsPressed == true) {
      if (dist(txEarL, tyEarL, -640, -100) < 5) {
        colorFondo = "#C6DABF";
        console.log("Entro oreja L");
      }
    }
  }


    //---- OREJA DER ----//

    if (EarROK == false) { // Si no hemos colocado la forma en su destino final... 
      if (dist(mouseX, mouseY, 270 + xTangram, 200) < 30) { // Comprobamos que la distancia entre el mouse y el centro de la cabeza sea menor a 40 píxeles, para saber que estamos encima con el ratón
        rollEarR = true; // Si se cumple el if ponemos la variable de rollover a true
      } else { // Si no...
        rollEarR = false;
      }

      // Si la variable drag es igual a true, es pq a parte de estar encima también hemos clicado en la forma...
      if (dragEarR) {
        // Entonces sumamos la posición anterior del mouseX a la actual
        txEarR = mouseX + offsetXEarR;
        tyEarR = mouseY + offsetYEarR;
      }

      // Con estos if's detectamos si estamos clicando todavía en la forma y a la vez estamos en su destino final para cambiar el color de fondo a verde (como señal para el usuario de que ha llegado correctamente al destino y puede soltar el clic) 
      if (mouseIsPressed == true) {
        if (dist(txEarR, tyEarR, -490, -100) < 5) {
          colorFondo = "#C6DABF";
          console.log("Entro oreja R");
        } 
      }
    }


      //---- TODAS LAS FICHAS ----//

      // Diferentes CURSORES dependiendo del estado cuando estamos encima y clicado las formas (drag)
      if (dragHead || dragEarL || dragEarR) {
        cursor(HAND);
      } else if (rollHead || rollEarL || rollEarR) {
        cursor(HAND);
      } else {
        cursor(ARROW);
      }

    } // FIN draw






    function mousePressed() {
      // Si estamos dentro del área de la CABEZA y clicando...
      if (dist(mouseX, mouseY, 200 + xTangram, 150) < 40) {
        dragHead = true; // Pondremos DRAG a true
        // Guardamos la posición anterior del ratón...
        offsetXHead = txHead - mouseX;
        offsetYHead = tyHead - mouseY;
      }

      // Si estamos dentro del área de la OREJA IZQ y clicando...
      if (dist(mouseX, mouseY, 380 + xTangram, 200) < 30) {
        dragEarL = true; // Pondremos DRAG a true
        // Guardamos la posición anterior del ratón...
        offsetXEarL = txEarL - mouseX;
        offsetYEarL = tyEarL - mouseY;
      }

      // Si estamos dentro del área de la OREJA DER y clicando...
      if (dist(mouseX, mouseY, 270 + xTangram, 200) < 30) {
        dragEarR = true; // Pondremos DRAG a true
        // Guardamos la posición anterior del ratón...
        offsetXEarR = txEarR - mouseX;
        offsetYEarR = tyEarR - mouseY;
      }
    }


    function mouseReleased() {
      // Quitamos los draggings porque ya no estamos clicando
      dragHead = false;
      dragEarL = false;
      dragEarR = false;

      // si hemos llegado al destino CABEZA y no estamos clicando...
      if (dist(txHead, tyHead, -440, 0) < 5) {
        headOK = true; // Ponemos a true la variable que indica que ya hemos llegado al destino
        colorFondo = 230; // Ponemos el color de fondo a gris inicial
        cursor(ARROW); // Volvemos a poner el cursor en flecha
      } else { // Si NO hemos llegado al destino cabeza, pero hemos soltado el ratón...
        // Inicializamos las posiciones para que la forma vuelva a su posición inicial
        txHead = 0;
        tyHead = 0;
      }

      // si hemos llegado al destino OREJA IZQ y no estamos clicando...
      if (dist(txEarL, tyEarL, -640, -100) < 5) {
        EarLOK = true; // Ponemos a true la variable que indica que ya hemos llegado al destino
        colorFondo = 230; // Ponemos el color de fondo a gris inicial
        cursor(ARROW); // Volvemos a poner el cursor en flecha
      } else { // Si NO hemos llegado al destino cabeza, pero hemos soltado el ratón...
        // Inicializamos las posiciones para que la forma vuelva a su posición inicial
        txEarL = 0;
        tyEarL = 0;
      }

      // si hemos llegado al destino OREJA DER y no estamos clicando...
      if (dist(txEarR, tyEarR, -490, -100) < 5) {
        EarROK = true; // Ponemos a true la variable que indica que ya hemos llegado al destino
        colorFondo = 230; // Ponemos el color de fondo a gris inicial
        cursor(ARROW); // Volvemos a poner el cursor en flecha
      } else { // Si NO hemos llegado al destino cabeza, pero hemos soltado el ratón...
        // Inicializamos las posiciones para que la forma vuelva a su posición inicial
        txEarR = 0;
        tyEarR = 0;
      }
    }