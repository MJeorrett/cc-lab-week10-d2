var assert = require("assert");

describe("Athlete", function(){
  it( "hydration should start at 100", function(){
    assert.equals( 100, athlete.hydration );
  });
});
