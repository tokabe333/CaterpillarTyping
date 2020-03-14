// Phaser3とシーンプログラムのインポート
import * as Phaser from "phaser";
import { GameState } from "./RPG_Tutorial/mainState";
import { Preload} from "./RPG_Tutorial/Preload";
import { TypingTest } from "./Typing/TypingGame";


// Phaser3のゲームクラスの記述（Phaser.Gameクラスを継承したMainクラスの記述）
class Main extends Phaser.Game {
  constructor() {

    // Phaser.Gameのコンフィグ
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.WEBGL,
      width: 800, // ゲーム横幅
      height: 600, // ゲーム縦幅
      parent: "canvas-wrapper",
    };
    super(config); // Phaser.Gameクラスにコンフィグを渡す

    // シーンにキーを割り振って登録
    this.scene.add("preload", Preload, false);
    this.scene.add("game", GameState, false);
    this.scene.add("typing", TypingTest, false);
    // シーンをスタート
    this.scene.start("preload");
  }
}

// ブラウザでDOM描写終了直後に呼び出される
window.onload = () => {

  // Mainクラスのインスタンスを生成（ここで初めてゲームが生成）
  const GameApp: Phaser.Game = new Main();
};