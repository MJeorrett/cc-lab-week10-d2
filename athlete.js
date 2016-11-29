var athlete = {
  hydration: 100,
  distance: 0,
  run: function() {
    if (this.hydration >= 10){
      this.hydration -= 10;
      this.distance += 10;
    }
  }
};

module.exports = athlete;
