class Polymorphism {
  #dataset;

  constructor(dataset) {
    this.#dataset = dataset;
  }

  #splitByTail(word) {
    const letters = word.split('');
    const tail = letters.slice(-4).join('');
    const head = letters.slice(0, letters.length - 4).join('');
    return [head, tail];
  }

  #splitByHead(word) {
    const letters = word.split('');
    const head = letters.slice(0, 4).join('');
    const tail = letters.slice(4 - letters.length).join('');
    return [head, tail];
  }

  parseCommonTail() {
    return this.#dataset.reduce((log, word) => {
      const [uncommonPart, commonPart] = this.#splitByTail(word);
      log[commonPart] = uncommonPart;
      return log;
    }, {})
  }

  parseCommonHead() {
    return this.#dataset.reduce((log, word) => {
      const [commonPart, uncommonPart] = this.#splitByHead(word);
      log[commonPart] = uncommonPart;
      return log;
    }, {})
  }

  merge(commonTail) {
    const commonHeadDataset = this.parseCommonHead();
    const commonTailDataset = commonTail.parseCommonTail();

    return Object.keys(commonHeadDataset).reduce((mergedLog, commonPart) => {
      mergedLog[commonPart] = commonTailDataset[commonPart] + commonPart + commonHeadDataset[commonPart];
      return mergedLog;
    }, {});
  }
}

exports.Polymorphism = Polymorphism;