// Phaser3とシーンプログラムのインポート
import * as Phaser from "phaser";
import { Welcome } from "./Typing/Welcome";
import { TypingTest } from "./Typing/TypingGame";
import { Result } from "./Typing/Result";

export var width: number = 800;
export var height: number = 600;

// Phaser3のゲームクラスの記述（Phaser.Gameクラスを継承したMainクラスの記述）
class Main extends Phaser.Game {
  constructor() {

    // Phaser.Gameのコンフィグ
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.WEBGL,
      width: width, // ゲーム横幅
      height: height, // ゲーム縦幅
      parent: "canvas-wrapper",
      dom: { createContainer: true },
      scene: { preload: preload },
    };
    super(config); // Phaser.Gameクラスにコンフィグを渡す

    // シーンにキーを割り振って登録
    this.scene.add("welcome", Welcome, false);
    this.scene.add("typing", TypingTest, false);
    this.scene.add("result", Result, false);

    // シーンをスタート
    this.scene.start("welcome");
  } //End_Constructor
} //End_Class

var GameApp: Phaser.Game;


// ブラウザでDOM描写終了直後に呼び出される
window.onload = () => {
  // Mainクラスのインスタンスを生成（ここで初めてゲームが生成）
  GameApp = new Main();
};

function preload(){
  try{
  let preloadScene = GameApp.scene.getAt(GameApp.scene.getIndex("welcome"));
  //let typingScene = GameApp.scene.getAt(GameApp.scene.getIndex("typing"));
  
  // preloadScene!.load.html("loadhtml","../HTML/hoppii.html");
  // let data = preloadScene!.cache.html.get("loadhtml");
  // alert(data);

  let loginForm = document.createElement("form");
  loginForm.setAttribute("method","POST");
  
  let playerName = document.createElement("input");
  playerName.setAttribute("name","username");
  
  let playerPassword = document.createElement("input");
  playerPassword.setAttribute("type","password");
  playerPassword.setAttribute("name","password");
  //let playerNameDiv = document.createElement("div");
  let submitButton = document.createElement("input");
  submitButton.setAttribute("type","submit");
  submitButton.setAttribute("value","login");

  let logoutForm = document.createElement("form");
  logoutForm.setAttribute("method","GET");
  logoutForm.setAttribute("action","https://naothinthin.xyz/myapp/logout/");

  let logoutButton = document.createElement("input");
  logoutButton.setAttribute("type","submit");
  logoutButton.setAttribute("value","logout");
  
  let hiddenCookie = document.createElement("input");
  hiddenCookie.setAttribute("type","hidden");
  hiddenCookie.setAttribute("name","csrfmiddlewaretoken");
  let v = document.getElementsByName("csrfmiddlewaretoken")[0].getAttribute("value");
  hiddenCookie.setAttribute("value",v!);

  //playerName.setAttribute("style","height:150px");
  //let playerPasswordDiv = document.createElement("div");
  
  //playerNameDiv.appendChild(playerName);
  //playerPasswordDiv.appendChild(playerPassword);
  loginForm.appendChild(hiddenCookie);
  loginForm.appendChild(playerName);
  loginForm.appendChild(document.createElement("br"));
  loginForm.appendChild(playerPassword);
  loginForm.appendChild(document.createElement("br"));
  loginForm.appendChild(submitButton);
  logoutForm.appendChild(logoutButton);
  if(document.getElementById("islogin")!.getAttribute("value") == "True"){
    preloadScene!.add.dom(90,90,logoutForm);
  }
  else{
    preloadScene!.add.dom(90,50,loginForm);
  }
  //alert("ngo");
  }catch(e){
    alert(e);
  }
}


// function addElement(){
//   var newDiv = document.createElement("div");
//   newDiv.id = "ngongo";
//   var newContent = document.createTextNode("Hi ther and greetingas!");
//   newDiv.appendChild(newContent);
//   var currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv,currentDiv);
// }