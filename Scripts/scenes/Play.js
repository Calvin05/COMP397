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
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            // initialization
            _this._ocean = new objects.Ocean();
            _this._plane = new objects.Plane();
            _this.Start();
            return _this;
        }
        // PUBLIC METHODS
        Play.prototype.Start = function () {
            this._ocean = new objects.Ocean();
            this._plane = new objects.Plane();
            this._plane.position.y = 430;
            this.Main();
        };
        Play.prototype.Update = function () {
            this._ocean.Update();
            this._plane.Update();
        };
        Play.prototype.Main = function () {
            this.addChild(this._ocean);
            this.addChild(this._plane);
            // this.nextButton.on("click", function() {
            //    config.Game.SCENE_STATE = scenes.State.END;
            // });
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map