import * as Phaser from "phaser";

// ガバなので使わない

// キー入力イベントを提供するクラス
export class GetKeyDown {
    // キーボード入力取得用キーオブジェクト
    public KeyA: Phaser.Input.Keyboard.Key;
    public KeyB: Phaser.Input.Keyboard.Key;
    public KeyC: Phaser.Input.Keyboard.Key;
    public KeyD: Phaser.Input.Keyboard.Key;
    public KeyE: Phaser.Input.Keyboard.Key;
    public KeyF: Phaser.Input.Keyboard.Key;
    public KeyG: Phaser.Input.Keyboard.Key;
    public KeyH: Phaser.Input.Keyboard.Key;
    public KeyI: Phaser.Input.Keyboard.Key;
    public KeyJ: Phaser.Input.Keyboard.Key;
    public KeyK: Phaser.Input.Keyboard.Key;
    public KeyL: Phaser.Input.Keyboard.Key;
    public KeyM: Phaser.Input.Keyboard.Key;
    public KeyN: Phaser.Input.Keyboard.Key;
    public KeyO: Phaser.Input.Keyboard.Key;
    public KeyP: Phaser.Input.Keyboard.Key;
    public KeyQ: Phaser.Input.Keyboard.Key;
    public KeyR: Phaser.Input.Keyboard.Key;
    public KeyS: Phaser.Input.Keyboard.Key;
    public KeyT: Phaser.Input.Keyboard.Key;
    public KeyU: Phaser.Input.Keyboard.Key;
    public KeyV: Phaser.Input.Keyboard.Key;
    public KeyW: Phaser.Input.Keyboard.Key;
    public KeyX: Phaser.Input.Keyboard.Key;
    public KeyY: Phaser.Input.Keyboard.Key;
    public KeyZ: Phaser.Input.Keyboard.Key;
    public KeyMinus: Phaser.Input.Keyboard.Key;
    public KeyComma: Phaser.Input.Keyboard.Key;
    public KeyCommaFirefox: Phaser.Input.Keyboard.Key;
    public KeyCommaForefoxWindows: Phaser.Input.Keyboard.Key;
    public KeyPeriod: Phaser.Input.Keyboard.Key;
    public Key1: Phaser.Input.Keyboard.Key;
    public Key2: Phaser.Input.Keyboard.Key;
    public Key3: Phaser.Input.Keyboard.Key;
    public Key4: Phaser.Input.Keyboard.Key;
    public Key5: Phaser.Input.Keyboard.Key;
    public Key6: Phaser.Input.Keyboard.Key;
    public Key7: Phaser.Input.Keyboard.Key;
    public Key8: Phaser.Input.Keyboard.Key;
    public Key9: Phaser.Input.Keyboard.Key;
    public Key0: Phaser.Input.Keyboard.Key;
    public KeySemicolon: Phaser.Input.Keyboard.Key;
    public KeySemicolonFirefox: Phaser.Input.Keyboard.Key;
    public KeyColon: Phaser.Input.Keyboard.Key;
    public KeyForwardSlash: Phaser.Input.Keyboard.Key;
    public KeyBackSlash: Phaser.Input.Keyboard.Key;
    public KeyLeft: Phaser.Input.Keyboard.Key;
    public KeyRight: Phaser.Input.Keyboard.Key;
    public KeyUp: Phaser.Input.Keyboard.Key;
    public KeyDown: Phaser.Input.Keyboard.Key;
    

    // キーボード入力取得用オブジェクトをまとめる配列
    public KeyInputs: Phaser.Input.Keyboard.Key[];

