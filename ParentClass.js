class Base{
    constructor(x,y,width, height, angle){
       var options = {
           friction: 1.2,
           restitution:0.8,
           density:1
       }
       this.body = Bodies.rectangle(x,y,width,height,options)
      this.width = width
      this.height = height 
      this.image = loadImage("bird.png")   
      
       World.add(earth, this.body)

    }
    display(){
        fill("red")
       push()
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        
        imageMode(CENTER)
        image(this.image,0,0,this.width, this.height)
       pop()
    }
}