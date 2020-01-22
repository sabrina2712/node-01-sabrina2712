const { name: appName } = require("./package.json");

const Calculator = require("./lib/calculate");

const args = process.argv.slice(2);
// [,,...args] = process.argv

if (args.includes("--help")) {
  console.log(`${appName}:
Commands:
add: adds all number arguments
subtract: subtracts all number arguments
  `);
}

const [cmd, ...numbers] = args;

new Calculator(cmd, numbers);
// switch (cmd) {
//   case "add":
//     console.log(add(numbers));
//     process.exit();
//     break;

//   default:
//     break;
// }
