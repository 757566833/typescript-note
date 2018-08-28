


function parmsHelloWord(text: string) {
    console.log(text);
}

let helloWord1 = 'parmsHelloWord';
parmsHelloWord(helloWord1);




function jsonHelloWord(json: { text: string }) {
    console.log(json.text);
}

let helloWord2 = { text: 'jsonHelloWord' };
jsonHelloWord(helloWord2);


function returnHelloWord(text: string): string {
    return text;
}

let helloWord3 = 'returnHelloWord';
console.log(returnHelloWord(helloWord3));

function returnJsonHelloWord(text: string): { str: string } {
    return { str: text };
}

let helloWord4 = 'returnJsonHelloWord';
console.log(returnJsonHelloWord(helloWord4).str);


