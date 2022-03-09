class Person {
  constructor(name) {
    this.name = name;
    this.attack = 100;
    this.distance = 0;
    this.stoned = false;
  }

  getAttack() {
    return this.attack;
  }

  getStoned() {
    return this.stoned;
  }

  setStoned(state) {
    if (state === true) {
      this.stoned = true;
    } else {
      this.stoned = false;
    }
  }

  setAttack(distance) {
    this.distance = distance;
    let attack = (this.attack - (distance * 10)) + 10
    if (this.stoned === false) {
      this.attack = attack
    }
    if (this.stoned === true) {
      this.attack = attack - Math.log2(distance) * 5
    }
    if (distance > 10) {
      this.attack = 0;
    }
  }

}


export default Person;
