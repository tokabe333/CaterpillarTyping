// Phaser3とシーンプログラムのインポート
import * as Phaser from "phaser";
import { GameState } from "./RPG_Tutorial/mainState";
import { Preload} from "./RPG_Tutorial/Preload";
import { TypingTest } from "./Typing/TypingGame";
import { Result } from "./Typing/Result";


// Phaser3のゲームクラスの記述（Phaser.Gameクラスを継承したMainクラスの記述）
class Main extends Phaser.Game {
  constructor() {

    // Phaser.Gameのコンフィグ
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.WEBGL,
      width: 800, // ゲーム横幅
      height: 600, // ゲーム縦幅
      parent: "canvas-wrapper",
      dom: { createContainer: true },
    };
    super(config); // Phaser.Gameクラスにコンフィグを渡す

    // シーンにキーを割り振って登録
    this.scene.add("preload", Preload, false);
    this.scene.add("typing", TypingTest, false);
    this.scene.add("result", Result, false);

    // シーンをスタート
    this.scene.start("preload");
  } //End_Constructor
} //End_Class

var GameApp: Phaser.Game;


// ブラウザでDOM描写終了直後に呼び出される
window.onload = () => {
  // Mainクラスのインスタンスを生成（ここで初めてゲームが生成）

  GameApp = new Main();
  
};

window.onclick = () => {  
  let ngo = GameApp.scene.getAt(GameApp.scene.getIndex("preload"));
  
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("Hi ther and greetingas!");
  newDiv.appendChild(newContent);
  let ngogo = document.createElement("div");
  ngogo.innerText = "fjdkl;as";
  ngo!.add.dom(300,300, ngogo);
  ngo!.add.dom(10,10,newDiv);
  GameApp.scene.start("preload");
  ngo!.add.dom(300, 300, 'div', 'background-color: lime; width: 220px; height: 100px; font: 48px Arial', 'Phaser');
  alert(ngo!.scene.key);
}


// function addElement(){
//   var newDiv = document.createElement("div");
//   newDiv.id = "ngongo";
//   var newContent = document.createTextNode("Hi ther and greetingas!");
//   newDiv.appendChild(newContent);
//   var currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv,currentDiv);
// }
