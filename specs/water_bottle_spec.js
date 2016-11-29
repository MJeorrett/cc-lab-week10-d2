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

  it( "should go down by 10 when drank", function() {
    waterBottle.fill();
    waterBottle.drink();
    assert.equal( 90, waterBottle.volume );
  });

  it( "should go to 0 when emptied", function() {
    waterBottle.fill();
    waterBottle.empty();
    assert.equal( 0, waterBottle.volume );
  });

  it( "should not go below 0 when drunk", function() {
    waterBottle.drink();
    waterBottle.drink();
    assert.equal( 0, waterBottle.volume );
  })
});
