class HelloWord {
    public text: string;
    constructor(text: string) {
        this.text = text;
    }
    public toString() {
        return this.text;
    }
}
let demo = new HelloWord('world');
console.log(demo.toString());


/**
 * 继承
 */
class PersonDemo {
    public eyes() {
        console.log('two');
    }
}
class ParentDemo extends PersonDemo {
    public move() {
        console.log('go');
    }
}
class BadyDemo extends PersonDemo {
    public move() {
        console.log('i cant');
    }
}

let personD = new PersonDemo();
let parentD = new ParentDemo();
let badyD = new BadyDemo();

personD.eyes();
parentD.eyes();
badyD.eyes();

// personD.move();
parentD.move();
badyD.move();

/**
 * 重写
 */
class A {
    public say() {
        console.log('a');
    }
}
class B extends A {
    public say = () => {
        console.log('b');
    }
}
class AC extends A {
    public say() {
        super.say();
        console.log('c');
    }
}
/**
 * 注意 可以将实力成员方法重写成实例成员属性，但反过来不行
 * super只可调用实例成员方法，不可调用实例成员属性
 */

let a = new A();
a.say();
let b = new B();
b.say();
let ac = new AC();
ac.say();


/**
 * class四大权限
 * 共有的
 */
class PubiicDemo {
    public name: string;
    public constructor(theName: string) {
        this.name = theName;
    }
    public move(theNumber: number) {
        console.log(`${this.name} name ${theNumber}.`);
    }
}

let pubiicDemo = new PubiicDemo('public');
console.log(pubiicDemo.name);
pubiicDemo.move(20);
pubiicDemo.name = 'changepublic';
console.log(pubiicDemo.name);
pubiicDemo.move = function name(theNumber: number) {
    console.log(`${this.name}  broke leg ${theNumber}.`);
};
pubiicDemo.move(0);


/**
 * 私有的
 */
class PrivateDemo {
    private name: string;
    public constructor(theName: string) {
        this.name = theName;
    }
}

let privateDemo = new PrivateDemo('private');
// console.log(privateDemo.name)


/**
 * 保护的
 */
class ProtectedDemo {
    protected name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    protected toString() {
        console.log(this.name);
    }
}
let protectedDemo = new ProtectedDemo('protected');
// console.log(protectedDemo.name)
// protectedDemo.toString();
class ProtectedDemoChildren extends ProtectedDemo {
    constructor(name: string) {
        super(name);
    }
    public toString() {
        console.log(this.name);
    }
}
let protectedDemoChildren = new ProtectedDemoChildren('protectedDemoChildren');
protectedDemoChildren.toString();


/**
 * 只读的
 */
class ReadonlyDemo {
    readonly name: string;
    constructor(name: string) {
        this.name = name;
    }
}

let readonlyDemo = new ReadonlyDemo('public');
console.log(readonlyDemo.name);
// readonlyDemo.name='aa';


/**
 * getter和setter 注意 这个仅在es5以上的版本支持
 */

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
gs.fullName = 'set';
console.log(gs.fullName);
