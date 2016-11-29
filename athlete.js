var waterBottle = require("./water_bottle");

var athlete = {
  hydration: 100,
  distance: 0,
  waterBottle: waterBottle,
  run: function() {
    if (this.hydration >= 10){
      this.hydration -= 10;
      this.distance += 10;
    }
  },
  drink: function() {

    for ( var i = 0; i < 4; i++ ) {

      this.hydration += waterBottle.drink();
    }
  }
};

module.exports = athlete;
