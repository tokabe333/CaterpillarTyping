import * as Phaser from "phaser";

export class Preload extends Phaser.Scene {
  private startText?: Phaser.GameObjects.Text; // 追加

  private bkColor: string = '0x00fc93'; // 追加
  private fontStyle: Phaser.Types.GameObjects.Text.TextStyle = { color: 'black', fontSize: '70px', fontFamily:  'HG行書体'}; //追加

  init() {
    console.log("Preloading");
  } //End_Method
  

  preload () {
    console.log("Load things necessary for Game scene");
    // this.scene.start('game') // 削除
  } //End_Method

  // 
  create() {
    this.cameras.main.setBackgroundColor(this.bkColor);
    this.startText = this.add.text(400, 300, 'すごE', this.fontStyle);
    

    this.startText.setOrigin(0.5);

    // 次のシーンの読み込み処理
    this.startText.setInteractive();
    this.startText.on("pointerdown", () => {
      //alert("げーむすたーと");
      //this.scene.start("game");
      this.scene.start("typing");
    });
  } //End_Method
  
  // ここまで
} //End_Class