import * as Phaser from "phaser";
import { jpnToRoman } from "./JapaneseRomanRelation";
import { TypingRoman } from "./TypingGame";


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
    public constructTypingSentence(hiragana: string[]): TypingRoman[][]{
        let typing: TypingRoman[][] = new Array();

        let s: string = "";     // 現在見てるひらがな
        let ns: string = "";    // 1文字先のひらがな("っ"や"ん"の判定に使う)

        for(let i = 0; i < hiragana.length; ++i){
            s = hiragana[i];
            if(i + 1 < hiragana.length){ ns = hiragana[i + 1]; }
            else { ns = ""; }

            // 作業用
            let tmp: TypingRoman[] = new Array();

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
                for(let i = 0; i < nn.length; ++i){
                    if(!isValidSingleN && nn[i] === "n"){ continue; }
                    tmp.push({roman: nn[i], isTyped: true});
                } //End_For
            } // "っ"の処理
            else if(s === "っ"){
                let ltu:string[] = jpnToRoman["っ"];
                let nexts:string[] = jpnToRoman[ns];
                let hash:{[key: string]:boolean} = {};
                // 次の文字の子音
                for(let nnn = 0; nnn < nexts.length; nnn += 1){ hash[nexts[nnn][0]] = true; }
                for(let h in hash){ tmp.push({roman: h, isTyped: true}); }
                // 元の"っ"の入力
                for(let l in ltu){ tmp.push({roman: ltu[l], isTyped: true}); }
            } // "ちゃ"などの2文字のやーつ
            else if(s.length == 2){
                // 元々の入力を追加
                for(let i = 0; i < jpnToRoman[s].length; ++i){ tmp.push({roman: jpnToRoman[s][i], isTyped:true}); }
                // "ち"+"ゃ"のように分割する
                for(let i = 0; i < jpnToRoman[s[0]].length; ++i){
                    for(let j = 0; j < jpnToRoman[s[1]].length; ++j){
                        tmp.push({roman: jpnToRoman[s[0]][i] + jpnToRoman[s[1]][j], isTyped: true});
                    } //End_For
                } //End_For
            } //それ以外の場合はそのままでOK
            else{
                for(let i = 0; i < jpnToRoman[s].length; ++i){ tmp.push({roman: jpnToRoman[s][i], isTyped: true}); }
            } //End_IfElse
            typing.push(tmp);
        } //End_For

        return typing;
    } //End_Method

    // // コンストラクタ(Phaserのキーボード入力プラグインをもらう)
    // constructor(keyInputs: Phaser.Input.Keyboard.KeyboardPlugin){
    // } //End_Constructor
} //End_Class