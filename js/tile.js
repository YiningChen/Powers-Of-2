function Tile(position, value, score) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;
  this.view             = (Math.random() > .5) ? String(value || 2) : "\<p\>2" + String(Math.log2(value)).sup() + "\</p\>"

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
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
