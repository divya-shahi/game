// obtain game engine variable
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


// Preload function to declare all the assets before rendering.
function preload() {
  
}

function setup() {
    // create a base canvas
    createCanvas(4096,4096);

    // Initialize game engine and gameworld;
    engine = Engine.create();
    world = engine.world;

    
    

    
}

function draw() {
    background(51);
    
    Engine.update(engine);
   

   
    drawSprites();


}


