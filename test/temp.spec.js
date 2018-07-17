const expect = require('chai').expect;
const tempCalc = require('../temp');
const { convertToFfromC, convertToCfromF } = tempCalc;

describe('The best Temperature Calculator evaaaaa', () => {
  it('exists', () => {
    expect(tempCalc).to.be.ok;
  });
  it('is an object', () => {
    expect(typeof tempCalc).to.equal('object');
  });

  describe('F to C function', () => {
    it('exists', () => {
      expect(convertToFfromC).to.be.ok;
    });
    it('is a function', () => {
      expect(typeof convertToCfromF).to.equal('function');
    })
    it('converts from F to C', () => {
      expect(convertToCfromF(32)).to.equal(0);
      expect(convertToCfromF(50)).to.equal(10);
    });
  });

  describe('C to F function', () => {
    it('exists', () => {
      expect(convertToFfromC).to.be.ok;
    });
    it('is a function', () => {
      expect(typeof convertToFfromC).to.equal('function');
    })
    it('converts from C to F', () => {
      expect(convertToFfromC(0)).to.equal(32);
      expect(convertToFfromC(-6.6666666666666666667)).to.equal(20);
    });
  })
})