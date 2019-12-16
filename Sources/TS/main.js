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
// Phaser3とシーンプログラムのインポート
var Phaser = require("phaser");
var mainState_1 = require("./mainState");
var Preload_1 = require("./Preload");
// Phaser3のゲームクラスの記述（Phaser.Gameクラスを継承したMainクラスの記述）
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = this;
        // Phaser.Gameのコンフィグ
        var config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600
        };
        _this = _super.call(this, config) || this; // Phaser.Gameクラスにコンフィグを渡す
        // シーンにキーを割り振って登録
        _this.scene.add("preload", Preload_1.Preload, false);
        _this.scene.add("game", mainState_1.Game, false);
        // シーンをスタート
        _this.scene.start("preload");
        return _this;
    }
    return Main;
}(Phaser.Game));
// ブラウザでDOM描写終了直後に呼び出される
window.onload = function () {
    // Mainクラスのインスタンスを生成（ここで初めてゲームが生成）
    var GameApp = new Main();
};
