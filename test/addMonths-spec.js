const chai = require('chai');
const expect = chai.expect;

describe('addMonths', () => {
  it('should populate data for missing months', () => {
    var addMonths = require('../public/src/addMonths');
    expect(addMonths.addMonths('Sun Jan 01 2012 00:00:00 GMT+0000 (GMT Standard Time)', 0, 1)).to.equal('Wed Feb 01 2012 00:00:00 GMT+0000 (GMT Standard Time)');
  });

});


