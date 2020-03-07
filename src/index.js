const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ':' '
};

function decode(expr) {
    let newArr = [];
    while(expr.length >= 10 ){
        newArr.push(expr.slice(0,10))
        expr = expr.slice(10,expr.length)

    }
    if(expr.length < 10 && expr !== ''){ newArr.push(expr.concat('0'.repeat(10-expr.length)))}
    console.log(newArr)
    for(let i = 0;i < newArr.length;i++){
        newArr[i] = newArr[i].replace(/10/g,'.')
            .replace(/11/g,'-')
            .replace(/00/g,'')
            .replace( '**********',' ')
    }
    console.log(newArr)
    for(let i = 0;i <newArr.length; i++){
        newArr[i] = MORSE_TABLE[newArr[i]]
    }
    console.log(newArr)
    return newArr.join('')
}

module.exports = {
    decode
}