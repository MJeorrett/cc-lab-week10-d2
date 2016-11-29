var waterBottle = require('../water_bottle');
var assert = require('assert');

describe( "Water Bottle", function() {
  it( "should be empty at start", function() {
    assert.equal( 0, waterBottle.volume );
  });
  it( "should go to 100 when filled", function(){
    waterBottle.fill();
    assert.equal( 100, waterBottle.volume );
  });
});
