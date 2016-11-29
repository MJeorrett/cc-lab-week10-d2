var assert = require('assert');
var waterBottle = require('../water_bottle');

describe( "Water Bottle", function() {

  beforeEach( function() {
    waterBottle.volume = 0;
  });

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

  it( "drink should return 10", function() {
    waterBottle.fill();
    var result = waterBottle.drink();
    assert.equal( 10, result );
  });
});
