/**
 * Created by Acer on 2016/11/23.
 */
//1
var  person = {
    name:'韩楚怡',
    describe:function () {
        return '姓名：'+this.name;
    }
};
person.describe();
//姓名：张三


//2
var A = {
    name:'韩楚怡',
    describe:function () {
       return '姓名：' +this.name;
    }
};
var B = {
    name:'吴帆'
};
B.describe = A.describe;
B.describe();

//3
function f() {
    return this;
}
f();//window

//4
this ===window; //true
function f() {
    console.log(this === window);//true
}


//5
var obj = function (p) {
    this.p = p;
};
obj.prototype.m = function () {
    return this.p;
};
var o = new  obj("hello world");
o.p;//hello world
o.m();//hello world
//上面的是，写了一个构造函数obj，由于this指向的是实例对象，所以这边在构造函数内部定义this.p，就相当于实例化对象有一个属性p，后面给obj加上一个方法m，也就可以相当于m方法可以返回属性p。


//6
var a ={
    b:{
        m:function () {
            console.log(this.p);
        },
        p:'world'
    }
};
var hello = a.b.m;
hello();//undefined

//对比
var hello2 = a.b;
hello2.m();//world
//上述代码中，将m赋值给hello，导致this指向顶层对象。只有将m所在的对象环境，赋值给hello2，才能不改变this的指向。


//7
var o = {
    v: 'hello',
    p: [ 'a1', 'a2' ],
    f: function f() {
        this.p.forEach(function (item) {
            console.log(this.v + ' ' + item);
        });
    }
};

o.f()
// undefined a1
// undefined a2

//使用中间变量，注意，是打印的时候，that.v
var  e = {
    v:'hello',
    p:['a1','a2'],
    g:function g() {
        var that = this;
        this.p.forEach(function (item) {
            console.log(that.v+' '+item);
        })
    }
};
e.g();
//hello a1
//hello a2

//将this作为foreach方法的第二个参数，固定环境变量
var i = {
    v:'hello',
    p:['a1','a2'],
    j:function j() {
        this.p.forEach(function (item) {
            console.log(this.v+' '+item)
        },this)
    }
};
i.j();
//hello a1
//hello a2


//8
function add(a,b) {
    return a+b;
}
add.call(this,1,2);
//3























