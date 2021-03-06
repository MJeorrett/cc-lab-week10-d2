var assert = require("assert");
var athlete = require("../athlete");


describe("Athlete", function(){

  beforeEach( function() {
    athlete.hydration = 100;
    athlete.distance = 0;
  })

  it( "hydration should start at 100", function(){
    assert.equal( 100, athlete.hydration );
  });

  it( "should have distance starting at 0", function() {
    assert.equal( 0, athlete.distance );
  });

  it( "run increases distance reduces hydration", function(){
    athlete.run();
    assert.equal(10, athlete.distance );
    assert.equal(90, athlete.hydration );
  })

  it( "athlete does not move when hydration is 0", function() {
    for ( var i = 0; i < 100; i++ ) {
      athlete.run();
    }

    assert.equal( 0, athlete.hydration );
    assert.equal( 100, athlete.distance );
  });

  it( "athlete should increase hydration by drinking from water bottle", function(){
    athlete.waterBottle.fill();
    athlete.drink();
    assert.equal( 140, athlete.hydration );
  });
});
