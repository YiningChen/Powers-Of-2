function Tile(position, value, score) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;
  this.currentview      = (Math.random() > .5 || value == 2) ? 'value' : 'expon';
  this.view             = (this.currentview == 'value') ? String(value) : exponentView(value);

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

function exponentView(value) {
  return  "<p>2" + String(Math.log2(value)).sup() + "</p>";
}
Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};

