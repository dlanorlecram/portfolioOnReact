import React from 'react'
import chai from 'chai'
import About from './about'

let assert = chai.assert


describe('changeSkill', function() {
  it('remove class at a limit scroll', () => {
    assert.equal(changeSkill(), 4)
  })
});
