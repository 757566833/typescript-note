/**
 * 一般方法的参数有两种形式，一种是多参数，一种是以json单参数进去
 * typescript中推荐后者
 */
interface Interface1 {
    text: string;
}

function printInterface1(labelledObj: Interface1) {
    console.log(labelledObj.text);
}

let myObj = { size: 1, text: 'Interface1' };
printInterface1(myObj);

/**
 * 未知是否存在的参数
 */
interface Interface2 {
    color?: string;
    width?: number;
}

function createSquare(config: Interface2): { color: string; area: number } {
    /**
     * 这里的newSquare 是引用传递 仅仅是指到了一个json
     */
    const newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({ color: 'black' });
console.log(mySquare);
