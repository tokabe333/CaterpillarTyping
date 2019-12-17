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
### Phaser 3.21.0
- なんかWeb系のフレームワークっぽい
- 外人ニキがGitHubで作ってる
- 日本語文献はんにゃぴ…
- ECMAScript2016 があれば動くっぽい
### TypeScript 2.7.2
- バージョンは2.7が安定してる？
- 2.1以降ならESMAScript2016に対応してる
- 最新は3.8(2019年11月リリース)
### その他ライブラリ関係
- ts-loader 6.2.1
- source-map-loader 0.2.4
- webpack 4.41.3
- webpack-cli 3.3.10
- webpack-dev-server 3.9.0
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
- npm i -D webpack@4.41 webpack-dev-server@3.9 ts-loader@6.2 source-map-loader@0.2.4
- npm i -D phaser@3.21
- package.json の確認
- tsconfig.json の編集
- webpack.config.js の編集
<br><br>

## Phaserを使った開発について
### 自動コンパイル
1. コマンドプロンプトを立ち上げてルートディレクトリに移動
2. npm run webpack を実行すると勝手に全部のファイルがコンパイルされる
3. コンパイルが終わってもコマンドプロンプトはコマンド待ち状態にならないのでそのまま放置
4. TypeScriptファイルを書き換えるとそのファイルだけ勝手にコンパイルされる(有能)
<br><br>

## 備忘録
#### TypeScript + Node.js プロジェクトのはじめかた2019
https://qiita.com/notakaos/items/3bbd2293e2ff286d9f49

#### Phaserでブラウザゲー制作 Part.1 環境整備
https://qiita.com/d2cd-ytakada/items/dd4a5bf20d3066bf8c3f

#### TypeScriptチュートリアル① -環境構築編-
https://qiita.com/ochiochi/items/efdaa0ae7d8c972c8103

#### Phaserでブラウザゲー制作 Part.2 ジャンピングゲーム
https://qiita.com/d2cd-ytakada/items/79456097c294fb49cf08

#### Phaser3 + Typescriptを使ってRPGゲームの基礎を作ろう！その１
https://magazine.halake.com/entry/phaser-ts-rpg-simple1

#### Phaser3 + Typescriptを使ってRPGゲームの基礎を作ろう！その2
https://magazine.halake.com/entry/phaser-ts-rpg-simple2

#### Webpack・TypeScript入門
https://qiita.com/ririli/items/b4485676cf989dfa3fe7

#### Typescriptのコンパイル環境を作成する(webpack 4.0.0)
https://qiita.com/masterkey1009/items/0d76d5be0a99dfae5485

#### webpack4対応webpack-dev-serverの主要な設定オプション(CLI,webpack.config.js)の意味と挙動
https://qiita.com/riversun/items/d27f6d3ab7aaa119deab

#### 公式ドキュメントに沿ってTypescript + Express + React + Webpack を検証
https://qiita.com/adibozu/items/a01cc79efc7e8c543aa1

#### Phaser3 Documentation
https://photonstorm.github.io/phaser3-docs/