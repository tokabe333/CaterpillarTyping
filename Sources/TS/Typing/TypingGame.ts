import * as Phaser from "phaser";
import { jpnToRoman } from "./JapaneseRomanRelation";
import { keyToRoman } from "./KeyboardRomanRelation";
import { GetKeyDown } from "./GetKeyDown";
import { JapanseseInputUtility } from "./JapaneseInputUtility";

// 可能なタイピングの種類
export interface TypingRoman{roman: string, isTyped: boolean};

// ゲー無
export class TypingTest extends Phaser.Scene {
    // --------------- Private変数(undifined可) ---------------
    // 画面上に表示するテキストオブジェクト
    private previewText?: Phaser.GameObjects.Text;
    private typingText?: Phaser.GameObjects.Text;
    private typingTextPlaced?: Phaser.GameObjects.Text;

    // キー入力のためのユーティリティ
    private keyDownChecker?: GetKeyDown;

    // 入力されたキーとひらがなの正誤判定のユーティリティ
    private jpnInputUtil?: JapanseseInputUtility;


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
    // 現在入力している文字の中で何文字目か
    private currentRomanNumber: number = 0;
    // 現在の文章に対して，これまで入力した正解キー
    private typedKeysFromCurrentText: string = "";

    // 現在表示している日本語を1文字or2文字で分割したやつ "や","きゅ","う","み","ん"
    private splittedHiragana: string[] = new Array();
    // ↑のひらがなをもとに作成した正解のローマ字入力パターン
    private correctInputRomans: TypingRoman[][] = new Array();


    // --------------- Phaser用メソッド ---------------

    // クラスのメンバ変数の初期化
    init() {
        // キー入力の判定をするユーティリティのインスタンス生成
        this.keyDownChecker = new GetKeyDown(this.input.keyboard);

        // 正誤判定のユーティリティインスタンス生成
        this.jpnInputUtil = new JapanseseInputUtility();
    } //End_Method

    // アセットのロード
    preload() {
        // キー入力時イベント
        this.input.keyboard.on("keydown", () => {
            let keyCode = this.keyDownChecker!.checkPuttingKey(this.input.keyboard);
            console.log(keyToRoman[keyCode!]);

            // 現在入力待ちの文字と同じか
            //if(this.typingText!.text[this.currentCharacterNumber] == keyToRoman[keyCode]){
            if(this.isCorrectRomanInput(keyToRoman[keyCode])){
                // 最後の文字が終了していたら次の文字列へ
                if(this.currentCharacterNumber >= this.correctInputRomans.length){
                    this.currentTextNumber += 1;
                    this.currentCharacterNumber = 0;
                    this.currentRomanNumber = 0;
                    
                    // 最後の文字列だったら終了
                    if(this.currentTextNumber >= this.previewString.length){
                        this.scene.start("result");
                    } //End_If

                    // 次の文字列
                    let nextStr = this.setHiraganaAndPreviewRoman(this.typingString[this.currentTextNumber]);
                    console.log("splitted:", this.splittedHiragana);
                    console.log("correct:", this.correctInputRomans);
                    console.log();

                    // 次の文字列を表示
                    this.typingTextPlaced!.text = nextStr;
                    this.typingText!.text = nextStr;
                    this.previewText!.text = this.previewString[this.currentTextNumber];
                } // そうでなければ文字を暗くして次の文字へ
                else{
                    let str = "";
                    let currentStr = this.typingText!.text;
                    for(let i = 0; i < this.currentCharacterNumber; i += 1){ str += " "; }
                    str += currentStr.substring(this.currentCharacterNumber, currentStr.length);
                    this.typingText!.text = str;
                } //End_Else 
            } //End_If
        }); //End_Event
    } //End_Method

    // ゲームオブジェクトの描写
    create() {
        // 表示関係
        this.cameras.main.setBackgroundColor(this.backColor);
        this.previewText = this.add.text(400, 300, this.previewString[0], this.previewFontStyle).setOrigin(0.5, 0.5);

        // タイピング用のローマ字関係
        let preview: string = this.setHiraganaAndPreviewRoman(this.typingString[0]);
        console.log("splitted:", this.splittedHiragana);
        console.log("correct:", this.correctInputRomans);
        console.log();

        this.typingTextPlaced = this.add.text(400, 250, preview, this.typingPlacedFontStyle).setOrigin(0.5, 0.5);
        this.typingText = this.add.text(400, 250, preview, this.typingFontStyle).setOrigin(0.5, 0.5);
    } //End_Method

