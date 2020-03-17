import * as Phaser from "phaser";
import { jpnToRoman } from "./JapaneseRomanRelation";

// ひらがなとローマ字の対応が複数あるためそのへんをいい感じにする機能の提供
export class JapanseseInputUtility{
    // ひらがなを1文字くぎりと2文字くぎり("ちゃ"など)で分割したパターンをつくる
    public parseHiraganaSentence(jpn: string): string[]{
        let uni: string = "";
        let bi: string = "";
        let str: string[] = new Array();
        let i = 0;

        while(i < jpn.length){
            uni = jpn[i];
            // とりあえず2文字読ませる
            if(i + 1 < jpn.length){
                bi = jpn[i] + jpn[i + 1];
            } // 例外
            else { bi = ""; }

            // 読んだ2文字が日本語的にOKならそいつを採用
            if(jpnToRoman[bi] !== undefined){
                i += 2;
                str.push(bi);
            } // ガバだったら1文字で対応
            else { 
                i += 1;
                str.push(uni);
            } //End_IfElse
        } //End_While

        return str;
    } //End_Method

    // "ちゃ" の場合と "ち" + "ゃ" の場合などを組み合わせたタイピングリストをつくる
    public constructTypingSentence(hiragana: string[]): string[][]{
        let typing: string[][] = new Array();
        for(let i = 0; i < hiragana.length; ++i){ typing[i] = new Array(); }

        let s: string = "";     // 現在見てるひらがな
    let ns: string = "";    // 1文字先のひらがな("っ"や"ん"の判定に使う)

        for(let i = 0; i < hiragana.length; ++i){
            s = hiragana[i];
            if(i + 1 < hiragana.length){ ns = hiragana[i + 1]; }
            else { ns = ""; }

            // 作業用
            let tmp:string[] = new Array();

            // "ん"の処理
            if(s === "ん"){

            } //End_If
        } //End_For

        return typing;
    } //End_Method

    // // コンストラクタ(Phaserのキーボード入力プラグインをもらう)
    // constructor(keyInputs: Phaser.Input.Keyboard.KeyboardPlugin){
    // } //End_Constructor
} //End_Class