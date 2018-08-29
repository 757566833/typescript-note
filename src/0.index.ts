/**
 * 数字类型
 */
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;




/**
 * 布尔类型
 */
let isDone: boolean = false;




/**
 * 字符串
 */
let str0: string = 'str0';




/**
 * 字符串模板
 */

let sentence: string = `Hello, my name is ${str0}`;





/**
 * 数组
 */
let list: number[] = [1, 2, 3];
/**
 * 数组泛型 但是这个被tslint禁止了，简单类型没必要
 */
// let list2: Array<number> = [1, 2, 3];

/**
 * 多类型数组 元组 数组越界赋值以后会用联合类型 即string+number类型
 */
let x: [string, number] = ['hello', 10];




/**
 * 枚举
 */
enum Color { Red, Green, Blue }
let c: Color = Color.Green;
// c=1
console.log(c);

enum Color2 {Red = 1, Green, Blue}
let c2: Color2 = Color2.Green;
// c2=2
console.log(c2);

enum Color3 {Red = 1, Green = 5, Blue = 9}
let c3: Color3 = Color3.Green;
// c3=5
console.log(c3);

enum Color4 {Red = 1, Green, Blue}
let colorName4: string = Color4[2];
// colorName4 = Green
console.log(colorName4);





/**
 * 通用类型 不要用object
 */
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;
let anyList: any[] = [1, true, 'free'];





/**
 * 没有返回值
 */
function noReturn(): void {
    console.log('nothing');
}





/**
 * 类型断言
 */

let someValue: any = 'this is a string';

let strLength: number = (someValue as string).length;



/**
 * 还有Null 和 Undefined 以及Never 需要自己查文档
 */
