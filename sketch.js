var chaoimage,ground,bonneco,bonnecoimage
var path,pathImg


function preload(){
  //imagens pré-carregadas
chaoimage = loadImage ("path.png")
bonnecoimage = loadAnimation ("Runner-1.png","Runner-2.png")

}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
chao = createSprite (160,200,100,100)
chao.addImage (chaoimage)
chao.velocityY = 4
bonneco = createSprite (160,300)
bonneco.addAnimation ("bonnecoimage",bonnecoimage)
bonneco.scale = 0.1





}


function draw() {
  background(0);
  drawSprites()
bonneco.x = World.mouseX

if(chao.y > 400 )
 chao.y = height/2

 

}
