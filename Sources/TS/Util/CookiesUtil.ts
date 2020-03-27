/**
    * �N�b�L�[
*/
export class DocumentCookies {

    //�ȉ����Q��
    //https://developer.mozilla.org/ja/docs/DOM/document.cookie
    //http://www.inazumatv.com/contents/archives/9214
    //https://developer.mozilla.org/en-US/docs/Web/API/document.cookie

    constructor() { }

    /**
     * �f�R�[�h
     */
    private unescape(v: string): string {
        return decodeURIComponent(v);
    }

    /**
     * �G���R�[�h
     */
    private escape(v: string): string {
        return encodeURIComponent(v);
    }

    /**
     * �A�C�e���̎擾
     * 
     * @param sKey �L�[
     */
    getItem(sKey: string): string {
        if (!sKey || !this.hasItem(sKey)) { return ""; }
        return this.unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)" + this.escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"), "$1"));
    }

    /**
     * �A�C�e���̐ݒ�
     * 
     * @param sKey �ݒ肷��Cookie�̃L�[
     * @param sValue �ݒ肷��Cookie�̒l
     * @param vEnd �������BNumber�AString�ADate�̉��ꂩ�̌`�����w�肷��B
     * @param sPath �p�X
     * @param sDomain �h���C��
     * @param bSecure �Z�L���A�N�b�L�[�t���O
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
     * �A�C�e���̍폜
     * 
     * @param sKey �폜����Cookie�̃L�[
     * @param sPath �p�X
     */
    removeItem(sKey: string, sPath: string): void {
        if (!sKey || !this.hasItem(sKey)) { return; }
        document.cookie = this.escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sPath ? "; path=" + sPath : "");
    }

    /**
     * �L�[�ɑΉ�����l�̑��݊m�F
     * 
     * @param sKey �����L�[
     */
    hasItem(sKey: string): boolean {
        return (new RegExp("(?:^|;\\s*)" + this.escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    }

    /**
     * �L�[���X�g�̎擾
     */
    keys(): Array<string> {
        var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
        for (var nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = this.unescape(aKeys[nIdx]); }
        return aKeys;
    }
}