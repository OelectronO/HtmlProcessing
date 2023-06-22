var rad = 50;

var ballX = 400;
var ballY = 700;

var ballSpeed = 5;
var ballMove = 1;

var keeperX = 400;
var keeperY = 200;

var keeperSpeed = 5;
var keeperMove = 1;

var mode = "mode_aim";

var score = 0;

var ball_stop = 0;
var goal = 0;

let ball;
let keeper;


function preload() {
  ball = loadImage('balle.png');
  keeper = loadImage('pingouin.png');
}

function setup(){
    
    createCanvas(800, 800);
}


function draw() {
  /*le fond du screen*/
  noStroke();
  fill("#01FAE4");
  rect(0,0,800,150);
  fill("#2EFA04");
  rect(0,150,800,150);
  rect(0,350,800,800);
  fill(255,255,255);
  rect(0,300,800,50);
  fill(0);
  
  
  ball_draw();
  if(mode == "mode_aim"){
   ball_move();  
  }
  keeper_draw();
  keeper_move();
  
  ball_throw();
  
  ball_collison();
  keeper_collision_ball();
  
  set_goal();
  stop_ball();
  set_score();

  touche();


}

function ball_move(){
    
    
    ballX = ballX + ( ballSpeed * ballMove );
    
    if (ballX >= width-rad || ballX <= rad) {
    ballMove *= -1;
}

}

function keeper_move(){
    
    
    keeperX = keeperX - ( keeperSpeed * keeperMove );
    
    if (keeperX >= width-rad || keeperX <= rad) {
        keeperMove *= -1;
    }
}
function ball_throw(){
    
    if(mode == "mode_throw" && ballMove == 1){
        ballY = ballY - ( ballSpeed * ballMove );
    }
    if(mode == "mode_throw" && ballMove == -1){
        ballY = ballY + ( ballSpeed * ballMove );
    }
    
    
}

function ball_collison(){
  if (ballY <= 150){
    ballY = 700;
    mode = "mode_aim";
    goal++;
}
}

function ball_draw(){
    imageMode(CENTER);
    ball.resize(0, 100);
    image(ball, ballX, ballY);
}

function keeper_draw(){
    imageMode(CENTER);
    keeper.resize(0, 100);
    image(keeper, keeperX, keeperY);
}
function keeper_stop(){
  ballY = 700;
  ball_stop++;
}

function keeper_collision_ball(){
  
  var collision_test = dist(ballX,ballY,keeperX,keeperY); 
  if(collision_test <= 75){
    keeper_stop();
    mode = "mode_aim";
  }
}

function set_goal(){
  fill("#FA1D00");
  textSize(50);
  text("But "+goal,600,100);
  
  }
  
function stop_ball(){
  fill("#FA1D00");
  textSize(50);
  text("Arrêt "+ball_stop,100,100);
}

function set_score(){
  fill("#FA1D00");
  textSize(50);
  text("Score "+score,350,100);
  score=goal-ball_stop;
}

function touche() {
  
  if(key == ' '){
    mode = "mode_throw";
  }
}