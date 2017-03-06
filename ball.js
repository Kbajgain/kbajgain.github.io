//fgfdgdfgdfgdg
function Ball(x,y){
this.x=x;
this.y=y;

this.vel_x=random(-1,1);
this.vel_y=random(-1,1);

this.acc_x=random(-1,1);
this.acc_y=random(-1,1);

this.ismouseClicked=false;

this.show=function(){
fill(120,155,195)
ellipse(this.x,this.y,10,10)

}
this.update=function(){
  if(this.ismouseClicked){
this.x+=this.vel_x;
this.y+=this.vel_y;

this.vel_x+=this.acc_x;
this.vel_y+=this.acc_x;
  }
}
this.bounce=function(){
  if(this.x<0||this.x>600)
  {
this.vel_x*=-1  
  }
  else if(this.y<0||this.y>600)
  {
  this.vel_y*=-1
}
}
this.checkMouseCollision=function(){
  var d=dist(this.x,this.y,mouseX,mouseY);
  if(d<10){
  this.ismouseClicked=true;
  }

}
}