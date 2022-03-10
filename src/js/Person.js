class Person {
  constructor(name) {
    this.name = name;
    this.distance;
  }

  get attack() {
    const attack = (this.newattack - (this.distance * 10)) + 10;
    if (this.stoned === false) {
      return attack;
    }
    if (this.stoned === true) {
      return attack - Math.log2(this.distance) * 5;
    }
    if (this.distance > 10) {
      return 0;
    }
  }

  get stoned() {
    return this.newstoned;
  }

  set stoned(state) {
    this.newstoned = state;
  }

  set attack(val) {
    this.newattack = val;
  }
}

export default Person;
