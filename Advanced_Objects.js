
//getter Method


const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if (typeof(this._energyLevel) === 'number'){
      return `My current energy level is ${this._energyLevel}` ;
      
    } else{
      return 'System malfunction: cannot retrieve energy level';
    }
    
  }
  
};
console.log(robot.energyLevel);


// <!-- setters Method -->


const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  
  set numOfSensors(num){
    if(typeof(num) === 'number' && num >= 0){
      this._numOfSensors = num ;
      
    }else{
      return console.log('Pass in a number that is greater than or equal to 0');
    }
    
  }
  
};
robot.numOfSensors = 100;
console.log( robot.numOfSensors);



// <!-- factory functions -->


const robotFactory = (model, mobile) => {
  return {
    model : model,
    mobile: mobile,
    beep () { 
      console.log('Beep Boop'); 
    }
  };
};

const tinCan = robotFactory('P-500', true);
tinCan.beep();



// Property Value Shorthand


function robotFactory(model, mobile){
  return {
    model ,
    mobile ,
    beep() {
      console.log('Beep Boop');
    }
  }
}
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)



// Destructured Assignment
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const { functionality } = robot;

functionality.beep();




