class Box {
    
    constructor(x, y, width, height) {
      //changing the properties
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      //to create rectangle body
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      //adding box to world
      World.add(world, this.body);
    }
    display(){

      //storing value of position and angle in variable
      var pos =this.body.position;
      var angle = this.body.angle;
      //to save new settings
      push();
      translate(pos.x, pos.y);
      //to rotate the object
      rotate(angle);
      //to display rectangle at centre
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width, this.height);
      //to go back to old settings
      pop();
    }
  };