const isNotNaN = (num) => !isNaN(num);

class Calculator {
  constructor(cmd, numbers) {
    this.cmd = cmd;
    this.numbers = numbers;
    this.result = 0;
    this.calMethods = {
      add: this.add,
      subtract: this.subtract
    };
    this._main();
  }

  _main() {
    // cleanup our input
    this.cleanInput();
    // depending on cmd do calc
    this.calc();
    // logout result
    console.log("Your result is: ", this.result);
    // exit process
    process.exit(0);
  }

  cleanInput() {
    this.numbers = this.numbers
      .map((ele) => Number(ele))
      .filter((ele) => isNotNaN(ele));
  }

  calc() {
    switch (this.cmd) {
      case "add":
        this.add();
        break;

      default:
        throw new Error(this.cmd + " is not a command");
        break;
    }

    // alternative for switch statement :)
    // const calMeth = this.calMethods[this.cmd];

    // if (!calMeth) {
    //   throw new Error("Calc method not defined");
    // }

    // calMeth.call(this);
  }

  add() {
    this.result = this.numbers.reduce((acc, prev) => {
      return acc + prev;
    });
  }

  subtract() {
    this.result = this.numbers.reduce((acc, prev) => {
      return acc - prev;
    });
  }
}

module.exports = Calculator;
