let boton; 
var R, G, B, Grosor, nuevo;

function setup() {
  createCanvas(1000,600);
  //background(255);
  boton = new Jitter();
  R= 255;
  G= 0;
  B= 0;
  Grosor = 5;
  nuevo = true;
}

function draw() {
  
  if (nuevo == true){
  background(255);
  nuevo = 2;
  }  
  noStroke();
  fill (164,193,232);
  rect (0,0,41,600);
  boton.cuadro(5, 2,2,2);
  boton.cuadro(40, 255,2,2);
  boton.cuadro(75, 2,225,100);
  boton.cuadro(110, 255,255,255);
  boton.cuadro(145, 255,117,20);
  boton.cuadro(180, 2,225,222);
  boton.cuadro(215, 222,23,222);
  boton.cuadro(250, 32,111,223);
  boton.cuadro(285, 248,243,43);
  boton.cuadro(320, 255,20,147);
  boton.cuadro(355, 173,117,71);  
  boton.new(400);
  boton.circulo(520,"+",1);
  boton.circulo(450,"--",-1);
  boton.cuadro(565, R,G,B);
  
  if (Grosor >= 25){
    Grosor = 25;
  }else if (Grosor <1){
    Grosor = 1;
  }
   fill(0);
  textAlign(CENTER);
  text(Grosor,20, 510);
  text("N",20,425);
}

function touchMoved() {

    stroke(R,G,B);
     strokeWeight(Grosor);
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}

class Jitter {
  
  cuadro(y ,R1 , G1, B1) {
    fill(R1, G1 , B1);
    rect (5,y,30,30); 
    
    if (mouseIsPressed && mouseX >= 5 && mouseX <= 35 && mouseY >= y && mouseY <= y+30){
        R= R1;
        G= G1;
        B= B1;
        }
  }
   
  new(y) {
    fill(222, 222 , 222);
    rect (5,y,30,30); 
    
    if (mouseIsPressed && mouseX >= 5 && mouseX <= 35 && mouseY >= y && mouseY <= y+30){
         nuevo = true;
        }
  } 
   
    circulo(y, palabra, sumador) {
    fill(130, 130, 130);
    ellipse (20,y+14,30,30); 
      textSize(30);
       fill(0);
      text(palabra,20,y+24)    
    if (mouseIsPressed && mouseX >= 5 && mouseX <= 35 && mouseY >= y && mouseY <= y+30){
       Grosor = Grosor + sumador;
        }
  }
  }

