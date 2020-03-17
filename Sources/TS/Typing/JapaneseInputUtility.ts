import * as Phaser from "phaser";
import { jpnToRoman } from "./JapaneseRomanRelation";
const _ = lodash;

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
                let isValidSingleN; // 一文字でnと判定してもよいか
                // 文末ならば nn or xn
                if(i == hiragana.length){ isValidSingleN = false; }
                // 一つ後ろが母音，ナ行，ヤ行 → nn or xn
                else if(ns == "あ" || ns == "い" || ns == "う" || ns == "え" || ns == "お" || ns == "な" ||ns == "に" || ns == "ぬ" || ns == "ね" || ns == "の" || ns == "や" || ns == "ゆ" || ns == "よ"){
                    isValidSingleN = false;
                } // それ以外なら n でOK
                else { isValidSingleN = false; }

                let nn:string[] = jpnToRoman["ん"];
                for(let i = 0; i < jpnToRoman["ん"].length; ++i){
                    if(!isValidSingleN && jpnToRoman["ん"][i] === "ん"){ continue; }
                    tmp.push(jpnToRoman["ん"][i]);
                } //End_For
            } // "っ"の処理
            else if(s === "っ"){
                
            }
        } //End_For

        return typing;
    } //End_Method

    // // コンストラクタ(Phaserのキーボード入力プラグインをもらう)
    // constructor(keyInputs: Phaser.Input.Keyboard.KeyboardPlugin){
    // } //End_Constructor
} //End_Class