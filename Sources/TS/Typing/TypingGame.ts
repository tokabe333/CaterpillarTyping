import * as Phaser from "phaser";
import { jpnToRoman } from "./JapaneseRomanRelation";
import { keyToRoman } from "./KeyboardRomanRelation";
import { GetKeyDown } from "./GetKeyDown";
import { mojiretsu } from "./TypingMojiretsu";
import { gameFinishTimeMillisecond } from "../main";
import { JapanseseInputUtility } from "./JapaneseInputUtility";

// 可能なタイピングの種類
export interface TypingRoman{roman: string, isTyped: boolean};

// タイピング中 or タイピングするローマ字(打った値によって変わっていく)
interface PreviewRoman{white: string, gray: string};

//各種リザルト
export var missedTypeKind: {[key: string]: number} = {};
export var missedTypeNum: number = 0;
export var correctedTypeNum: number = 0;
export var clearTime: number = -1145141919810;

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

    // 現在どの文字列を参照しているか
    private currentRandomNumber: number = -114514;

    // --------------- Phaser用メソッド ---------------

    // クラスのメンバ変数の初期化
    init() {
        // キー入力の判定をするユーティリティのインスタンス生成
        this.keyDownChecker = new GetKeyDown(this.input.keyboard);

        // 正誤判定のユーティリティインスタンス生成
        this.jpnInputUtil = new JapanseseInputUtility();

        // 終了関係を初期化
        this.currentTextNumber = 0;
        this.currentCharacterNumber = 0;
        this.currentRomanNumber = 0;

        // リザルト関連を初期化
        missedTypeKind = {};
        missedTypeNum = 0;
        correctedTypeNum = 0;
        clearTime = -810931;
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
                    this.currentRandomNumber = Math.floor(Math.random() * mojiretsu.length);
                    
                    // 最後の文字列だったら終了
                    //if(this.currentTextNumber >= this.previewString.length){
                    // 時間で終了させる
                    if(performance.now() - clearTime >= gameFinishTimeMillisecond){
                        this.scene.start("result");
                        clearTime = performance.now() - clearTime;
                        return;
                    } //End_If

                    // 次の文字列
                    this.setHiraganaAndPreviewRoman(mojiretsu[this.currentRandomNumber][1]);
                    let preview: PreviewRoman = this.updatePreviewRoman(true);
                    console.log("splitted:", this.splittedHiragana);
                    console.log("correct:", this.correctInputRomans);
                    console.log();

                    // 次の文字列を表示
                    this.typingTextPlaced!.text = preview.gray;
                    this.typingText!.text = preview.white;
                    this.previewText!.text = mojiretsu[this.currentRandomNumber][0];
                } // そうでなければ文字を暗くして次の文字へ
                else{
                    console.log(this.correctInputRomans);
                    this.updatePreviewRoman(true);
                } //End_Else 

                // 正しく入力できた文字数を記録
                correctedTypeNum += 1;
            } // ガバった文字は記録
            else{
                missedTypeNum += 1;
                let keyS: string = keyToRoman[keyCode];
                if(missedTypeKind[keyS] === undefined) { missedTypeKind[keyS] = 1;}
                else{ missedTypeKind[keyS] += 1; }
            } //End_IfElse
        }); //End_Event
    } //End_Method

    // ゲームオブジェクトの描写
    create() {
        // 最初に表示する文字列
        this.currentRandomNumber = Math.floor(Math.random() * mojiretsu.length);

        // 表示関係
        this.cameras.main.setBackgroundColor(this.backColor);
        this.previewText = this.add.text(400, 300, mojiretsu[this.currentRandomNumber][0], this.previewFontStyle).setOrigin(0.5, 0.5);

        // タイピング用のローマ字関係
        this.setHiraganaAndPreviewRoman(mojiretsu[this.currentRandomNumber][1]);
        let preview: PreviewRoman = this.updatePreviewRoman(false);
        console.log("splitted:", this.splittedHiragana);
        console.log("correct:", this.correctInputRomans);
        console.log();

        this.typingTextPlaced = this.add.text(400, 250, preview.gray, this.typingPlacedFontStyle).setOrigin(0.5, 0.5);
        this.typingText = this.add.text(400, 250, preview.white, this.typingFontStyle).setOrigin(0.5, 0.5);
    
        // 計測開始
        clearTime = performance.now();
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
    private setHiraganaAndPreviewRoman(typingHiragana: string){
        this.splittedHiragana = this.jpnInputUtil!.parseHiraganaSentence(typingHiragana);
        this.correctInputRomans = this.jpnInputUtil!.constructTypingSentence(this.splittedHiragana);
    } //End_Method

    // 現在入力待ちのローマ字が入力されたか
    // return 
    private isCorrectRomanInput(roman: string): boolean{
        // 前の文字が っ でなおかつ，一文字で打っていたらその文字でしかだめ
        if(this.currentCharacterNumber > 0 &&
            this.splittedHiragana[this.currentCharacterNumber - 1] === "っ" &&
            this.currentRomanNumber === 0
        ){
            for(let i = 0; i < this.correctInputRomans[this.currentCharacterNumber - 1].length; i += 1){
                if(this.correctInputRomans[this.currentCharacterNumber - 1][i].roman.length === 1 &&
                    this.correctInputRomans[this.currentCharacterNumber - 1][i].isTyped){
                    let ngo: string = this.correctInputRomans[this.currentCharacterNumber - 1][i].roman;
                    for(let j = 0; j < this.correctInputRomans[this.currentCharacterNumber].length; j += 1){
                        if(this.correctInputRomans[this.currentCharacterNumber][j].roman[0] !== ngo){
                            this.correctInputRomans[this.currentCharacterNumber][j].isTyped = false;
                        } //End_If
                    } //End_For
                } //End_If
            } //End_For
        } //End_If

        let isCorrect: boolean = false;
        for(let i = 0; i < this.correctInputRomans[this.currentCharacterNumber].length; ++i){
            // すでにアウトなら使わない
            if(!this.correctInputRomans[this.currentCharacterNumber][i].isTyped){ continue; }
           
            // 入力されたやつと同じ文字が待ちになっていたら
            if(this.correctInputRomans[this.currentCharacterNumber][i].roman[this.currentRomanNumber] == roman){
                isCorrect = true;
            } // End_If
        } //End_For

        // ん だったら次の文字が子音でもOK (最後の文字じゃなかったら)
        if(this.splittedHiragana[this.currentCharacterNumber] === "ん" &&
            this.currentCharacterNumber < this.splittedHiragana.length - 1 && 
            !this.checkNextHiraganaIsNN(this.splittedHiragana[this.currentCharacterNumber + 1])
            ){
            for(let i = 0; i < this.correctInputRomans[this.currentCharacterNumber + 1].length; ++i){
                if(this.correctInputRomans[this.currentCharacterNumber + 1][i].roman[0] === roman){
                    this.correctInputRomans[this.currentCharacterNumber][0].isTyped = false;
                    this.currentCharacterNumber += 1;
                    this.currentRomanNumber = 0;
                    isCorrect = true;
                    break;
                } //End_If
            } //End_For
        } //End_if  

        // がばってなかったら次の文字にイク
        if(isCorrect){
            // 他のローマ字の入力候補を削除する
            for(let i = 0; i < this.correctInputRomans[this.currentCharacterNumber].length; ++i){
                if(this.correctInputRomans[this.currentCharacterNumber][i].roman[this.currentRomanNumber] != roman){
                    this.correctInputRomans[this.currentCharacterNumber][i].isTyped = false;
                } //End_If
            } //End_For

            //if(nnCorect){ return true; }

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
        //console.log(this.correctInputRomans);
        return isCorrect;
    } //End_Method

    // 画面表示されてるローマ字のうｐだて
    private updatePreviewRoman(setText: boolean): PreviewRoman{
        // 前の文字が n 1回のみで呼ばれた場合
        if(this.currentCharacterNumber > 0 &&
            this.splittedHiragana[this.currentCharacterNumber - 1] === "ん" &&
            this.correctInputRomans[this.currentCharacterNumber - 1][0].isTyped === false){
                this.correctInputRomans[this.currentCharacterNumber - 1][0].roman = "n";
                this.correctInputRomans[this.currentCharacterNumber - 1][0].isTyped = true;
        } //End_If
        
        let gray: string = "";
        let len: number = 0;
        for(let i = 0; i < this.correctInputRomans.length; ++i){
            for(let j = 0; j < this.correctInputRomans[i].length; ++j){
                if(this.correctInputRomans[i][j].isTyped){
                    gray += this.correctInputRomans[i][j].roman;
                    // 灰塗りする文字数カウント
                    if(this.currentCharacterNumber > i){ len += this.correctInputRomans[i][j].roman.length; }
                    else if(this.currentCharacterNumber == i){ len += this.currentRomanNumber; }
                    break;
                } //End_If
            } //End_For
        } //End_For

        let white: string = "";
        for(let i = 0; i < len; ++i){ white += " "; }
        white += gray.substring(white.length, gray.length);

        if(setText){
            this.typingTextPlaced!.text = gray;
            this.typingText!.text = white;
        } //End_If
        return {white, gray};
    } //End_Method

    // nを一つで終わらせていいか
    private checkNextHiraganaIsNN(hiragana: string): boolean{
        return (
            hiragana === "な" || hiragana === "に" || hiragana === "ぬ" || hiragana === "ね" || hiragana === "の" ||
            hiragana === "にゃ" || hiragana === "にゅ" || hiragana === "にょ" ||
            hiragana === "ん" || hiragana === "や" || hiragana === "ゆ" || hiragana === "よ"
        ); // return
    } //End_Method
} //End_Class
