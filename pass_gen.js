'use strict';
/* The de-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle used in swapping strings */
var caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var small = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var nums = ["0","1","2","3","4","5","6","7","8","9"];
var specials = ["!","#","@","$","%","^","*","(",")","-","_","[","]",";",":",">","<","/","?","~","&"];
/* call below function which returns a password */
function passwordgenerator() {
    let _r, _d, _m, _n, _s, t = 20, x = Math.floor(Math.random() * Math.floor(t)), y = Math.floor(Math.random() * Math.floor(t-5));
    _s = specials.filter((e,i,arr)=> { return i === y });
    _r = caps.filter((e, i, arr)=> {return (i === x || i === x+(Math.round(Math.PI)) || i === x-(Math.round(Math.E)))});
    if(x>nums.length) {x = x-nums.length}
    _n = nums.filter((e, i, arr)=> {return (i === x || i === x+(Math.round(Math.SQRT1_2)) || i === x-(Math.round(Math.SQRT2)))});
    _d = small.filter((e, i, arr)=> {return (i === y || i === y+(Math.round(Math.PI)) || i === y-(Math.round(Math.E)))});
    _m = (([..._r,..._d,..._n,..._s]).toString()).replace(/,/g,'');
    (()=> {
        let arr = _m.split('').sort(), ci = arr.length, temp, ri;
        while (0 !== ci) {
            ri = Math.floor(Math.random() * ci);
            ci -= 1;
            temp = arr[ci];
            arr[ci] = arr[ri];
            arr[ri] = temp;
        }
        _m = arr.join('');
    })();
    return _m;
};