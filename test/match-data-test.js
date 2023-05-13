const {deepStrictEqual} = require('assert');
const {describe, it} = require('node:test');
const {Polymorphism} = require('../src/match_data.js');

describe('Polymorphism', () => {

  describe('parseCommonTail', () => {
    it('should seperate common and uncommon part of each entry', () => {
      const commonTail = new Polymorphism(["79okta", "313jstc"]);
      const actual = commonTail.parseCommonTail();
      const expected = {"okta": "79", "jstc": "313"};

      deepStrictEqual(actual, expected);
    });
  });

  describe('parseCommonHead', () => {
    it('should seperate common and uncommon part of each entry', () => {
      const commonHead = new Polymorphism(["jstc331", "okta737"]);
      const actual = commonHead.parseCommonHead();
      const expected = {"okta": "737", "jstc": "331"};

      deepStrictEqual(actual, expected);
    });
  });
});