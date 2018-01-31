const chai = require('chai');
const expect = chai.expect;

describe('addQuarter', () => {

  it('should populate quarter data for rollup', () => {
    var addQuarter = require('../public/src/addQuarter');
    expect(addQuarter.addQuarter('0')).to.equal('1');
  });

});

