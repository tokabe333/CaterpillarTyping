import * as Phaser from "phaser";

export class TypingTest extends Phaser.Scene {
    // --------------- Private変数(undifined可) ---------------
    // 画面上に表示するテキストオブジェクト
    private previewText?: Phaser.GameObjects.Text;
    private typingText?: Phaser.GameObjects.Text;

    // --------------- Private変数(undifined不可) ---------------
    // タイピング画面に表示するテキスト
    private previewString: string[] = new Array();
    // 入力を受け付けるテキスト
    private typingString: string[] = new Array();

    // 背景色とフォントスタイル
    private backColor: string = "0x008d00";
    private fontStyle: Phaser.Types.GameObjects.Text.TextStyle = { color: "white", fontSize: "10px"};

    // --------------- Phaser用メソッド ---------------

    // クラスのメンバ変数の初期化
    init() {
        // テスト用文章
        this.previewString[0] = "世界は色に溢れている";
        this.typingString[0] = "sekaihaironiahureteiru";
        this.previewString[1] = "横浜にもこんな選手がいるんだ";
        this.typingString[1] = "yokohamanimokonnnasensyugairunda";
    } //End_Method

    // アセットのロード
    preload() {

    } //End_Method

    // ゲームオブジェクトの描写
    create() {
        this.cameras.main.setBackgroundColor(this.backColor);
        this.previewText = this.add.text(10, 200, this.previewString[0], this.fontStyle);
    } //End_Method

    // ゲームの各フレーム更新毎に呼びだされる
    update() {

    } //End_Method

    // --------------- 自作メソッド ---------------
} //End_Class