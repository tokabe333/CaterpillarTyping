/**
    * クッキー
*/
export class DocumentCookies {

    //以下を参照
    //https://developer.mozilla.org/ja/docs/DOM/document.cookie
    //http://www.inazumatv.com/contents/archives/9214
    //https://developer.mozilla.org/en-US/docs/Web/API/document.cookie

    constructor() { }

    /**
     * デコード
     */
    private unescape(v: string): string {
        return decodeURIComponent(v);
    }

    /**
     * エンコード
     */
    private escape(v: string): string {
        return encodeURIComponent(v);
    }

    /**
     * アイテムの取得
     * 
     * @param sKey キー
     */
    getItem(sKey: string): string {
        if (!sKey || !this.hasItem(sKey)) { return ""; }
        return this.unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)" + this.escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"), "$1"));
    }

    /**
     * アイテムの設定
     * 
     * @param sKey 設定するCookieのキー
     * @param sValue 設定するCookieの値
     * @param vEnd 期限情報。Number、String、Dateの何れかの形式を指定する。
     * @param sPath パス
     * @param sDomain ドメイン
     * @param bSecure セキュアクッキーフラグ
     */
    setItem(sKey: string, sValue: string, vEnd: any = Infinity, sPath: string = "/", sDomain: string = "", bSecure: boolean = false): void {
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return; }
        var sExpires = "";
        if (vEnd) {
            switch (vEnd.constructor) {
                case Number:
                    sExpires = vEnd === Infinity ? "; expires=Tue, 19 Jan 2038 03:14:07 GMT" : "; max-age=" + vEnd;
                    break;
                case String:
                    sExpires = "; expires=" + vEnd;
                    break;
                case Date:
                    sExpires = "; expires=" + vEnd.toUTCString();
                    break;
            }
        }
        document.cookie = this.escape(sKey) + "=" + this.escape(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
    }

    /**
     * アイテムの削除
     * 
     * @param sKey 削除するCookieのキー
     * @param sPath パス
     */
    removeItem(sKey: string, sPath: string): void {
        if (!sKey || !this.hasItem(sKey)) { return; }
        document.cookie = this.escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sPath ? "; path=" + sPath : "");
    }

    /**
     * キーに対応する値の存在確認
     * 
     * @param sKey 検索キー
     */
    hasItem(sKey: string): boolean {
        return (new RegExp("(?:^|;\\s*)" + this.escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    }

    /**
     * キーリストの取得
     */
    keys(): Array<string> {
        var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
        for (var nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = this.unescape(aKeys[nIdx]); }
        return aKeys;
    }
}