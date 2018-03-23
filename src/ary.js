/*
Creates a function that accepts up to n arguments, ignoring any additional arguments.
Call the provided function, fn, with up to n arguments, using Array.slice(0,n) and the spread operator (...).
*/
console.group('ary.js');
    const ary = (fn, n) => (...args) => fn(...args.slice(0,n));
    /*alternative way */

    /*function ary(fn, n){
        return function(...args) {
            console.log(...args);
            return fn(...args.slice(0,n));
        }
    }*/
    const firstTwoMax = ary(Math.max, 2);
    let result = [[2, 6, 'a'],[8, 4, 6],[10]].map(x => firstTwoMax(...x));
    console.log(result);
console.groupEnd('ary.js');