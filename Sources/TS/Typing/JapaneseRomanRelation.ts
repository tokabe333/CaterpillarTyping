// タイピングする際に日本語とローマ字との対応

export var jpnToRoman: {[key: string]: string[]} = {};

jpnToRoman["あ"] = ["a"];
jpnToRoman["い"] = ["i", "yi"];
jpnToRoman["う"] = ["u", "wu", "whu"];
jpnToRoman["え"] = ["e"];
jpnToRoman["お"] = ["o"];

jpnToRoman["か"] = ["ka", "ca"];
jpnToRoman["き"] = ["ki"];
jpnToRoman["く"] = ["ku", "cu", "qu"];
jpnToRoman["け"] = ["ke"];
jpnToRoman["こ"] = ["ko", "co"];

jpnToRoman["さ"] = ["sa"];
jpnToRoman["し"] = ["si", "shi", "ci"];
jpnToRoman["す"] = ["su"];
jpnToRoman["せ"] = ["se", "ce"];
jpnToRoman["そ"] = ["so"];

jpnToRoman["た"] = ["ta"];
jpnToRoman["ち"] = ["ti", "chi"];
jpnToRoman["つ"] = ["tu", "tsu"];
jpnToRoman["て"] = ["te"];
jpnToRoman["と"] = ["to"];

jpnToRoman["な"] = ["na"];
jpnToRoman["に"] = ["ni"];
jpnToRoman["ぬ"] = ["nu"];
jpnToRoman["ね"] = ["ne"];
jpnToRoman["の"] = ["no"];

jpnToRoman["は"] = ["ha"];
jpnToRoman["ひ"] = ["hi"];
jpnToRoman["ふ"] = ["hu", "fu"];
jpnToRoman["へ"] = ["he"];
jpnToRoman["ほ"] = ["ho"];

jpnToRoman["ま"] = ["ma"];
jpnToRoman["み"] = ["mi"];
jpnToRoman["む"] = ["mu"];
jpnToRoman["め"] = ["me"];
jpnToRoman["も"] = ["mo"];

jpnToRoman["や"] = ["ya"];
jpnToRoman["ゆ"] = ["yu"];
jpnToRoman["よ"] = ["yo"];

jpnToRoman["ら"] = ["ra"];
jpnToRoman["り"] = ["ri"];
jpnToRoman["る"] = ["ru"];
jpnToRoman["れ"] = ["re"];
jpnToRoman["ろ"] = ["ro"];

jpnToRoman["わ"] = ["wa"];
jpnToRoman["を"] = ["wo"];
jpnToRoman["ん"] = ["n", "nn", "xn"];


jpnToRoman["が"] = ["ga"];
jpnToRoman["ぎ"] = ["gi"];
jpnToRoman["ぐ"] = ["gu"];
jpnToRoman["げ"] = ["ge"];
jpnToRoman["ご"] = ["go"];

jpnToRoman["ざ"] = ["za"];
jpnToRoman["じ"] = ["zi", "ji"];
jpnToRoman["ず"] = ["zu"];
jpnToRoman["ぜ"] = ["ze"];
jpnToRoman["ぞ"] = ["zo"];

jpnToRoman["だ"] = ["da"];
jpnToRoman["ぢ"] = ["di"];
jpnToRoman["づ"] = ["du"];
jpnToRoman["で"] = ["de"];
jpnToRoman["ど"] = ["do"];

jpnToRoman["ば"] = ["ba"];
jpnToRoman["び"] = ["bi"];
jpnToRoman["ぶ"] = ["be"];
jpnToRoman["べ"] = ["be"];
jpnToRoman["ぼ"] = ["bo"];


