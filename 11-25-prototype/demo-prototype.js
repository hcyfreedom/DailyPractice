/**
 * Created by Acer on 2016/11/25.
 */
//1
function Cat(name,color) {
    this.name = name;
    this.color = color;
    this.meow = function () {
        console.log("llala");
    }
}
var cat1 = new Cat('ket','blue');
var cat2 = new Cat('lily','black');

console.log(cat1.meow === cat2.meow);
//false

//2
function Animate(name){
    this.name = name;
}

Animate.prototype.color = 'white';
var cat1= new Animate("大猫");
var cat2 = new Animate("小猪");
console.log(cat1.color);//white
console.log(cat2.color);//white

//3
Animate.prototype.walk = function walk() {
    console.log(this.name+'is walk');
};

//4
var MyArray = function () {

};
MyArray.prototype = new Array();
MyArray.prototype.constructor = MyArray;

var mineArray = new MyArray();
mineArray.push(1,2,3);
console.log(mineArray);//1 2 3
console.log(mineArray.length);//3
mineArray instanceof Array;//true,instanceof运算符用来比较一个对象是否为某个构造函数的实例

//5
function F() {

};
var f = new F();
f.constructor = F;//true
f.constructor = RegExp;//false


//6
function constr() {

};
var x = new constr();
var y =new x.constructor;
console.log(y instanceof constr);//true
//注意易错点：
var x = new constr();
var y = x.constructor;
console.log(y instanceof constr);//fasle,忘记new了


//7
function Foo() {
    
};
var foo = new Foo();
console.log(foo.constructor.name);//Foo

//8
var x = [1,2,3];
var y = {};
console.log(x instanceof Array);//true
console.log(y instanceof Object);//true