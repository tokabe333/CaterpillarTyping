import * as Phaser from "phaser";

export class GameState extends Phaser.Scene {
  // --------------- Private変数 ---------------
  private map?: Phaser.Tilemaps.Tilemap;
  private tiles?: Phaser.Tilemaps.Tileset;
  private mapGroundLayer?: Phaser.Tilemaps.StaticTilemapLayer;
  private mapGround: number[][] = new Array();
  private col: number = 15;
  private row: number = 20;

  // --------------- Phaser用メソッド ---------------
  // クラスのメンバ変数の初期化
  init() {
    console.log('Initializing.') 

    for(let i = 0; i < this.col; ++i){
      this.mapGround[i] = new Array();
      for(let j = 0; j< this.row; ++j){
        this.mapGround[i][j] = Math.floor(Math.random() * 2);
      } //End_For
    } //End_For
  } //End_Method

  // アセットのロード
  preload() {
    console.log('Load assets.') 

    // 背景タイル画像の読み込み
    this.load.image("mapTiles", "../../../Images/RPG_Tutorial/map.png");
  } //End_Method

  // ゲームオブジェクトの描写
  create() {
    console.log('Draw objects to canvas.') 

    // タイルマップ生成
    this.map = this.make.tilemap({data: this.mapGround, tileWidth: 40, tileHeight: 40});
    // マップチップ画像を渡す
    this.tiles = this.map.addTilesetImage("mapTiles");
    // レイヤー作成
    this.mapGroundLayer = this.map.createStaticLayer(0, this.tiles, 0, 0);
  } //End_Method

  // ゲームの各フレーム更新毎に呼びだされる
  update() {
    console.log('Call at every frames.') 
  } //End_Method
} //End_Class