    // コンストラクタ
    constructor(keyboard: Phaser.Input.Keyboard.KeyboardPlugin){
        // キー読み取り設定
        this.KeyA = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.KeyB = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
        this.KeyC = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        this.KeyD = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.KeyE = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        this.KeyF = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.KeyG = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
        this.KeyH = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
        this.KeyI = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
        this.KeyJ = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
        this.KeyK = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);
        this.KeyL = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
        this.KeyM = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        this.KeyN = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);
        this.KeyO = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);
        this.KeyP = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
        this.KeyQ = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.KeyR = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        this.KeyS = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.KeyT = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
        this.KeyU = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.U);
        this.KeyV = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V);
        this.KeyW = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.KeyX = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
        this.KeyY = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Y);
        this.KeyZ = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        this.KeyMinus = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.MINUS);
        this.KeyComma = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.COMMA);
        this.KeyCommaFirefox = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.COMMA_FIREFOX);
        this.KeyCommaForefoxWindows = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.COMMA_FIREFOX_WINDOWS);
        this.KeyPeriod = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.PERIOD);
        this.Key1 = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
        this.Key2 = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
        this.Key3 = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);
        this.Key4 = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR);
        this.Key5 = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FIVE);
        this.Key6 = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SIX);
        this.Key7 = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SEVEN);
        this.Key8 = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.EIGHT);
        this.Key9 = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NINE);
        this.Key0 = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ZERO);
        this.KeySemicolon = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SEMICOLON);
        this.KeySemicolonFirefox = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SEMICOLON_FIREFOX);
        this.KeyColon = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.COLON);
        this.KeyForwardSlash = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FORWARD_SLASH);
        this.KeyBackSlash = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACK_SLASH);
        this.KeyLeft = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.KeyRight = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.KeyUp = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.KeyDown = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);


        // めんどくさいので一つにまとめる
        this.KeyInputs = new Array();
        this.KeyInputs[0] = this.KeyA;
        this.KeyInputs[1] = this.KeyB;
        this.KeyInputs[2] = this.KeyC;
        this.KeyInputs[3] = this.KeyD;
        this.KeyInputs[4] = this.KeyE;
        this.KeyInputs[5] = this.KeyF;
        this.KeyInputs[6] = this.KeyG;
        this.KeyInputs[7] = this.KeyH;
        this.KeyInputs[8] = this.KeyI;
        this.KeyInputs[9] = this.KeyJ;
        this.KeyInputs[10] = this.KeyK;
        this.KeyInputs[11] = this.KeyL;
        this.KeyInputs[12] = this.KeyM;
        this.KeyInputs[13] = this.KeyN;
        this.KeyInputs[14] = this.KeyO;
        this.KeyInputs[15] = this.KeyP;
        this.KeyInputs[16] = this.KeyQ;
        this.KeyInputs[17] = this.KeyR;
        this.KeyInputs[18] = this.KeyS;
        this.KeyInputs[19] = this.KeyT;
        this.KeyInputs[20] = this.KeyU;
        this.KeyInputs[21] = this.KeyV;
        this.KeyInputs[22] = this.KeyW;
        this.KeyInputs[23] = this.KeyX;
        this.KeyInputs[24] = this.KeyY;
        this.KeyInputs[25] = this.KeyZ;
        this.KeyInputs[26] = this.KeyMinus;
        this.KeyInputs[27] = this.KeyComma;
        this.KeyInputs[28] = this.KeyCommaFirefox;
        this.KeyInputs[29] = this.KeyCommaForefoxWindows;
        this.KeyInputs[30] = this.KeyPeriod;
        this.KeyInputs[31] = this.Key1;
        this.KeyInputs[32] = this.Key2;
        this.KeyInputs[33] = this.Key3;
        this.KeyInputs[34] = this.Key4;
        this.KeyInputs[35] = this.Key5;
        this.KeyInputs[36] = this.Key6;
        this.KeyInputs[37] = this.Key7;
        this.KeyInputs[38] = this.Key8;
        this.KeyInputs[39] = this.Key9;
        this.KeyInputs[40] = this.Key0;
        this.KeyInputs[41] = this.KeySemicolon;
        this.KeyInputs[42] = this.KeySemicolonFirefox;
        this.KeyInputs[43] = this.KeyColon;
        this.KeyInputs[44] = this.KeyForwardSlash;
        this.KeyInputs[45] = this.KeyBackSlash;
        this.KeyInputs[46] = this.KeyLeft;
        this.KeyInputs[47] = this.KeyRight;
        this.KeyInputs[48] = this.KeyUp;
        this.KeyInputs[49] = this.KeyDown;
    } //End_Method

    // 何かしらのキーが入力されたとき，それがどのキーか判別する
    public checkPuttingKey(a: Phaser.Input.Keyboard.KeyboardPlugin): number{
        for(let i = 0; i < this.KeyInputs.length; ++i){
            if(Phaser.Input.Keyboard.JustDown(this.KeyInputs[i])){
                return this.KeyInputs[i].keyCode;
            } //End_If
        } //End_For
        return -114514;
    } //End_Method
} //End_Class