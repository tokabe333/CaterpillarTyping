// let unti:{[keys: string]: number} = {};
// unti["unti"] = 114514;
// unti["yaju"] = 1919;
// unti["tnok"] = 893;

// for(let un in unti){
//     console.log(un, unti[un]);
// }

type unti = {roman:string, value:number};
let ngo: unti = {roman:"unti", value:1919};
let ngo2: unti = {roman:"ngo2", value:810};
console.log(ngo);
console.log(ngo2);
console.log();
ngo = ngo2;
console.log(ngo);
console.log(ngo2);
console.log();
ngo2 = {roman:"dfjsak;", value:181293}
console.log(ngo);
console.log(ngo2);
console.log();
ngo = {roman:"aaaaaa", value:111}
console.log(ngo);
console.log(ngo2);