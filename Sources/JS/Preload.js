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
var Preload = /** @class */ (function (_super) {
    __extends(Preload, _super);
    function Preload() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bk_color = '0xe08734'; // 追加
        _this.fontStyle = { color: 'red', fontSize: '70px' }; //追加
        return _this;
        // ここまで
    }
    Preload.prototype.init = function () {
        console.log("Preloading");
    };
    Preload.prototype.preload = function () {
        console.log("Load things necessary for Game scene");
        // this.scene.start('game') // 削除
    };
    // ここから追加
    Preload.prototype.create = function () {
        this.cameras.main.setBackgroundColor(this.bk_color);
        this.startText = this.add.text(400, 300, 'START', this.fontStyle);
        this.startText.setOrigin(0.5);
    };
    return Preload;
}(Phaser.Scene));
exports.Preload = Preload;
