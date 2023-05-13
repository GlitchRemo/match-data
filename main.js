const fs = require('fs');
const {parse} = require('./src/parse.js');
const {Polymorphism} = require('./src/match_data.js');

const main = function() {
  const rawInput1 = fs.readFileSync(process.argv[2], "utf-8");
  const rawInput2 = fs.readFileSync(process.argv[3], "utf-8");

  const input1Content = parse(rawInput1);
  const input2Content = parse(rawInput2);

  const commonHead = new Polymorphism(input2Content);
  const commonTail = new Polymorphism(input1Content);
  const outputContent = Object.values(commonHead.merge(commonTail));
  
  const outputFileName = process.argv[2].match(/(match.*)\d/)[1];
  fs.writeFileSync(`${outputFileName}output.txt`, outputContent.join("\n"));
}

main();