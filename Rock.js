class rocks
{
	constructor(x,y,width, height)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
        this.width=width;
        this.height = height;
		this.image=loadImage("stone.png");
		this.body=Bodies.rectangle(x, y, width, height, options)
		World.add(world, this.body);

	}
	display()
	{
			var rockpos=this.body.position;		
			push()
			translate(rockpos.x, rockpos.y);
			
		
			imageMode(CENTER);
			
			image(this.image, 0,0,this.width, this.height)
			pop()
			
	}

}