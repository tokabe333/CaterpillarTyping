import * as Phaser from "phaser";

// キー入力イベントを提供するクラス
class GetKeyDown extends Phaser.Scene{
    // キーボード入力取得用キーオブジェクト
    protected KeyA?: Phaser.Input.Keyboard.Key;



    // キーオブジェクトに実際のキーを割り当てていく
    initKeyObjects(keyboard: Phaser.Input.Keyboard.KeyboardPlugin): void {
        this.KeyA = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

    } //End_Method

    // 何かしらのキーが入力されたとき，それがどのキーか判別する
    checkPuttingKey(a: Phaser.Input.Keyboard.KeyboardPlugin): number{
        if(Phaser.Input.Keyboard.JustDown(this.KeyA!)) { return Phaser.Input.Keyboard.KeyCodes.A }

        return 0;
    } //End_Method
} //End_Class