    // ゲームの各フレーム更新毎に呼びだされる
    update() {

    } //End_Method

    // --------------- 自作メソッド ---------------

    // ひらがなをローマ字に変換する
    private jpnToRomanTranslate(jpn: string[]): string{
        let roman = "";
        for(let i = 0; i < jpn.length; ++i){
            roman += jpnToRoman[jpn[i]][0];
        } //End_For
        return roman;
    } //End_Method

    // jpnInputUtilで分割されたひらがなを元に初期表示用のローマ字列を生成する
    private splittedHiraganaToViewingRoman(hiragana: string[]): string{
        let str: string = "";
        for(let i = 0; i < hiragana.length; ++i){
            str += jpnToRoman[hiragana[i]][0];
        } //End_For
        return str;
    } //End_Method

    // jpnInputUtilを使って次の入力文字の正解を作っておく
    // returnは初期表示用ローマ字
    private setHiraganaAndPreviewRoman(typingHiragana: string): string{
        this.splittedHiragana = this.jpnInputUtil!.parseHiraganaSentence(typingHiragana);
        this.correctInputRomans = this.jpnInputUtil!.constructTypingSentence(this.splittedHiragana);
        let previewRoman:string = this.splittedHiraganaToViewingRoman(this.splittedHiragana);

        console.log("correctInputRomans↓");
        console.log(this.correctInputRomans);
        return previewRoman;
    } //End_Method

    // 現在入力待ちのローマ字が入力されたか
    // return 
    private isCorrectRomanInput(roman: string): boolean{
        let isCorrect:boolean = false;
        for(let i = 0; i < this.correctInputRomans[this.currentCharacterNumber].length; ++i){
            // すでにアウトなら使わない
            if(!this.correctInputRomans[this.currentCharacterNumber][i].isTyped){ continue; }
           
            // 入力されたやつと同じ文字が待ちになっていたら
            if(this.correctInputRomans[this.currentCharacterNumber][i].roman[this.currentRomanNumber] == roman){
                isCorrect = true;
            } 
        } //End_For

        // がばってなかったら次の文字にイク
        if(isCorrect){
            // 他のローマ字の入力候補を削除する
            for(let i = 0; i < this.correctInputRomans[this.currentCharacterNumber].length; ++i){
                if(this.correctInputRomans[this.currentCharacterNumber][i].roman[this.currentRomanNumber] != roman){
                    this.correctInputRomans[this.currentCharacterNumber][i].isTyped = false;
                } //End_If
            } //End_For

            this.currentRomanNumber += 1;
            // 入力中のひらがなが打ち終わっていたら次のひらがな
            let isRomaned = false;
            for(let i = 0; i < this.correctInputRomans[this.currentCharacterNumber].length; ++i){
                if(this.correctInputRomans[this.currentCharacterNumber][i].isTyped &&
                    this.correctInputRomans[this.currentCharacterNumber][i].roman[this.currentRomanNumber] === undefined){
                        this.currentRomanNumber = 0;
                        this.currentCharacterNumber += 1;
                        break;
                } //End_If
            } //End_For
        } //End_If

        console.log("isCorrect:"+isCorrect+" currCharNum:"+this.currentCharacterNumber+" currRomaNum:"+this.currentRomanNumber);
        console.log(this.correctInputRomans);
        return isCorrect;
    } //End_Method

    // 画面表示されてるローマ字のうｐだて
    private updatePreviewRoman(){
        let gray: string = "";
        for(let i = 0; i < this.correctInputRomans.length; ++i){
            for(let j = 0; j < this.correctInputRomans[i].length; ++j){
                if(this.correctInputRomans[i][j].isTyped){
                    gray += this.correctInputRomans[i][j];
                    break;
                } //End_If
            } //End_For
        } //End_For

        let white: string = "";
    } //End_Method
} //End_Class

