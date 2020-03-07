import * as Phaser from "phaser";

// 自キャラの動作状態
type WalkAnimState = 'walk_front' | 'walk_back' | 'walk_left' | 'walk_right' | ''

export class GameState extends Phaser.Scene {
  // --------------- Private変数(undifined可) ---------------
  private map?: Phaser.Tilemaps.Tilemap;
  private tiles?: Phaser.Tilemaps.Tileset;
  private mapGroundLayer?: Phaser.Tilemaps.StaticTilemapLayer;
  private hero?: Phaser.GameObjects.Sprite;
  private heroAnimState?: WalkAnimState;
  private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;

  // --------------- Private変数(undifined不可) ---------------
  private mapGround: number[][] = new Array();
  private col: number = 15;
  private row: number = 20;
  private heroAnims: {key: string, frameStart: number, frameEnd: number}[] = [
    {key: "walk_front", frameStart: 0, frameEnd: 2},
    {key: "walk_left", frameStart: 3, frameEnd: 5},
    {key: "walk_right", frameStart: 6, frameEnd: 8},
    {key: "walk_back", frameStart: 9, frameEnd: 11},
  ]

  // --------------- Phaser用メソッド ---------------
  // クラスのメンバ変数の初期化
  init() {
    // マップをランダム生成する
    for(let i = 0; i < this.col; ++i){
      this.mapGround[i] = new Array();
      for(let j = 0; j< this.row; ++j){
        this.mapGround[i][j] = Math.floor(Math.random() * 2);
      } //End_For
    } //End_For

    // キーボード入力受付
    this.cursors = this.input.keyboard.createCursorKeys();

    // 自キャラの動作状態を初期化
    this.heroAnimState = "";
  } //End_Method

  // アセットのロード
  preload() {
    // 画像の読み込み
    this.load.image("mapTiles", "../../../Images/RPG_Tutorial/map.png");
    this.load.spritesheet("hero", "../../../Images/RPG_Tutorial/hero.png", {frameWidth: 32, frameHeight: 32});
  } //End_Method

  // ゲームオブジェクトの描写
  create() {
    // タイルマップ生成
    this.map = this.make.tilemap({data: this.mapGround, tileWidth: 40, tileHeight: 40});
    // マップチップ画像を渡す
    this.tiles = this.map.addTilesetImage("mapTiles");
    // レイヤー作成
    this.mapGroundLayer = this.map.createStaticLayer(0, this.tiles, 0, 0);

    // 自キャラ追加
    this.hero = this.add.sprite(420, 300, "hero", 0);
    this.hero.setDisplaySize(40, 40);

    // 自キャラアニメーションの登録
    for(let anim of this.heroAnims){
      // 形式の確認
      if(this.anims.create(this.translateAnimToPhaser3(anim)) == false) continue;
      // 登録
      this.hero.anims.load(anim.key);
    } //End_For
  } //End_Method

  // ゲームの各フレーム更新毎に呼びだされる
  update() {
    // 前フレームとの比較用
    let anim: WalkAnimState = "";

    // キー入力より状態決定
    if(this.cursors!.up!.isDown){
      anim = "walk_back";
    }else if(this.cursors!.down!.isDown){
      anim = "walk_front";
    }else if(this.cursors!.left!.isDown){
      anim = "walk_left";
    }else if(this.cursors!.right!.isDown){
      anim = "walk_right";
    }else{
      this.hero!.anims.stop();
      this.heroAnimState = "";
      return;
    } //End_IfElse

    // 前フレームと行動が違っていればそのアニメーションに切り替え
    if(this.heroAnimState != anim){
      this.hero!.anims.play(anim);
      this.heroAnimState = anim;
    } // End_If
  } //End_Method


  // --------------- 自作メソッド ---------------

  // アニメーション設定からPhaser3用アニメーション設定を作成
  private translateAnimToPhaser3(config: {key: string, frameStart: number, frameEnd: number}): Phaser.Types.Animations.Animation{
    return {
      key: config.key,
      frames: this.anims.generateFrameNumbers(
        `hero`, 
        {
          start: config.frameStart,
          end: config.frameEnd
        }
      ),
      frameRate: 8,
      repeat: -1
    } //End_Return
  } //End_Method
} //End_Class