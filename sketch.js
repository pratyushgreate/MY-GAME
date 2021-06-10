var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var player1Image2,player2Image2;
var birdImage;
var elephantImage;
function preload(){
 playerImage=loadAnimation("image/man11.png","image/man22.png","image/man33.png","image/man44.png","image/man55.png")
 elephantImage=loadImage("image/elephant.png");
 
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){}
/*  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }*/
