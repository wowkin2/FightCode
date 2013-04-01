var currAngle=0;
var scannedRobotX;
var scannedRobotY;
function Robot(robot) {}

// well, we need to do something...
// whenever our robot is idle, this method gets called.
Robot.prototype.onIdle = function(ev) {
    var robot;
    var tmpX, tmpY, tmpAngle;
    robot = ev.robot;
    
    var k = 5;
    if (ev.robot.angle != 90){
      //ev.robot.turn(1); 
    }
    var rA = Math.round(ev.robot.cannonAbsoluteAngle);
    var rX = ev.robot.position.x;
    var rY = ev.robot.position.y;
    var tmpX =(rX-scannedRobotX);
    var tmpY =(rY-scannedRobotY);
    var tmpAngle = Math.round(Math.atan(tmpX/tmpY)*57.295779513);
  
    if(rA/k != tmpAngle/k)
    {    
      //ev.robot.rotateCannon(Math.abs(tmpAngle-rA)/k); 
    }else{
      //ev.robot.ahead(10); 
    }     
};

// this method gets called whenever we hit another robot...
Robot.prototype.onRobotCollision = function(ev) {
	found = true;
};

// this method gets called whenever we hit a wall...
Robot.prototype.onRobotCollision = function(ev) {
    var robot = ev.robot;
    robot.turn(20);
    robot.ahead(100); // trying to run away
};

// yay we see another robot! time to wreak some havoc...
Robot.prototype.onScannedRobot = function(ev) {
    var robot;
    robot = ev.robot;
    robot.fire();
  	//robot.clone(); 
  	scannedRobotX = ev.scannedRobot.position.x;
  	scannedRobotY = ev.scannedRobot.position.y;
  

};

// ohhh... we were hit by another robot...
Robot.prototype.onHitByBullet = function(ev) {
    var robot;
    robot = ev.robot;
    robot.turn(90 - ev.bulletBearing);
};
