/* eslint-env node, mocha */

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

describe('Lucky Numbers Module', () => {
  const luckyNumbers = require('../index');

  describe('#luckyNumber', () => {
    const num = luckyNumbers.luckyNumber();

    it('should return a number that is at least 1', () => {
      return expect(num).to.be.at.least(1);
    });

    it('should return a number that is at most 100', () => {
      return expect(num).to.be.at.most(100);
    });
  });

  describe('#luckyNumberPromised', () => {
    const num = luckyNumbers.luckyNumberPromised();

    it('should return a number that is at least 1', () => {
      return expect(num).to.eventually.be.at.least(1);
    });

    it('should return a number that is at most 100', () => {
      return expect(num).to.eventually.be.at.most(100);
    });
  });
});