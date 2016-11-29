var assert = require("assert");
var athlete = require("../athlete");

describe("Athlete", function(){
  
  it( "hydration should start at 100", function(){
    assert.equal( 100, athlete.hydration );
  });

  it( "should have distance starting at 0", function() {
    assert.equal( 0, athlete.distance );
  })
});
