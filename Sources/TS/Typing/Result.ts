import * as Phaser from "phaser";


export class Result extends Phaser.Scene {
  // --------------- Private変数(undifined可) ---------------
  private startText?: Phaser.GameObjects.Text; // 追加

  // --------------- Private変数(undifined不可) ---------------
  private bkColor: string = '0x00fc93'; // 追加
  private fontStyle: Phaser.Types.GameObjects.Text.TextStyle = { color: 'black', fontSize: '70px', fontFamily:  'HG行書体'}; //追加


  // --------------- Phaser用メソッド ---------------

  // クラスのメンバ変数の初期化
  init() {

  } //End_Method

  // アセットのロード
  preload() {

  } //End_Method

  // ゲームオブジェクトの描写
  create() {
    this.cameras.main.setBackgroundColor(this.bkColor);
    this.startText = this.add.text(400, 250, 'Result的な画面', this.fontStyle).setOrigin(0.5, 0.5);
  } //End_Method

  // ゲームの各フレーム更新毎に呼びだされる
  update() {

  } //End_Method

  // --------------- 自作メソッド ---------------
} //End_Class