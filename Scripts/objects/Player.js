"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // PRIVATE INSTANCE MEMBERS
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Player() {
            var _this = _super.call(this, config.Game.ASSETS.getResult("placeholder"), 0, 0, true) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Player.prototype._checkBounds = function () {
        };
        // PUBLIC METHODS
        Player.prototype.Start = function () {
        };
        Player.prototype.Update = function () {
            var mouseX = config.Game.STAGE.mouseX;
            var mouseY = config.Game.STAGE.mouseY;
            this.position = new objects.Vector2(mouseX, mouseY);
        };
        Player.prototype.Reset = function () {
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=Player.js.map