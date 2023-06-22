var red_bouton;
var blue_bouton;
var white_bouton;
var black_bouton;

var couleur1 = 255 ;
var couleur2 = 255 ;
var couleur3 = 255 ;


function setup() {
    createCanvas(1000, 1000);
    background(1);
}


function draw() {
  
  fill(255,0,0);
  rect(0,875,125,1000);
  fill(0,255,0);
  rect(125,875,250,1000);
  fill(0,0,255);
  rect(250,875,375,1000);
  fill(255);
  rect(375,875,500,1000);
  fill(1);
  rect(500,875,625,1000);
  fill(255);
  rect(625,875,1000,1000);
  

  drawing();

  touche();
 

}

function mousePressed() {
    fill(couleur1,couleur2,couleur3);
    noStroke();
    ellipse(mouseX,mouseY,50,50);


    red_bouton = dist(mouseX,mouseY,62,938);
    if (red_bouton < 60) {
    couleur1 = 255 ;
    couleur2 = 0 ;
    couleur3 = 0 ;
   }
   green_bouton = dist(mouseX,mouseY,187,938);
    if (green_bouton < 60) {
    couleur1 = 0 ;
    couleur2 = 255 ;
    couleur3 = 0 ;
   }
   blue_bouton = dist(mouseX,mouseY,312,938);
    if (blue_bouton < 60) {
    couleur1 = 0 ;
    couleur2 = 0 ;
    couleur3 = 255 ;
   }
   white_bouton = dist(mouseX,mouseY,437,938);
    if (white_bouton < 60) {
    couleur1 = 255 ;
    couleur2 = 255 ;
    couleur3 = 255 ;
   }
   black_bouton = dist(mouseX,mouseY,562,938);
    if (black_bouton < 60) {
    couleur1 = 0 ;
    couleur2 = 0 ;
    couleur3 = 0 ;
   }
}


function touche() {
    if (key == 'r') {
    couleur1 = 255 ;
    couleur2 = 0 ;
    couleur3 = 0 ;
   }
   green_bouton = dist(mouseX,mouseY,187,938);
    if (key == 'g') {
    couleur1 = 0 ;
    couleur2 = 255 ;
    couleur3 = 0 ;
   }
   blue_bouton = dist(mouseX,mouseY,312,938);
    if (key == 'b') {
    couleur1 = 0 ;
    couleur2 = 0 ;
    couleur3 = 255 ;
   }
   white_bouton = dist(mouseX,mouseY,437,938);
    if (key == 'w') {
    couleur1 = 255 ;
    couleur2 = 255 ;
    couleur3 = 255 ;
   }
   black_bouton = dist(mouseX,mouseY,562,938);
    if (key == 'n') {
    couleur1 = 0 ;
    couleur2 = 0 ;
    couleur3 = 0 ;
   }
}

function drawing() {
  if (mousePressed == true) {
    fill(couleur1,couleur2,couleur3);
    noStroke();
    ellipse(mouseX,mouseY,50,50);
  }
}
