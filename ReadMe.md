# 🐛🐛🐛イモムシプログラミング🐛🐛🐛

## 各環境について
### サーバ
- NginX
- Django
- MySQL
### フロントエンド
- Chrome とか Firefoxあたり想定
- Phaser3 + Typescript2.7(?)
- それ以外はHTML+SCSS+JQuery
<br><br>

## ゲーム部分について
### Phaser3
- なんかWeb系のフレームワークっぽい
- 外人ニキがGitHubで作ってる
- 日本語文献はんにゃぴ…
- ECMAScript2016 があれば動くっぽい
### TypeScript 2.7
- バージョンは2.7が安定してる？
- 2.1以降ならESMAScript2016に対応してる
- 最新は3.8(2019年11月リリース)
<br><br>

## ゲーム部分以外のデザインについて
### HTML5
- 有能
### SCSS
- CSSの拡張した感じのやつ
- ネストしてかけるので便利便利
    - 各項目で自身に一番近い(深い)設定が反映
- コンパイルすると結局CSSになる
- リアルタイムにコンパイルする必要あり
    - 環境設定頑張れ
        - JetBrains 系
        - VS Code 系
        - ATOM 系
### JQuery
- JavaScriptはうんち
- JQueryは脳死で使える所がいい感じ
- なおちんが得意なやつ
- 石津くんと岡村くんはアンチしてる
<br><br>


## 環境構築
### TypeScriptインストール
- npm install -g typescript@2.7.2
### Phaserプロジェクト作成
- npm init
- npm i -D webpack webpack-dev-server awesome-typescript-loader source-map-loader
- npm i -D phaser
- package.json の "scripts" に webpackビルドコマンド追記


## 備忘録
#### TypeScript + Node.js プロジェクトのはじめかた2019
https://qiita.com/notakaos/items/3bbd2293e2ff286d9f49
#### Phaserでブラウザゲー制作 Part.1 環境整備
https://qiita.com/d2cd-ytakada/items/dd4a5bf20d3066bf8c3f

#### Phaserでブラウザゲー制作 Part.2 ジャンピングゲーム
https://qiita.com/d2cd-ytakada/items/79456097c294fb49cf08

#### Phaser3 + Typescriptを使ってRPGゲームの基礎を作ろう！その１
https://magazine.halake.com/entry/phaser-ts-rpg-simple1

#### Phaser3 + Typescriptを使ってRPGゲームの基礎を作ろう！その2
https://magazine.halake.com/entry/phaser-ts-rpg-simple2

#### Phaser3 Documentation
https://photonstorm.github.io/phaser3-docs/