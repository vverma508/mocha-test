//var expect = require('chai').expect;
var should = require('chai').should();
var util = require('../scripts/util');

describe('tests', function() {

  it('factorial', function(){
       var result = util.factorial(4);
       //expect(result).to.equal(24);
       result.should.equal(24);

  });

});

//should.js     expect.js    aspect.js  
