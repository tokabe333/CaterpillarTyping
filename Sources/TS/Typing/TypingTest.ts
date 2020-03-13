import * as Phaser from "phaser";
import { jpnToRoman } from "./JapaneseRomanRelation";
import { keyToRoman } from "./KeyboardRomanRelation";

export class TypingTest extends Phaser.Scene {
    // --------------- Private変数(undifined可) ---------------
    // 画面上に表示するテキストオブジェクト
    private previewText?: Phaser.GameObjects.Text;
    private typingText?: Phaser.GameObjects.Text;

    // --------------- Private変数(undifined不可) ---------------
    // タイピング画面に表示するテキスト
    private previewString: string[] = [
        "世界は色に溢れている",
        "横浜にもこんな選手がいるんだ",
    ];
    // 入力を受け付けるテキスト
    private typingString: string[] = [
        "せかいはいろにあふれている",
        "よこはまにもこんなせんしゅがいるんだ",
    ];

    // 背景色とフォントスタイル
    private backColor: string = "0x008d00";
    private fontStyle: Phaser.Types.GameObjects.Text.TextStyle = { color: "white", fontSize: "60px", fontFamily: 'HG行書体'};

    // 現在何個目のテキストを表示しているか
    private currentTextNumber: number = 0;
    // 現在何個目の文字を入力しているか
    private currentCharacterNumber: number = 0;

    // --------------- Phaser用メソッド ---------------

    // クラスのメンバ変数の初期化
    init() {
        // 入力時イベント
        this.input.keyboard.on("keydown", () => {
            alert("うんち");
        });
        var a = this.input.keyboard;
    } //End_Method

    // アセットのロード
    preload() {

    } //End_Method

    // ゲームオブジェクトの描写
    create() {
        this.cameras.main.setBackgroundColor(this.backColor);
        this.previewText = this.add.text(400, 300, this.previewString[0], this.fontStyle).setOrigin(0.5);
        this.typingText = this.add.text(400, 250, this.typingString[0], this.fontStyle).setOrigin(0.5);
    } //End_Method

    // ゲームの各フレーム更新毎に呼びだされる
    update() {

    } //End_Method

    // --------------- 自作メソッド ---------------
} //End_Class