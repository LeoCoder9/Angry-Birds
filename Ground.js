class Ground{
    constructor(x,y,width,height){
        var options = {

            isStatic : true
          }
       this.Ground= Bodies.rectangle(x,y,width,height, options); //x,y,w,h     r =20
       this.image = loadImage("base.png")
     this.width = width
     this.height = height  
     World.add(earth,this.Ground);


    }
    display(){
        push()
        imageMode(CENTER);
        fill("darkgreen")
        translate(this.Ground.position.x,this.Ground.position.y )
        rotate(this.Ground.angle)
       
       image(this.image,0,0, this.width,this.height); //x,y,w,h
       pop()
    }
}