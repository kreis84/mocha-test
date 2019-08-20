const { Calculator } = require('../src/calc');
var assert = require('assert');

describe('Calculator', function() {
    it('should do math', function(){
      assert.equal(Calculator.add(2,2), 4);
    });
  });