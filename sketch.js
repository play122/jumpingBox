var canvas;
var music;
var fixedrect1, fixedrect2, fixedrect3, fixedrect4;
var boxsprite;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
boxsprite=createSprite(random(20,750));
boxsprite.shapeColour-"white";


fixedrect1=createSprite(100,580,180,30);
fixedrect1.shapeColour-"pink";

fixedrect2=createSprite(300,580,180,30);
fixedrect2.shapeColour-"green";

fixedrect3=createSprite(500,580,180,30);
fixedrect3.shapeColour-"blue";

fixedrect4=createSprite(700,580,180,30);
fixedrect4.shapeColour-"yellow";

}

function draw() {
      background(rgb(169,169,169));
edges-createEdgeSprites();
boxsprite.bounceoff(edges);

if(fixedrect1.isTouching(boxsprite)&&boxsprite.bounceoff(fixedrect1)){
boxsprite.shapeColour-"pink";
music.play();
}


if(fixedrect2.isTouching(boxsprite)&&boxsprite.bounceoff(fixedrect2)){
    boxsprite.shapeColour-"green";
   
    }


    if(fixedrect3.isTouching(boxsprite)&&boxsprite.bounceoff(fixedrect3)){
        boxsprite.shapeColour-"pink";
        
        }


        if(fixedrect4.isTouching(boxsprite)&&boxsprite.bounceoff(fixedrect4)){
            boxsprite.shapeColour-"pink";
            
            }


if (fixedrect2.isTouching(boxsprite)){
    boxsprite.velocitX=3;
    boxsprite.velocitY=3;
    music.stop();
 }   





drawSprites();

}
