import * as Phaser from "phaser";
import { jpnToRoman } from "./JapaneseRomanRelation";
import { keyToRoman } from "./KeyboardRomanRelation";
import { GetKeyDown } from "./GetKeyDown";
import { JapanseseInputUtility } from "./JapaneseInputUtility";

export class TypingTest extends Phaser.Scene {
    // --------------- Private変数(undifined可) ---------------
    // 画面上に表示するテキストオブジェクト
    private previewText?: Phaser.GameObjects.Text;
    private typingText?: Phaser.GameObjects.Text;
    private typingTextPlaced?: Phaser.GameObjects.Text;

    // キー入力のためのユーティリティ
    private keyDownChecker?: GetKeyDown;

    // 入力されたキーとひらがなの正誤判定のユーティリティ
    private jpnIsCorrectChecker?: JapanseseInputUtility;


    // --------------- Private変数(undifined不可) ---------------
    // タイピング画面に表示するテキスト
    private previewString: string[] = [
        "世界は色に溢れている",
        "やきうのお兄ちゃん",
    ];
    // 入力を受け付けるテキスト
    private typingString: string[] = [
        "せかいはいろにあふれている",
        "やきうのおにいちゃん",
    ];

    // 背景色とフォントスタイル
    private backColor: string = "0x008d00";
    private previewFontStyle: Phaser.Types.GameObjects.Text.TextStyle = { color: "white", fontSize: "60px", fontFamily: 'HG行書体'};
    private typingFontStyle: Phaser.Types.GameObjects.Text.TextStyle = { color: "white", fontSize: "50px", fontFamily: 'HG行書体'};
    private typingPlacedFontStyle: Phaser.Types.GameObjects.Text.TextStyle = { color: "gray", fontSize: "50px", fontFamily: 'HG行書体'};

    // 現在何個目のテキストを表示しているか
    private currentTextNumber: number = 0;
    // 現在何個目の文字を入力しているか
    private currentCharacterNumber: number = 0;


    // --------------- Phaser用メソッド ---------------

    // クラスのメンバ変数の初期化
    init() {
        // キー入力の判定をするユーティリティのインスタンス生成
        this.keyDownChecker = new GetKeyDown(this.input.keyboard);

        // 正誤判定のユーティリティインスタンス生成
        this.jpnIsCorrectChecker = new JapanseseInputUtility();
    } //End_Method

    // アセットのロード
    preload() {
        // 入力時イベント
        this.input.keyboard.on("keydown", () => {
            let keyCode = this.keyDownChecker!.checkPuttingKey(this.input.keyboard);
            console.log(keyToRoman[keyCode!]);

            // 現在入力待ちの文字と同じか
            if(this.typingText!.text[this.currentCharacterNumber] == keyToRoman[keyCode]){
                this.currentCharacterNumber += 1;
                let currentStr = this.typingText!.text;
                // 最後の文字が終了していたら次の文字列へ
                if(this.currentCharacterNumber >= currentStr.length){
                    this.currentTextNumber += 1;
                    this.currentCharacterNumber = 0;
                    
                    // 最後の文字列だったら終了
                    if(this.currentTextNumber >= this.previewString.length){
                        this.scene.start("result");
                    } //End_If

                    // 次の文字列へ
                    let nextStr = this.jpnToRomanTranslate(this.typingString[this.currentTextNumber]);
                    this.typingTextPlaced!.text = nextStr;
                    this.typingText!.text = nextStr;
                    this.previewText!.text = this.previewString[this.currentTextNumber];
                } // そうでなければ文字を暗くして次の文字へ
                else{
                    let str = "";
                    for(let i = 0; i < this.currentCharacterNumber; i += 1){ str += " "; }
                    str += currentStr.substring(this.currentCharacterNumber, currentStr.length);
                    console.log("str : "+str);
                    this.typingText!.text = str;
                } //End_Else 
            } //End_If
        }); //End_Event
    } //End_Method

    // ゲームオブジェクトの描写
    create() {
        this.cameras.main.setBackgroundColor(this.backColor);
        this.previewText = this.add.text(400, 300, this.previewString[0], this.previewFontStyle).setOrigin(0.5, 0.5);
        this.typingTextPlaced = this.add.text(400, 250, this.jpnToRomanTranslate(this.typingString[0]), this.typingPlacedFontStyle).setOrigin(0.5, 0.5);
        this.typingText = this.add.text(400, 250, this.jpnToRomanTranslate(this.typingString[0]) , this.typingFontStyle).setOrigin(0.5, 0.5);
    } //End_Method

    // ゲームの各フレーム更新毎に呼びだされる
    update() {

    } //End_Method

    // --------------- 自作メソッド ---------------

    // ひらがなをローマ字に変換する
    private jpnToRomanTranslate(jpn: string): string{
        let roman = "";
        for(let i = 0; i < jpn.length; ++i){
            roman += jpnToRoman[jpn[i]][0];
        } //End_For
        return roman;
    } //End_Method
} //End_Class

