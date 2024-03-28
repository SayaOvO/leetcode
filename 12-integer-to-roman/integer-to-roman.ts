function intToRoman(num: number): string {
   const res = [];
   while (num > 0)  {
    if (num >= 1000) {
        num -= 1000;
        res.push('M');
    } else if (num >= 900) {
        num -= 900;
        res.push('CM')
    } else if (num >= 500) {
        num -= 500;
        res.push('D');
    } else if (num >= 400) {
        num -= 400;
        res.push('CD');
    } else if (num >= 100) {
        num -= 100;
        res.push('C');
    } else if (num >= 90) {
        num -= 90;
        res.push('XC') ;
    } else if (num >= 50) {
        num -= 50;
        res.push('L');
    } else if (num >= 40) {
        num -= 40;
        res.push('XL');
    } else if (num >= 10) {
        num -= 10;
        res.push('X');
    } else if (num >= 9) {
        num -= 9;
        res.push('IX');
    } else if (num >= 5) {
        num -= 5;
        res.push('V');
    } else if (num >= 4) {
        num -= 4;
        res.push('IV');
    } else {
        num -= 1;
        res.push('I')
    }
   }
   return res.join('');
};