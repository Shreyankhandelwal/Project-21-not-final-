var cat, mouse;
var backgroundImg
var catImg, mouseImg;
var catImg2, mouseImg2;
var catImg3, mouseImg3;
var catImg4, mouseImg4;
var edges;

function preload() {
    
    backgroundImg = loadImage("garden.png")

    catImg = loadAnimation("cat1.png")
    mouseImg = loadAnimation("mouse1.png")

    mouseImg2 = loadImage("mouse2.png")
   
    mouseImg3 = loadAnimation("mouse3.png")

    catImg4 = loadImage("cat4.png")
    mouseImg4 = loadAnimation("mouse4.png")

    catImg5 = loadAnimation("cat3.png","cat2.png")

    }

function setup(){
    
    createCanvas(1000,800);

    //tom and jerry sprites
    
    cat = createSprite(800,700,20,10);
    cat.addAnimation("image",catImg);
    cat.scale = 0.1;
  

    mouse = createSprite(100,700,20,10)
    mouse.scale = 0.1;
    mouse.addAnimation("mouse-image",mouseImg);

    edges = createEdgeSprites();

}

function draw() {

    background(backgroundImg);
            

    if(keyDown(LEFT_ARROW)){

        mouse.addAnimation("mouse change",mouseImg3);

        cat.addAnimation("change",catImg5)
        cat.velocityX = -3
    }

    if(keyWentUp(LEFT_ARROW)){
        
        mouse.addAnimation("aa",mouseImg);
        mouse.frameDelay = 25; 
        
        cat.addAnimation("hh",catImg);
        cat.velocityX = 0;
    }
   


    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
                                
        cat.addImage("cat",catImg4);
        mouse.addImage("mouse",mouseImg2);

        cat.VelocityX = 0
        cat.VelocityY = 0
        mouse.VelocityX = 0
        mouse.VelocityY = 0

   
        cat.bounceOff(edges);
        mouse.bounceOff(edges)
           
                }
        

    drawSprites();
}
