var watterBottle = {
  volume: 0,
  fill: function() {
    this.volume = 100;
  },
  drink: function() {
    this.volume -= 10;
  },
  empty: function() {
    this.volume = 0;
  }
};

module.exports = watterBottle;
