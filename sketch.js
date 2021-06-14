/*var gosh;
var i;
var block;*/

var wid;
var hig;

var gg;

var state="start";

var panelBlue,panelBlue_;



function preload() {
    panelBlue_=loadAnimation("UI/SciFi/lPanel.png");
}

function setup() {
    createCanvas(windowWidth,windowHeight);

    wid=windowWidth;
    hig=windowHeight;

    panelBlue=createSprite((wid/2),(hig/2),70,70);
    panelBlue.addAnimation("panelBlue",panelBlue_);
    panelBlue.scale=2;

    //gosh=new castle("block","sprite",400,400,"cb");
    gg=new castle("block","any",200,200,"i.png","cb");
    gg.cBlock("ann",300,300,"i.png","ii");
}

function draw() {
    background(255,150,30);

    drawSprites();

    if(state==="start") {

        textSize(20);
        fill("black");
        textFont("Kenney Future");
        text("Start menu",panelBlue.position.x-170,panelBlue.position.y-65);

    }
}