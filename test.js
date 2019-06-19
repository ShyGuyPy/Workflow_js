//
// function test_func(n1,n2) {
//   return n1 * n2
// }

class test_toy{
  constructor(height, width){
    this.height = height;
    this.width = width;
  }

    stateParameters() {
      alert(`my test_toy object is ${this.width} wide and ${this.height} tall`);
    }
}

let test = new test_toy(10,12);

test.stateParameters();

//alert(test_func(7,3))
