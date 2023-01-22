const { assert } = require('chai');
const { fetchMyIP } = require('../iss');

describe('fetchMyIP', () => {
  it('parse IP using JSON and passes it through callback as 2nd arg', (asyncOutput) => {

    assert.equal(asyncOutput(fetchMyIP()), 'IP: 76.70.114.179', 'these booleans are equal.');

  });

  
  // it('passes error to callback if it occurs when req\'ing IP data', (asyncOutput) => {
  //   assert.isFalse(asyncOutput(fetchMyIP), 'error caught!');
  // });
    
});

function asyncOutput(data) { 
  return data;
}