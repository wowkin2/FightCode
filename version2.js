
var canKill;
var toLeft=1;
var toLeftClone=1;
var toBack=true;
function Robot() {
  
}
Robot.prototype.onIdle = function(ev) {
  ev.robot.clone(); 
  if(Math.round(ev.robot.angle) != 0){
    ev.robot.turn(1);
    canKill=false;
  }else{
    if(ev.robot.parentId)
    {
    	ev.robot.ahead(100);
    }else{ 
      ev.robot.back(100);
    }
		canKill=true;        
  }   
  if(canKill==true){
      
    if(ev.robot.parentId)
    {
      ev.robot.rotateCannon(toLeft*1);
    	if(ev.robot.cannonAbsoluteAngle == 330)
      {
        toLeft=-1;
      }
      if(ev.robot.cannonAbsoluteAngle == 210)
      {
        toLeft=1;
      }
    }else{
      ev.robot.rotateCannon(toLeftClone*1);
      if(ev.robot.cannonAbsoluteAngle == 150)
      {
        toLeftClone=-1;
      }
      if(ev.robot.cannonAbsoluteAngle == 30)
      {
        toLeftClone=1;
      }
    }

    ev.robot.fire(); 
  }
};
