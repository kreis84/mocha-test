const { Calculator } = require('../src/calc');
var assert = require('assert');

describe('Calculator', function() {
    it('should do math', function(){
      assert.equal(Calculator.add(2,2), 4);
      assert.equal(Calculator.add(2,5), 8, 'smth');
    });
    // it('should do smth else', function(){
    //     assert.equal(Calculator.add(2,2), 4);
    //     assert.equal(Calculator.div(2,2), 1, 'smth second');
    //   });
  
  });