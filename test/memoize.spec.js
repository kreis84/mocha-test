const { memoize } = require('../src/utils');
var assert = require('assert');
const chai = require('chai')
chai.should()
const sinon = require('sinon')


describe('Memoize decorator', () => {
    it('should return same result as the wrapped function', ()=>{
        const square = (n) => n*n
        const memoizedSquare = memoize(square);
        const rawResult = square(5)
        const memoizedResult = memoizedSquare(5)
        rawResult.should.equal(memoizedResult)
    })

    it('should call the wrapped function after memoized function was called', () => {
        const spy = sinon.spy();
        const memoizedSquare = memoize(spy)
        
        //all three means the same
        assert.equal(spy.notCalled, true)
        spy.notCalled.should.be.true;
        sinon.assert.notCalled(spy)

        const memoizedResult = memoizedSquare(5)
    
        assert.equal(spy.called, true)
    })

    it('shoul call the wrapped function only once if called with the same parameters', () => {
        const square = (n) => n*n
        const spy = sinon.spy(square)
        const memoizedSquare = memoize(spy)

        sinon.assert.notCalled(spy)

        const result1 = memoizedSquare(5)
        const result2 = memoizedSquare(5)
        const result3 = memoizedSquare(5)

        sinon.assert.calledOnce(spy)
        sinon.assert.alwaysCalledWithExactly(spy, 5)

        result1.should.equal(25)
        result2.should.equal(25)
        result3.should.equal(25)

    })

    it('should memoize functions which operate on various number of parameters', () => {

    })
})