jpnToRoman["ぁ"] = ["la", "xa"];
jpnToRoman["ぃ"] = ["li", "xi"];
jpnToRoman["ぅ"] = ["lu", "xu"];
jpnToRoman["ぇ"] = ["le", "xe"];
jpnToRoman["ぉ"] = ["lo", "xo"];
jpnToRoman["ヵ"] = ["lka", "xka"];
jpnToRoman["ヶ"] = ["lke", "xke"];
jpnToRoman["っ"] = ["ltu", "xtu", "ltsu", "xtsu"];
jpnToRoman["ゃ"] = ["lya", "xya"];
jpnToRoman["ゅ"] = ["lyu", "xyu"];
jpnToRoman["ょ"] = ["lyo", "xyo"];
jpnToRoman["ゎ"] = ["lwa", "xwa"];


jpnToRoman["きゃ"] = ["kya"];
jpnToRoman["きぃ"] = ["kyi"];
jpnToRoman["きゅ"] = ["kyu"];
jpnToRoman["きぇ"] = ["kye"];
jpnToRoman["きょ"] = ["kyo"];

jpnToRoman["くぁ"] = ["qa", "qwa"];
jpnToRoman["くぃ"] = ["qi", "qwi", "qyi"];
jpnToRoman["くぅ"] = ["qwu"];
jpnToRoman["くぇ"] = ["qe", "qwe", "qye"];
jpnToRoman["くぉ"] = ["qo", "qwo"];

jpnToRoman["くゃ"] = ["qya"];
jpnToRoman["くゅ"] = ["qyu"];
jpnToRoman["くょ"] = ["qyo"];

jpnToRoman["ぎゃ"] = ["gya"];
jpnToRoman["ぎぃ"] = ["gyi"];
jpnToRoman["ぎゅ"] = ["gyu"];
jpnToRoman["ぎぇ"] = ["gye"];
jpnToRoman["ぎょ"] = ["gyo"];

jpnToRoman["ぐぁ"] = ["gwa"];
jpnToRoman["ぐぃ"] = ["gwi"];
jpnToRoman["ぐぅ"] = ["gwu"];
jpnToRoman["ぐぇ"] = ["gwe"];
jpnToRoman["ぐぉ"] = ["gwo"];

jpnToRoman["しゃ"] = ["sya", "sha"];
jpnToRoman["しぃ"] = ["syi"];
jpnToRoman["しゅ"] = ["syu", "shu"];
jpnToRoman["しぇ"] = ["sye", "she"];
jpnToRoman["しょ"] = ["syo", "sho"];

jpnToRoman["すぁ"] = ["swa"];
jpnToRoman["すぃ"] = ["swi"];
jpnToRoman["すぅ"] = ["swu"];
jpnToRoman["すぇ"] = ["swe"];
jpnToRoman["すぉ"] = ["swo"];

jpnToRoman["じゃ"] = ["zya", "ja", "jya"];
jpnToRoman["じぃ"] = ["zyi", "jyi"];
jpnToRoman["じゅ"] = ["zyu", "ju", "jyu"];
jpnToRoman["じぇ"] = ["zye", "je", "jye"];
jpnToRoman["じょ"] = ["zyo", "jo", "jyo"];

jpnToRoman["ちゃ"] = ["tya", "cha", "cya"];
jpnToRoman["ちぃ"] = ["tyi", "cyi"];
jpnToRoman["ちゅ"] = ["tyu", "chu", "cyu"];
jpnToRoman["ちぇ"] = ["tye", "che", "cye"];
jpnToRoman["ちょ"] = ["tyo", "cho", "cyo"];

jpnToRoman["つぁ"] = ["tsa"];
jpnToRoman["つぃ"] = ["tsi"];
jpnToRoman["つぇ"] = ["tse"];
jpnToRoman["つぉ"] = ["tso"];

jpnToRoman["てゃ"] = ["tha"];
jpnToRoman["てぃ"] = ["thi"];
jpnToRoman["てゅ"] = ["thu"];
jpnToRoman["てぇ"] = ["the"];
jpnToRoman["てょ"] = ["tho"];

