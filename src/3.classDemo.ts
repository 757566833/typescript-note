class helloWord {
    text: string;
    constructor(text: string) {
        this.text = text
    }
    toString() {
        return this.text;
    }
}
let demo = new helloWord("world");
console.log(demo.toString())


//继承
class personDemo {
    eyes() {
        console.log('two');
    }
}
class parentDemo extends personDemo {
    move() {
        console.log('go')
    }
}
class badyDemo extends personDemo {
    move() {
        console.log('i cant')
    }
}

let personD = new personDemo();
let parentD = new parentDemo()
let badyD = new badyDemo();

personD.eyes();
parentD.eyes();
badyD.eyes();

// personD.move();
parentD.move();
badyD.move();

//重写
class a {
    say() {
        console.log('a')
    }
}
class b extends a {
    say = () => {
        console.log('b')
    }
}
class ac extends a {
    say() {
        super.say();
        console.log('c')
    }
}
//注意 可以将实力成员方法重写成实例成员属性，但反过来不行
//super只可调用实例成员方法，不可调用实例成员属性

let A = new a();
A.say();
let B = new b();
B.say();
let AC = new ac();
AC.say();


//class四大权限
//共有的
class PubiicDemo {
    public name: string;
    public constructor(theName: string) {
        this.name = theName;
    }
    public move(number: number) {
        console.log(`${this.name} name ${number}.`);
    }
}

let pubiicDemo = new PubiicDemo('public');
console.log(pubiicDemo.name)
pubiicDemo.move(20);
pubiicDemo.name = 'changepublic';
console.log(pubiicDemo.name)
pubiicDemo.move = function name(number:number) {
    console.log(`${this.name}  broke leg ${number}.`)
}
pubiicDemo.move(0);


//私有的
class PrivateDemo {
    private name: string;
    public constructor(theName: string) {
        this.name = theName;
    }
}

let privateDemo = new PrivateDemo('private');
// console.log(privateDemo.name)


//保护的
class ProtectedDemo {
    protected name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    protected toString(){
        console.log(this.name)
    }
}
let protectedDemo = new ProtectedDemo('protected');
// console.log(protectedDemo.name)
// protectedDemo.toString();
class ProtectedDemoChildren extends ProtectedDemo{
    constructor(name: string){
        super(name)
    }
    public toString(){
        console.log(this.name)
    }
}
let protectedDemoChildren = new ProtectedDemoChildren('protectedDemoChildren');
protectedDemoChildren.toString();


//只读的
class ReadonlyDemo {
    readonly name: string;
    constructor (name: string) {
        this.name = name;
    }
}

let readonlyDemo = new ReadonlyDemo('public');
console.log(readonlyDemo.name);
// readonlyDemo.name='aa';


//getter和setter 注意 这个仅在es5以上的版本支持

class GS {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
            this._fullName = newName;
    }
}

let gs = new GS();
console.log(gs.fullName);
gs.fullName = "set";
console.log(gs.fullName);
