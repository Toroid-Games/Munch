import {readFile} from 'fs/promises'
//const { cwd } = require('process');

const charDefault = () =>
{
  return [
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];
}

export const charList = charDefault();

export const libX = (await readFile('./dic.txt', {encoding:'utf8'})).split(/\r\n|\n/g);

export let x = ['yey', 'nop', 'wtf'];

// Inflate from Code to Integer - requires alphanumeric string
export const AA = (a) => {
  let b = 0;
  let c = a.length - 1;
  for (let i = 0; i <= a.length - 1; i++, c--) {
    b += charList.indexOf(a[c]) * Math.pow(charList.length, i);
  }
  return b;
}

// Deflate to Code - requires integer
export const VV = n => 
{
    let y = charList.length;
    let a = Math.floor(n / y);
    let b = n - (y * a);
    //console.log(`A (${n}/${y}):${a} B(${n}-(${y}*${a})):${b} N<Y:${n<y} N>Y-1:${n>y-1}`); 
    let r = "";
    if (n < y)
    {
        return charList[b];
    }
    else if (n > y - 1)
    {
        r = charList[b];
        r = VV(a) + r;
    }
    return r;
}

export const FindWords = (txt) =>
{
    let txtList = txt.split(' ');
    let checkList = [];
    let outList = [];
    let thisStr;
    let x = 6;
    if(txtList.length < x) { x = txtList.length; }
    if (txtList.length > 0)
    {
        console.log(txt);
        for (let i = 0; i < txtList.length; i++)
        {
            P(`I:${i} X:${x} txtList.length:${txtList.length} TOP`);
            for (let r = x; r > 0; r--)
            {
                checkList = txtList.slice(i, r);
                P(`CheckList:${checkList}`);
                thisStr = checkList.join(" ");
                P(`R:${r} thisStr:${thisStr}#`);
                P(`LibX includes thisStr? ${libX.includes(thisStr)}`);
                if (libX.includes(thisStr))
                {
                    outList.push(VV(libX.indexOf(thisStr)));
                    i += r - 1;
                    let endlineoffset = txtList.length - i;
                    if (endlineoffset < 6)
                    { 
                        x = endlineoffset;
                    }
                    else
                    {
                        x = 6;
                    }                            
                    P(`I:${i} R:${r} X:${x} txtList[i]:${txtList[i]} #${thisStr}# FOUND: ${libX.indexOf(thisStr)}`);
                    P(outList);
                    break;
                }
                else
                {
                    if (r == 1)
                    {
                        P(`This string was not found '${thisStr}'`);
                        outList.push(`#${thisStr}#`);
                    }
                }
            }
            if (i >= txtList.length - 6) { x--; }
            P(`I:${i} X:${x} txtList[i]:${txtList[i]} END`);
        }
    }
    // test Quotes "what am I supposed to think about" 3 singles(what-am-I) 2 doubles(supposed to-think about) = xge xKe xgT 6Mv 6Ja
    // Sj8 208762 3844 100 its way through all of the
    // 186005 - 206001 = 6 word entries
    return outList.join("");
}