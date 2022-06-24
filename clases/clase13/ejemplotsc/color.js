var Color = /** @class */ (function () {
    function Color() {
        var _this = this;
        this.getColor = function () {
            return "rgb(".concat(_this.color, ")");
        };
        this.color = "".concat(this.colorAl(), "-").concat(this.colorAl(), "-").concat(this.colorAl());
    }
    Color.prototype.colorAl = function () {
        return Math.floor(Math.random() * 255);
    };
    return Color;
}());
for (var index = 0; index < 10; index++) {
    var color = new Color();
    console.log(color.getColor());
}
