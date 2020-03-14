import * as Phaser from "phaser";

// キー入力イベントを提供するクラス
export interface GetKeyDown {
    // キーボード入力取得用キーオブジェクト
    KeyA?: Phaser.Input.Keyboard.Key;
    KeyB?: Phaser.Input.Keyboard.Key;
    KeyC?: Phaser.Input.Keyboard.Key;
    KeyD?: Phaser.Input.Keyboard.Key;
    KeyE?: Phaser.Input.Keyboard.Key;
    KeyF?: Phaser.Input.Keyboard.Key;
    KeyG?: Phaser.Input.Keyboard.Key;
    KeyH?: Phaser.Input.Keyboard.Key;
    KeyI?: Phaser.Input.Keyboard.Key;
    KeyJ?: Phaser.Input.Keyboard.Key;
    KeyK?: Phaser.Input.Keyboard.Key;
    KeyL?: Phaser.Input.Keyboard.Key;
    KeyM?: Phaser.Input.Keyboard.Key;
    KeyN?: Phaser.Input.Keyboard.Key;
    KeyO?: Phaser.Input.Keyboard.Key;
    KeyP?: Phaser.Input.Keyboard.Key;
    KeyQ?: Phaser.Input.Keyboard.Key;
    KeyR?: Phaser.Input.Keyboard.Key;
    KeyS?: Phaser.Input.Keyboard.Key;
    KeyT?: Phaser.Input.Keyboard.Key;
    KeyU?: Phaser.Input.Keyboard.Key;
    KeyV?: Phaser.Input.Keyboard.Key;
    KeyW?: Phaser.Input.Keyboard.Key;
    KeyX?: Phaser.Input.Keyboard.Key;
    KeyY?: Phaser.Input.Keyboard.Key;
    KeyZ?: Phaser.Input.Keyboard.Key;
    KeyMinus?: Phaser.Input.Keyboard.Key;
    KeyComma?: Phaser.Input.Keyboard.Key;
    KeyCommaFirefox?: Phaser.Input.Keyboard.Key;
    KeyCommaForefoxWindows?: Phaser.Input.Keyboard.Key;
    KeyPeriod?: Phaser.Input.Keyboard.Key;

    // キーボード入力取得用オブジェクトをまとめる配列
    KeyInputs?: Phaser.Input.Keyboard.Key[];
} //End_Class


// コンストラクタ
function Unti(keyDownInterface: GetKeyDown, keyboard: Phaser.Input.Keyboard.KeyboardPlugin){
    // キー読み取り設定
    keyDownInterface.KeyA = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    keyDownInterface.KeyB = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
    keyDownInterface.KeyC = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
    keyDownInterface.KeyD = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    keyDownInterface.KeyE = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    keyDownInterface.KeyF = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    keyDownInterface.KeyG = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
    keyDownInterface.KeyH = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
    keyDownInterface.KeyI = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
    keyDownInterface.KeyJ = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
    keyDownInterface.KeyK = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);
    keyDownInterface.KeyL = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
    keyDownInterface.KeyM = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
    keyDownInterface.KeyN = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);
    keyDownInterface.KeyO = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);
    keyDownInterface.KeyP = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
    keyDownInterface.KeyQ = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    keyDownInterface.KeyR = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    keyDownInterface.KeyS = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    keyDownInterface.KeyT = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
    keyDownInterface.KeyU = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.U);
    keyDownInterface.KeyV = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V);
    keyDownInterface.KeyW = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    keyDownInterface.KeyX = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
    keyDownInterface.KeyY = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Y);
    keyDownInterface.KeyZ = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    keyDownInterface.KeyMinus = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.MINUS);
    keyDownInterface.KeyComma = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.COMMA);
    keyDownInterface.KeyCommaFirefox = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.COMMA_FIREFOX);
    keyDownInterface.KeyCommaForefoxWindows = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.COMMA_FIREFOX_WINDOWS);
    keyDownInterface.KeyPeriod = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.PERIOD);

    // めんどくさいので一つにまとめる
    keyDownInterface.KeyInputs = new Array();
    keyDownInterface.KeyInputs[0] = keyDownInterface.KeyA;
    keyDownInterface.KeyInputs[1] = keyDownInterface.KeyB;
    keyDownInterface.KeyInputs[2] = keyDownInterface.KeyC;
    keyDownInterface.KeyInputs[3] = keyDownInterface.KeyD;
    keyDownInterface.KeyInputs[4] = keyDownInterface.KeyE;
    keyDownInterface.KeyInputs[5] = keyDownInterface.KeyF;
    keyDownInterface.KeyInputs[6] = keyDownInterface.KeyG;
    keyDownInterface.KeyInputs[7] = keyDownInterface.KeyH;
    keyDownInterface.KeyInputs[8] = keyDownInterface.KeyI;
    keyDownInterface.KeyInputs[9] = keyDownInterface.KeyJ;
    keyDownInterface.KeyInputs[10] = keyDownInterface.KeyK;
    keyDownInterface.KeyInputs[11] = keyDownInterface.KeyL;
    keyDownInterface.KeyInputs[12] = keyDownInterface.KeyM;
    keyDownInterface.KeyInputs[13] = keyDownInterface.KeyN;
    keyDownInterface.KeyInputs[14] = keyDownInterface.KeyO;
    keyDownInterface.KeyInputs[15] = keyDownInterface.KeyP;
    keyDownInterface.KeyInputs[16] = keyDownInterface.KeyQ;
    keyDownInterface.KeyInputs[17] = keyDownInterface.KeyR;
    keyDownInterface.KeyInputs[18] = keyDownInterface.KeyS;
    keyDownInterface.KeyInputs[19] = keyDownInterface.KeyT;
    keyDownInterface.KeyInputs[20] = keyDownInterface.KeyU;
    keyDownInterface.KeyInputs[21] = keyDownInterface.KeyV;
    keyDownInterface.KeyInputs[22] = keyDownInterface.KeyW;
    keyDownInterface.KeyInputs[23] = keyDownInterface.KeyX;
    keyDownInterface.KeyInputs[24] = keyDownInterface.KeyY;
    keyDownInterface.KeyInputs[25] = keyDownInterface.KeyZ;
    keyDownInterface.KeyInputs[26] = keyDownInterface.KeyMinus;
    keyDownInterface.KeyInputs[27] = keyDownInterface.KeyComma;
    keyDownInterface.KeyInputs[28] = keyDownInterface.KeyCommaFirefox;
    keyDownInterface.KeyInputs[29] = keyDownInterface.KeyCommaForefoxWindows;
    keyDownInterface.KeyInputs[30] = keyDownInterface.KeyPeriod;
} //End_Method

// 何かしらのキーが入力されたとき，それがどのキーか判別する
function checkPuttingKey(a: Phaser.Input.Keyboard.KeyboardPlugin): number{
    for(let i = 0; i < this.KeyInputs.length; ++i){
        if(Phaser.Input.Keyboard.JustDown(this.KeyInputs[i])){
            return this.KeyInputs[i].keyCode;
        } //End_If
    } //End_For
    return -114514;
} //End_Method

