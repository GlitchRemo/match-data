const fs = require('fs');

const parse = function(lines) {
  return lines.trim().split("\n");
}

const structure = function(words) {
  return words.reduce((log, word) => {
    log[word.slice(0, 4)] = word;
    return log;
  }, {});
}

const merge = function(commonHeadWords, commonTailWords) {
  const structuredCommonHead = structure(commonHeadWords);

  return commonTailWords.map((word) => {
    return structuredCommonHead[word.slice(-4)] + word.slice(0, word.length - 4);
  });
}

const main  = function() {
  const commonTailFileRawContent = fs.readFileSync(process.argv[2], "utf-8");
  const commonHeadFileRawContent = fs.readFileSync(process.argv[3], "utf-8");

  const commonHeadWords = parse(commonHeadFileRawContent);
  const commonTailWords = parse(commonTailFileRawContent);

  merge(commonHeadWords, commonTailWords);
}

const startTime = new Date();
main();
const endTime = new Date();

console.log((endTime - startTime) / 1000);