jpnToRoman["とぁ"] = ["twa"];
jpnToRoman["とぃ"] = ["twi"];
jpnToRoman["とぅ"] = ["twu"];
jpnToRoman["とぇ"] = ["twe"];
jpnToRoman["とぉ"] = ["two"];

jpnToRoman["ぢゃ"] = ["dya"];
jpnToRoman["ぢぃ"] = ["dyi"];
jpnToRoman["ぢゅ"] = ["dyu"];
jpnToRoman["ぢぇ"] = ["dye"];
jpnToRoman["ぢょ"] = ["dyo"];

jpnToRoman["でゃ"] = ["dha"];
jpnToRoman["でぃ"] = ["dhi"];
jpnToRoman["でゅ"] = ["dhu"];
jpnToRoman["でぇ"] = ["dhe"];
jpnToRoman["でょ"] = ["dho"];

jpnToRoman["どぁ"] = ["dwa"];
jpnToRoman["どぃ"] = ["dwi"];
jpnToRoman["どぅ"] = ["dwu"];
jpnToRoman["どぇ"] = ["dwe"];
jpnToRoman["どぉ"] = ["dwo"];

jpnToRoman["にゃ"] = ["nya"];
jpnToRoman["にぃ"] = ["nyi"];
jpnToRoman["にゅ"] = ["nyu"];
jpnToRoman["にぇ"] = ["nye"];
jpnToRoman["にょ"] = ["nyo"];

jpnToRoman["ひゃ"] = ["hya"];
jpnToRoman["ひぃ"] = ["hyi"];
jpnToRoman["ひゅ"] = ["hyu"];
jpnToRoman["ひぇ"] = ["hye"];
jpnToRoman["ひょ"] = ["hyo"];

jpnToRoman["ふゃ"] = ["fya"];
jpnToRoman["ふゅ"] = ["fyu"];
jpnToRoman["ふょ"] = ["fyo"];

jpnToRoman["ふぁ"] = ["fwa", "fa"];
jpnToRoman["ふぃ"] = ["fwi", "fi", "fyi"];
jpnToRoman["ふぅ"] = ["fwu"];
jpnToRoman["ふぇ"] = ["fwe", "fe", "fye"];
jpnToRoman["ふぉ"] = ["fwo", "fo"];

jpnToRoman["びゃ"] = ["bya"];
jpnToRoman["びぃ"] = ["byi"];
jpnToRoman["びゅ"] = ["byu"];
jpnToRoman["びぇ"] = ["bye"];
jpnToRoman["びょ"] = ["byo"];

jpnToRoman["ゔぁ"] = ["va"];
jpnToRoman["ゔぃ"] = ["vi"];
jpnToRoman["ゔ"] = ["vu"];
jpnToRoman["ゔぇ"] = ["ve"];
jpnToRoman["ゔぉ"] = ["vo"];

jpnToRoman["ゔゃ"] = ["vya"];
jpnToRoman["ゔぃ"] = ["vyi"];
jpnToRoman["ゔゅ"] = ["vyu"];
jpnToRoman["ゔぇ"] = ["vye"];
jpnToRoman["ゔょ"] = ["vyo"];

jpnToRoman["ぴゃ"] = ["pya"];
jpnToRoman["ぴぃ"] = ["pyi"];
jpnToRoman["ぴゅ"] = ["pyu"];
jpnToRoman["ぴぇ"] = ["pye"];
jpnToRoman["ぴょ"] = ["pyo"];

jpnToRoman["みゃ"] = ["mya"];
jpnToRoman["みぃ"] = ["myi"];
jpnToRoman["みゅ"] = ["myu"];
jpnToRoman["みぇ"] = ["mye"];
jpnToRoman["みょ"] = ["myo"];

jpnToRoman["りゃ"] = ["rya"];
jpnToRoman["りぃ"] = ["ryi"];
jpnToRoman["りゅ"] = ["ryu"];
jpnToRoman["りぇ"] = ["rye"];
jpnToRoman["りょ"] = ["ryo"];

