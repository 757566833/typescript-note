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
     * 这里的newSquare 是引用传递 仅仅是指到了一个json 所以const以后依旧可以对json赋值
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

/**
 * 只读参数
 */

interface Interface3 {
    readonly x: number;
    readonly y: number;
}
let json3: Interface3 = { x: 10, y: 20 };
// error
// json3.x = 5;

/**
 * 只读数组（泛型）
 */

let numbera: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = numbera;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// numbera = ro; // error!

// yes
numbera = ro as number[];






/**
 * 额外类型判断，这个tslint直接就给否了不需要typescript的检测
 */

interface Interface4 {
    color?: string;
    width?: number;
}

function interface4(config: Interface4): { color: string; area: number } {
    return { color: config.color, area: config.width };
}

// let mySquare2 = interface4({ colour: "red", width: 100 });



/**
 * 函数类型
 */

// interface InterfaceFunc1 {
//     (source: string, subString: string): boolean;
// }

type InterfaceFunc1 = (source: string, subString: string) => boolean;

let mySearch: InterfaceFunc1;
mySearch = (source: string, subString: string) => {
    const result = source.search(subString);
    return result > -1;
};

/**
 * 检索类型，主要是为了 json.a 和json['a'] 数字类型的索引js会自动转成string的去
 */

interface InterfaceInedx {
    [index: number]: string;
}

let myArray: InterfaceInedx;
myArray = ['Bob', 'Fred'];

let myStr: string = myArray[0];


class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// 错误：使用数值型的字符串索引，数字会转为字符串，输入number的时候 可能会出现dog等 因为animal不一定是dog  但是dog一定是animal 所以反过来就不会报错
// interface INotOkay {
//     [x: number]: Animal;
//     [x: string]: Dog;
// }

interface INumberDictionary {
    [index: string]: number; // 这里是设置索引类型
    length: number;    // 返回值类型
    name: number;     // 返回值类型 换成string 就是错了
}
let aa: INumberDictionary = {
    length: 1,
    name: 2,
};


/**
 * js设计模式 本身class就是构造模式  这里添加了工厂模式
 */

// 指定类必须实现的方法
interface IClockInterface {
    tick();
}
// 指定new class的时候 必须的参数类型和  返回值为一个class的实例
interface IClockConstructor {
    new(hour: number, minute: number);
}

// 对于上面两点 实现一个工厂
function createClock(ctor: IClockConstructor, hour: number, minute: number) {
    return new ctor(hour, minute);
}
class DigitalClock implements IClockInterface {
    private h: number;
    private m: number;
    constructor(h: number, m: number) {
        this.h = h;
        this.m = m;
    }
    tick() {
        console.log('beep beep');
    }
}
class AnalogClock implements IClockInterface {
    private h: number;
    private m: number;
    constructor(h: number, m: number) {
        this.h = h;
        this.m = m;
    }
    tick() {
        console.log('tick tock');
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);


