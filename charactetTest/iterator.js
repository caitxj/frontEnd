/**
 * Created by caitxj on 3/31/2017.
 */
var tarr=[1,2,2,4,5];

/**
 * foreach  循环数组，不能return　break 操作
 */
tarr.forEach(function (p1, p2, p3) {
    console.log(p1)
})

console.log("--------------------------")
/**
 for  of  循环数组、能够return  、break
 也支持普通的对象、set、map 的循环操作
 */
function test() {
    for(var va of tarr){
      console.log(va);
    }
}
test();

for(var i of  "abcdef"){
    console.log(i);
}

var obj={id:1001,name:"wwe"};

for(var key of Object.keys(obj)){
    console.log("key:"+key+":"+obj[key]);
}


/**

 迭代器使用

 */

