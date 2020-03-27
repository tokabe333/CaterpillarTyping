// Phaser3とシーンプログラムのインポート
import * as Phaser from "phaser";
import { GameState } from "./RPG_Tutorial/mainState";
import { Preload} from "./RPG_Tutorial/Preload";
import { TypingTest } from "./Typing/TypingGame";
import { Result } from "./Typing/Result";
import { DocumentCookies } from "./Util/CookiesUtil";

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
      scene: { preload: preload },
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

function preload(){
  let preloadScene = GameApp.scene.getAt(GameApp.scene.getIndex("preload"));
  let typingScene = GameApp.scene.getAt(GameApp.scene.getIndex("typing"));
  var loginForm = document.createElement("form");
  var playerName = document.createElement("input");
  var playerNameDiv = document.createElement("div");
  var submitButton = document.createElement("button");
  submitButton.setAttribute("type","submit");
  //playerName.setAttribute("style","height:150px");
  loginForm.setAttribute("method","GET");
  loginForm.setAttribute("action","https://naothinthin.xyz");
  var playerPasswordDiv = document.createElement("div");
  var playerPassword = document.createElement("input");
  playerNameDiv.appendChild(playerName);
  playerPasswordDiv.appendChild(playerPassword);
  loginForm.appendChild(playerNameDiv);
  loginForm.appendChild(playerPasswordDiv);
  loginForm.appendChild(submitButton);
  loginForm.innerText = "unchi";

  preloadScene!.add.dom(90,50,loginForm);

  let dcngo = new DocumentCookies();
  alert(dcngo.getItem("csrftoken"));
}

window.onclick = () => {  
  
  //ngo!.add.dom(300, 300, 'div', 'background-color: lime; width: 220px; height: 100px; font: 48px Arial', 'Phaser');
}


// function addElement(){
//   var newDiv = document.createElement("div");
//   newDiv.id = "ngongo";
//   var newContent = document.createTextNode("Hi ther and greetingas!");
//   newDiv.appendChild(newContent);
//   var currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv,currentDiv);
// }
