"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Phaser = require("phaser");
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Game.prototype.init = function () {
        console.log('Initializing.'); // クラスのメンバ変数の初期化
    };
    Game.prototype.preload = function () {
        console.log('Load assets.'); // アセットのロード
    };
    Game.prototype.create = function () {
        console.log('Draw objects to canvas.'); // ゲームオブジェクトの描写
    };
    Game.prototype.update = function () {
        console.log('Call at every frames.'); // ゲームの各フレーム更新毎に呼びだされる
    };
    return Game;
}(Phaser.Scene));
exports.Game = Game;
