var balls=[]
var ball


function setup() {
  createCanvas(600,600)
  background(0)
  noFill()
  stroke(70)
for(var angle=0;angle<PI*2;angle+=0.1){
  var x=300+200* cos(angle);
  var y=300+200* sin(angle);
  var ball=new Ball(x,y);
  balls.push(ball);
}


}

function draw() {
  background(0)
  for(var i=0;i<balls.length;i++)
  {
    balls[i].show();
    balls[i].update();
    balls[i].bounce();
  }
}
  function mouseClicked()
  {
    for(var i=0;i<balls.length;i++)
  
    balls[i].checkMouseCollision();
    
  }
  
  