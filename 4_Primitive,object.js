//nn bb ss u primitive data type
let a = null;
let b = 232;
let c = false;
let d = BigInt("323") + BigInt("27");
let e = "Josnson";
let f = "i am a symbol";
let g = undefined;
console.log(a, b, c, d, e, f, g);
//findig type of any var and const
console.log(typeof d);

// non primitive data type objects in js data type

const item = {
  Jonson: true,
  Alvin: false,
  Mendis: 6775,
  Joy: undefined,
};
console.log(item["Joy"]);
