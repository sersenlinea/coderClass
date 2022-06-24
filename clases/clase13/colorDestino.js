"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ColorRandom = /*#__PURE__*/function () {
  function ColorRandom() {
    _classCallCheck(this, ColorRandom);

    this.rgb = [];
    this.rgb.push(this.canalRandom());
    this.rgb.push(this.canalRandom());
  }

  _createClass(ColorRandom, [{
    key: "canalRandom",
    value: function canalRandom() {
      return Math.random() * 256 | 0;
    }
  }, {
    key: "fullRGB",
    value: function fullRGB() {
      return "Color RGB(".concat(this.canalRandom(), ",").concat(this.canalRandom(), ",").concat(this.canalRandom(), ")");
    }
  }]);

  return ColorRandom;
}();

var color1 = new ColorRandom();
for (let index = 0; index < 20; index++) {
  console.log(color1.fullRGB());
}

