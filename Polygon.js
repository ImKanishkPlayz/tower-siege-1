class Polygon extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      imageMode(CENTER);
      image(polygon_img, polygon.position.x, polygon.position.y, 40,40)
      super.display();
    }
  }
  