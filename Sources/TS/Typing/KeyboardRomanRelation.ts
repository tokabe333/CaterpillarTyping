// キーボード入力と日本との対応
// Phaserのキー入力オブジェクトとローマ字の対応表

import * as Phaser from "phaser";
export var keyToRoman: {[key: number]: string} = {};

keyToRoman[Phaser.Input.Keyboard.KeyCodes.A] = "a";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.B] = "b";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.C] = "c";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.D] = "d";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.E] = "e";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.F] = "f";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.G] = "g";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.H] = "h";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.I] = "i";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.J] = "j";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.K] = "k";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.L] = "l";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.M] = "m";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.N] = "n";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.O] = "o";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.P] = "p";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.Q] = "q";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.R] = "r";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.S] = "s";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.T] = "t";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.U] = "u";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.V] = "v";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.W] = "w";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.X] = "x";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.Y] = "y";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.Z] = "z";

keyToRoman[Phaser.Input.Keyboard.KeyCodes.ONE] = "1";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.TWO] = "2";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.THREE] = "3";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.FOUR] = "4";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.FIVE] = "5";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.SIX] = "6";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.SEVEN] = "7";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.EIGHT] = "8";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.NINE] = "9";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.ZERO] = "0";

keyToRoman[Phaser.Input.Keyboard.KeyCodes.COMMA] = ",";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.COMMA_FIREFOX] = ",";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.COMMA_FIREFOX_WINDOWS] = ",";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.MINUS] = "-";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.PERIOD] = ".";

keyToRoman[Phaser.Input.Keyboard.KeyCodes.SEMICOLON] = ";";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.SEMICOLON_FIREFOX] = ";";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.COLON] = ":";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.FORWARD_SLASH] = "/";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.BACK_SLASH] = "\\";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.LEFT] = "←";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.RIGHT] = "→";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.UP] = "↑";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.DOWN] = "↓";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.OPEN_BRACKET] = "[";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.CLOSED_BRACKET] = "]";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.PLUS] = "+";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.QUOTES] = "'";

keyToRoman[Phaser.Input.Keyboard.KeyCodes.ENTER] = "Enter";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.SPACE] = "Space";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.BACKSPACE] = "BackSpace";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.CAPS_LOCK] = "CapsLock";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.CTRL] = "Ctrl";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.ESC] = "ESC";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.DELETE] = "Delete";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.INSERT] = "Insert";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.PAGE_UP] = "PageUp";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.PAGE_DOWN] = "PageDown";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.PRINT_SCREEN] = "PrintScrean";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.SHIFT] = "Shift";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.TAB] = "Tab";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.ALT] = "Alt";

keyToRoman[Phaser.Input.Keyboard.KeyCodes.F1] = "F1";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.F2] = "F2";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.F3] = "F3";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.F4] = "F4";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.F5] = "F5";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.F6] = "F6";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.F7] = "F7";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.F8] = "F8";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.F9] = "F9";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.F10] = "F10";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.F11] = "F11";
keyToRoman[Phaser.Input.Keyboard.KeyCodes.F12] = "F12";

