//
// function test_func(n1,n2) {
//   return n1 * n2
// }

class warrior{
  constructor(strength, defense){
    this.str = strength;
    this.def = defense;
  }

    stateParameters() {
      if(this.str >= 15) {
      alert(`my test_toy object is ${this.def} wide and ${this.str} tall`);
    } else if (this.str <15) {
      alert("less than 15")

    }else {
      alert("no good")
    }
    }
}

class goblin{
  constructor(strength, defense){
    this.str = strength;
    this.def = defense;
  }
}

let hero = new warrior(15,5);
//test.stateParameters();

let monster1 = new goblin(5,5)

alert(`goblin loses ${hero.str - monster1.def} health`)

//alert(test_func(7,3))
