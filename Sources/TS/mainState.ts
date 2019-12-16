/// <reference path="../../../TypingGame/phaser/node_modules/phaser/typescript/phaser.d.ts"/>

class MainState extends Phaser.State {
    constructor() {
        super();
    }

    // init() -> preload() -> create()の順に呼び出され、
    // update()がメインループとなる

    init() {
        console.log("init()");
    }

    // おもにリソースファイルのダウンロードを行う
    preload() {
        console.log("preload()");
    }

    // おもにゲームオブジェクト関連の初期化を行う
    create() {
        console.log("create()");
    }

    // メインループ
    update() {
        console.log("update()");
    }
}

export {MainState};