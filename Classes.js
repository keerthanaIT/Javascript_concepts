// <!-- class constructor -->

class Surgeon {
  constructor(name,department){
    this._name=name;
    this._department = department;
  }
}

 // class instances

 class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}
const surgeonCurry = new Surgeon ('Curry','Cardiovascular');
console.log(surgeonCurry.name);
const surgeonDurant = new Surgeon ('Durant','Orthopedics');
console.log(surgeonDurant.name);


// class Methods
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');




// inheritance
