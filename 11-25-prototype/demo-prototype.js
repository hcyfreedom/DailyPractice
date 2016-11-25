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