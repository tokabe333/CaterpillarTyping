import * as Phaser from "phaser";
import { width, height } from "../main";

export class Welcome extends Phaser.Scene {
	// --------------- Private変数(undifined可) ---------------
	private startText?: Phaser.GameObjects.Text;
	private catepillarText?: Phaser.GameObjects.Text;
	private optionText?: Phaser.GameObjects.Text;

	private bkColor: string = "0x00fc93";
	private fontStyle: Phaser.Types.GameObjects.Text.TextStyle = { color: "black", fontSize: "70px", fontFamily: "HG行書体"}; 

	// --------------- Private変数(undifined不可) ---------------

	// --------------- Phaser用メソッド ---------------

	// クラスのメンバ変数の初期化
	init() {	
		
	} //End_Method

	// アセットのロード
	preload() {

	} //End_Method

	// ゲームオブジェクトの描写
	create() {
		this.cameras.main.setBackgroundColor(this.bkColor);
		this.startText = this.add.text(width * 0.5, height * 0.3, "Game Start", this.fontStyle).setOrigin(0.5, 0.5);
		this.catepillarText = this.add.text(width * 0.5, height * 0.5, "芋虫もーど", this.fontStyle).setOrigin(0.5, 0.5);
		this.optionText = this.add.text(width * 0.5, height * 0.7, "設定", this.fontStyle).setOrigin(0.5, 0.5);

		this.startText!.setInteractive();
		this.startText!.on("pointerdown", () => { this.scene.start("typing");});

	} //End_Method

	// ゲームの各フレーム更新毎に呼びだされる
	update() {

	} //End_Method

	// --------------- 自作メソッド ---------------
} //End_Class
