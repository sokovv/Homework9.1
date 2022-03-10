class Person {
  constructor(name) {
    this.name = name;
  }

  getAttack(distance) {
    this.distance = distance;
    const attack = (this.attack - (distance * 10)) + 10;
    if (this.stoned === false) {
      this.attack = attack;
    }
    if (this.stoned === true) {
      this.attack = attack - Math.log2(distance) * 5;
    }
    if (distance > 10) {
      this.attack = 0;
    }
  }

  getStoned() {
    return this.stoned;
  }

  setStoned(state) {
    this.stoned = state;
  }

  setAttack(val) {
    this.attack = val;
  }
}

export default Person;
