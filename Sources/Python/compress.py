# -*- Coding: utf-8 -*-
import sys
import os
import path
import time
import datetime
import pathlib

# 第1引数 ファイル・ディレクトリ
# 第2引数 watch?
args = sys.argv
#print("引数 :", args)
#print("カレントディレクトリ:",os.getcwd())

prevUpdate = -114514


def Main():
    global prevUpdate
    # 引数なしならガバ
    if len(args) <= 1 or args[1] == "":
        print("ファイルパスを指定してね")
        return
    # watchがなければ1度のみ
    elif len(args) <= 2 or args[2] != "watch":
        print("一度のみ処理")
        Compress(args[1])
        return
    # ファイルパスが正しくてwatch
    else:
        print("うぉっち開始")
        while True:
            if os.path.exists(args[1]):
                p = pathlib.Path(args[1])
                if p.stat().st_mtime_ns != prevUpdate:
                    print("更新があったンゴねぇ")
                    if Compress(args[1]):
                        prevUpdate = p.stat().st_mtime_ns
            # End_If
            time.sleep(0.5)
        # End_While
    # End_IfElse
# End_Func


# 半角スペース2つを虚無にする
def Compress(filePath):
    try:
        with open(filePath, "r", encoding="utf-8") as rf:
            s = rf.read()
            s = s.replace("  ","")
        # End_With
        with open(filePath, "w", encoding="utf-8") as wf:
            print(s, file=wf)
        # End_With
        return True
    except:
        return False
# End_Func

if __name__ == "__main__":
    Main()

