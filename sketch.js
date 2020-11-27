//Project 20
var car, wall;
var speed, weight, deformation;

function setup() {
  createCanvas(1600, 400);
  //createSprite(400, 200, 50, 50);
  car = createSprite(50, 200, 50, 50);
  speed = random(55, 90);

  car.velocityX = speed;
  
  weight = random(400, 1500);
  
  wall = createSprite(1000, 200, 60, height/2);//x = 1000; displays the wall sprite(x != 1500).
  
  wall.shapeColor = color(80, 80, 80);
  console.log(wall.shapeColor);
  deformation = (0.5 * weight * speed * speed)/22500;//Calculate the deformation for the car when it collides with the wall using the formula given below.
  console.log(wall.x - car.x <= wall.width/2 + car.width/2);//Always prints false but is in fact true
  console.log(car.isTouching(wall));//Always prints false but is in fact true
}

function draw() {
  background(255,255,255);
  car.x = car.x + speed;

  //console.log(wall.x - car.x <= wall.width/2 + car.width/2);//Always prints false but is in fact true
  //console.log(car.isTouching(wall));//Always prints false but is in fact true*/
  //;
  if (wall.x - car.x <= wall.width/2 + car.width/2) {
    // It is true in the output of my code. 
    car.velocityX = 0;//This statement is not working.
    //When collision happens, based on deformation calculations determine the color of the car as red, yellow or green.*/
    if (deformation < 80) {
      car.shapeColor = "green";
    }

    if (deformation >= 80 && deformation <= 180) {
      car.shapeColor = "yellow";
    }
    
    if (deformation > 180) {
      car.shapeColor = "red";
    }

  }
  drawSprites();
}
//Written by Priyanshu
//Problems(1): Line 31 is not working.