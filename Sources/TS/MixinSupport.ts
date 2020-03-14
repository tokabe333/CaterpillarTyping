// TypeScriptでミックスインを実装する

export function applyMixins(derivedCtor: any, baseCtors: any[]){
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            if (name !== 'constructor'){
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            } //End_If
        }); //End_ForEach
    }); //End_ForEach
} //End_Function