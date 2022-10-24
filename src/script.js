let a = performance.now();

function * generateDigitsOfPi() {
    let q = 1n;
    let r = 180n;
    let t = 60n;
    let i = 2n;
    while (true) {
        let digit = ((i * 27n - 12n) * q + r * 5n) / (t * 5n);
        yield Number(digit);
        let u = i * 3n;
        u = (u + 1n) * 3n * (u + 2n);
        r = u * 10n * (q * (i * 5n - 2n) + r - t * digit);
        q *= 10n * i * (i++ * 2n - 1n);
        t *= u;
    }
}

function isAPalindromeOf9(array) {
    const reverseArray = [...array]
    if (array.join('') === reverseArray.reverse().join('')) {
        return true
    }
    return false;
}

const isPrime = (bigInt) => {
    let divisor = BigInt('2');
    while (true) {
        if ((bigInt % divisor) === BigInt('0')) {
            return false
        }

        divisor = divisor + BigInt('1');
        if (divisor >= bigInt) {
            return true
        }
    }
  };

const verificationArray = new Array();
let iter = generateDigitsOfPi();
function displayNextDigits() {
    let digits = "";
    for (let i = 0; i < 1; i++) digits += iter.next().value;
    return digits;
}


let position = BigInt('0');

function repeat(number) {
    number = parseInt(number);
    while (true) {
        if (verificationArray.length < number) {
            verificationArray.push(displayNextDigits());
        } 
    
        if (verificationArray.length === number) {
            if (isAPalindromeOf9(verificationArray) && isPrime(BigInt(verificationArray.join('')))) {
                return `O array correto é: ${verificationArray.join('')} na posição ${position - BigInt(`${number}`)}ª`
            }
            verificationArray.shift();
        }
    
        position = position + BigInt('1');
    }
}

export default repeat;

let b = performance.now();
console.log('Duração do programa: ' + ((b - a)/1000).toFixed(2) + ' s.');
/* global BigInt */