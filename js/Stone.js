class Stone{
    constructor(x,y,r){
        var options={
            isStatic:false
        }
        this.body=Bodies.circle(x,y,r,options)
        this.image=loadImage("assets/stone.png")
        this.r=60
        
        World.add(world,this.body)
    }
show(){
    var pos=this.body.position
    push()
    rectMode(CENTER)
    noStroke()
    fill("white")
    noTint()
// ellipse(pos.x,pos.y,this.r,this.r)
    image(this.image,pos.x,pos.y,this.r,this.r)
    pop()
}
}
    