import * as Phaser from "phaser";
import { width, height } from "../main";
import { missedTypeKind, missedTypeNum, correctedTypeNum, clearTime } from "./TypingGame";

export class Result extends Phaser.Scene {
  // --------------- Private変数(undifined可) ---------------
  private resultText?: Phaser.GameObjects.Text; // 追加
  private correctedTypeNumText?: Phaser.GameObjects.Text;
  private missedTypeNumText?: Phaser.GameObjects.Text;
  private typePerSecondText?: Phaser.GameObjects.Text;
  private weekKeyTypeText?: Phaser.GameObjects.Text;

  // --------------- Private変数(undifined不可) ---------------
  private bkColor: string = '0x00fc93'; // 追加
  private fontStyle: Phaser.Types.GameObjects.Text.TextStyle = { color: 'black', fontSize: '70px', fontFamily:  'HG行書体'}; //追加
  private resultFontStyle: Phaser.Types.GameObjects.Text.TextStyle = { color: "black", fontSize: "40px", fontFamily: "HG行書体"};

  // 苦手なキーの上位何文字を表示するか
  private previewWeekTypeNum: number = 4;

  // --------------- Phaser用メソッド ---------------

  // クラスのメンバ変数の初期化
  init() {

  } //End_Method

  // アセットのロード
  preload() {
    console.log("clearTime:"+clearTime);
  } //End_Method

  // ゲームオブジェクトの描写
  create() {
    this.cameras.main.setBackgroundColor(this.bkColor);
    this.resultText = this.add.text(width * 0.5, height * 0.3, 'Result的な画面', this.fontStyle).setOrigin(0.5, 0.5);
    this.correctedTypeNumText = this.add.text(width * 0.5, height * 0.3 + 100, "正しく入力できた文字数 : " + correctedTypeNum, this.resultFontStyle).setOrigin(0.5);
    this.missedTypeNumText = this.add.text(width * 0.5, height * 0.3 + 150, "タイプミス数 : " + missedTypeNum, this.resultFontStyle).setOrigin(0.5);
    this.typePerSecondText = this.add.text(width * 0.5 , height * 0.3 + 200, "タイプ数 / 秒 : " + correctedTypeNum / (clearTime / 1000), this.resultFontStyle).setOrigin(0.5);
    this.weekKeyTypeText = this.add.text(width * 0.5, height * 0.3 + 250, "苦手キー : " + this.checkWeekType(missedTypeKind, this.previewWeekTypeNum), this.resultFontStyle).setOrigin(0.5);
  } //End_Method

  // ゲームの各フレーム更新毎に呼びだされる
  update() {

  } //End_Method

  // --------------- 自作メソッド ---------------
  // 苦手な文字数
  private checkWeekType(missed: {[key: string]: number}, ngo: number): string{
    let str: string = "";
    let list: {roman: string, value: number}[] = new Array();
    for(let keys in missed){
      list.push({roman: keys, value: missed[keys]});
    } //End_For

    // バブルソート
    for(let i = 0; i < list.length; ++i){
      for(let j = 1; j < list.length; ++j){
        if(list[j-1].value < list[j].value){
          let ngo:{roman: string, value: number} = {roman:list[j].roman, value:list[j].value};
          list[j] = {roman:list[j-1].roman, value:list[j-1].value};
          list[j-1] = ngo;
        } // End_If
      } // End_For
    } // End_For

    for(let i = 0; i < ngo; ++i){
      if(i >= list.length) { break; }
      if(list[i].roman == "undefined"){ continue; }
      str += list[i].roman + ",";
    } //End_For

    console.log(list);
    return str.substring(0, str.length - 1);
  } //End_Method
} //End_Class